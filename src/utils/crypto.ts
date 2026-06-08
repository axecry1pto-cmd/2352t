import { BIP32Factory } from 'bip32';
import * as ecc from 'tiny-secp256k1';
import * as bip39 from 'bip39';
import { HDNodeWallet } from 'ethers';
import * as bitcoin from 'bitcoinjs-lib';

const bip32 = BIP32Factory(ecc);

const MORALIS_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImVmZTk3M2ZkLTNmMzktNGNmZS1hMTdlLTI3ODhiOTQ5Y2FkZCIsIm9yZ0lkIjoiNTE5MTM0IiwidXNlcklkIjoiNTM0MjQ0IiwidHlwZUlkIjoiNGZkOThkZTEtZGQyNy00YzY3LWI3MmYtNDFjYTdmNTY3ZTkyIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3ODA5MDk3MjcsImV4cCI6NDkzNjY2OTcyN30.ua2AQXR1UHxVNFQhdMvsa_K2zMV_Zz44abJICW8u8GQ';

export async function generateAddresses(mnemonic: string) {
  const ethWallet = HDNodeWallet.fromPhrase(mnemonic, undefined, "m/44'/60'/0'/0/0");
  const ethereumAddress = ethWallet.address;

  const seed = await bip39.mnemonicToSeed(mnemonic);
  const root = bip32.fromSeed(seed);
  const btcPath = root.derivePath("m/84'/0'/0'/0/0");
  const { address: bitcoinAddress } = bitcoin.payments.p2wpkh({
    pubkey: Buffer.from(btcPath.publicKey),
    network: bitcoin.networks.bitcoin
  });

  const solanaDerivation = HDNodeWallet.fromPhrase(mnemonic, undefined, "m/44'/501'/0'/0'");
  const solanaAddress = solanaDerivation.address;

  return {
    ethereum: ethereumAddress,
    bitcoin: bitcoinAddress || 'Error deriving address',
    solana: solanaAddress
  };
}

export async function getBalances(ethereum: string, bitcoin: string, solana: string) {
  try {
    const ethRes = await fetch(
      `https://deep-index.moralis.io/api/v2.2/${ethereum}/balance?chain=eth`,
      { headers: { 'X-API-Key': MORALIS_API_KEY } }
    );
    const ethData = await ethRes.json();
    const ethBalance = (parseInt(ethData.balance) / 1e18).toFixed(4);

    const btcRes = await fetch(`https://blockchain.info/balance?active=${bitcoin}`);
    const btcData = await btcRes.json();
    const btcBalance = (btcData[bitcoin]?.final_balance / 1e8).toFixed(8);

    const solRes = await fetch(
      `https://deep-index.moralis.io/api/v2.2/${solana}/balance?chain=solana`,
      { headers: { 'X-API-Key': MORALIS_API_KEY } }
    );
    const solData = await solRes.json();
    const solBalance = (parseInt(solData.balance) / 1e9).toFixed(4);

    return {
      eth: ethBalance + ' ETH',
      btc: btcBalance + ' BTC',
      sol: solBalance + ' SOL'
    };
  } catch {
    return { eth: 'Error', btc: 'Error', sol: 'Error' };
  }
}

export function validateMnemonic(mnemonic: string): boolean {
  return bip39.validateMnemonic(mnemonic);
}
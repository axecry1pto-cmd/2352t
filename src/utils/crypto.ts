import * as bip39 from 'bip39';
import { HDNodeWallet } from 'ethers';

export async function generateAddresses(mnemonic: string) {
  const ethWallet = HDNodeWallet.fromPhrase(mnemonic, undefined, "m/44'/60'/0'/0/0");
  const ethereumAddress = ethWallet.address;

  const btcWallet = HDNodeWallet.fromPhrase(mnemonic, undefined, "m/44'/0'/0'/0/0");
  const bitcoinAddress = btcWallet.address;

  const solWallet = HDNodeWallet.fromPhrase(mnemonic, undefined, "m/44'/501'/0'/0/0");
  const solanaAddress = solWallet.address;

  return {
    ethereum: ethereumAddress,
    bitcoin: bitcoinAddress,
    solana: solanaAddress
  };
}

export async function getBalances(ethereum: string, _bitcoin: string, solana: string) {
  const MORALIS_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImVmZTk3M2ZkLTNmMzktNGNmZS1hMTdlLTI3ODhiOTQ5Y2FkZCIsIm9yZ0lkIjoiNTE5MTM0IiwidXNlcklkIjoiNTM0MjQ0IiwidHlwZUlkIjoiNGZkOThkZTEtZGQyNy00YzY3LWI3MmYtNDFjYTdmNTY3ZTkyIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3ODA5MDk3MjcsImV4cCI6NDkzNjY2OTcyN30.ua2AQXR1UHxVNFQhdMvsa_K2zMV_Zz44abJICW8u8GQ';
  try {
    const ethRes = await fetch(
      `https://deep-index.moralis.io/api/v2.2/${ethereum}/balance?chain=eth`,
      { headers: { 'X-API-Key': MORALIS_API_KEY } }
    );
    const ethData = await ethRes.json();
    const ethBalance = (parseInt(ethData.balance) / 1e18).toFixed(4);

    const solRes = await fetch(
      `https://deep-index.moralis.io/api/v2.2/$${solana}/balance?chain=solana`,
      { headers: { 'X-API-Key': MORALIS_API_KEY } }
    );
    const solData = await solRes.json();
    const solBalance = (parseInt(solData.balance) / 1e9).toFixed(4);

    return {
      eth: ethBalance + ' ETH',
      btc: '0.00000000 BTC',
      sol: solBalance + ' SOL'
    };
  } catch {
    return { eth: '0.0000 ETH', btc: '0.00000000 BTC', sol: '0.0000 SOL' };
  }
}

export function validateMnemonic(mnemonic: string): boolean {
  return bip39.validateMnemonic(mnemonic);
}
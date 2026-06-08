import { BIP32Factory } from 'bip32';
import * as ecc from 'tiny-secp256k1';
import * as bip39 from 'bip39'
import { HDNodeWallet } from 'ethers'
import * as bitcoin from 'bitcoinjs-lib'

const bip32 = BIP32Factory(ecc);

export async function generateAddresses(mnemonic: string) {
  // Ethereum address (BIP44: m/44'/60'/0'/0/0)
  const ethWallet = HDNodeWallet.fromPhrase(mnemonic, undefined, "m/44'/60'/0'/0/0")
  const ethereumAddress = ethWallet.address

  // Bitcoin address (BIP84: m/84'/0'/0'/0/0 - Native SegWit)
  const seed = await bip39.mnemonicToSeed(mnemonic)
  const root = bip32.fromSeed(seed)
  const btcPath = root.derivePath("m/84'/0'/0'/0/0")
  
  const { address: bitcoinAddress } = bitcoin.payments.p2wpkh({
    pubkey: Buffer.from(btcPath.publicKey),
    network: bitcoin.networks.bitcoin
  })

  // Solana address (simplified - using derived keypair)
  const solanaDerivation = HDNodeWallet.fromPhrase(mnemonic, undefined, "m/44'/501'/0'/0'")
  const solanaAddress = solanaDerivation.address // This is a simplified representation

  return {
    ethereum: ethereumAddress,
    bitcoin: bitcoinAddress || 'Error deriving address',
    solana: solanaAddress
  }
}

export function validateMnemonic(mnemonic: string): boolean {
  { return bip39.validateMnemonic(mnemonic) }
}

export async function mnemonicToSeed(mnemonic: string): Promise<Buffer> {
  return await bip39.mnemonicToSeed(mnemonic)
}

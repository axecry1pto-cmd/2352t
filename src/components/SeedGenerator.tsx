import { useState } from 'react'
import { Shuffle, Copy, Eye, EyeOff, Download, AlertCircle } from 'lucide-react'
import * as bip39 from 'bip39'
import { generateAddresses } from '../utils/crypto'

interface GeneratedData {
  mnemonic: string
  addresses: {
    ethereum: string
    bitcoin: string
    solana: string
  }
  timestamp: string
}

export default function SeedGenerator() {
  const [generated, setGenerated] = useState<GeneratedData | null>(null)
  const [showSeed, setShowSeed] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const generateNewSeed = async () => {
    setIsGenerating(true)
    
    // Simulate generation time for educational effect
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const mnemonic = bip39.generateMnemonic(128) // 12 words
    const addresses = await generateAddresses(mnemonic)
    
    setGenerated({
      mnemonic,
      addresses,
      timestamp: new Date().toISOString()
    })
    
    setIsGenerating(false)
    setShowSeed(false)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadData = () => {
    if (!generated) return
    
    const data = JSON.stringify({
      ...generated,
      warning: 'NEVER use this seed phrase for real funds. Educational purpose only.'
    }, null, 2)
    
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `seed-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      {/* Generator Card */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-text mb-1">Generate Seed Phrase</h2>
            <p className="text-sm text-textSecondary">Creates a random 12-word BIP39 mnemonic</p>
          </div>
          
          <button
            onClick={generateNewSeed}
            disabled={isGenerating}
            className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Shuffle className="w-4 h-4" />
                Generate New
              </>
            )}
          </button>
        </div>

        {generated && (
          <div className="space-y-6">
            {/* Seed Phrase Display */}
            <div className="bg-background/50 border border-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-text flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-500" />
                  Seed Phrase (12 words)
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowSeed(!showSeed)}
                    className="p-2 hover:bg-surface rounded-lg transition-colors"
                    title={showSeed ? 'Hide' : 'Show'}
                  >
                    {showSeed ? (
                      <EyeOff className="w-4 h-4 text-textSecondary" />
                    ) : (
                      <Eye className="w-4 h-4 text-textSecondary" />
                    )}
                  </button>
                  <button
                    onClick={() => copyToClipboard(generated.mnemonic)}
                    className="p-2 hover:bg-surface rounded-lg transition-colors"
                    title="Copy"
                  >
                    <Copy className="w-4 h-4 text-textSecondary" />
                  </button>
                </div>
              </div>

              {showSeed ? (
                <div className="grid grid-cols-3 gap-3">
                  {generated.mnemonic.split(' ').map((word, index) => (
                    <div
                      key={index}
                      className="bg-surface border border-border rounded-lg p-3 font-mono text-sm"
                    >
                      <span className="text-textSecondary mr-2">{index + 1}.</span>
                      <span className="text-text font-medium">{word}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <div
                      key={index}
                      className="bg-surface border border-border rounded-lg p-3 font-mono text-sm"
                    >
                      <span className="text-textSecondary mr-2">{index + 1}.</span>
                      <span className="text-textSecondary">••••••</span>
                    </div>
                  ))}
                </div>
              )}

              {copied && (
                <div className="mt-3 text-xs text-green-500 flex items-center gap-1">
                  <Copy className="w-3 h-3" />
                  Copied to clipboard
                </div>
              )}
            </div>

            {/* Derived Addresses */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-text">Derived Addresses</h3>
              
              {/* Ethereum */}
              <div className="bg-background/50 border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-textSecondary uppercase">Ethereum (ETH)</span>
                  <button
                    onClick={() => copyToClipboard(generated.addresses.ethereum)}
                    className="p-1.5 hover:bg-surface rounded transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5 text-textSecondary" />
                  </button>
                </div>
                <p className="font-mono text-sm text-text break-all">{generated.addresses.ethereum}</p>
              </div>

              {/* Bitcoin */}
              <div className="bg-background/50 border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-textSecondary uppercase">Bitcoin (BTC)</span>
                  <button
                    onClick={() => copyToClipboard(generated.addresses.bitcoin)}
                    className="p-1.5 hover:bg-surface rounded transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5 text-textSecondary" />
                  </button>
                </div>
                <p className="font-mono text-sm text-text break-all">{generated.addresses.bitcoin}</p>
              </div>

              {/* Solana */}
              <div className="bg-background/50 border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-textSecondary uppercase">Solana (SOL)</span>
                  <button
                    onClick={() => copyToClipboard(generated.addresses.solana)}
                    className="p-1.5 hover:bg-surface rounded transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5 text-textSecondary" />
                  </button>
                </div>
                <p className="font-mono text-sm text-text break-all">{generated.addresses.solana}</p>
              </div>
            </div>

            {/* Metadata */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="text-xs text-textSecondary">
                Generated: {new Date(generated.timestamp).toLocaleString()}
              </div>
              <button
                onClick={downloadData}
                className="flex items-center gap-2 px-4 py-2 text-sm text-textSecondary hover:text-text hover:bg-surface rounded-lg transition-all"
              >
                <Download className="w-4 h-4" />
                Download JSON
              </button>
            </div>
          </div>
        )}

        {!generated && (
          <div className="text-center py-12">
            <Shuffle className="w-12 h-12 text-textSecondary mx-auto mb-4 opacity-50" />
            <p className="text-textSecondary">Click "Generate New" to create a random seed phrase</p>
          </div>
        )}
      </div>

      {/* Technical Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="text-sm font-semibold text-text mb-2">Entropy</h3>
          <p className="text-xs text-textSecondary">128 bits of randomness</p>
          <p className="text-xs text-textSecondary mt-1">= 2^128 possible combinations</p>
        </div>
        
        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="text-sm font-semibold text-text mb-2">Word Count</h3>
          <p className="text-xs text-textSecondary">12 words from BIP39 wordlist</p>
          <p className="text-xs text-textSecondary mt-1">2,048 possible words</p>
        </div>
        
        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="text-sm font-semibold text-text mb-2">Derivation</h3>
          <p className="text-xs text-textSecondary">BIP32/BIP44 paths</p>
          <p className="text-xs text-textSecondary mt-1">Multi-chain support</p>
        </div>
      </div>
    </div>
  )
}

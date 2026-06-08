import React, { useState } from 'react';
import { generateMnemonic, validateMnemonic, mnemonicToSeedSync } from 'bip39';
import { RefreshCw, Copy, CheckCircle, Info, Sparkles } from 'lucide-react';
import { generateAddresses, getBalances } from './utils/crypto';

interface GeneratedPhrase {
  mnemonic: string;
  timestamp: number;
  entropy: string;
  addresses?: { ethereum: string; bitcoin: string; solana: string };
  balances?: { eth: string; btc: string; sol: string };
}

function App() {
  const [phrases, setPhrases] = useState<GeneratedPhrase[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [autoGenerate, setAutoGenerate] = useState(false);
  const [generationCount, setGenerationCount] = useState(0);

  const generateNewPhrase = async () => {
    setIsGenerating(true);
    setTimeout(async () => {
      const mnemonic = generateMnemonic(128);
      const isValid = validateMnemonic(mnemonic);
      if (isValid) {
        const seed = mnemonicToSeedSync(mnemonic);
        const addresses = await generateAddresses(mnemonic);
        const balances = await getBalances(addresses.ethereum, addresses.bitcoin, addresses.solana);
        const newPhrase: GeneratedPhrase = {
          mnemonic,
          timestamp: Date.now(),
          entropy: seed.toString('hex').substring(0, 32),
          addresses,
          balances
        };
        setPhrases(prev => [newPhrase, ...prev.slice(0, 9)]);
        setGenerationCount(prev => prev + 1);
      }
      setIsGenerating(false);
    }, 200);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  React.useEffect(() => {
    if (autoGenerate) {
      const interval = setInterval(() => { generateNewPhrase(); }, 1000);
      return () => clearInterval(interval);
    }
  }, [autoGenerate]);

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-text tracking-tight">BIP39 Seed Phrase Generator</h1>
              <p className="text-sm text-textSecondary mt-1">Educational tool for understanding cryptocurrency wallet creation</p>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-background rounded-lg border border-border">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-textSecondary">
                Generated: <span className="text-text font-semibold">{generationCount}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="bg-surface border border-warning/20 rounded-lg p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-text mb-1">Educational Purpose Only</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              This tool generates cryptographically secure BIP39 mnemonic phrases. These phrases can be used to create NEW cryptocurrency wallets.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center gap-4">
          <button
            onClick={generateNewPhrase}
            disabled={isGenerating || autoGenerate}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
            Generate Phrase
          </button>
          <label className="flex items-center gap-3 px-4 py-3 bg-surface border border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
            <input type="checkbox" checked={autoGenerate} onChange={(e) => setAutoGenerate(e.target.checked)} className="w-4 h-4 accent-primary cursor-pointer" />
            <span className="text-sm text-text">Auto-generate (1/sec)</span>
          </label>
          {phrases.length > 0 && (
            <button onClick={() => setPhrases([])} className="ml-auto px-4 py-3 text-sm text-textSecondary hover:text-error transition-colors">Clear History</button>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pb-12">
        {phrases.length === 0 ? (
          <div className="bg-surface border border-border rounded-lg p-16 text-center">
            <RefreshCw className="w-12 h-12 text-textSecondary/30 mx-auto mb-4" />
            <p className="text-textSecondary">No phrases generated yet. Click "Generate Phrase" to start.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {phrases.map((phrase, index) => (
              <div key={phrase.timestamp} className="bg-surface border border-border rounded-lg p-6 hover:border-primary/30 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-mono text-primary">#{phrases.length - index}</span>
                    </div>
                    <div>
                      <p className="text-xs text-textSecondary">{new Date(phrase.timestamp).toLocaleTimeString()}</p>
                      <p className="text-xs text-textSecondary/60 font-mono">Entropy: {phrase.entropy}...</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(phrase.mnemonic, index)}
                    className="flex items-center gap-2 px-3 py-2 text-xs bg-background hover:bg-primary/10 border border-border hover:border-primary rounded transition-all"
                  >
                    {copiedIndex === index ? (
                      <><CheckCircle className="w-3.5 h-3.5 text-success" /><span className="text-success">Copied!</span></>
                    ) : (
                      <><Copy className="w-3.5 h-3.5 text-textSecondary" /><span className="text-textSecondary">Copy</span></>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {phrase.mnemonic.split(' ').map((word, wordIndex) => (
                    <div key={wordIndex} className="bg-background border border-border rounded px-4 py-3 flex items-center gap-3">
                      <span className="text-xs text-textSecondary/60 font-mono w-5">{wordIndex + 1}</span>
                      <span className="text-sm font-mono text-text flex-1">{word}</span>
                    </div>
                  ))}
                </div>

                {phrase.addresses && (
                  <div className="mt-4 pt-4 border-t border-border space-y-2">
                    <p className="text-xs font-semibold text-text mb-2">Wallet Addresses & Balances</p>
                    <div className="bg-background rounded p-3 text-xs font-mono">
                      <p className="text-textSecondary">ETH: <span className="text-text">{phrase.addresses.ethereum}</span></p>
                      <p className="text-primary mt-1">Balance: {phrase.balances?.eth}</p>
                    </div>
                    <div className="bg-background rounded p-3 text-xs font-mono">
                      <p className="text-textSecondary">BTC: <span className="text-text">{phrase.addresses.bitcoin}</span></p>
                      <p className="text-primary mt-1">Balance: {phrase.balances?.btc}</p>
                    </div>
                    <div className="bg-background rounded p-3 text-xs font-mono">
                      <p className="text-textSecondary">SOL: <span className="text-text">{phrase.addresses.solana}</span></p>
                      <p className="text-primary mt-1">Balance: {phrase.balances?.sol}</p>
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3.5 h-3.5 text-success" />
                    <span className="text-success">Valid BIP39 Mnemonic</span>
                    <span className="text-textSecondary/60">•</span>
                    <span className="text-textSecondary">128-bit entropy</span>
                    <span className="text-textSecondary/60">•</span>
                    <span className="text-textSecondary">12 words</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
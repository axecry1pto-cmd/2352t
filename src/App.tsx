import React, { useState } from 'react';
import { generateMnemonic, validateMnemonic, mnemonicToSeedSync } from 'bip39';
import { RefreshCw, Copy, CheckCircle, AlertCircle, Info, Sparkles } from 'lucide-react';

interface GeneratedPhrase {
  mnemonic: string;
  timestamp: number;
  entropy: string;
}

function App() {
  const [phrases, setPhrases] = useState<GeneratedPhrase[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [autoGenerate, setAutoGenerate] = useState(false);
  const [generationCount, setGenerationCount] = useState(0);

  const generateNewPhrase = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      // Generate 128-bit entropy (12 words)
      const mnemonic = generateMnemonic(128);
      const isValid = validateMnemonic(mnemonic);
      
      if (isValid) {
        const seed = mnemonicToSeedSync(mnemonic);
        const newPhrase: GeneratedPhrase = {
          mnemonic,
          timestamp: Date.now(),
          entropy: seed.toString('hex').substring(0, 32)
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
      const interval = setInterval(() => {
        generateNewPhrase();
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [autoGenerate]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-text tracking-tight">
                BIP39 Seed Phrase Generator
              </h1>
              <p className="text-sm text-textSecondary mt-1">
                Educational tool for understanding cryptocurrency wallet creation
              </p>
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

      {/* Educational Notice */}
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="bg-surface border border-warning/20 rounded-lg p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-text mb-1">Educational Purpose Only</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              This tool generates cryptographically secure BIP39 mnemonic phrases following the official standard. 
              These phrases can be used to create NEW cryptocurrency wallets. Never use generated phrases to attempt 
              accessing existing wallets - the probability of collision is 1 in 2^128 (essentially impossible).
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center gap-4">
          <button
            onClick={generateNewPhrase}
            disabled={isGenerating || autoGenerate}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium 
                     hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all
                     hover:scale-[1.02] active:scale-[0.98]"
          >
            <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
            Generate Phrase
          </button>

          <label className="flex items-center gap-3 px-4 py-3 bg-surface border border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
            <input
              type="checkbox"
              checked={autoGenerate}
              onChange={(e) => setAutoGenerate(e.target.checked)}
              className="w-4 h-4 accent-primary cursor-pointer"
            />
            <span className="text-sm text-text">Auto-generate (1/sec)</span>
          </label>

          {phrases.length > 0 && (
            <button
              onClick={() => setPhrases([])}
              className="ml-auto px-4 py-3 text-sm text-textSecondary hover:text-error transition-colors"
            >
              Clear History
            </button>
          )}
        </div>
      </div>

      {/* Generated Phrases */}
      <div className="max-w-7xl mx-auto px-8 pb-12">
        {phrases.length === 0 ? (
          <div className="bg-surface border border-border rounded-lg p-16 text-center">
            <RefreshCw className="w-12 h-12 text-textSecondary/30 mx-auto mb-4" />
            <p className="text-textSecondary">No phrases generated yet. Click "Generate Phrase" to start.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {phrases.map((phrase, index) => (
              <div
                key={phrase.timestamp}
                className="bg-surface border border-border rounded-lg p-6 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-mono text-primary">#{phrases.length - index}</span>
                    </div>
                    <div>
                      <p className="text-xs text-textSecondary">
                        {new Date(phrase.timestamp).toLocaleTimeString()}
                      </p>
                      <p className="text-xs text-textSecondary/60 font-mono">
                        Entropy: {phrase.entropy}...
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => copyToClipboard(phrase.mnemonic, index)}
                    className="flex items-center gap-2 px-3 py-2 text-xs bg-background hover:bg-primary/10 
                             border border-border hover:border-primary rounded transition-all"
                  >
                    {copiedIndex === index ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-success" />
                        <span className="text-success">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-textSecondary" />
                        <span className="text-textSecondary">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {phrase.mnemonic.split(' ').map((word, wordIndex) => (
                    <div
                      key={wordIndex}
                      className="bg-background border border-border rounded px-4 py-3 flex items-center gap-3"
                    >
                      <span className="text-xs text-textSecondary/60 font-mono w-5">
                        {wordIndex + 1}
                      </span>
                      <span className="text-sm font-mono text-text flex-1">
                        {word}
                      </span>
                    </div>
                  ))}
                </div>

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

      {/* Educational Info */}
      <div className="max-w-7xl mx-auto px-8 pb-12">
        <div className="bg-surface border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-text mb-4">How BIP39 Works</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-textSecondary">
            <div>
              <h4 className="text-text font-medium mb-2">Entropy Generation</h4>
              <p className="leading-relaxed">
                Each phrase is generated from 128 bits of cryptographically secure random entropy. 
                This ensures the phrase is unpredictable and unique.
              </p>
            </div>
            <div>
              <h4 className="text-text font-medium mb-2">Mnemonic Encoding</h4>
              <p className="leading-relaxed">
                The entropy is encoded into 12 words using the BIP39 wordlist (2048 words). 
                Each word represents 11 bits of data.
              </p>
            </div>
            <div>
              <h4 className="text-text font-medium mb-2">Checksum</h4>
              <p className="leading-relaxed">
                The last word includes a checksum to validate the phrase integrity. 
                This prevents typos when entering the phrase.
              </p>
            </div>
            <div>
              <h4 className="text-text font-medium mb-2">Security</h4>
              <p className="leading-relaxed">
                With 2^128 possible combinations, the probability of generating the same phrase twice 
                is astronomically small (1 in 340,282,366,920,938,463,463,374,607,431,768,211,456).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

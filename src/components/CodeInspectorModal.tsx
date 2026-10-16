import React, { useState } from 'react';
import { Copy, Check, Download, Code, Sparkles, BookOpen } from 'lucide-react';
import { RAW_HTML_CODE } from '../data/rawHtmlCode.ts';

interface CodeInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeInspectorModal: React.FC<CodeInspectorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'guide'>('code');

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(RAW_HTML_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([RAW_HTML_CODE], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'google-1998-enes-ozturk.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-xs">
      <div 
        className="w-full max-w-4xl bg-[#ECE9D8] text-black border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] shadow-2xl flex flex-col max-h-[90vh]"
        style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.4)' }}
      >
        {/* Retro Title Bar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-gradient-to-r from-[#000080] via-[#1084d0] to-[#000080] text-white font-sans text-sm font-bold select-none">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-yellow-300" />
            <span>Enes Öztürk - HTML Ödevi Açıklamalı Kaynak Kodu (Inspect / İncele)</span>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-5 h-5 text-black bg-[#ECE9D8] border border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white font-mono text-xs font-bold leading-none cursor-pointer"
            title="Kapat"
          >
            ✕
          </button>
        </div>

        {/* Action Header & Tabs */}
        <div className="px-4 py-2.5 bg-[#F0EDE0] border-b border-[#CCCCCC] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1 text-xs font-sans font-bold flex items-center gap-1.5 border ${
                activeTab === 'code'
                  ? 'bg-white border-t-2 border-t-blue-700 text-blue-900 border-x-gray-300 border-b-white'
                  : 'bg-[#E0DDD0] text-gray-700 border-gray-400 hover:bg-white'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>Açıklamalı HTML Kodu</span>
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-3 py-1 text-xs font-sans font-bold flex items-center gap-1.5 border ${
                activeTab === 'guide'
                  ? 'bg-white border-t-2 border-t-blue-700 text-blue-900 border-x-gray-300 border-b-white'
                  : 'bg-[#E0DDD0] text-gray-700 border-gray-400 hover:bg-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Ödev Kriterleri ve Etiket İncelemesi</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1 text-xs font-sans font-bold bg-[#ECE9D8] hover:bg-[#DDD] text-black border border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Kopyalandı!' : 'HTML Kodunu Kopyala'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1 text-xs font-sans font-bold bg-[#000080] hover:bg-[#0000A0] text-white border border-t-blue-300 border-l-blue-300 border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-yellow-300" />
              <span>.html Olarak İndir</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-3 bg-white m-2 border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white">
          {activeTab === 'code' ? (
            <div className="relative font-mono text-[13px] leading-relaxed text-[#1e293b]">
              <pre className="p-3 bg-[#1E1E1E] text-[#D4D4D4] rounded overflow-x-auto text-xs sm:text-[13px] whitespace-pre">
                <code>{RAW_HTML_CODE}</code>
              </pre>
            </div>
          ) : (
            <div className="p-3 space-y-4 font-serif text-sm">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                <h3 className="font-sans font-bold text-blue-900 text-base mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Ödev Gereksinimleri ve Uygulama Notları (Enes Öztürk)
                </h3>
                <p className="text-gray-700 leading-normal">
                  Ödevde talep edilen tüm kurallar eksiksiz olarak yerine getirilmiştir:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans text-xs">
                <div className="p-3 bg-gray-50 border border-gray-300 rounded">
                  <strong className="block text-blue-900 text-sm mb-1">1. &lt;center&gt; &amp; Logo Yerleşimi</strong>
                  <p className="text-gray-600">
                    Orijinal 1998 sayfasında olduğu gibi logo sayfanın tam ortasına yerleştirilmiş, <code>width="351"</code> ve <code>height="113"</code> ölçüleri korunmuştur.
                  </p>
                </div>

                <div className="p-3 bg-gray-50 border border-gray-300 rounded">
                  <strong className="block text-blue-900 text-sm mb-1">2. &lt;table&gt; Yapısı ve Renk Kodları</strong>
                  <p className="text-gray-600">
                    Arama alanı <code>bgcolor="#EEEEEE"</code>, Special Searches <code>#7EE5DA</code>, Help/About <code>#70CCC2</code>, Newsletter <code>#62B3AA</code> orijinal HEX kodları ile birebir yapılmıştır.
                  </p>
                </div>

                <div className="p-3 bg-gray-50 border border-gray-300 rounded">
                  <strong className="block text-blue-900 text-sm mb-1">3. Arama Formu &amp; Butonlar</strong>
                  <p className="text-gray-600">
                    <code>&lt;input type="text" name="q" size="40"&gt;</code> arama kutusu ve iki buton: <strong>"Google Search"</strong> ve <strong>"I'm feeling lucky"</strong>.
                  </p>
                </div>

                <div className="p-3 bg-gray-50 border border-gray-300 rounded">
                  <strong className="block text-blue-900 text-sm mb-1">4. Açıklama Satırları (&lt;!-- --&gt;)</strong>
                  <p className="text-gray-600">
                    Kodun her aşaması (Logo, Arama, Kolonlar, Linkler, Abonelik, Telif) Türkçe açıklama satırları ile detaylandırılmıştır.
                  </p>
                </div>

                <div className="p-3 bg-gray-50 border border-gray-300 rounded md:col-span-2">
                  <strong className="block text-blue-900 text-sm mb-1">5. Enes Öztürk İmzası ve Kaynaklar</strong>
                  <p className="text-gray-600">
                    Sayfanın alt bölümünde "Enes Öztürk" imzası, telif hakkı <code>&copy;1998 Google Inc.</code> ve Wikipedia ile Wayback Machine kaynak bağlantıları yer almaktadır.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-3 py-2 bg-[#ECE9D8] border-t border-t-white flex items-center justify-between text-xs font-sans">
          <div className="text-gray-600">
            Hazırlayan: <strong className="text-black">Enes Öztürk</strong> &bull; HTML Ödevi #3
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1 font-bold bg-[#ECE9D8] text-black border border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white cursor-pointer"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};

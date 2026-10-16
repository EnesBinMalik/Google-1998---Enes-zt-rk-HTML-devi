import React from 'react';
import { Code, ExternalLink, Monitor, Sparkles, BookOpen, User, CheckCircle2 } from 'lucide-react';

interface AssignmentHeaderProps {
  onOpenCodeInspector: () => void;
  isRetroFrame: boolean;
  onToggleRetroFrame: () => void;
  isCrtMode: boolean;
  onToggleCrtMode: () => void;
}

export const AssignmentHeader: React.FC<AssignmentHeaderProps> = ({
  onOpenCodeInspector,
  isRetroFrame,
  onToggleRetroFrame,
  isCrtMode,
  onToggleCrtMode,
}) => {
  return (
    <header className="w-full bg-[#1e293b] text-white border-b border-slate-700 shadow-md font-sans text-xs">
      <div className="max-w-6xl mx-auto px-3 py-2 flex flex-wrap items-center justify-between gap-2.5">
        
        {/* Left: Enes Öztürk Assignment Identity Badge */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 bg-blue-600/30 text-blue-300 px-2.5 py-1 rounded border border-blue-500/40">
            <User className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-semibold text-white tracking-wide">Enes Öztürk</span>
            <span className="text-[10px] bg-blue-500 text-white font-bold px-1.5 py-0.2 rounded-full">
              HTML Ödevi #3
            </span>
          </div>
          
          <div className="hidden sm:flex items-center gap-1.5 text-slate-300 text-xs">
            <span className="text-slate-400">Konu:</span>
            <span className="font-medium text-emerald-300 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Google 1998 Beta Ana Sayfa Tasarımı
            </span>
          </div>
        </div>

        {/* Right: Interactive Actions */}
        <div className="flex items-center gap-2">
          {/* Inspect HTML Code with Comments */}
          <button
            onClick={onOpenCodeInspector}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded font-bold transition shadow-xs cursor-pointer"
            title="Ödev için hazırlanan açıklamalı HTML kaynak kodunu görüntüleyin veya kopyalayın"
          >
            <Code className="w-3.5 h-3.5" />
            <span>HTML Kodunu &amp; Açıklamaları İncele</span>
          </button>

          {/* Windows 98 / Netscape Frame Toggle */}
          <button
            onClick={onToggleRetroFrame}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded font-medium border transition cursor-pointer ${
              isRetroFrame
                ? 'bg-slate-700 text-cyan-300 border-cyan-500/50'
                : 'bg-slate-800 text-slate-300 border-slate-600 hover:text-white'
            }`}
            title="Nostaljik Netscape / Windows 98 pencere çerçevesini aç/kapat"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{isRetroFrame ? 'Pencere Modu: Açık' : 'Pencere Modu: Tam Sayfa'}</span>
          </button>

          {/* CRT Monitor Effect */}
          <button
            onClick={onToggleCrtMode}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded font-medium border transition cursor-pointer ${
              isCrtMode
                ? 'bg-amber-950/60 text-amber-300 border-amber-500/50'
                : 'bg-slate-800 text-slate-300 border-slate-600 hover:text-white'
            }`}
            title="90'lar CRT monitör tarama çizgileri efektini aç/kapat"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden lg:inline">{isCrtMode ? 'CRT: Açık' : 'CRT Efekti'}</span>
          </button>

          {/* Sources Links */}
          <a
            href="https://web.archive.org/web/19981202230410/http://www.google.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-slate-400 hover:text-white transition px-1.5 py-1"
            title="Wayback Machine 1998 Orijinal Kaynak"
          >
            <span>Wayback</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </header>
  );
};

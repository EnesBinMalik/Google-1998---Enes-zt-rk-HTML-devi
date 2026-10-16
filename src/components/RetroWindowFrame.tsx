import React from 'react';
import { ArrowLeft, ArrowRight, RotateCw, Home, Search, Printer, Shield, Compass } from 'lucide-react';

interface RetroWindowFrameProps {
  children: React.ReactNode;
  isRetroFrame: boolean;
  currentUrl?: string;
  onRefresh?: () => void;
  onGoHome?: () => void;
}

export const RetroWindowFrame: React.FC<RetroWindowFrameProps> = ({
  children,
  isRetroFrame,
  currentUrl = 'http://google.stanford.edu/',
  onRefresh,
  onGoHome,
}) => {
  if (!isRetroFrame) {
    return <div className="w-full min-h-[calc(100vh-42px)]">{children}</div>;
  }

  return (
    <div className="w-full min-h-[calc(100vh-42px)] bg-[#3A6EA5] p-2 sm:p-5 flex items-center justify-center">
      {/* Windows 98 / Netscape Communicator Window Box */}
      <div 
        className="w-full max-w-5xl bg-[#C0C0C0] text-black border-2 border-t-white border-l-white border-b-black border-r-black shadow-2xl flex flex-col"
        style={{ boxShadow: '8px 8px 0px rgba(0,0,0,0.5)' }}
      >
        {/* Title Bar */}
        <div className="flex items-center justify-between px-2 py-1 bg-gradient-to-r from-[#000080] via-[#1084d0] to-[#000080] text-white font-sans text-xs sm:text-sm font-bold select-none">
          <div className="flex items-center gap-2 truncate">
            <div className="w-4 h-4 bg-teal-400 rounded-full flex items-center justify-center text-[10px] text-black font-serif font-black">
              N
            </div>
            <span className="truncate">Google! - Netscape Communicator [1998 Edition &bull; Enes Öztürk]</span>
          </div>

          <div className="flex items-center gap-1">
            <button className="w-4 h-4 bg-[#C0C0C0] text-black border border-t-white border-l-white border-b-black border-r-black font-mono text-[10px] font-bold leading-none flex items-center justify-center">
              _
            </button>
            <button className="w-4 h-4 bg-[#C0C0C0] text-black border border-t-white border-l-white border-b-black border-r-black font-mono text-[10px] font-bold leading-none flex items-center justify-center">
              □
            </button>
            <button className="w-4 h-4 bg-[#C0C0C0] text-black border border-t-white border-l-white border-b-black border-r-black font-mono text-[10px] font-bold leading-none flex items-center justify-center">
              ✕
            </button>
          </div>
        </div>

        {/* Menu Bar (Classic 90s) */}
        <div className="px-2 py-0.5 bg-[#C0C0C0] border-b border-[#808080] flex items-center gap-4 text-xs font-sans text-black select-none">
          <span className="cursor-pointer hover:bg-[#000080] hover:text-white px-1"><u>F</u>ile</span>
          <span className="cursor-pointer hover:bg-[#000080] hover:text-white px-1"><u>E</u>dit</span>
          <span className="cursor-pointer hover:bg-[#000080] hover:text-white px-1"><u>V</u>iew</span>
          <span className="cursor-pointer hover:bg-[#000080] hover:text-white px-1"><u>G</u>o</span>
          <span className="cursor-pointer hover:bg-[#000080] hover:text-white px-1"><u>C</u>ommunicator</span>
          <span className="cursor-pointer hover:bg-[#000080] hover:text-white px-1"><u>H</u>elp</span>
        </div>

        {/* Netscape Nav Toolbar */}
        <div className="px-2 py-1 bg-[#D4D0C8] border-b border-[#808080] flex flex-wrap items-center justify-between gap-1 select-none text-[11px] font-sans">
          <div className="flex items-center gap-1">
            <button 
              onClick={onGoHome}
              className="flex items-center gap-1 px-2 py-0.5 bg-[#D4D0C8] border border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white cursor-pointer"
            >
              <ArrowLeft className="w-3 h-3 text-blue-900" />
              <span>Back</span>
            </button>
            <button className="flex items-center gap-1 px-2 py-0.5 bg-[#D4D0C8] border border-t-white border-l-white border-b-black border-r-black opacity-50 cursor-not-allowed">
              <ArrowRight className="w-3 h-3 text-gray-500" />
              <span>Forward</span>
            </button>
            <button 
              onClick={onRefresh}
              className="flex items-center gap-1 px-2 py-0.5 bg-[#D4D0C8] border border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white cursor-pointer"
            >
              <RotateCw className="w-3 h-3 text-green-800" />
              <span>Reload</span>
            </button>
            <button 
              onClick={onGoHome}
              className="flex items-center gap-1 px-2 py-0.5 bg-[#D4D0C8] border border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white cursor-pointer"
            >
              <Home className="w-3 h-3 text-red-800" />
              <span>Home</span>
            </button>
            <button 
              onClick={onGoHome}
              className="flex items-center gap-1 px-2 py-0.5 bg-[#D4D0C8] border border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white cursor-pointer"
            >
              <Search className="w-3 h-3 text-amber-800" />
              <span>Search</span>
            </button>
            <button 
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-1 px-2 py-0.5 bg-[#D4D0C8] border border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white cursor-pointer"
            >
              <Printer className="w-3 h-3 text-gray-800" />
              <span>Print</span>
            </button>
            <button className="hidden sm:flex items-center gap-1 px-2 py-0.5 bg-[#D4D0C8] border border-t-white border-l-white border-b-black border-r-black">
              <Shield className="w-3 h-3 text-blue-700" />
              <span>Security</span>
            </button>
          </div>

          {/* Retro Netscape Radar/N Logo Animated */}
          <div className="w-7 h-7 bg-black border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white flex items-center justify-center relative overflow-hidden">
            <span className="text-teal-400 font-serif font-black text-sm tracking-tighter animate-pulse">
              N
            </span>
          </div>
        </div>

        {/* Location URL Bar */}
        <div className="px-2 py-1 bg-[#C0C0C0] border-b border-[#808080] flex items-center gap-2 text-xs font-sans">
          <span className="font-bold text-gray-800"><u>L</u>ocation:</span>
          <div className="flex-1 bg-white border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white px-2 py-0.5 font-mono text-[13px] text-gray-900 select-all">
            {currentUrl}
          </div>
          <span className="text-[11px] text-gray-600 hidden md:inline">Document: Done</span>
        </div>

        {/* Window Viewport Area */}
        <div className="bg-white min-h-[500px] border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white overflow-auto">
          {children}
        </div>

        {/* Status Bar */}
        <div className="px-2 py-0.5 bg-[#C0C0C0] border-t border-[#808080] flex items-center justify-between text-[11px] font-sans text-gray-700 select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-400 border border-black flex items-center justify-center text-[8px] font-bold">
              🔑
            </div>
            <span>Applet Google! (1998) running &bull; Developed by Enes Öztürk</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Encoding: Western (ISO-8859-1 / UTF-8)</span>
            <span className="font-mono">100%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

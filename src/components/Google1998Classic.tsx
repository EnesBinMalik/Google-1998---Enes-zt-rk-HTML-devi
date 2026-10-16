import React, { useState } from 'react';
import { GoogleLogo1998 } from './GoogleLogo1998.tsx';
import { ModalType } from './Modals1998.tsx';
import { Check, Info, Sparkles, Send } from 'lucide-react';

interface Google1998ClassicProps {
  onSearch: (query: string, lucky?: boolean) => void;
  onOpenModal: (modal: ModalType) => void;
  searchType: 'web' | 'stanford' | 'linux';
}

export const Google1998Classic: React.FC<Google1998ClassicProps> = ({
  onSearch,
  onOpenModal,
  searchType,
}) => {
  const [query, setQuery] = useState('');
  const [email, setEmail] = useState('your e-mail');
  const [subscribedMessage, setSubscribedMessage] = useState(false);
  const [luckyToast, setLuckyToast] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim(), false);
    } else {
      // Default sample search for Larry Page / Stanford
      onSearch('Stanford University', false);
    }
  };

  const handleFeelingLucky = () => {
    const q = query.trim() || 'Stanford University';
    setLuckyToast(true);
    setTimeout(() => {
      setLuckyToast(false);
      onSearch(q, true);
    }, 700);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email !== 'your e-mail') {
      setSubscribedMessage(true);
      setTimeout(() => setSubscribedMessage(false), 4500);
    } else {
      setEmail('enes.ozturk@example.com');
    }
  };

  return (
    <div className="w-full bg-[#FFFFFF] text-[#000000] font-serif py-6 px-3 flex flex-col items-center select-text">
      
      {/* Toast for I'm Feeling Lucky */}
      {luckyToast && (
        <div className="fixed top-14 z-50 bg-[#FFFFE1] border-2 border-[#000080] text-[#000080] font-sans px-4 py-2 text-xs font-bold shadow-lg animate-bounce flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Kendinizi şanslı hissediyorsunuz! İlk sonuç getiriliyor...</span>
        </div>
      )}

      {/* Subscription Toast */}
      {subscribedMessage && (
        <div className="fixed top-14 z-50 bg-[#E8F5E9] border-2 border-[#2E7D32] text-[#1B5E20] font-sans px-4 py-2 text-xs font-bold shadow-lg flex items-center gap-2">
          <Check className="w-4 h-4 text-[#2E7D32]" />
          <span>Tebrikler! Google Friends (1998) e-posta bültenine başarıyla abone oldunuz.</span>
        </div>
      )}

      {/* 
        =========================================================
        1. BÖLÜM: 1998 GOOGLE! LOGOSU
        HTML Etiketi: <center><img ...></center>
        =========================================================
      */}
      <center className="w-full mb-3">
        <div className="inline-block hover:scale-[1.01] transition-transform cursor-pointer" onClick={() => onOpenModal('logos')} title="Google Logo Tarihini Gör">
          <GoogleLogo1998 width={351} height={113} />
        </div>
        {searchType !== 'web' && (
          <div className="mt-1">
            <span className="font-sans text-xs bg-amber-100 text-amber-900 px-2 py-0.5 border border-amber-300 font-bold">
              Kapsam: {searchType === 'stanford' ? 'Stanford Search (google.stanford.edu)' : 'Linux Search'}
            </span>
          </div>
        )}
      </center>

      {/* 
        =========================================================
        2. BÖLÜM: ANA İÇERİK TABLOSU
        HTML Etiketi: <table border="0" width="90%">
        Arka Plan Renkleri:
        - Arama alanı: #EEEEEE
        - Sol sütun (Special Searches): #7EE5DA
        - Orta sütun (Yardım & Bilgi): #70CCC2
        - Sağ sütun (Bülten): #62B3AA
        =========================================================
      */}
      <center className="w-full max-w-2xl">
        <table 
          border={0} 
          width="92%" 
          cellSpacing={0} 
          cellPadding={6}
          className="w-[92%] border-collapse text-center shadow-xs"
        >
          <tbody>
            {/* ÜST SATIR: ARAMA FORMU (BGCOLOR: #EEEEEE) */}
            <tr>
              <td 
                colSpan={3} 
                className="bg-[#EEEEEE] py-4 px-3 text-center border border-gray-300"
                style={{ backgroundColor: '#EEEEEE' }}
              >
                <form onSubmit={handleSearchSubmit} className="space-y-2">
                  <div className="text-[17px] leading-tight font-serif text-black font-normal">
                    Search the web using Google!
                  </div>

                  {/* Arama Metin Girişi (<input type="text" size="40">) */}
                  <div>
                    <input
                      type="text"
                      name="q"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      size={40}
                      placeholder={searchType === 'stanford' ? 'Stanford araması yapın...' : searchType === 'linux' ? 'Linux araması yapın...' : ''}
                      autoFocus
                      className="w-[90%] sm:w-80 px-2 py-1 text-sm bg-white text-black font-sans border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white focus:outline-none"
                    />
                  </div>

                  {/* Butonlar: Google Search ve I'm feeling lucky */}
                  <div className="pt-1 flex items-center justify-center gap-2">
                    <input
                      type="submit"
                      name="sa"
                      value="Google Search"
                      className="px-3 py-1 bg-[#ECE9D8] text-black border-2 border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-xs font-sans font-bold cursor-pointer hover:bg-[#E0DDD0]"
                    />
                    <input
                      type="button"
                      name="sa"
                      value="I'm feeling lucky"
                      onClick={handleFeelingLucky}
                      className="px-3 py-1 bg-[#ECE9D8] text-black border-2 border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-xs font-sans font-bold cursor-pointer hover:bg-[#E0DDD0]"
                    />
                  </div>
                </form>
              </td>
            </tr>

            {/* ALT SATIR: 3 AYRI RENKLİ KOLON */}
            <tr>
              {/* SOL KOLON: ÖZEL ARAMALAR (#7EE5DA) */}
              <td 
                width="33%" 
                valign="top" 
                align="center"
                className="p-3 text-center border-t border-white"
                style={{ backgroundColor: '#7EE5DA' }}
              >
                <div className="text-sm font-serif leading-relaxed">
                  <span className="font-bold">Special Searches</span>
                  <br />
                  <button
                    onClick={() => onOpenModal('stanford')}
                    className="text-[#0000CC] hover:underline visited:text-[#551A8B] text-sm cursor-pointer block w-full text-center"
                  >
                    Stanford Search
                  </button>
                  <button
                    onClick={() => onOpenModal('linux')}
                    className="text-[#0000CC] hover:underline visited:text-[#551A8B] text-sm cursor-pointer block w-full text-center"
                  >
                    Linux Search
                  </button>
                </div>
              </td>

              {/* ORTA KOLON: BİLGİ VE YARDIM (#70CCC2) */}
              <td 
                width="33%" 
                valign="top" 
                align="center"
                className="p-3 text-center border-t border-white"
                style={{ backgroundColor: '#70CCC2' }}
              >
                <div className="text-sm font-serif leading-relaxed">
                  <button
                    onClick={() => onOpenModal('help')}
                    className="text-[#0000CC] hover:underline visited:text-[#551A8B] text-sm cursor-pointer block w-full text-center"
                  >
                    Help!
                  </button>
                  <button
                    onClick={() => onOpenModal('about')}
                    className="text-[#0000CC] hover:underline visited:text-[#551A8B] text-sm cursor-pointer block w-full text-center"
                  >
                    About Google!
                  </button>
                  <button
                    onClick={() => onOpenModal('company')}
                    className="text-[#0000CC] hover:underline visited:text-[#551A8B] text-sm cursor-pointer block w-full text-center"
                  >
                    Company Info
                  </button>
                  <button
                    onClick={() => onOpenModal('logos')}
                    className="text-[#0000CC] hover:underline visited:text-[#551A8B] text-sm cursor-pointer block w-full text-center"
                  >
                    Google! Logos
                  </button>
                </div>
              </td>

              {/* SAĞ KOLON: AYLIK E-POSTA BÜLTENİ (#62B3AA) */}
              <td 
                width="33%" 
                valign="top" 
                align="center"
                className="p-3 text-center border-t border-white"
                style={{ backgroundColor: '#62B3AA' }}
              >
                <div className="text-sm font-serif leading-tight">
                  <span>Get Google!</span>
                  <br />
                  <span>updates monthly:</span>
                  
                  {/* E-bülten Formu */}
                  <form onSubmit={handleSubscribe} className="mt-1 space-y-1">
                    <input type="hidden" name="listname" value="google-friends" />
                    <input
                      type="text"
                      name="emailaddr"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => {
                        if (email === 'your e-mail') setEmail('');
                      }}
                      onBlur={() => {
                        if (!email.trim()) setEmail('your e-mail');
                      }}
                      size={15}
                      className="w-28 px-1.5 py-0.5 text-xs bg-white text-black font-sans border border-t-[#808080] border-l-[#808080] border-b-white border-r-white text-center"
                    />
                    <br />
                    <div className="flex items-center justify-center gap-1.5 pt-0.5">
                      <input
                        type="submit"
                        name="SubmitAction"
                        value="Subscribe"
                        className="px-2 py-0.5 bg-[#ECE9D8] text-black border border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-[11px] font-sans font-bold cursor-pointer"
                      />
                      <button
                        type="button"
                        onClick={() => onOpenModal('archive')}
                        className="text-[#0000CC] hover:underline visited:text-[#551A8B] text-xs cursor-pointer"
                      >
                        Archive
                      </button>
                    </div>
                  </form>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </center>

      <br />

      {/* 
        =========================================================
        3. BÖLÜM: TELİF HAKKI VE ENES ÖZTÜRK İMZASI
        =========================================================
      */}
      <center className="w-full">
        <span className="text-xs text-gray-800">
          Copyright &copy;1998 Google Inc.
        </span>
      </center>

      {/* Enes Öztürk Özel Ödev İmza Alanı */}
      <div className="w-[92%] max-w-2xl mt-5 p-3 bg-[#F8FAFC] border border-dashed border-[#70CCC2] rounded text-center text-xs font-sans text-gray-700 shadow-xs">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span className="font-bold text-[#000080] flex items-center gap-1">
            <span>🎓</span> Ödev Sahibi: <strong>Enes Öztürk</strong>
          </span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">
            <strong>Ders:</strong> HTML Bölümü 3. ve Son Ödev
          </span>
          <span className="text-gray-400">|</span>
          <span className="text-emerald-700 font-semibold flex items-center gap-1">
            <span>✓</span> Google 1998 Birebir Tasarım
          </span>
        </div>
        <p className="text-[11px] text-gray-500 mt-1 italic">
          "Tasarladığınız bölümler ile alakalı kodunuzda açıklama satırlarına yer veriniz" kuralına uygun olarak tüm HTML kodları Türkçe açıklamalıdır.
        </p>
      </div>

    </div>
  );
};

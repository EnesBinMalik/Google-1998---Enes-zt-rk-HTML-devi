import React from 'react';
import { X, ExternalLink, HelpCircle, Info, Building2, Image as ImageIcon, Sparkles } from 'lucide-react';

export type ModalType = 'help' | 'about' | 'company' | 'logos' | 'archive' | 'stanford' | 'linux' | null;

interface Modals1998Props {
  activeModal: ModalType;
  onClose: () => void;
  onSelectSearchType?: (type: 'web' | 'stanford' | 'linux') => void;
}

export const Modals1998: React.FC<Modals1998Props> = ({
  activeModal,
  onClose,
  onSelectSearchType,
}) => {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      {/* Retro 90s Modal Container */}
      <div 
        className="w-full max-w-xl bg-[#ECE9D8] text-black border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] shadow-2xl font-serif"
        style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.4)' }}
      >
        {/* Retro Title Bar (Classic Windows 98 / Netscape Navy Header) */}
        <div className="flex items-center justify-between px-2 py-1 bg-gradient-to-r from-[#000080] via-[#1084d0] to-[#000080] text-white font-sans text-sm font-bold select-none">
          <div className="flex items-center gap-1.5 truncate">
            {activeModal === 'help' && <HelpCircle className="w-4 h-4 text-yellow-300" />}
            {activeModal === 'about' && <Info className="w-4 h-4 text-cyan-300" />}
            {activeModal === 'company' && <Building2 className="w-4 h-4 text-green-300" />}
            {activeModal === 'logos' && <ImageIcon className="w-4 h-4 text-pink-300" />}
            <span>
              {activeModal === 'help' && 'Google! (1998) - Help & Search Tips'}
              {activeModal === 'about' && 'About Google! - Stanford & Larry & Sergey'}
              {activeModal === 'company' && 'Google Inc. - 1998 Company Information'}
              {activeModal === 'logos' && 'Google! Logos History (1996 - 1998)'}
              {activeModal === 'stanford' && 'Stanford Search (google.stanford.edu)'}
              {activeModal === 'linux' && 'Special Search: Linux 1998'}
              {activeModal === 'archive' && 'Google Friends - Newsletter Archive (1998)'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-5 h-5 text-black bg-[#ECE9D8] border border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white font-mono text-xs font-bold leading-none cursor-pointer"
            title="Kapat"
          >
            ✕
          </button>
        </div>

        {/* Modal Body with 1998 Retro Inset Styling */}
        <div className="p-4 max-h-[75vh] overflow-y-auto bg-white m-1 border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white text-[15px] leading-relaxed">
          {activeModal === 'help' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#000080] border-b pb-1 font-sans">
                Google Search Help (1998 Original Guide)
              </h2>
              <p className="italic text-gray-700">
                1998 yılında Google arama motorunun kullanıcılarına sunduğu orijinal rehber ve ipuçları:
              </p>

              <div className="p-3 bg-[#FFFFE1] border border-[#CCCC99] text-sm">
                <p className="font-bold text-[#800000] mb-1">1. Otomatik "AND" Sorgulaması:</p>
                <p>
                  Google varsayılan olarak yazdığınız tüm kelimeleri içeren sayfaları getirir. Diğer arama motorları gibi araya "AND" yazmanıza gerek yoktur.
                </p>
              </div>

              <div className="p-3 bg-[#FFFFE1] border border-[#CCCC99] text-sm">
                <p className="font-bold text-[#800000] mb-1">2. Büyük / Küçük Harf Duyarsızlığı:</p>
                <p>
                  Aramalar büyük veya küçük harfe duyarlı değildir. Örneğin <code>"STANFORD"</code>, <code>"stanford"</code> ve <code>"Stanford"</code> aramalarının hepsi aynı sonuçları listeler.
                </p>
              </div>

              <div className="p-3 bg-[#FFFFE1] border border-[#CCCC99] text-sm">
                <p className="font-bold text-[#800000] mb-1">3. Stop Words (Gereksiz Kelimeler):</p>
                <p>
                  Google "http", ".com", "the", "where", "how" gibi arama hızını yavaşlatan ve milyarlarca sayfada bulunan kelimeleri otomatik eler. Arama yapmak istediğiniz kelimenin önüne <code>+</code> işareti koyarak zorunlu kılabilirsiniz (örn: <code>+where</code>).
                </p>
              </div>

              <div className="p-3 bg-[#F0F4F8] border border-[#B0C4DE] text-sm">
                <p className="font-bold text-[#000080] mb-1">💡 Enes Öztürk Ödev Notu:</p>
                <p>
                  1998'de Google'ı AltaVista ve Yahoo'dan ayıran en büyük devrim, Stanford Üniversitesi'nde geliştirilen <strong>PageRank</strong> patentli algoritmasıydı.
                </p>
              </div>
            </div>
          )}

          {activeModal === 'about' && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b pb-2">
                <div className="p-2 bg-blue-50 border border-blue-200 rounded">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#000080] font-sans">
                    About Google! (Hakkında)
                  </h2>
                  <p className="text-xs text-gray-500">
                    Stanford University Computer Science Ph.D. Project (1996 - 1998)
                  </p>
                </div>
              </div>

              <p>
                Google, 1996 yılı Ocak ayında Stanford Üniversitesi'nde doktora öğrencileri olan <strong>Larry Page</strong> ve <strong>Sergey Brin</strong> tarafından bir araştırma projesi olarak başlatıldı.
              </p>

              <div className="p-3 bg-[#F7F7F7] border border-gray-300 text-sm">
                <p className="font-bold text-gray-800">Projenin İlk Adı: BackRub</p>
                <p className="mt-1">
                  İlk başta sistem web sitelerinin geri bağlantılarını (backlinks) analiz ettiği için "BackRub" olarak adlandırılmıştı. Daha sonra 1 rakamı ve ardından gelen 100 sıfırı temsil eden matematiksel terim <strong>"Googol"</strong> sözcüğü üzerinde yapılan bir kelime oyunu ile <strong>Google</strong> adı benimsendi.
                </p>
              </div>

              <p>
                Google resmi olarak <strong>4 Eylül 1998</strong> tarihinde Susan Wojcicki'nin Menlo Park, Kaliforniya'daki garajında şirketleşti.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href="https://tr.wikipedia.org/wiki/Google"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EEEEEE] hover:bg-[#DDDDDD] border border-[#999] text-xs font-sans text-blue-900 font-bold"
                >
                  <span>Vikipedi: Google Maddesini Aç</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://web.archive.org/web/19981202230410/http://www.google.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EEEEEE] hover:bg-[#DDDDDD] border border-[#999] text-xs font-sans text-blue-900 font-bold"
                >
                  <span>Wayback Machine 1998 Arşivi</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {activeModal === 'company' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#000080] border-b pb-1 font-sans">
                Company Info (1998 Kuruluş Detayları)
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="p-3 bg-[#F0F8FF] border border-[#B0C4DE]">
                  <strong className="block text-[#000080]">Kurucular:</strong>
                  <span>Larry Page & Sergey Brin</span>
                </div>
                <div className="p-3 bg-[#F0F8FF] border border-[#B0C4DE]">
                  <strong className="block text-[#000080]">İlk Ofis:</strong>
                  <span>Menlo Park, CA (Susan Wojcicki'nin Garajı)</span>
                </div>
                <div className="p-3 bg-[#F0F8FF] border border-[#B0C4DE]">
                  <strong className="block text-[#000080]">İlk Yatırım:</strong>
                  <span>100.000$ (Andy Bechtolsheim - Sun Microsystems kurucusu)</span>
                </div>
                <div className="p-3 bg-[#F0F8FF] border border-[#B0C4DE]">
                  <strong className="block text-[#000080]">İlk Donanım:</strong>
                  <span>Lego parçalarından yapılan sunucu kasası</span>
                </div>
              </div>

              <p className="text-sm">
                Google 1998 yılında günde sadece yaklaşık 10.000 arama sorgusu işliyordu. Bugün ise saniyede 100.000'den fazla arama yapılmaktadır.
              </p>

              <div className="p-3 bg-[#E8F5E9] border border-[#81C784] text-xs">
                <strong>Ödev Notu (Enes Öztürk):</strong> 1998'deki bu sayfa, sade HTML etiketleri (&lt;table&gt;, &lt;font&gt;, &lt;center&gt;, &lt;input&gt;) kullanılarak minimalist bir arama kutusu odağıyla tasarlandı.
              </div>
            </div>
          )}

          {activeModal === 'logos' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#000080] border-b pb-1 font-sans">
                Google Logo Tarihi (1996 - 1998)
              </h2>

              <div className="space-y-3">
                <div className="p-3 border border-gray-300 bg-gray-50 flex flex-col items-center">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 font-sans">
                    1996 - BackRub Logosu (Stanford)
                  </span>
                  <div className="text-2xl font-black text-red-700 tracking-wider font-serif">
                    BackRub
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-center">
                    Sergey Brin'in tarayıcıdan aldığı el fotoğrafı ile oluşturulan ilk prototip.
                  </p>
                </div>

                <div className="p-3 border-2 border-blue-400 bg-blue-50/50 flex flex-col items-center">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2 font-sans">
                    1997 - 1998 - İlk Google! Logosu (Bu Ödevde Tasarlanan)
                  </span>
                  <div className="text-3xl font-serif font-black tracking-tight py-1">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                    <span className="text-[#34A853]">!</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-center">
                    GIMP ile yapılan 3D kabartmalı serif logo. Yahoo!'ya ithafen sonuna ünlem işareti konulmuştur.
                  </p>
                </div>

                <div className="p-3 border border-gray-300 bg-gray-50 flex flex-col items-center">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 font-sans">
                    1999 - 2010 - Catull Serif Logosu
                  </span>
                  <div className="text-2xl font-serif font-semibold tracking-wide">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 text-center">
                    Ruth Kedar tarafından tasarlanan ünlemsiz klasik Google yazı karakteri.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeModal === 'stanford' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#8C1515] border-b pb-1 font-sans flex items-center gap-2">
                <span>🌲</span> Stanford Search (google.stanford.edu)
              </h2>
              <p>
                Google ilk olarak Stanford Üniversitesi'nin sunucularında <code>google.stanford.edu</code> ve <code>zesty.ca</code> adreslerinde barındırılıyordu.
              </p>
              <div className="p-3 bg-[#FFF5F5] border border-[#FFD0D0] text-sm">
                Stanford Üniversitesi ile ilgili arama yapmak için arama kapsamını Stanford olarak ayarlayabilirsiniz:
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => {
                    onSelectSearchType?.('stanford');
                    onClose();
                  }}
                  className="px-4 py-2 bg-[#8C1515] text-white font-sans text-sm font-bold hover:bg-[#680F0F] cursor-pointer"
                >
                  Stanford Arama Modunu Seç
                </button>
                <a
                  href="https://www.stanford.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-200 text-gray-800 font-sans text-sm font-bold hover:bg-gray-300 inline-flex items-center gap-1.5"
                >
                  Stanford.edu'ya Git <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {activeModal === 'linux' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#E95420] border-b pb-1 font-sans flex items-center gap-2">
                <span>🐧</span> Linux Search (1998)
              </h2>
              <p>
                1998'de Google kurucuları açık kaynak ve Linux dünyasına büyük ilgi duyuyorlardı. Google'ın ilk sunucuları Red Hat Linux üzerinde çalışıyordu.
              </p>
              <div className="p-3 bg-[#FFF8E7] border border-[#FFE082] text-sm">
                Bu bağlantı ile Linux çekirdeği, dağıtımları ve dokümanları üzerinde filtrelenmiş arama yapılıyordu.
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => {
                    onSelectSearchType?.('linux');
                    onClose();
                  }}
                  className="px-4 py-2 bg-[#E95420] text-white font-sans text-sm font-bold hover:bg-[#C34113] cursor-pointer"
                >
                  Linux Arama Modunu Seç
                </button>
                <a
                  href="https://www.kernel.org"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-200 text-gray-800 font-sans text-sm font-bold hover:bg-gray-300 inline-flex items-center gap-1.5"
                >
                  Kernel.org'a Git <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {activeModal === 'archive' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#000080] border-b pb-1 font-sans">
                Google Friends Newsletter (1998 Arşivi)
              </h2>
              <p>
                1998 yılında Google ekibi yenilikleri eGroups (daha sonra Yahoo! Groups) üzerinden "Google Friends" bülteni ile duyuruyordu.
              </p>
              <div className="p-3 bg-[#F0F8FF] border border-[#B0C4DE] text-sm space-y-1">
                <p><strong>İlk Duyuru Konusu:</strong> "Google! Beta Launches at Stanford"</p>
                <p><strong>Yayın Tarihi:</strong> Kasım 1998</p>
                <p><strong>İçerik:</strong> 25 milyondan fazla web sayfasının indekslendiği ve arama sonuçlarının saniyeler içinde verildiği müjdesi.</p>
              </div>
              <a
                href="https://web.archive.org/web/19981202230410/http://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-700 text-white font-sans text-sm font-bold hover:bg-blue-800"
              >
                Wayback Machine 1998 Arşivini Ziyaret Et <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Modal Retro Footer Buttons */}
        <div className="flex justify-end p-2 bg-[#ECE9D8] border-t border-t-white">
          <button
            onClick={onClose}
            className="px-5 py-1 text-sm font-sans font-bold bg-[#ECE9D8] text-black border-2 border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white cursor-pointer"
          >
            Kapat (Tamam)
          </button>
        </div>
      </div>
    </div>
  );
};

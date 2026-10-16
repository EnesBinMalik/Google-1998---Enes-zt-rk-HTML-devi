import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { GoogleLogo1998 } from './GoogleLogo1998.tsx';

interface SearchResults1998Props {
  query: string;
  searchType: 'web' | 'stanford' | 'linux';
  onBackToHome: () => void;
  onNewSearch: (q: string) => void;
}

export const SearchResults1998: React.FC<SearchResults1998Props> = ({
  query,
  searchType,
  onBackToHome,
  onNewSearch,
}) => {
  const [currentQuery, setCurrentQuery] = React.useState(query);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentQuery.trim()) {
      onNewSearch(currentQuery.trim());
    }
  };

  // Mock authentic 1998 results tailored to user query and Enes Öztürk
  const getResults = () => {
    const qLower = query.toLowerCase();

    const isEnes = qLower.includes('enes') || qLower.includes('öztürk') || qLower.includes('ozturk');
    const isStanford = qLower.includes('stanford') || searchType === 'stanford';
    const isLinux = qLower.includes('linux') || searchType === 'linux';
    const isHtml = qLower.includes('html') || qLower.includes('ödev') || qLower.includes('odev');

    const results = [];

    if (isEnes || isHtml) {
      results.push({
        title: "Enes Öztürk - Web Geliştirme ve HTML 3. Ödevi (Google 1998)",
        url: "http://enes-ozturk.github.io/html-odev-3-google-1998",
        snippet: "Enes Öztürk tarafından hazırlanan HTML ödevi. Google'ın 1998 yılındaki ilk ana sayfasının (Wayback Machine) birebir retro tasarımı, açıklama satırları ve özel arama linkleri...",
        cached: "4k - Cached - GoogleScout"
      });
      results.push({
        title: "HTML Bölümü 3. ve Son Ödev: Google Ana Sayfasını Tasarlamak",
        url: "http://kurs.kodluyoruz.org/html/odev-3-google-anasayfasi",
        snippet: "Tebrikler! Google 1998 versiyonu Larry Page ve Sergey Brin'in Stanford'da hazırladığı ilk beta sürümdür. Butonların ve linklerin yerleşimi, açıklama satırları ile Enes Öztürk ödevi...",
        cached: "8k - Cached - GoogleScout"
      });
    }

    if (isStanford) {
      results.push({
        title: "Stanford University Homepage",
        url: "http://www.stanford.edu/",
        snippet: "Stanford University is one of the world's leading research and teaching institutions. Home to Larry Page and Sergey Brin's BackRub/Google research project...",
        cached: "14k - Cached - GoogleScout"
      });
      results.push({
        title: "The Anatomy of a Large-Scale Hypertextual Web Search Engine",
        url: "http://dbpubs.stanford.edu:8091/~test/1998/anatomy.html",
        snippet: "Sergey Brin and Lawrence Page. Computer Science Department, Stanford University, Stanford, CA 94305. In this paper, we present Google, a prototype of a large-scale search engine...",
        cached: "29k - Cached - GoogleScout"
      });
    }

    if (isLinux) {
      results.push({
        title: "The Linux Kernel Archives",
        url: "http://www.kernel.org/",
        snippet: "Official site for the Linux kernel source code. Maintained by Linus Torvalds. Mirror sites, v2.0 and v2.2 kernel releases and patches...",
        cached: "12k - Cached - GoogleScout"
      });
      results.push({
        title: "Linux Documentation Project (LDP)",
        url: "http://www.metalab.unc.edu/LDP/",
        snippet: "A collection of free documentation for Linux including HOWTOs, guides, FAQs, and man pages for systems administrators and programmers...",
        cached: "18k - Cached - GoogleScout"
      });
    }

    // Default 1998 results
    results.push({
      title: "Google! Search Engine Prototype",
      url: "http://google.stanford.edu/",
      snippet: `Search results for query '${query}'. Google uses PageRank to measure the importance of website pages based on citation graph analysis...`,
      cached: "6k - Cached - GoogleScout"
    });
    results.push({
      title: "Internet Archive: Wayback Machine - 1998 Google Snapshot",
      url: "https://web.archive.org/web/19981202230410/http://www.google.com/",
      snippet: "Browse through 1998 websites and history. See the original Google Beta homepage archive from December 1998 in all its retro glory...",
      cached: "21k - Cached - GoogleScout"
    });
    results.push({
      title: "Vikipedi: Google Tarihçesi ve Kuruluşu",
      url: "https://tr.wikipedia.org/wiki/Google",
      snippet: "Google, 4 Eylül 1998'de Larry Page ve Sergey Brin tarafından kuruldu. Başlangıçta Stanford doktora projesi olan sistem hızla dünyanın en popüler arama motoru haline geldi...",
      cached: "33k - Cached - GoogleScout"
    });
    results.push({
      title: "Yahoo! - Web's Most Popular Directory (1998)",
      url: "http://www.yahoo.com/",
      snippet: "Categories: Arts & Humanities, Business & Economy, Computers & Internet, Education, Entertainment, Government, Health, News & Media, Science, Social Science...",
      cached: "16k - Cached - GoogleScout"
    });

    return results;
  };

  const results = getResults();

  return (
    <div className="w-full min-h-screen bg-white text-black font-serif p-4 max-w-5xl mx-auto">
      {/* 1998 Header Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between pb-3 border-b border-[#000080]/30 gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1.5 px-3 py-1 bg-[#ECE9D8] text-black border border-t-white border-l-white border-b-black border-r-black hover:bg-[#DDD] text-xs font-sans font-bold cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Ana Sayfaya Dön</span>
          </button>
          <div onClick={onBackToHome} className="cursor-pointer">
            <GoogleLogo1998 width={175} height={56} />
          </div>
        </div>

        {/* 1998 Mini Search Form */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={currentQuery}
            onChange={(e) => setCurrentQuery(e.target.value)}
            className="px-2 py-1 border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white bg-white text-sm font-sans w-52 sm:w-64"
          />
          <button
            type="submit"
            className="px-3 py-1 bg-[#ECE9D8] text-black border border-t-white border-l-white border-b-black border-r-black text-xs font-sans font-bold active:bg-gray-300 cursor-pointer"
          >
            Google Search
          </button>
        </form>
      </div>

      {/* Scope Indicator & 1998 Stats */}
      <div className="mt-2 text-xs font-sans text-gray-700 bg-[#EEEEEE] p-2 border border-gray-300 flex flex-wrap items-center justify-between gap-2">
        <div>
          Searched <strong>{searchType === 'stanford' ? 'Stanford pages' : searchType === 'linux' ? 'Linux documentation' : 'the web'}</strong> for <strong className="text-blue-900 font-bold">"{query}"</strong>.
          &nbsp;(Results 1 - {results.length} of about {results.length * 342})
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] bg-blue-100 text-blue-900 px-2 py-0.5 border border-blue-300 font-bold">
            Search time: 0.08 seconds
          </span>
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(query)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[11px] text-blue-800 underline font-sans font-bold hover:text-blue-950"
          >
            <span>Modern Google'da Ara</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Results List */}
      <div className="mt-4 space-y-5">
        {results.map((res, idx) => (
          <div key={idx} className="space-y-0.5">
            <h3 className="text-lg leading-tight font-serif">
              <a
                href={res.url}
                target="_blank"
                rel="noreferrer"
                className="text-[#0000CC] hover:underline visited:text-[#551A8B] font-medium"
              >
                {res.title}
              </a>
            </h3>
            <p className="text-[14px] leading-snug text-[#222222]">
              {res.snippet}
            </p>
            <div className="text-[13px] font-sans flex items-center gap-2">
              <span className="text-[#008000] truncate max-w-md">{res.url}</span>
              <span className="text-gray-500">-</span>
              <span className="text-blue-800 underline hover:text-blue-950 cursor-pointer">
                {res.cached}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Pagination (1998 Goooooogle style) */}
      <div className="mt-10 pt-6 border-t border-gray-300 text-center font-serif">
        <div className="text-2xl font-bold tracking-widest text-[#0000CC]">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">o</span>
          <span className="text-[#34A853]">o</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
          <span className="text-[#34A853]">!</span>
        </div>
        <div className="text-xs font-sans text-gray-600 mt-2">
          Page 1 &bull; Enes Öztürk HTML Arama Motoru Simülasyonu
        </div>
      </div>
    </div>
  );
};

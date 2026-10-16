/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Google 1998 Beta Ana Sayfa Tasarımı
 * Geliştirici & Öğrenci: Enes Öztürk
 * HTML Bölümü 3. ve Son Ödev
 */

import React, { useState } from 'react';
import { AssignmentHeader } from './components/AssignmentHeader.tsx';
import { RetroWindowFrame } from './components/RetroWindowFrame.tsx';
import { Google1998Classic } from './components/Google1998Classic.tsx';
import { SearchResults1998 } from './components/SearchResults1998.tsx';
import { Modals1998, ModalType } from './components/Modals1998.tsx';
import { CodeInspectorModal } from './components/CodeInspectorModal.tsx';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'search'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'web' | 'stanford' | 'linux'>('web');
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isCodeInspectorOpen, setIsCodeInspectorOpen] = useState(false);
  const [isRetroFrame, setIsRetroFrame] = useState(true);
  const [isCrtMode, setIsCrtMode] = useState(false);

  // Search handler
  const handleSearch = (query: string, lucky = false) => {
    setSearchQuery(query);
    if (lucky) {
      // "I'm feeling lucky" directly opens first result or search results with lucky notice
      setActiveView('search');
    } else {
      setActiveView('search');
    }
  };

  const handleBackToHome = () => {
    setActiveView('home');
  };

  // URL display in retro browser frame
  const getCurrentUrl = () => {
    if (activeView === 'search') {
      return `http://www.google.com/search?q=${encodeURIComponent(searchQuery)}&scope=${searchType}`;
    }
    if (searchType === 'stanford') {
      return 'http://google.stanford.edu/';
    }
    if (searchType === 'linux') {
      return 'http://www.google.com/linux';
    }
    return 'http://www.google.com/';
  };

  return (
    <div className={`min-h-screen bg-slate-100 flex flex-col ${isCrtMode ? 'crt-overlay' : ''}`}>
      {/* Enes Öztürk Assignment Bar & Retro Controls */}
      <AssignmentHeader
        onOpenCodeInspector={() => setIsCodeInspectorOpen(true)}
        isRetroFrame={isRetroFrame}
        onToggleRetroFrame={() => setIsRetroFrame(!isRetroFrame)}
        isCrtMode={isCrtMode}
        onToggleCrtMode={() => setIsCrtMode(!isCrtMode)}
      />

      {/* Main Retro Container (Netscape 4.0 or Full Page) */}
      <main className="flex-1 flex flex-col items-center justify-start">
        <RetroWindowFrame
          isRetroFrame={isRetroFrame}
          currentUrl={getCurrentUrl()}
          onRefresh={() => {
            // refresh animation
          }}
          onGoHome={handleBackToHome}
        >
          {activeView === 'home' ? (
            <Google1998Classic
              onSearch={handleSearch}
              onOpenModal={(modal) => setActiveModal(modal)}
              searchType={searchType}
            />
          ) : (
            <SearchResults1998
              query={searchQuery}
              searchType={searchType}
              onBackToHome={handleBackToHome}
              onNewSearch={(q) => handleSearch(q, false)}
            />
          )}
        </RetroWindowFrame>
      </main>

      {/* Retro 1998 Informational Modals (Help, About, Company, Logos, etc.) */}
      <Modals1998
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        onSelectSearchType={(type) => setSearchType(type)}
      />

      {/* HTML Code Inspector with Turkish Comments (Inspect element requirement) */}
      <CodeInspectorModal
        isOpen={isCodeInspectorOpen}
        onClose={() => setIsCodeInspectorOpen(false)}
      />
    </div>
  );
}

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { Toast } from './components/Toast';

export const App = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2500);
  };

  const handleCopy = (text, customMessage) => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(
      () => {
        addToast(customMessage || `Copied to clipboard: "${text}"`);
      },
      () => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          addToast(customMessage || `Copied: "${text}"`);
        } catch (e) {
          addToast('Could not auto-copy');
        }
        document.body.removeChild(textarea);
      }
    );
  };

  return (
    <>
      <Navbar onToast={addToast} />
      <main>
        <Hero onToast={addToast} onCopy={handleCopy} />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        <Contact onToast={addToast} onCopy={handleCopy} />
      </main>
      <Footer />
      <BackToTop />
      <Toast toasts={toasts} />
    </>
  );
};

export default App;

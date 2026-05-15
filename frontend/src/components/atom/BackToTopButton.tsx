"use client"
import { useState, useEffect } from 'react';
import { GoMoveToTop } from "react-icons/go";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Show button when scrolled down more than 100px
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add event listener for scroll on mount, cleanup on unmount
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 p-3 bg-indigo-300 dark:bg-slate-950 text-white hover:text-indigo-500 dark:hover:text-emerald-500 shadow-[0px_0px_5px_3px_rgba(167,139,250,0.4)] dark:shadow-[0px_0px_5px_3px_rgba(20,184,166,0.2)] rounded-full transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transition: 'opacity 0.3s ease-in-out' }}
    >
      <GoMoveToTop/>
    </button>
  );
};

export default BackToTopButton;

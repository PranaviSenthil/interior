import { useEffect } from 'react';

export default function AudioProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // We create a tiny synthesized "tick" sound using Web Audio API to avoid external assets
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const playTick = () => {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); // High pitch tick
      oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.05);
      
      gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.01); // Very subtle volume
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.05);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Only play sound on elements with 'button' or 'a' tags, or elements with cursor-pointer
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        // Prevent playing too rapidly if moving inside the same element
        if (!target.hasAttribute('data-sound-played')) {
          playTick();
          target.setAttribute('data-sound-played', 'true');
          setTimeout(() => target.removeAttribute('data-sound-played'), 100);
        }
      }
    };

    window.addEventListener('mouseover', handleHover);
    return () => window.removeEventListener('mouseover', handleHover);
  }, []);

  return <>{children}</>;
}

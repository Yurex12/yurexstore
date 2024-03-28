import { useEffect, useRef } from 'react';

export function useOutsideClick(
  handler: () => void,
  listeningCapturing = true
) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(
    function () {
      function handleClick(e: MouseEvent) {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          handler();
        }
      }

      document.addEventListener('click', handleClick, listeningCapturing);

      return () =>
        document.removeEventListener('click', handleClick, listeningCapturing);
    },
    [handler, ref, listeningCapturing]
  );
  return ref;
}
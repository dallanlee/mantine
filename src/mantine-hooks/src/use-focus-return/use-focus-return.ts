import { useRef } from 'react';
import { useDidUpdate } from '../use-did-update/use-did-update';

interface UseFocusReturn {
  opened: boolean;
  transitionDuration: number;
}

/** Returns focus to last active element, used in Modal and Drawer */
export function useFocusReturn({ opened, transitionDuration }: UseFocusReturn) {
  const returnFocus = useRef<HTMLElement>();

  useDidUpdate(() => {
    let timeout = -1;

    const clearFocusTimeout = (event: KeyboardEvent) => {
      if (event.code === 'Tab') {
        window.clearTimeout(timeout);
      }
    };

    document.addEventListener('keydown', clearFocusTimeout);

    if (opened) {
      returnFocus.current = document.activeElement as HTMLElement;
    } else {
      timeout = window.setTimeout(() => {
        if (
          returnFocus.current &&
          'focus' in returnFocus.current &&
          typeof returnFocus.current.focus === 'function'
        ) {
          returnFocus.current?.focus();
        }
      }, transitionDuration + 10);
    }

    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener('keydown', clearFocusTimeout);
    };
  }, [opened]);
}

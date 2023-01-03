import { useState, useCallback } from 'react';

function useClippy(): [string, () => void, (text: string) => void] {
  const [clipboard, setClipboard] = useState('');

  const paste = useCallback((): void => {
    navigator.clipboard.readText().then(clipText => {
      setClipboard(clipText)
    })
  }, [])

  const copy = useCallback((text: string): void => {
    navigator.clipboard.writeText(text)
  }, [])

  return [clipboard, paste, copy];
}
export default useClippy;

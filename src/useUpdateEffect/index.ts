import { EffectCallback,  useEffect } from 'react';
import useFirstMountState from '../useFirstMountState';

function useUpdateEffect (effect: EffectCallback, deps: []) {
  const isFirstMount = useFirstMountState();
  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
  }, [...deps]);
}

export default useUpdateEffect;

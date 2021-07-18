import { useEffect } from 'react';

const useKeypress = (key, callback, dependencies = []) => {
  useEffect(() => {
    function onKeyup(e) {
      if (e.key === key) callback();
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, dependencies);
};

export default useKeypress;

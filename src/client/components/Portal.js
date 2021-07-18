import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

const SELECTOR_ID = '#portal-root';

const Portal = ({ children }) => {
  if (!process.browser) return null;

  const ref = useRef();
  const [mounted, setMounted] = useState(false);
  const theme = useSelector((state) => state.settings.theme);

  const el = document.createElement('div');
  el.className = `portal-wrapper theme--${theme}`;

  useEffect(() => {
    ref.current = document.querySelector(SELECTOR_ID);
    ref.current.appendChild(el);

    setMounted(true);

    return () => ref.current.removeChild(el);
  }, [el]);

  return mounted ? createPortal(children, el) : null;
}

export default Portal;

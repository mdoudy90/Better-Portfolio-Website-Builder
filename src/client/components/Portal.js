import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

const SELECTOR_ID = '#portal-root';

const Portal = ({ children }) => {
  if (!process.browser) return null;

  const ref = useRef();
  const [mounted, setMounted] = useState(false);
  const theme = useSelector((state) => state.settings.theme);

  const portalWrapper = document.createElement('div');
  portalWrapper.className = `portal-wrapper theme--${theme}`;

  const bgShader = document.createElement('div');
  bgShader.className = `bg-shader`;
  portalWrapper.appendChild(bgShader);

  useEffect(() => {
    ref.current = document.querySelector(SELECTOR_ID);
    ref.current.appendChild(portalWrapper);

    setMounted(true);

    return () => ref.current.removeChild(portalWrapper);
  }, [portalWrapper]);

  return mounted ? createPortal(children, portalWrapper) : null;
}

export default Portal;

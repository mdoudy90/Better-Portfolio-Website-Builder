import { useEffect } from 'react';

const useOutsideClick = (ref, callback, isNextImage) => {
  const handleClick = (e) => {
    if (isNextImage && ref.current && ref.current.children && ref.current.children[1] === e.target) {
      callback();
    }

    if (!isNextImage && e.target.className.includes('portal-wrapper')) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;

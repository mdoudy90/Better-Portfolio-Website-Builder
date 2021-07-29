import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && ref.current.children && ref.current.children[1] === e.target) {
      callback();
    }
    // //! OLD WAY
    // if (ref.current && !ref.current.contains(e.target)) {
    //   callback();
    // }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;

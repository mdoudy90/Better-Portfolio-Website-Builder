import useKeypress from './useKeypress';
import useOutsideClick from './useOutsideClick';

const useModalClose = (ref, callback, dependencies = [], isNextImage) => {
  useKeypress('Escape', callback, dependencies);
  useOutsideClick(ref, callback, isNextImage);
};

export default useModalClose;

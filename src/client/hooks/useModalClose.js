import useKeypress from './useKeypress';
import useOutsideClick from './useOutsideClick';

const useModalClose = (ref, callback, dependencies = []) => {
  useKeypress('Escape', callback, dependencies);
  useOutsideClick(ref, callback);
};

export default useModalClose;

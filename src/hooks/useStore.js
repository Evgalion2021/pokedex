import { useContext } from 'react';
import Context from '../context/Context';

export const useStore = () => {
  return useContext(Context);
};

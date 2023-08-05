import { createContext, useState } from 'react';

interface ModalContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextProps>(null);

const ModalProvider = (props: React.PropsWithChildren) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

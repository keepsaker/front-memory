import { ReactNode, createContext, useContext, useState } from 'react';

interface SelectContextProps {
  selected: string;
  setSelected: (value: string) => void;
}

const SelectContext = createContext<SelectContextProps | null>(null);

interface SelectProps {
  children: ReactNode;
  defaultOption: string;
  className?: string;
}

const Select = ({ children, defaultOption, className }: SelectProps) => {
  const [selected, setSelected] = useState(defaultOption);

  const contextValue: SelectContextProps = {
    selected,
    setSelected,
  };

  return (
    <SelectContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </SelectContext.Provider>
  );
};

interface OptionProps {
  value: string;
  children: ReactNode;
  className?: { selectedTagStyle: string; tagStyle: string };
}

const Option = ({ value, children, className }: OptionProps) => {
  const context = useContext(SelectContext);
  if (context === undefined) {
    throw new Error('<Select.Option>은 Select 아래에서만 사용 가능!!');
  }

  const { selected, setSelected } = context;
  const { selectedTagStyle, tagStyle } = className;

  const isSelected = selected === value;
  const optionClassName = `${isSelected ? selectedTagStyle : tagStyle}`;

  return (
    <li onClick={() => setSelected(value)} className={`${optionClassName}`}>
      {children}
    </li>
  );
};

Select.Option = Option;

export default Select;

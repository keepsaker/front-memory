import { useState, useCallback } from 'react';

const useSelectInput = <T>(options: T[], initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  const setSelected = useCallback(
    (selected: T) => {
      if (!options.includes(selected)) return;
      setValue(selected);
    },
    [setValue, options]
  );

  return { value, setValue: setSelected };
};

export default useSelectInput;

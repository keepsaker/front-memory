import { useState, useCallback } from 'react';

const useTextInput = (initialValue = '', maxLength = Infinity) => {
  const [text, setText] = useState(initialValue);

  const setValue = useCallback(
    (newText: string) => {
      setText(
        newText.length > maxLength ? newText.slice(0, maxLength + 1) : newText
      );
    },
    [setText]
  );

  return { value: text, setValue };
};

export default useTextInput;

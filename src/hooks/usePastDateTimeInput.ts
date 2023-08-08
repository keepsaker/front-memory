import { useState, useCallback } from 'react';
import getToday from '../utils/getToday';

const usePastDateTimeInput = () => {
  const [dateTime, setDateTime] = useState(() => getToday());

  const setValue = useCallback(
    (newDateTime: string) => {
      if (new Date(newDateTime) > new Date()) {
        setDateTime(getToday());
        return;
      }
      setDateTime(newDateTime);
    },
    [setDateTime]
  );

  return { value: dateTime, setValue };
};

export default usePastDateTimeInput;

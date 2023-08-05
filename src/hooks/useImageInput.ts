import { useState, useCallback } from 'react';

const useImageInput = () => {
  const [value, setValue] = useState<string[]>([]);
  const [files, setFiles] = useState<FileList>();

  const setImages = useCallback(
    (fileList: FileList) => {
      const newImages = [];

      Array.from(fileList).forEach((file) => {
        if (!/^image\/(jpg|png|jpeg)$/.test(file.type)) return;
        newImages.push(URL.createObjectURL(file));
      });

      if (fileList.length === newImages.length) {
        setValue(newImages);
        setFiles(fileList);
      }
    },
    [setValue]
  );

  return { value, files, setValue: setImages };
};

export default useImageInput;

import { useRef } from 'react';
import { hidden, thumbnail, uploadButton } from './ImageUploader.css';

interface ImageUploaderProps {
  images: string[];
  setImages: (fileList: FileList) => void;
}

const ImageUploader = (props: ImageUploaderProps) => {
  const { images, setImages } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const accessImageInput = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <button type="button" onClick={accessImageInput} className={`${thumbnail} ${uploadButton}`}>
        {images.length > 0
          ? images.map((image) => (
              <img key={image} src={image} alt={'내 추억'} className={thumbnail} />
            ))
          : '추억 사진을 올려주세요!'}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpg, impge/png, image/jpeg"
        onChange={({ target: { files } }) => {
          setImages(files);
        }}
        className={hidden}
      />
    </>
  );
};

export default ImageUploader;

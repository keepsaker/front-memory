import type { Category } from '../../types/category';
import { useState } from 'react';
import StarRating from '../StarRating';
import {
  baseInput,
  contentInput,
  inlineRowFlex,
  normalFont,
  primaryButton,
  rounded,
  title,
  titleInput,
  wrapper,
} from './newMemoryForm.css';
import useTextInput from '../../hooks/useTextInput';
import usePastDateTimeInput from '../../hooks/usePastDateTimeInput';
import getNowInDateTimeFormat from '../../utils/getToday';
import useSelectInput from '../../hooks/useSelectInput';
import ImageUploader from '../ImageUploader';
import useImageInput from '../../hooks/useImageInput';
import type { NewMemory } from '../../types/memory';
import useNewMemory from '../../hooks/queries/useNewMemory';
import useCategories from '../../hooks/queries/useCategories';

const NewMemoryForm = () => {
  const { data: categories } = useCategories();
  const { mutate } = useNewMemory();

  const { value: images, files, setValue: setImages } = useImageInput();
  const { value: memoryTitle, setValue: setMemoryTitle } = useTextInput('', 50);
  const { value: content, setValue: setContent } = useTextInput('', 1000);
  const { value: dateTime, setValue: setDateTime } = usePastDateTimeInput();
  const { value: category, setValue: setCategory } = useSelectInput<Category['name'] | ''>(
    [...categories, ''],
    ''
  );
  const [rating, setRating] = useState(0);

  const submit = () => {
    if (images.length === 0) {
      alert('사진을 추가해 주세요!');
      return;
    }
    if (memoryTitle.length === 0) {
      alert('제목을 입력해 주세요!');
      return;
    }
    if (category === '') {
      alert('카테고리를 입력해 주세요!');
      return;
    }
    if (rating === 0) {
      alert('별점을 입력해 주세요!');
      return;
    }

    const formData: NewMemory = {
      title,
      category,
      images: Array.from(files),
      tags: [],
      star: rating,
      visitedAt: dateTime,
    };

    mutate(formData);
  };

  return (
    <form className={wrapper}>
      <h2 className={title}>추억을 새겨보자</h2>

      <ImageUploader images={images} setImages={setImages} />

      <input
        type="text"
        placeholder="어떤 추억인가요?"
        value={memoryTitle}
        onChange={({ target: { value } }) => {
          setMemoryTitle(value);
        }}
        className={`${rounded} ${titleInput} ${baseInput}`}
      />

      <textarea
        placeholder="조금 더 자세히 알려주세요."
        value={content}
        onChange={({ target: { value } }) => {
          setContent(value);
        }}
        className={`${rounded} ${contentInput}`}
      />

      <input
        type="date"
        value={dateTime}
        onChange={({ target: { value } }) => {
          setDateTime(value);
        }}
        max={getNowInDateTimeFormat()}
        className={`${rounded} ${baseInput}`}
      />

      <select
        className={`${rounded} ${baseInput}`}
        value={category}
        onChange={({ target: { value } }) => {
          setCategory(value);
        }}
      >
        <option value="">카테고리를 골라 주세요.</option>
        {categories.map((categoryItem) => (
          <option key={categoryItem} value={categoryItem}>
            {categoryItem}
          </option>
        ))}
      </select>

      <div className={`${inlineRowFlex}`}>
        <p className={`${inlineRowFlex} ${normalFont}`}>추억의 점수는?</p>
        <StarRating rating={rating} setRating={setRating} />
      </div>

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          submit();
        }}
        className={`${baseInput} ${primaryButton} ${normalFont}`}
      >
        추억 새기기
      </button>
    </form>
  );
};

export default NewMemoryForm;

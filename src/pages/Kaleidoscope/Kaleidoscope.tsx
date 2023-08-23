import { Suspense, useState } from 'react';
import Select from '../../component/Select';
import {
  scrollableContainer,
  selectedTagStyle,
  tagStyle,
} from '../../component/Select.css';
import {
  boldText,
  pageContent,
  pageTitle,
  pageWrapper,
} from './Kaleidoscope.css';
import MemoryList from './MemoriesList';
import { FilterOption, options } from '../../constant/filterBar';

const Kaleidoscope = () => {
  const [selectedOption, setSelectedOption] = useState<FilterOption>('전부');

  const handleSelectChange = (value: FilterOption) => {
    setSelectedOption(value);
  };

  return (
    <>
      <section className={pageWrapper}>
        <h1 className={pageTitle}>
          <span className={boldText}>주마등</span>
        </h1>
        <Select
          defaultOption={options[0].value}
          onChange={handleSelectChange}
          className={scrollableContainer}
        >
          {options.map((option) => (
            <Select.Option
              key={option.value}
              className={{ selectedTagStyle, tagStyle }}
              value={option.value}
            >
              {option.label}
            </Select.Option>
          ))}
        </Select>

        <main className={pageContent}>
          <Suspense fallback={<TmpLoader />}>
            <MemoryList selectedOption={selectedOption} />
          </Suspense>
        </main>
      </section>
    </>
  );
};

export default Kaleidoscope;

const TmpLoader = () => {
  return (
    <div
      style={{
        backgroundColor: 'red',
        height: '100vh',
        fontSize: '60px',
      }}
    >
      로딩중...
    </div>
  );
};

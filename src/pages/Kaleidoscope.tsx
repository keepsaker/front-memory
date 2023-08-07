import Select from '../component/Select';
import {
  scrollableContainer,
  selectedTagStyle,
  tagStyle,
} from '../component/Select.css';
import { boldText, pageTitle, pageWrapper } from './Kaleidoscope.css';

const options = [
  { value: '전부', label: '전부' },
  { value: '추억', label: '추억' },
  { value: '후회', label: '후회' },
  { value: '혼자', label: '혼자' },
  { value: '같이', label: '같이' },
];

const Kaleidoscope = () => {
  return (
    <>
      <section className={pageWrapper}>
        <h1 className={pageTitle}>
          <span className={boldText}>기억</span>
        </h1>

        <Select defaultOption="전부" className={scrollableContainer}>
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
      </section>
    </>
  );
};

export default Kaleidoscope;

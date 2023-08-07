import Card from '../component/Card';
import Select from '../component/Select';
import {
  scrollableContainer,
  selectedTagStyle,
  tagStyle,
} from '../component/Select.css';
import {
  boldText,
  cardHeader,
  pageContent,
  pageTitle,
  pageWrapper,
} from './Kaleidoscope.css';

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

        <main className={pageContent}>
          {[1, 2, 3, 1, 2, 3].map((m) => (
            <Card onClick={() => {}}>
              <div className={cardHeader}>
                <Card.Date>2022.11.23</Card.Date>
                <Card.Category>여행</Card.Category>
              </div>
              <Card.Heading>강원도에서의 겨울</Card.Heading>
              <Card.Description>
                국경의 긴 터널을 빠져나오자, 설국이었다. 밤의 아랫쪽이 하얘졌다.
                신호소에 기차가 멈춰 섰다. 건너편 좌석의 여자가 일어서
                다가오더니, 시마무라 앞의 유리창을 열어젖혔다. 눈의 냉기가
                흘러들었다. 여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
                "역장니임, 역장니임ー" 등불을 들고 천천히 눈을 밟고 온 남자는
                목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
              </Card.Description>
              <Card.Image
                type="background"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCodA7TdKo6T2i7YIQbZzCo1urcUhjmu5_ZA&usqp=CAU"
                alt="random"
              />
            </Card>
          ))}
        </main>
      </section>
    </>
  );
};

export default Kaleidoscope;

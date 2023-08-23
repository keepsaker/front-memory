import { cardHeader } from './Kaleidoscope.css';
import Card from '../../component/Card';
import { useMemories } from './hooks/useInfiniteMemories';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Fragment } from 'react';
import { usePageNavigate } from '../../hooks/usePageNavigate';
import { FilterOption } from '../../constant/filterBar';

type MemoryListProps = {
  selectedOption: FilterOption;
};

const MemoryList = ({ selectedOption }: MemoryListProps) => {
  console.log(selectedOption);
  const { data, fetchNextPage, hasNextPage } = useMemories(selectedOption);
  const { goToMemoryPage } = usePageNavigate();
  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  return (
    <>
      {data?.pages.map((page, pageIndex) => (
        <Fragment key={pageIndex}>
          {page.data.map((memory) => (
            <Card
              key={memory.id}
              onClick={() => {
                goToMemoryPage(memory.id);
              }}
            >
              <div className={cardHeader}>
                <Card.Date>{memory.visitedAt}</Card.Date>
                <Card.Category>{memory.category}</Card.Category>
              </div>
              <Card.Heading>{memory.title}</Card.Heading>
              <Card.Description>{memory.content}</Card.Description>
              <Card.Image
                type="background"
                src={memory.images[0]}
                alt="random"
              />
            </Card>
          ))}
        </Fragment>
      ))}
      <div ref={setTarget} />
    </>
  );
};

export default MemoryList;

import { Fragment, useState } from 'react';
import { date, heading } from '../../component/Card.css';
import Map from '../../component/Map';
import {
  MemoryPageWrapper,
  boldText,
  pageTitle,
} from '../Kaleidoscope/Kaleidoscope.css';
import {
  categoryTag,
  contentWrapper,
  description,
  image,
  imageWrapper,
  wrapper,
} from './Memory.css';
import Modal from '../../component/Modal';
import { useMemory } from './hooks/useMemory';
import { useParams } from 'react-router-dom';
import { modalContent } from '../../component/Modal.css';
import Tag from '../../component/Tag';
import { ReactComponent as Star } from '../../assets/star.svg';
import { ReactComponent as Calender } from '../../assets/calender.svg';
import { ReactComponent as Place } from '../../assets/place.svg';
const Memory = () => {
  const { id } = useParams();
  const { data } = useMemory(id);

  const [isOpened, setIsOpened] = useState(false);

  const openModal = () => {
    setIsOpened(true);
  };

  const closeModal = () => {
    setIsOpened(false);
  };

  const memoryLocation = {
    lat: data.location.latitude,
    lng: data.location.longitude,
  };

  return (
    <>
      <section className={MemoryPageWrapper}>
        <h1 className={pageTitle}>
          <span className={boldText}>기억</span>
        </h1>
      </section>
      <div
        style={{
          display: 'flex',
          padding: '0px 16px',
          justifyContent: 'space-between',
          alignContent: 'baseline',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            padding: '6px 8px',
            alignItems: 'center',
            gap: '4px',
            background: ' #F7F7F7',
            borderRadius: '4px',
            width: 'fit-content',
          }}
        >
          <Calender />
          <p className={date}>{data.visitedAt}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Place />
          <p className={date} onClick={openModal}>
            장소
          </p>
        </div>
      </div>

      <main className={wrapper}>
        <div className={imageWrapper}>
          <img
            className={image}
            src="https://picsum.photos/200/300"
            alt="random"
          />
        </div>
        <div className={contentWrapper}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '16px',
            }}
          >
            <p className={heading}>{data.title}</p>
            <p className={categoryTag}>{data.category}</p>
          </div>

          <p className={description}>{data.content}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              {data.tags.map((tag) => (
                <Fragment key={tag.id}>
                  <Tag color={tag.color}>{tag.name}</Tag>
                </Fragment>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignContent: 'center' }}>
                <Star
                  style={{ width: '12px', height: '18px', marginRight: '5px' }}
                />
                <p className={date}>{data.star} ratings</p>
              </div>
            </div>
          </div>
        </div>

        <Modal isOpened={isOpened} closeModal={closeModal}>
          <Modal.Dimmed />
          <div className={modalContent}>
            <Modal.Header>장소</Modal.Header>
            <Modal.Body>
              <Map center={memoryLocation} />
            </Modal.Body>
            <Modal.Footer>모달 푸터 영역입니다.</Modal.Footer>
          </div>
        </Modal>
      </main>
    </>
  );
};

export default Memory;

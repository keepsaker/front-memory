import { useId } from 'react';
import Star from '../Star';
import { wrapper, hiddenRadio, hidden, clickable } from './StarRating.css.js';

interface StarRatingProps {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}

const StarRating = (props: StarRatingProps) => {
  const { rating, setRating } = props;

  const star1Id = useId();
  const star2Id = useId();
  const star3Id = useId();
  const star4Id = useId();
  const star5Id = useId();

  return (
    <fieldset className={wrapper}>
      <legend className={hidden}>별점 5점 중 {rating}점</legend>
      <div>
        <label htmlFor={star1Id} className={clickable}>
          <Star
            aria-label="1점"
            filled={rating >= 1}
            width="32px"
            height="32px"
          />
        </label>
        <input
          type="radio"
          id={star1Id}
          value="1점"
          checked={rating === 1}
          onChange={() => {
            setRating(1);
          }}
          className={hiddenRadio}
        />

        <label htmlFor={star2Id} className={clickable}>
          <Star
            aria-label="2점"
            filled={rating >= 2}
            width="32px"
            height="32px"
          />
        </label>
        <input
          type="radio"
          id={star2Id}
          value="2점"
          checked={rating === 2}
          onChange={() => {
            setRating(2);
          }}
          className={hiddenRadio}
        />

        <label htmlFor={star3Id} className={clickable}>
          <Star
            aria-label="3점"
            filled={rating >= 3}
            width="32px"
            height="32px"
          />
        </label>
        <input
          type="radio"
          id={star3Id}
          value="3점"
          checked={rating === 3}
          onChange={() => {
            setRating(3);
          }}
          className={hiddenRadio}
        />

        <label htmlFor={star4Id} className={clickable}>
          <Star
            aria-label="4점"
            filled={rating >= 4}
            width="32px"
            height="32px"
          />
        </label>
        <input
          type="radio"
          id={star4Id}
          value="4점"
          checked={rating === 4}
          onChange={() => {
            setRating(4);
          }}
          className={hiddenRadio}
        />

        <label htmlFor={star5Id} className={clickable}>
          <Star
            aria-label="5점"
            filled={rating >= 5}
            width="32px"
            height="32px"
          />
        </label>
        <input
          type="radio"
          id={star5Id}
          value="5점"
          checked={rating === 5}
          onChange={() => {
            setRating(5);
          }}
          className={hiddenRadio}
        />
      </div>
    </fieldset>
  );
};

export default StarRating;

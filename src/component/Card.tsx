import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';
import {
  card,
  date,
  heading,
  backgroundImage,
  description,
  category,
} from './Card.css';

interface CardContextProps {
  onClick?: () => void;
}

const CardContext = createContext<CardContextProps>({});

function useCardContext(): CardContextProps {
  const context = useContext(CardContext);

  if (!context.onClick) {
    throw new Error(
      'Child components of Card cannot be rendered outside the Card component!'
    );
  }

  return context;
}

interface ChildrenProps {
  children: ReactNode;
}

interface CardProps extends ChildrenProps {
  onClick?: () => void;
}

const Card = ({ children, onClick }: CardProps) => {
  return (
    <CardContext.Provider value={{ onClick }}>
      <div className={card} onClick={onClick}>
        {children}
      </div>
    </CardContext.Provider>
  );
};

const Date = ({ children }: ChildrenProps) => {
  return <h3 className={date}>{children}</h3>;
};

Card.Date = Date;

const Heading = ({ children }: ChildrenProps) => {
  return <h2 className={heading}>{children}</h2>;
};

Card.Heading = Heading;

const Description = ({ children }: ChildrenProps) => {
  return <div className={description}>{children}</div>;
};

Card.Description = Description;

const Category = ({ children }: ChildrenProps) => {
  return <div className={category}>{children}</div>;
};

Card.Category = Category;

interface ImageProps {
  src: string;
  alt: string;
  type?: string;
}

const Image = ({ src, alt, type }: ImageProps) => {
  const context = useCardContext();
  const { onClick } = context;

  return (
    <img
      onClick={onClick}
      className={`${backgroundImage} ${type ? type : ''}`}
      src={src}
      alt={alt}
    />
  );
};

Card.Image = Image;

export default Card;

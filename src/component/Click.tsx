import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';
import {
  click,
  date,
  heading,
  button,
  backgroundImage,
  description,
} from './Click.css';

interface ClickContextProps {
  onClick?: () => void;
}

const ClickContext = createContext<ClickContextProps>({});

function useClickContext(): ClickContextProps {
  const context = useContext(ClickContext);

  if (!context.onClick) {
    throw new Error(
      'Child components of Click cannot be rendered outside the Click component!'
    );
  }

  return context;
}

interface ChildrenProps {
  children: ReactNode;
}

interface ClickProps extends ChildrenProps {
  onClick?: () => void;
}

const Click = ({ children, onClick }: ClickProps) => {
  return (
    <ClickContext.Provider value={{ onClick }}>
      <div className={click} onClick={onClick}>
        {children}
      </div>
    </ClickContext.Provider>
  );
};

interface DateProps extends ChildrenProps {}

const Date = ({ children }: DateProps) => {
  return <h3 className={date}>{children}</h3>;
};

Click.Date = Date;

interface HeadingProps extends ChildrenProps {}

const Heading = ({ children }: HeadingProps) => {
  return <h2 className={heading}>{children}</h2>;
};

Click.Heading = Heading;

interface DescriptionProps extends ChildrenProps {}

const Description = ({ children }: DescriptionProps) => {
  return <div className={description}>{children}</div>;
};

Click.Description = Description;

interface ButtonProps extends ChildrenProps {}

const Button = ({ children }: ButtonProps) => {
  const { onClick } = useClickContext();

  return (
    <button className={button} onClick={onClick}>
      {children}
    </button>
  );
};

Click.Button = Button;

interface ImageProps {
  src: string;
  alt: string;
  type?: string;
}

const Image = ({ src, alt, type }: ImageProps) => {
  useClickContext();

  return (
    <img
      className={`${backgroundImage} ${type ? type : ''}`}
      src={src}
      alt={alt}
    />
  );
};

Click.Image = Image;

export default Click;

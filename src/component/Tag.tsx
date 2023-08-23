import { tagStyle } from './Tag.css';

const Tag = ({ color, children }) => {
  return (
    <div className={tagStyle} style={{ color: color }}>
      #{children}
    </div>
  );
};

export default Tag;

import { style } from '@vanilla-extract/css';

export const scrollableContainer = style({
  display: 'flex',
  overflowX: 'auto',
  height: '80px',
  padding: '0px 12px',
  zIndex: 1,
  background: 'white',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const tagStyle = style({
  minWidth: '60px',
  width: '60px',
  padding: '5px 10px',
  margin: '0 5px',
  backgroundColor: 'white',
  color: 'black',
  fontSize: '14px',
  fontWeight: 'bold',
  textAlign: 'center',
  borderRadius: '5px',
  border: '1px solid #ccc',
  cursor: 'pointer',
});

export const selectedTagStyle = style({
  backgroundColor: 'black',
  color: 'white',
  minWidth: '60px',
  width: '60px',
  padding: '5px 10px',
  margin: '0 5px',
  fontSize: '14px',
  fontWeight: 'bold',
  textAlign: 'center',
  borderRadius: '5px',
  border: '1px solid #ccc',
  cursor: 'pointer',
});

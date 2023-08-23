import { style } from '@vanilla-extract/css';

export const scrollableContainer = style({
  display: 'flex',
  justifyContent: 'stretch',
  width: '100%',
  overflowX: 'auto',
  height: '32px',
  padding: '0px 12px',
  zIndex: 1,
  background: 'white',
  position: 'sticky',
  top: '0',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const tagStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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

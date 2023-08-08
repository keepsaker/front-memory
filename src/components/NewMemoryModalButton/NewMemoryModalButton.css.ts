import { style } from '@vanilla-extract/css';

export const circle = style({
  cursor: 'pointer',

  position: 'absolute',
  top: '-24px',
  left: 'calc(50% - 25px)',

  boxSizing: 'border-box',
  width: '60px',
  height: '60px',

  border: '7px solid #ffffff',
  borderRadius: '50%',

  color: '#ffffff',
  fontSize: '30px',
  backgroundColor: '#735BF2',
});

export const wrapper = style({
  minHeight: '10%',
  maxHeight: '80%',

  padding: '20px 10px',
});

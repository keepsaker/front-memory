import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '20px',

  minWidth: '350px',
  maxWidth: '800px',

  textAlign: 'center',
});

export const title = style({
  margin: 0,
  fontWeight: 'normal',
  fontSize: '20px',
  color: '#333333',
});

export const rounded = style({
  border: '1px solid #DDDDDD',
  borderRadius: '5px',

  ':focus': {
    outline: 'none',
    border: '1px solid #735BF2',
  },
});

export const baseInput = style({
  boxSizing: 'border-box',
  MozBoxSizing: 'border-box',
  WebkitBoxSizing: 'border-box',

  width: '100%',
  height: '40px',
  padding: '5px',
});

export const titleInput = style({
  fontSize: '14px',
});

export const contentInput = style({
  boxSizing: 'border-box',
  MozBoxSizing: 'border-box',
  WebkitBoxSizing: 'border-box',

  width: '100%',
  height: '100px',
  padding: '10px 5px',

  resize: 'none',
});

export const inlineRowFlex = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: '20px',
  margin: 0,
});

export const normalFont = style({
  fontSize: '14px',
});

export const primaryButton = style({
  border: 'none',
  borderRadius: '5px',
  color: '#ffffff',
  backgroundColor: '#735BF2',

  ':focus': {
    outline: 'none',
    border: '2px solid #3A21BF',
  },
});

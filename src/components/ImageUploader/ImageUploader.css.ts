import { style } from '@vanilla-extract/css';

export const hidden = style({
  border: 'none',
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: '1px',
});

export const uploadButton = style({
  cursor: 'pointer',

  border: '1px solid #DDDDDD',
  backgroundColor: '#ffffff',
  fontSize: '14px',

  transition: 'all 0.15s linear',

  ':focus': {
    outline: 'none',
    border: '1px solid #735BF2',
  },

  ':hover': {
    backgroundColor: '#CAC2F2',
  },
});

export const thumbnail = style({
  objectFit: 'cover',

  width: '100%',
  height: '200px',
  padding: 0,
  margin: 0,

  borderRadius: '5px',
});

import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'inline-flex',
  border: 'none',
  padding: 0,
  margin: 0,
});

export const hiddenRadio = style({
  position: 'absolute',
  visibility: 'hidden',
  height: 0,
  width: 0,
});

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

export const clickable = style({
  cursor: 'pointer',
  width: '32px',
  height: '32px',
});

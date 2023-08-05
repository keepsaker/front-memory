import { style } from '@vanilla-extract/css';

export const bottomNav = style({
  display: 'block',

  position: 'fixed',
  bottom: '0',
  left: '0',

  minWidth: '350px',
  width: '100%',
  height: '50px',

  margin: 'auto auto 0 auto',

  borderRadius: '5px',
  border: '1px solid pink',
  backgroundColor: '#ffffff',
});

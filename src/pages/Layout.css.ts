import { style } from '@vanilla-extract/css';

export const navBar = style({
  position: 'sticky',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '56px',
  backgroundColor: '#9BACB4',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  zIndex: 100,
});

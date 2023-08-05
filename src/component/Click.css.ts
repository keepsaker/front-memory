import { style } from '@vanilla-extract/css';

export const click = style({
  position: 'relative',
  width: '100%',
  height: '180px',
  borderRadius: '4px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  background: 'transparent',
  zIndex: '100',
});

export const date = style({
  fontSize: '12px',
  color: 'gray',
  margin: 0,
});

export const heading = style({
  fontSize: '16px',
  fontWeight: 'bold',
  color: 'black',
  margin: 0,
});

export const description = style({
  fontSize: '12px',
  color: 'gray',
  margin: 0,
  overflow: 'hidden',
  textAlign: 'left'
});

export const button = style({
  backgroundColor: 'transparent',
  border: '1px solid #0070f3',
  borderRadius: '4px',
  color: '#0070f3',
  cursor: 'pointer',
  padding: '6px 12px',
  textAlign: 'center',
});

export const image = style({
  width: '100%',
  borderRadius: '4px',
});

export const cardImage = style({
  width: '100%',
  borderRadius: '4px',
});

export const avatarImage = style({
  borderRadius: '50%',
});

export const backgroundImage = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  opacity: '0.25'
});



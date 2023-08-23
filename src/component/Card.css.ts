import { style, keyframes } from '@vanilla-extract/css';

export const card = style({
  position: 'relative',
  height: '120px',
  borderRadius: '4px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  padding: '16px',
  marginBottom: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  background: 'transparent',
  //zIndex: '100',
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
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  textAlign: 'left',
});

export const category = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black',
  border: '1px solid #333a',
  borderRadius: '4px',
  color: 'white',
  width: '36px',
  height: '24px',
  fontSize: '12px',
  padding: '0px',
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
  opacity: '0.25',
});

const skeletonPulse = keyframes({
  '0%': {
    backgroundColor: '#E0E0E0',
  },
  '50%': {
    backgroundColor: '#F0F0F0',
  },
  '100%': {
    backgroundColor: '#E0E0E0',
  },
});

const skeleton = style({
  backgroundColor: '#E0E0E0',
  borderRadius: '4px',
  animation: `${skeletonPulse} 1.5s ease-in-out infinite`,
});

export const skeletonDate = style([date, skeleton]);
export const skeletonCategory = style([category, skeleton]);
export const skeletonHeading = style([heading, skeleton, { height: '16px' }]);
export const skeletonDescription = style([
  description,
  skeleton,
  { height: '12px' },
]);
export const skeletonImage = style([image, skeleton]);

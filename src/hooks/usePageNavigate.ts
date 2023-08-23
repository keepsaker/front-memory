import { useNavigate } from 'react-router-dom';

export const usePageNavigate = () => {
  const navigate = useNavigate();

  const goToKaleidoscopePage = () => {
    navigate(`/kaleidoscope`);
  };

  const goToMemoryPage = (memoryId) => {
    navigate(`/memory/${memoryId}`);
  };

  const goToMemoryMapPage = () => {
    navigate(`/map`);
  };

  return {
    goToKaleidoscopePage,
    goToMemoryPage,
    goToMemoryMapPage,
  };
};

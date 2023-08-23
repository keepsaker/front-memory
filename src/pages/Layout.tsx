import { usePageNavigate } from '../hooks/usePageNavigate';
import { navBar } from './Layout.css';

const Layout = ({ children }) => {
  const { goToKaleidoscopePage, goToMemoryMapPage } = usePageNavigate();
  return (
    <>
      <div
        style={{ height: '100vh', flexDirection: 'column', display: 'flex' }}
      >
        {children}
        <nav className={navBar}>
          <div onClick={goToKaleidoscopePage}>주마등</div>
          <div onClick={goToMemoryMapPage}>지도</div>
          <div>+</div>
          <div>달력</div>
          <div>내정보</div>
        </nav>
      </div>
    </>
  );
};

export default Layout;

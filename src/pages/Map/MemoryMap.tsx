import Map from '../../component/Map';
import {
  boldText,
  pageTitle,
  pageWrapper,
} from '../Kaleidoscope/Kaleidoscope.css';

const MemoryMap = () => {
  const center = {
    lat: 37.5665,
    lng: 126.978,
  };

  return (
    <>
      <section className={pageWrapper}>
        <h1 className={pageTitle}>
          <span className={boldText}>지도</span>
        </h1>
        <main style={{ height: '100%' }}>
          <Map center={center} />
        </main>
      </section>
    </>
  );
};

export default MemoryMap;

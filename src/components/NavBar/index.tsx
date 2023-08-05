import NewMemoryModalButton from '../NewMemoryModalButton';
import { bottomNav } from './NavBar.css';

const NavBar = () => {
  return (
    <nav className={bottomNav}>
      <NewMemoryModalButton />
    </nav>
  );
};

export default NavBar;

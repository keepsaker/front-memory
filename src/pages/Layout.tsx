import { navBar } from "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className={navBar}>
        <div>1,2,3,4</div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
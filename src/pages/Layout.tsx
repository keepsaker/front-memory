import { navBar } from "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <nav className={navBar}>
        <div>1</div>
        <div>2</div>
        <div>+</div>
        <div>3</div>
        <div>4</div>
      </nav>
      {children}
    </>
  );
};

export default Layout;
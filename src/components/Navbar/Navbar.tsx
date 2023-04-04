import { navItems } from "../../data";
import NavbarItem from "./NavbarItem";
import styles from "./Nav.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navcontainer}>
        <ul className={styles.navlist}>
          {navItems.map((item) => (
            <NavbarItem title={item.title} imagePath={item.img_path} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

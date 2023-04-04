import { navItemType } from "./NavItem.type";
import styles from "./Nav.module.css";

const NavbarItem = ({ title, url, imagePath }: navItemType) => {
  // const SVGIconRef = useRef();
  // useEffect(() => {
  //   const init = async () => {
  //     SVGIconRef.current = await import(`./../../images/icons/${title}.svg`);
  //   };
  //   init();
  // }, [imagePath, title]);

  // const SVGIcon = () => SVGIconRef.current!;
  return (
    <li>
      <a href={url} className={styles.navitem}>
        {imagePath ? <img src={imagePath} alt={title} /> : title}
      </a>
    </li>
  );
};

export default NavbarItem;

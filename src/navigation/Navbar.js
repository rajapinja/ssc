import { menuItems } from './menuItems';
import MenuItems from '../components/MenuItems';

const Navbar = () => {
    const depthLevel = 0;
  return (
    <nav>
      <ul className="menus">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
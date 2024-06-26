import MenuItems from "../components/MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel  }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>       
           {submenus.map((submenu, index) => (
            <MenuItems items={submenu} key={index} 
            depthLevel={depthLevel} 
            />
        ))}       
      </ul>
    );
  };
  
  export default Dropdown;
import {
  FaFire,
  FaPoo,
  FaBeer,
  FaAngellist,
  FaBluetooth,
} from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col
                    bg-gray-100 text-gray-900
                    dark:bg-gray-900 dark:text-white shadow-lg"
    >
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<FaPoo size="28" />} />
      <SideBarIcon icon={<FaBeer size="28" />} />
      <SideBarIcon icon={<FaAngellist size="28" />} text="hah" />
      <SideBarIcon icon={<FaBluetooth size="28" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip!" }) => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <div onClick={handleMode} className="sidebar-icon group">
      {icon}
      <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default SideBar;

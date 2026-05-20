import { Row } from "antd";
import { FaUser } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { HiBeaker } from "react-icons/hi";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { TbInfoSquareRounded } from "react-icons/tb";
import Dock from "../../jsrepo/Components/Dock/Dock";
import { ABOUT, EXPERIENCE, HOME, PROJECTS, STACKS } from "../../utils";

const NavBar = ({ setActiveTab, activeTab }) => {
  const setActiveTabs = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("tab", tab);
  };

  const items = [
    {
      icon: <FaUser size={18} color="#fff" />,
      label: "Find Me Here",
      tab: HOME,
      onClick: () => setActiveTabs(HOME),
    },
    {
      icon: <TbInfoSquareRounded size={25} color="#fff" />,
      label: "About",
      tab: ABOUT,
      onClick: () => setActiveTabs(ABOUT),
    },
    {
      icon: <HiBeaker size={20} color="#fff" />,
      label: "Experience",
      tab: EXPERIENCE,
      onClick: () => setActiveTabs(EXPERIENCE),
    },
    {
      icon: <GoProjectSymlink size={20} color="#fff" />,
      label: "Projects",
      tab: PROJECTS,
      onClick: () => setActiveTabs(PROJECTS),
    },
    {
      icon: <HiMiniSquare3Stack3D size={18} color="#fff" />,
      label: "Stacks",
      tab: STACKS,
      onClick: () => setActiveTabs(STACKS),
    },
  ];

  return (
    <>
      <Row>
        <Dock
          items={items}
          panelHeight={78}
          baseItemSize={60}
          magnification={80}
          activeTab={activeTab}
        />
      </Row>
    </>
  );
};

export default NavBar;

import React from "react";
import { SideBarNavigationButtons } from "./SideBarContents";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [pageElement, setPageElement] = React.useState<string>("home")

  const ButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    const active = document.querySelectorAll(".active");
    active.forEach((item) => {
      item.classList.remove("active");
    });
    const button = event.currentTarget;
    button?.classList.add("active");
    let page = event.currentTarget.classList[0];
    setPageElement(page)
    navigate(`/${page}`);
    
  };


  React.useEffect(() => {
    const path = location.pathname.substring(1);
    const active = document.querySelectorAll(".active");
    
    if (path.includes("search")) {
      setPageElement((prevState) => prevState)
    }
    else if (path.length > 1) {
      setPageElement(path)
    }

    active.forEach((item) => {
      item.classList.remove("active");
    });
    const button = document.querySelector(`.${pageElement}`);
    button?.classList.add("active");
  }, [location])
  return <SideBarNavigationButtons click={ButtonClick} />;
};

export default SideBar;

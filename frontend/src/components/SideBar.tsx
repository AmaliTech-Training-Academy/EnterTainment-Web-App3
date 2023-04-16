import { SideBarNavigationButtons } from "./SideBarContents";


const SideBar = () => {

  const ButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    const active = document.querySelectorAll(".active");
    active.forEach((item) => {
      item.classList.remove("active");
    });
    const button = event.currentTarget;
    button?.classList.add("active");
    let page = event.currentTarget.classList[0];
 
  }
    return (
      <SideBarNavigationButtons click={ButtonClick}/>
    );
  };
  
  export default SideBar;
  
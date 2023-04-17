const bookmarkClick = (event: React.MouseEvent<HTMLElement>) => {
    const tick = event.currentTarget.getAttribute("class");
    return tick?.includes("ticked")
      ? event.currentTarget.classList.remove("ticked")
      : event.currentTarget.classList.add("ticked");
  };


export default bookmarkClick;

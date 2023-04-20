import { dataType } from "./CustomType";

const bookmarkClick = (event: React.MouseEvent<HTMLElement>, data: any) => {
  const movies = JSON.parse(localStorage.getItem("data") || "[]") as dataType[];
  const updatedData = movies.map((item) => {
    return item.title === data.title ? { ...item, isBookmarked: !item.isBookmarked } : item;
  });
  localStorage.setItem("data", JSON.stringify(updatedData));
  window.location.reload();
  const tick = event.currentTarget.getAttribute("class");
  return tick?.includes("ticked")
    ? event.currentTarget.classList.remove("ticked")
    : event.currentTarget.classList.add("ticked");
};

export default bookmarkClick;

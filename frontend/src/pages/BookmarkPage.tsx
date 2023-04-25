import { dataType } from "../components/CustomType";
import RegularCard from "../components/RegularCard";
import jsonData from "../data.json";

const BookmarkPage = () => {
  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(jsonData));
  }
  const data = JSON.parse(localStorage.getItem("data") || "[]") as dataType[];

  const bookmarked = data.filter((item) => {
    return item.isBookmarked === true;
  });

  const movies = bookmarked.filter((item) => {
    return item.category === "Movie";
  });

  const tvShows = bookmarked.filter((item) => {
    return item.category === "TV Series";
  });

  return (
    <div className="page-container">
      <div className="regular-view">
        <p className="section-title">Bookmarked Movies</p>
        <div className="regular-container">
          <RegularCard data={movies} />
        </div>
      </div>
      <div className="regular-view">
        <p className="section-title">Bookmarked TV Series</p>
        <div className="bottom-space">
          <div className="regular-container">
            <RegularCard data={tvShows} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkPage;

import RegularCard from "../components/RegularCard";
import jsonData from "../data.json";
import { movie } from "../dataTypes";

const BookmarkPage = () => {
  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(jsonData));
  }
  const data = JSON.parse(localStorage.getItem("data") || "[]") as movie[];

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
        <div className="regular-container">
          <RegularCard data={tvShows} />
        </div>
      </div>
    </div>
  );
};

export default BookmarkPage;

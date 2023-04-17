import RegularCard from "../components/RegularCard";
import data from "../data.json";
const BookmarkPage = () => {
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

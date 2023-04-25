import data from "../data.json";
import Carousel from "../components/Carousel";
import RegularCard from "../components/RegularCard";
import { dataType } from "../components/CustomType";

const TrendingPage = () => {
  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(data));
  }
  const movies = JSON.parse(localStorage.getItem("data") || "[]") as dataType[];

  const trending = movies.filter((media) => {
    return media.isTrending === true;
  });

  const recommended = movies.slice(5);

  return (
    <div className="page-container">
      <div className="trending-view">
        <p className="section-title">Trending</p>
        <Carousel data={trending} />
      </div>
      <div className="recommended-view">
        <p className="section-title">Recommended for you</p>
        <div className="bottom-space">
          <div className="regular-container">
            <RegularCard data={recommended} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingPage;

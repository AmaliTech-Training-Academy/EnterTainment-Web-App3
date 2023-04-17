import data from "../data.json";
import Carousel from "../components/Carousel";

const TrendingPage = () => {
  const trending = data.filter((media) => {
    return media.isTrending === true;
  });

  const recommended = data.slice(5);

  return (
    <div className="page-container">
      <div className="trending-view">
        <p className="section-title">Trending</p>
        <Carousel data={trending} />
      </div>
      <div className="recommended-view">
        <p className="section-title">Recommended for you</p>
        <div className="regular-container"></div>
      </div>
    </div>
  );
};

export default TrendingPage;

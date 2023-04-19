import data from "../data.json";
import Carousel from "../components/Carousel";
import RegularCard from "../components/RegularCard";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";
import { ViewProvider } from "../components/ViewContext";
import useSearch from "../hooks/useSearch";
import { movie } from "../dataTypes";

const TrendingPage = () => { 

  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(data))
    
  }
  const movies = JSON.parse(localStorage.getItem("data") || "[]") as movie[] 

  const trending = movies.filter((media) => {
    return media.isTrending === true;
  });

  const recommended = movies.slice(5);

  const { search, word } = useSearch();
  return (
    <>
      <SideBar />
      <ViewProvider search={search} word={word}>
        <SearchBar />
      </ViewProvider>
      <div className="page-container">
        <div className="trending-view">
          <p className="section-title">Trending</p>
          <Carousel data={trending} />
        </div>
        <div className="recommended-view">
          <p className="section-title">Recommended for you</p>
          <div className="regular-container">
            <RegularCard data={recommended} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingPage;

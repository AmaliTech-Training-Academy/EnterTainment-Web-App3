import RegularCard from "../components/RegularCard";
import data from "../data.json";
import { useLocation } from "react-router-dom";


const SearchPage = (props: any) => {
    let word: string = props.data;
  
    const page = useLocation();
    const genre: string = page.state.name;

    const dataToSearch = data.filter((item) => {
      return genre === "movies"
        ? item.category === "Movie"
        : genre === "tv-series"
        ? item.category === "TV Series"
        : genre === "bookmark"
        ? item.isBookmarked === true
        : item;
    });

    const search = dataToSearch.filter((item) => {
      return word === "" ? item : (item.title)?.toLowerCase().includes(word.toLowerCase());
    });
  
    return (
      <div className="page-container">
        <div className="search-view ">
          <p className="section-title">
            Found {search.length} results for <span>{word}</span>
          </p>
          <div className="regular-container">
              <RegularCard data={search} />
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchPage;
  
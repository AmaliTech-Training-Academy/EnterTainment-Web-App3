import RegularCard from "../components/RegularCard";
import data from "../data.json"

const SearchPage = (props: any) => {
    let word: string = props.data;
  
    const search = data.filter((item) => {
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
  
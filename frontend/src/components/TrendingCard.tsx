import { IsTicked } from "./Bookmark";
import { NotTicked } from "./Bookmark";


const TrendingCard = (data: any) => {
  return (
    <div className="trending-card" key={data.key}>
      <img src={data.image} alt={data.title} className="media-image"></img>
      <>
        {data.isBookmarked ? (
          <IsTicked data={"trending-bookmark"} originalData={data}/>
        ) : (
          <NotTicked data={"trending-bookmark"} originalData={data}/>
        )}
      </>
      <div className="play">
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" />
        </svg>

        <span>Play</span>
      </div>
      <div className="details-container">
        <div className="details">
          <div className="details-top">
            <span id="year">{data.year}</span>
            <li> </li>
            <img id="movie-icon" src={'/assets/icon-category-movie.svg'} alt="movie icon" />
            <span id="category">{data.category}</span>

            <li></li>
            <span id="rating">{data.rating}</span>
          </div>
          <h2 id="title">{data.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;

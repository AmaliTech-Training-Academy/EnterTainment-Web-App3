import { IsTicked, NotTicked } from "./Bookmark";
import { itemType } from "./CustomType";
const RegularCard = (props: any) => {
  const recommendations: itemType[] = props.data;

  return (
    <>
      {recommendations.map((item: itemType, index: number) => {
        return (
          <div className="regular-card" key={index}>
            <>
              {item.isBookmarked ? (
                <IsTicked data={"regular-bookmark"} originalData={item} />
              ) : (
                <NotTicked data={"regular-bookmark"} originalData={item}/>
              )}
            </>
            <div className="play-container">
              <div className="play">
                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" />
                </svg>

                <span>Play</span>
              </div>
              <img
                src={item.thumbnail.regular.small}
                alt={item.title}
                className="movie-cover"
              ></img>
            </div>

            <div className="movie-details">
              <span id="year">{item.year}</span>
              <li> </li>
              <img
                id="movie-icon"
                src={"/assets/icon-category-movie.svg"}
                alt="movie icon"
              />
              <span id="category">{item.category}</span>
              <li></li>
              <span id="rating">{item.rating}</span>
            </div>
            <h2 id="title">{item.title}</h2>
          </div>
        );
      })}
    </>
  );
};

export default RegularCard;

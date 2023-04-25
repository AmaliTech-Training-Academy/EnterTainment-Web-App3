import TrendingCard from "./TrendingCard";

import { forMouseDown, forMouseLeave, forMouseMove, forMouseUp } from "./CarouselScroll";
import { dataType } from "./CustomType";

const Carousel = (props: {data: dataType[]}) => {
    let trending = props.data;
  
    return (
      <div
        className="carousel"
        onMouseDown={forMouseDown}
        onMouseLeave={forMouseLeave}
        onMouseUp={forMouseUp}
        onMouseMove={forMouseMove}
      >
        {trending.map((item: dataType, index: number) => {
          return (
            <TrendingCard
              key={index}
              title={item.title}
              year={item.year}
              category={item.category}
              rating={item.rating}
              image={item.thumbnail.trending.small}
              isBookmarked={item.isBookmarked}
            />
          );
        })}
      </div>
    );
  };
  
  export default Carousel;
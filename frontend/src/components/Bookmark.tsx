import bookmarkClick from "./BookmarkClick";
import { dataType } from "./CustomType";

export const NotTicked = (props: {data: string, originalData: dataType}) => {
    let view = props.data;
    const originalData = props.originalData
  
    return (
      <div className={view + "  bookmarkTick "} onClick={(event) => bookmarkClick(event, originalData)}>
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke-width="1.5"
          />
        </svg>
      </div>
    );
  };
  
  export const IsTicked = (props: {data: string, originalData: any}) => {
    let view = props.data;
    const originalData = props.originalData
   
    return (
      <div className={view + " bookmarkTick ticked"} onClick={(event) => bookmarkClick(event, originalData)}>
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke-width="1.5"
          />
        </svg>
      </div>
    );
  };
  
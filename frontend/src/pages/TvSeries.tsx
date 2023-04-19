import { useEffect, useState } from "react";
import rawData from "../data.json";
import RegularCard from "../components/RegularCard";
import { movie } from "../dataTypes";

export default function TvSeries() {
  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(rawData));
  }
  const movies = JSON.parse(localStorage.getItem("data") || "[]") as movie[];

  const [data, setData] = useState(movies);

  useEffect(() => {
    setData(data.filter((movie) => movie.category === "TV Series"));
  }, []);

  return (
    <div className="page-container">
      <div className="regular-veiw">
        <p className=" section-title text-left">TV Series</p>
        <div className="regular-container mt-4">
          <RegularCard data={data} />
        </div>
      </div>
    </div>
  );
}

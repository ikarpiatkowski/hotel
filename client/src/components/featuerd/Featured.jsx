import "./featured.css";
import useFetch from "../../hooks/useFetch";
const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );
  return (
    <div className="featured">
      {loading ? (
        "Loading"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="http://www.kasal.com/wp-content/uploads/2017/06/hotel-wedding-epic-celebrations-rain-or-shine-8.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Pierwsze piętro</h1>
              <h2>Pokoje: {data[0]}</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.amadriapark.com/de/wp-content/uploads/sites/6/2018/08/Webp.net-resizeimage-1-1024x576.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Drugie piętro</h1>
              <h2>Pokoje: {data[1]}</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.compasshospitality.com/wp-content/uploads/2018/12/Webp.net-resizeimage-6-1024x680.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Trzecie piętro</h1>
              <h2>Pokoje: {data[2]}</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;

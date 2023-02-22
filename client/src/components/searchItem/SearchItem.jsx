import "./searchItem.css";
import { Link } from "react-router-dom";
const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} metrów od centrum</span>
        <span className="siTaxiOp">Darmowy parking</span>
        <span className="siSubtitle">Pokój z widokiem na akwarium</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Darmowa rezygnacja</span>
        <span className="siCancelOpSubtitle">
          Zawsze możesz zrezygnować, zamów teraz!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Idealny</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">{item.cheapestPrice} zł</span>
          <span className="siTaxOp">All inclusive</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Sprawdź dostępność</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;

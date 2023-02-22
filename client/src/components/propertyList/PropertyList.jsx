import useFetch from "../../hooks/useFetch";
import "./propertyList.css";
const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");
  const images = [
    "https://www.alvearpalace.com/files/habitaciones/galeria/thumbs/living-royal-ventana.jpg",
    "https://e-turysta.pl/zdjecia/galeria-glowna/max/119/Pokoje-Goscinne-Z-Widokami-Na-Gory-Szczawnica-1198019.jpg",
    "https://i.pinimg.com/originals/f8/f3/e8/f8f3e891fedea34574e40e8405b3d31c.jpg",
    "https://lh3.googleusercontent.com/OW0BGE88J8oe1-pJJ6htYzlIGxLs6SugBeTWPwy3wOwQ_V-83DLK8_voBEEZMnKgYIaEu_683f8rOlEF2xMRzg=w808-h768-rj",
    "https://img-ovh-cloud.zszywka.pl/0/0067/1717-pokoj-marzen-.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;

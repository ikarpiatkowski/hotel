import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./home.css";
import Featured from "../../components/featuerd/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperites from "../../components/featuredProperites/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <div className="homeTitle">Przeglądaj</div>
        <PropertyList />
        <div className="homeTitle">Wyróżnione</div>
        <FeaturedProperites />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

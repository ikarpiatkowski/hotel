import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Oszczędzaj pieniądze z newsletterem!</h1>
      <span className="mailDesc">
        Zapisz się, wyślemy Ci wspaniałe oferty ze zniżkami
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Twój email" />
        <button>Subskrybuj</button>
      </div>
    </div>
  );
};

export default MailList;

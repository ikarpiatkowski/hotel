import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Adres</li>
          <li className="fListItem">Kontakt</li>
          <li className="fListItem">O nas</li>
          <li className="fListItem">Animatorzy dla dzieci</li>
          <li className="fListItem">Wycieczki</li>
          <li className="fListItem">Zwiedzanie</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Pokoje</li>
          <li className="fListItem">Apartmenty</li>
          <li className="fListItem">Atrakcje</li>
          <li className="fListItem">Polecane</li>
          <li className="fListItem">Goście</li>
          <li className="fListItem">Inne</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Warte odwiedzenia podczas pobytu</li>
          <li className="fListItem">Oceny</li>
          <li className="fListItem">Nagrody</li>
          <li className="fListItem">Zniżki</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Jak dotrzeć?</li>
          <li className="fListItem">Wypożyczalnie samochodów</li>
          <li className="fListItem">Restauracje w pobliżu</li>
          <li className="fListItem">Komunikacja miejska</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Obsługa klienta</li>
          <li className="fListItem">Pomoc dla partnerów</li>
          <li className="fListItem">Zasady i warunki</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Hotel California.</div>
    </div>
  );
};

export default Footer;

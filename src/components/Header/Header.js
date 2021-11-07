import React, { useState } from "react";
import HeaderLogo from "../../assets/header-logo.png";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="headerContainer">
        <div className="headerLogo">
          {" "}
          <img
            src={HeaderLogo}
            alt="Logo do Itaú Unibanco"
            width="auto"
            height="50"
          />{" "}
        </div>
        <div className="headerMenu">
          {" "}
          <div className="headerList">
            <button onClick={() => setOpen(true)}> seguros</button>
            <button onClick={() => setOpen(true)}> planos</button>
            <button onClick={() => setOpen(true)}> assistências </button>
            <button onClick={() => setOpen(true)}> exclusivos itaú</button>
          </div>
        </div>
        <div className="headerHelp">
          {" "}
          <a href="https://www.itau.com.br/atendimento-itau/para-voce/">
            {" "}
            ajuda{" "}
          </a>{" "}
        </div>
      </div>

      <div className={isOpen ? "overlay" : ""}> </div>
      <div className={isOpen ? "oopsModal" : "invisible"}>
        <button onClick={() => setOpen(false)}> X </button> <span>oops :(</span>
        infelizmente devido ao prazo curto apenas a home da página
        web de seguros do Itaú foi desenvolvida, as outras páginas não tiveram o seu
        desenvolvimento iniciado.
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import Logo from "../../assets/header-logo.png";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerLogo">
        <img src={Logo} width="auto" height="50px" alt="Logo do Itaú Seguros" />
      </div>
      <div className="footerAbout">
        © 2021 Itaú Corretora de Seguros S.A. | CNPJ 43.644.285/0001-06 |
        Registro Susep: 20.203503-3 Praça Alfredo Egydio de Souza Aranha, 100,
        Torre Olavo Setubal, Parque Jabaquara - CEP 04344-902 - São Paulo -
        Brasil <b>versão: 2.0</b>
      </div>
      <div className="footerDev">
        Developed by <b>Saulo Martins</b>
      </div>
    </div>
  );
}

export default Footer;

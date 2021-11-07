import React from "react";
import HeaderLogo from "../../assets/header-logo.png";

const Mobile = () => {
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
      </div>
    </header>
  );
};

export default Mobile;

import React from "react";
import BannerImg from "../../assets/banner.png";

function Banner() {
  return (
    <div className="bannerContainer">
      <img
        src={BannerImg}
        alt="Um casal e sua filha brincando com um cachorro"
        width="100%"
        className="bannerImage"
      />
      <span className="bannerText">
        {" "}
        <b>seguros</b> e <b>assistências</b> selecionados pelo <b>Itaú</b> para
        sua <b>tranquilidade :)</b>{" "}
      </span>
    </div>
  );
}

export default Banner;

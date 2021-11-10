import React, { useState, useEffect } from "react";

const Coverages = () => {
  const [data, setData] = useState();
  const getData = () => {
    fetch("/get_response_ofertas_residencial.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data.produtos[0].coberturas);
        if (data.produtos[0]) {
          setData(data.produtos[0].coberturas);
        }
        console.error("not response");
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const [select] = useState("");

  const selectedCard = (e) => {
    const currentState = this?.state;
    console.log(this);
    select(!currentState);
  };

  const cardsCoberturas = data?.map(function (cobertura) {
    return (
      <button
        className="coverageCard"
        onClick={() => selectedCard()}
        style={
          cobertura.cobertura_obrigatoria
            ? { border: "3px solid rgb(236, 112, 0)" }
            : null
        }
      >
        <div>
          <div className="coverageName">{cobertura.nome}</div>
          <div className="coverageDesc">
            {cobertura.descricao}
            {cobertura.resumo}
          </div>
        </div>
      </button>
    );
  });

  return (
    <div className="sectionContainer">
      <div className="sectionTitle"> selecione a(s) sua(s) cobertura(s) </div>
      <div className="separator" />
      <div className="coverageContainer">{cardsCoberturas} </div>
    </div>
  );
};

export default Coverages;

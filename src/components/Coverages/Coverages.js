import React, { useState, useEffect } from "react";

const Coverages = () => {
  const [data, setData] = useState();
  const [selected, setSelected] = useState(false);

  const getData = () => {
    fetch("/get_response_ofertas_residencial.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then(async (data) => {
        if (data.produtos[0]) {
          setData(data.produtos[0].coberturas);
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const selectedCard = () => {
    const currentState = this?.state;
    setSelected(!currentState);
  };

  const cards = data?.map(function (cobertura) {
    return (
      <button
        className="coverageCard"
        onClick={() => selectedCard()}
        style={
          cobertura.cobertura_obrigatoria || selected
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
      <div className="coverageContainer">{cards} </div>
      <div className="coverageButton">
        <button> continuar </button>
      </div>
    </div>
  );
};

export default Coverages;

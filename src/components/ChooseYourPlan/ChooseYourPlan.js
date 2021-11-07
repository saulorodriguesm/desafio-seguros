import React, { useEffect, useState } from "react";
import Plan1 from "../../assets/plan1.png";
import Plan2 from "../../assets/plan2.png";
import Plan3 from "../../assets/plan3.png";
import Plan4 from "../../assets/plan4.png";

const ChooseYourPlan = () => {
  const [isOpen, setOpen] = useState(false);
  const [plan, setPlan] = useState("");
  const [offer, setOffer] = useState();
  const [isOfferOpen, setOfferOpen] = useState(false);
  const offerName = offer?.nome;

  const getData = () => {
    fetch("/get_response_ofertas_residencial.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then(async (data) => {
        setOffer(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="sectionContainer">
      <div className="sectionTitle">
        {" "}
        escolha o melhor plano do <b> Itaú </b> para você!
      </div>
      <div className="separator" />
      <div className="plans">
        <button
          onClick={() => {
            setOfferOpen(true);
          }}
          className="planCard"
        >
          {" "}
          <img
            src={Plan1}
            alt="Família composta por um homem, uma mulher e uma criança, ambos sorrindo e segurando um pedaço de papelão sobre as cabeças."
            width="278"
            height="207"
          />{" "}
          <span> seguro residencial </span>
        </button>
        <button
          onClick={() => {
            setOpen(true);
            setPlan("seguro auto");
          }}
          className="planCard"
        >
          {" "}
          <img
            src={Plan2}
            alt="Mulher sorrindo debruçada sobre o volante de um carro."
            width="278"
            height="207"
          />
          <span> seguro auto </span>
        </button>
        <button
          onClick={() => {
            setOpen(true);
            setPlan("odonto");
          }}
          className="planCard"
        >
          {" "}
          <img
            src={Plan3}
            alt="Mulher de chapéu sorrindo e com as mãos apoiadas no pescoço."
            width="278"
            height="207"
          />
          <span> plano odonto </span>
        </button>
        <button
          onClick={() => {
            setOpen(true);
            setPlan("assistência bem-estar");
          }}
          className="planCard"
        >
          {" "}
          <img
            src={Plan4}
            alt="Família sorrindo e brincando"
            width="278"
            height="207"
          />
          <span> assistência bem-estar </span>
        </button>
      </div>
      <div className={isOpen || isOfferOpen ? "overlay" : ""}> </div>
      <div className={isOpen ? "oopsModal" : "invisible"}>
        <button onClick={() => setOpen(false)}> X </button> <span>oops :(</span>
        parece que o plano {plan} ainda não teve a sua modal desenvolvida.
        Enquanto isso, clique no card "Seguro Residencial" e confira todas as
        opções de seguro residencial do Itaú.
      </div>
      <div className={isOfferOpen ? "modalSegurosResidencial" : "invisible"}>
        <button onClick={() => setOfferOpen(false)}> X </button>
        <span>
          {" "}
          Confira as coberturas do plano Seguro Residencial da{" "}
          <b> {offerName}:</b>{" "}
        </span>
      </div>
    </div>
  );
};

export default ChooseYourPlan;

import React from "react";
import Plan1 from "../../assets/plan1.png";
import Plan2 from "../../assets/plan2.png";
import Plan3 from "../../assets/plan3.png";
import Plan4 from "../../assets/plan4.png";

function ChooseYourPlan() {
  return (
    <div className="sectionContainer">
      <div className="sectionTitle">
        {" "}
        escolha o melhor plano do <b> Itaú </b> para você!
      </div>
      <div className="separator" />
      <div className="plans">
        <div className="planCard">
          {" "}
          <img
            src={Plan1}
            alt="Família composta por um homem, uma mulher e uma criança, ambos sorrindo e segurando um pedaço de papelão sobre as cabeças."
            width="278"
            height="207"
          />{" "}
          <span> seguro residencial </span>
        </div>
        <div className="planCard">
          {" "}
          <img
            src={Plan2}
            alt="Mulher sorrindo debruçada sobre o volante de um carro."
            width="278"
            height="207"
          />
          <span> seguro auto </span>
        </div>
        <div className="planCard">
          {" "}
          <img
            src={Plan3}
            alt="Mulher de chapéu sorrindo e com as mãos apoiadas no pescoço."
            width="278"
            height="207"
          />
          <span> plano odonto </span>
        </div>
        <div className="planCard">
          {" "}
          <img
            src={Plan4}
            alt="Família sorrindo e brincando"
            width="278"
            height="207"
          />
          <span> assistência bem-estar </span>
        </div>
      </div>
    </div>
  );
}

export default ChooseYourPlan;

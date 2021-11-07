import React from "react";

const Form = () => {
  return (
    <div className="formContainer">
      <div className="formApp">
        <div className="formText">
          <span className="formHeading">
            Quer falar com um consultor? Deixa seu dados aqui que ligamos para
            te ajudar!{" "}
          </span>{" "}
          <span className="formSubtext">
            A ideia é te auxiliar na escolha do melhor produto! Preencha os
            dados que um corretor vai entrar em contato com você{" "}
          </span>
        </div>
        <div className="formSection">
          <form>
            <div className="formSectionContainer">
              <label for="plan" className="formLabel">
                escolha o seu plano:
              </label>
              <input type="text" id="plan" name="plan" className="formInput" />
              <label for="name" className="formLabel">
                qual é o seu nome?
              </label>
              <input type="text" id="name" name="name" className="formInput" />
              <label for="cpf" type="number" className="formLabel">
                e o seu cpf?
              </label>
              <input type="nummber" id="cpf" name="cpf" className="formInput" />
              <label for="email" className="formLabel">
                digite seu melhor e-mail para enviarmos uma cotação:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="formInput"
              />
              <label for="tel" className="formLabel">
                pra finalizar, qual o seu número de telefone?
              </label>
              <input id="tel" type="tel" name="tel" className="formInput" />
              <div className="formButtonContainer">
                {" "}
                <input type="submit" className="formButton" />
                Os dados inseridos por você poderão ser compartilhados com
                empresas parceiras para cotação e contratação dos produtos
                escolhidos e poderão ser tratados de acordo com nossa Política
                de Privacidade disponível em nossos sites e aplicativos
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

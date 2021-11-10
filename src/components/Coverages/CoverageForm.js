import React, { useEffect, useState } from "react";

const CoverageForm = () => {
  const [postalCode, setPostalCode] = useState();
  const [addressForm, setAddressForm] = useState();

  const getAddressInfo = (postalCode) => {
    fetch(`https://viacep.com.br/ws/${postalCode}/json/`)
      .then((response) => response.json())
      .then(async (data) => {
        setAddressForm(data);
      });
  };

  useEffect(
    () => {
      if (postalCode?.length === 8) {
        getAddressInfo(postalCode);
      }
    },
    [postalCode],
    [getAddressInfo]
  );

  return (
    <div className="coverageForm">
      <div className="coverageFormContainer">
        <div className="sectionTitle"> dados do titular do seguro </div>
        <div className="separator" />
        <div className="coverageFormLine">
          <div>
            {" "}
            <div className="coverageFormLabel"> nome completo </div>{" "}
            <input className="coverageFormInput" />
          </div>
          <div>
            {" "}
            <div className="coverageFormLabel"> cpf </div>{" "}
            <input className="coverageFormInput" />{" "}
          </div>
          <div>
            {" "}
            <div className="coverageFormLabel"> data de nascimento </div>{" "}
            <input className="coverageFormInput" />
          </div>
        </div>
        <div className="coverageFormLine">
          {" "}
          <div>
            {" "}
            <div className="coverageFormLabel"> CEP </div>
            <input
              className="coverageFormInput"
              onChange={(e) => {
                setPostalCode(e.target.value);
              }}
              maxLength="8"
            />{" "}
          </div>
        </div>
        <div className="coverageFormLine">
          <div>
            {" "}
            <div className="coverageFormLabel"> endereço </div>
            <input
              className="coverageFormInput"
              value={addressForm ? addressForm.logradouro : ""}
            />
          </div>
          <div>
            {" "}
            <div className="coverageFormLabel"> número </div>
            <input className="coverageFormInput" />
          </div>
          <div>
            {" "}
            <div className="coverageFormLabel"> complemento </div>
            <input className="coverageFormInput" />
          </div>
        </div>
        <div className="coverageFormLine">
          <div>
            {" "}
            <div className="coverageFormLabel"> bairro </div>
            <input
              className="coverageFormInput"
              value={addressForm ? addressForm.bairro : ""}
            />{" "}
          </div>
          <div>
            <div className="coverageFormLabel"> cidade </div>
            <input
              className="coverageFormInput"
              value={addressForm ? addressForm.localidade : ""}
            />
          </div>
          <div>
            {" "}
            <div className="coverageFormLabel"> estado </div>
            <input
              className="coverageFormInput"
              value={addressForm ? addressForm.uf : ""}
            />{" "}
          </div>
        </div>
        <div className="coverageButton">
          <button> finalizar cotação </button>
        </div>
      </div>
    </div>
  );
};

export default CoverageForm;

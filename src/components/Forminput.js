import React, { useState } from "react";
import Selectbox from "./Selectbox";
import "./forminput.css";
const OPTIONS = [
  { value: "food", name: "food" },
  { value: "daily", name: "daily" },
  { value: "clothes", name: "clothes" },
];

const Forminput = ({ getPaymentFormData }) => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    type: "",
    date: new Date().toISOString().split("T")[0],
    memo: "",
    rebuy: "no",
  });

  const [isMemoEnabled, setIsMemoEnabled] = useState(false);

  const [rebuy, setRebuy] = useState("no");

  const handleRadioChange = (event) => {
    setRebuy(event.target.value);
    setObjectState((prevState) => ({
      ...prevState,
      rebuy: event.target.value,
    }));
  };

  const inputTextHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const inputPriceHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const inputTypeHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      type: event.target.value,
    }));
  };

  const inputDateHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      date: event.target.value,
    }));
  };

  const inputMemoHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      memo: event.target.value,
    }));
  };

  const memoCheckHandler = (event) => {
    setIsMemoEnabled(event.target.checked);
  };

  const buttonSubmitHandler = (event) => {
    event.preventDefault();

    getPaymentFormData(objectState);
    console.log(objectState);

    setObjectState({
      name: "",
      price: 0,
      type: "",
      date: new Date().toISOString().split("T")[0],
      memo: "",
      rebuy: "no",
    });
  };

  return (
    <form className="form-st" onSubmit={buttonSubmitHandler}>
      <div className="form-list">
        <label>이름</label>
        <input
          type="text"
          onChange={inputTextHandler}
          value={objectState.name}
        />
      </div>
      <div className="form-list">
        <label>가격</label>
        <input
          type="number"
          min="0"
          step="100"
          onChange={inputPriceHandler}
          value={objectState.price}
        />
      </div>
      <div className="form-list">
        <label>유형</label>
        <Selectbox
          options={OPTIONS}
          onChange={inputTypeHandler}
          value={objectState.type}
        ></Selectbox>
      </div>
      <div className="form-list">
        <label>구입 날짜</label>
        <input
          type="date"
          min="2019-01-01"
          max="2023-12-31"
          onChange={inputDateHandler}
          value={objectState.date}
        />
      </div>
      <div className="form-list">
        <label>메모</label>
        <input type="checkbox" onChange={memoCheckHandler} />
        <label>메모 작성</label>
        <input
          type="text"
          onChange={inputMemoHandler}
          value={objectState.memo}
          disabled={!isMemoEnabled}
        />
      </div>
      <div className="form-list">
        <label>
          재구매 의사
          <label>
            <input
              type="radio"
              value="yes"
              checked={rebuy === "yes"}
              onChange={handleRadioChange}
            />
            예
          </label>
          <label>
            <input
              type="radio"
              value="no"
              checked={rebuy === "no"}
              onChange={handleRadioChange}
            />
            아니오
          </label>
        </label>
      </div>
      <div className="btn-submit">
        <button type="submit">추 가</button>
      </div>
    </form>
  );
};

export default Forminput;

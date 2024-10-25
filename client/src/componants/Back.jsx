import React from "react";
import back from "./Templates/arrow-left.svg";
import "./Combined.css";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        src={back}
        alt="Back"
        id="backImg"
        onClick={() => navigate(-1)}
        style={{ cursor: 'pointer' }} // Optional: change cursor to pointer on hover
      />
    </div>
  );
};

export default Back;

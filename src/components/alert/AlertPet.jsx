import { css } from "@emotion/css";
import React, { useContext } from "react";
import petContext from "../../context/pet/petContext";

const AlertPet = () => {
  const PetContext = useContext(petContext);
  const { errorspet } = PetContext;

  return (
    <div
      className={css`
        background-color: rgb(229 231 235);
        border-left: 4px solid rgb(239 68 68);
        color: red;
      `}
    >
      <p
        className={css`
          margin: 0;
          margin-left: 0.5rem;
          font-size: 2rem;
          font-weight: 700;
        `}
      >
        Error
      </p>

      {errorspet.map((el) => (
        <p
          className={css`
            margin-left: 0.5rem;
            font-size: 1.3rem;
          `}
        >
          {el.msg}
        </p>
      ))}
    </div>
  );
};

export default AlertPet;

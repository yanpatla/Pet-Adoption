import React from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import { Card, CardIMG } from "../layout/Layout";

const PreviewPetsList = ({ pet }) => {
  return (
    <Card
      className={css`
        &:hover {
          filter: brightness(120%);
          cursor: pointer;
        }
      `}
    >
      <Link to={`/pet-profile/${pet._id}`}>
        <CardIMG src={pet.picture.url} alt="" />

        <h4
          className={css`
            font-size: 2rem;
            text-align: center;
            color: #fff;
            text-transform: uppercase;
          `}
        >
          {pet.name}
        </h4>
      </Link>
    </Card>
  );
};

export default PreviewPetsList;

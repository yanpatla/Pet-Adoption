import React from "react";
import { css } from "@emotion/css";
import PanelPets from "./PanelPets";
import PanelUsers from "./PanelUsers";
import { ButtonAdd } from "../layout/Layout";
import { Link } from "react-router-dom";
const Panel = ({ panel }) => {
  return (
    <section
      className={css`
        border: none;
        border-radius: 10px;
        box-shadow: 2px 2px 26px 0px rgba(0, 0, 0, 0.2);
        margin-bottom: 1rem;
        padding: 3rem 3rem;
      `}
    >
      {panel === 1 ? (
        <PanelUsers />
      ) : (
        <div className="">
          <div
            className={css`
              text-align: right;
            `}
          >
            <Link to="/admin-dashboard/add-pet">
              <ButtonAdd>+ ADD PETS</ButtonAdd>
            </Link>
          </div>
          <PanelPets />
        </div>
      )}
    </section>
  );
};

export default Panel;

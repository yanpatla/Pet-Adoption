import React from "react";
import { css } from "@emotion/css";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import PetsIcon from "@mui/icons-material/Pets";
import { LiPanelAdmin } from "../layout/Layout";
import { Link } from "react-router-dom";
const Sidebar = ({ setPanel }) => {
  return (
    <section
      className={css`
        border: none;
        border-radius: 10px;
        box-shadow: 2px 2px 26px 0px rgba(0, 0, 0, 0.2);
        margin-bottom: 1rem;
        padding: 3rem 3rem;
        background-color: rgb(244, 153, 26);
        height: 30rem;
      `}
    >
      <ul
        className={css`
          list-style: none;
          color: #fff;
          padding: 0;
        `}
      >
        <Link
          className={css`
            color: #fff;
          `}
          to="/"
        >
          <LiPanelAdmin>
            <HomeIcon fontSize="large" /> Home
          </LiPanelAdmin>
        </Link>
        <LiPanelAdmin onClick={() => setPanel(1)}>
          <GroupIcon fontSize="large" /> Users Panel
        </LiPanelAdmin>
        <LiPanelAdmin onClick={() => setPanel(2)}>
          <PetsIcon fontSize="large" /> Pets Panel
        </LiPanelAdmin>
      </ul>
    </section>
  );
};

export default Sidebar;

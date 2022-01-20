import React, { useEffect } from "react";
import { css } from "@emotion/css";
import { Tab, TabsList } from "../layout/Layout";

const PetsTabs = ({ setPetTab, pettab }) => {
  return (
    <TabsList>
      {pettab === 1 ? (
        <li
          className={css`
            border-bottom: 2px solid #f4991a;
            &:hover {
              cursor: pointer;
            }
          `}
        >
          Adopted Pets
        </li>
      ) : (
        <Tab onClick={() => setPetTab(1)}>Adopted Pets</Tab>
      )}
      {pettab === 2 ? (
        <li
          className={css`
            border-bottom: 2px solid #f4991a;
            &:hover {
              cursor: pointer;
            }
          `}
        >
          Saved Pets
        </li>
      ) : (
        <Tab onClick={() => setPetTab(2)}>Saved Pets</Tab>
      )}
    </TabsList>
  );
};

export default PetsTabs;

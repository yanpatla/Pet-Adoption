import React, { useEffect } from "react";
import { css } from "@emotion/css";
import { Tab, TabsList } from "../layout/Layout";

const Tabs = ({ setCurrentTab, currenttab }) => {
  useEffect(() => {
    setCurrentTab(1);
  }, []);
  return (
    <TabsList>
      {currenttab === 1 ? (
        <li
          className={css`
            border-bottom: 2px solid #f4991a;
            &:hover {
              cursor: pointer;
            }
          `}
        >
          Own Pets
        </li>
      ) : (
        <Tab onClick={() => setCurrentTab(1)}> Own Pets</Tab>
      )}
      {currenttab === 2 ? (
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
        <Tab onClick={() => setCurrentTab(2)}> Saved Pets</Tab>
      )}
    </TabsList>
  );
};

export default Tabs;

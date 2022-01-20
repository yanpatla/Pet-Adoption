import React, { useEffect } from "react";
import { css } from "@emotion/css";
import { Tab, TabsList } from "../layout/Layout";

const ListTabs = ({ setCurrentTab, currenttab }) => {
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
          Personal Profile
        </li>
      ) : (
        <Tab onClick={() => setCurrentTab(1)}>Personal Profile</Tab>
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
          Profile Settings
        </li>
      ) : (
        <Tab onClick={() => setCurrentTab(2)}>Profile Settings</Tab>
      )}
    </TabsList>
  );
};

export default ListTabs;

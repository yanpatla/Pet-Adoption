import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/css";

import { Container } from "../layout/Layout";
import PersonalInformation from "./PersonalInformation";
import SettingProfile from "./SettingProfile";
import authContext from "../../context/auth/authContext";
 
import ListTabs from "./Tabs";
 

const Profile = () => {
  const [currenttab, setCurrentTab] = useState(1);
  const AuthContext = useContext(authContext);
  const {  getUserById, user  } = AuthContext;
  useEffect(() => {
    if (user) {
      getUserById(user.id);
    }
  }, [user]);

  return (
    <>
      <Container>
        <section
          className={css`
            border: none;
            border-radius: 10px;
            box-shadow: 2px 2px 26px 0px rgba(0, 0, 0, 0.2);
            margin-bottom: 1rem;
          `}
        >
          <h2
            className={css`
              margin: 0;

              padding: 1rem 0 0 1rem;
              font-size: 4rem;
              color: rgba(50, 19, 19, 0.8);
            `}
          >
            My Profile
          </h2>
          <ListTabs currenttab={currenttab} setCurrentTab={setCurrentTab} />
          {currenttab === 1 ? <PersonalInformation /> : <SettingProfile />}
        </section>
      </Container>
    </>
  );
};

export default Profile;

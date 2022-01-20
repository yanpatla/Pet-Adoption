import React, { useContext, useEffect, useState } from "react";
 
import petContext from "../../context/pet/petContext";
import { css } from "@emotion/css";
import {   Container } from "../layout/Layout";
 
import authContext from "../../context/auth/authContext";
import MySavedPets from "./MySavedPets";
import MyAdoptedPets from "./MyAdoptedPets";
import PetsTabs from "./PetsTabs";

const MyPetsPage = () => {
  const PetContext = useContext(petContext);
  const {   getMyPets } = PetContext;
 
  const AuthContext = useContext(authContext);
  const { user } = AuthContext;
  const [pettab, setPetTab] = useState(1);

  useEffect(() => {
    if (user) {
      getMyPets(user.id);
    }
  }, [user]);
 
 
 
  return (
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
          My Pets
        </h2>
        <PetsTabs pettab={pettab} setPetTab={setPetTab} />

        {pettab === 1 ? <MyAdoptedPets /> : <MySavedPets />}
      </section>
    </Container>
  );
};

export default MyPetsPage;

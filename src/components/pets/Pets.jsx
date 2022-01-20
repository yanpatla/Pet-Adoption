import React, { useEffect, useContext, useState } from "react";
import { css } from "@emotion/css";
import { Container, Dots  } from "../layout/Layout";
import petContext from "../../context/pet/petContext";
 
import ListPets from "./ListPets";
import FilterPets from "./FilterPets";
 

const Pets = () => {
  const PetContext = useContext(petContext);

  const { pets, getPets, loading, getAnimalType, animalTypes } = PetContext;

  const [setfilter, setFilters] = useState(false);

  useEffect(() => {
    getPets();
    setFilters(false);
    getAnimalType();
  }, []);
 
  return (
    <div>
      <Container>
        {loading ? (
          <h2
            className={css`
              text-align: center;
              color: #321313;
              font-size: 4rem;
              font-weight: 700;
            `}
          >
            Finding pets for you <Dots />
          </h2>
        ) : (
          <>
            <h2
              className={css`
                text-align: center;
                color: #321313;
                font-size: 4rem;
                font-weight: 700;
              `}
            >
              Pet Available for Adoption
            </h2>
            <div
              className={css`
                display: grid;
                grid-template-columns: 0.3fr 1fr;
                gap: 1rem;
              `}
            >
              <FilterPets
                setFilters={setFilters}
                setfilter={setfilter}
                animalTypes={animalTypes}
                getPets={getPets}
                getAnimalType={getAnimalType}
              />
              <div
                className={css`
                  display: grid;
                  grid-template-columns: repeat(3, 1fr);
                  gap: 1rem;
                `}
              >
                {pets.map((pet) =>
                  pet.adoptionStatus !== "Adopted" ? (
                    <ListPets key={pet._id} pet={pet} />
                  ) : null
                )}
              </div>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default Pets;

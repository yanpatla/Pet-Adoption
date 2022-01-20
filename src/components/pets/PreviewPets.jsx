import React, { useEffect, useContext } from "react";
import { css } from "@emotion/css";
import { Card, Container, Dots } from "../layout/Layout";
import petContext from "../../context/pet/petContext";
import PreviewPetsList from "./PreviewPetsList";
import { Link } from "react-router-dom";
//! HACER TIPO LINK EL H2

const PreviewPets = () => {
  const PetContext = useContext(petContext);
  const { pets, getPets, loading } = PetContext;

  useEffect(() => {
    getPets();
  }, []);

  return (
    <main
      className={css`
        padding: 2rem;
      `}
    >
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
                grid-template-columns: repeat(4, 1fr);
                gap: 1rem;
                align-items: center;
              `}
            >
              {pets.slice(0, 3).map((pet) => (
                <PreviewPetsList key={pet._id} pet={pet} />
              ))}
              <Card
                className={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  height: 30rem;
                  &:hover {
                    filter: brightness(120%);
                    cursor: pointer;
                  }
                `}
              >
                <img src="../images/DogPaw.png" alt="" />
                <span
                  className={css`
                    color: #fff;
                  `}
                >
                  More Pets Available on Pet's
                </span>

                <div
                  className={css`
                    border-top: 1px solid #000;
                    margin: 0;
                    color: #fff;
                    transition: background-color 0.5s, border-top 0.5s;
                    border-bottom-left-radius: 2rem;
                    border-bottom-right-radius: 2rem;
                    &:hover {
                      background-color: #321313;
                      border-top: 1px solid #fff;
                    }
                  `}
                >
                  <Link to={"/serach-pet-adoption"}>
                    <p
                      className={css`
                        color: #fff;
                        font-weight: 700;
                      `}
                    >
                      MEET THEM
                    </p>
                  </Link>
                </div>
              </Card>
            </div>
          </>
        )}
      </Container>
    </main>
  );
};

export default PreviewPets;

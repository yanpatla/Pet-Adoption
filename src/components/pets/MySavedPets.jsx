import React, { useContext } from "react";
import petContext from "../../context/pet/petContext";
import { css } from "@emotion/css";
import { Card, CardIMG } from "../layout/Layout";
import { Link } from "react-router-dom";

const MySavedPets = () => {
  const PetContext = useContext(petContext);
  const { mypets } = PetContext;
 
  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        padding: 3rem 3rem;
      `}
    >
      {mypets.petSave.map((pets) => (
        <Card
          className={css`
            &:hover {
              filter: brightness(120%);
              cursor: pointer;
            }
          `}
          key={pets._id}
        >
          <Link to={`/pet-profile/${pets._id}`}>
            <CardIMG src={pets.picture.url} alt="Picture Pet" />
            <div
              className={css`
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                padding: 2.5rem 1rem;
              `}
            >
              <h4
                className={css`
                  font-size: 2rem;
                  color: #fff;
                  text-transform: uppercase;
                  margin: 0;
                `}
              >
                Name: {pets.name}
              </h4>
              <div>
                <span
                  className={css`
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    color: #fff;
                  `}
                >
                  Adoption Status:{" "}
                  {pets.adoptionStatus === "Adopted" ? (
                    <div
                      className={css`
                        width: 1rem;
                        height: 1rem;
                        border-radius: 10px;

                        background-color: red;
                      `}
                    ></div>
                  ) : pets.adoptionStatus === "Available" ? (
                    <div
                      className={css`
                        width: 1rem;
                        height: 1rem;
                        border-radius: 10px;

                        background-color: #8bcc00;
                      `}
                    ></div>
                  ) : pets.adoptionStatus === "Fostered" ? (
                    <div
                      className={css`
                        width: 1rem;
                        height: 1rem;
                        border-radius: 10px;

                        background-color: #f7f401;
                      `}
                    ></div>
                  ) : null}
                  {pets.adoptionStatus}
                </span>
              </div>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default MySavedPets;

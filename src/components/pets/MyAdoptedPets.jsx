import React, { useContext } from "react";
import petContext from "../../context/pet/petContext";
import { css } from "@emotion/css";
import { Card, CardIMG } from "../layout/Layout";
import { Link } from "react-router-dom";
import { ButtonLogin, CardNoPets } from "../layout/Layout";

const MyAdoptedPets = () => {
  const PetContext = useContext(petContext);
  const { mypets, loading } = PetContext;

  if (Object.keys(mypets).length === 0) return null;

  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        padding: 3rem 3rem;
      `}
    >
      {!loading
        ? mypets.petAdopted.map((pets) => (
            <>
            
              {pets.length === 0 ? (
                <div
                  className={css`
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    min-height: calc(100vh - 220px);
                  `}
                >
                  <CardNoPets>
                    <h1
                      className={css`
                        font-size: 4rem;
                        margin-bottom: 2rem;
                        color: #321313;
                        font-weight: 400;
                      `}
                    >
                      You have not yet adopted or saved any pets
                    </h1>
                    <p>
                      When you find a pet you love add to your list of saved
                      pets or adopt it
                    </p>
                    <Link to="/serach-pet-adoption">
                      <ButtonLogin
                        className={css`
                          margin: 0 auto;
                        `}
                      >
                        Find Your new Friend
                      </ButtonLogin>
                    </Link>
                  </CardNoPets>
                </div>
              ) : null}
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
                  <CardIMG src={pets.picture.url} alt="" />
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
            </>
          ))
        : null}
    </div>
  );
};

export default MyAdoptedPets;

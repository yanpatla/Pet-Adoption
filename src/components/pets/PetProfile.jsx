import { css } from "@emotion/css";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import petContext from "../../context/pet/petContext";
import { ButtonAdopt, ButtonSave, Card, Container } from "../layout/Layout";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PetsIcon from "@mui/icons-material/Pets";
import authContext from "../../context/auth/authContext";

const PetProfile = () => {
  const PetContext = useContext(petContext);
  const { getPetById, currentpet } = PetContext;

  const AuthContext = useContext(authContext);
  const {
    user,
    getUserById,
    currentuser,
    petSaveDelete,
    petSave,
    adoptPet,
    returnPet,
  } = AuthContext;
  let petid = useParams();
  useEffect(() => {
    getPetById(petid._id);
    if (user) {
      getUserById(user.id);
    }
  }, [user, currentuser]);
  if (Object.keys(currentpet).length === 0) return null;
  return (
    <Container>
      <div
        className={css`
          display: grid;
          grid-template-columns: 1.1fr 0.4fr;
          gap: 2rem;
        `}
      >
        <main
          className={css`
            border: none;
            border-radius: 10px;
            box-shadow: 2px 2px 26px 0px rgba(0, 0, 0, 0.2);
            margin-bottom: 1rem;
            padding: 3rem 3rem;
          `}
        >
          <div
            className={css`
              border-bottom: 1px solid gray;
            `}
          >
            <div
              className={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-bottom: 3rem;
                border-bottom: 1px solid gray;
              `}
            >
              <h2
                className={css`
                  font-size: 4rem;
                  color: #321313;
                  font-weight: 400;
                  margin: 0;
                `}
              >
                {currentpet.name}
              </h2>

              <img
                className={css`
                  max-width: 150px;
                  border-radius: 50%;

                  width: 100%;
                `}
                src={currentpet.picture.url}
                alt="Picture Pet"
              />
            </div>
            <div
              className={css`
                margin: 2rem 0;
              `}
            >
              <p>
                Status: <span>{currentpet.adoptionStatus}</span>
              </p>
            </div>
          </div>

          <div
            className={css`
              border-bottom: 1px solid gray;
            `}
          >
            <h3
              className={css`
                font-size: 3rem;
                color: #321313;
                font-weight: 400;
                margin: 1rem;
              `}
            >
              About
            </h3>
            <div
              className={css`
                display: flex;
                align-items: flex-start;
              `}
            >
              <ul
                className={css`
                  list-style: none;
                  padding-left: 2rem;
                `}
              >
                <li
                  className={css`
                    margin-bottom: 2rem;
                  `}
                >
                  <h4
                    className={css`
                      font-size: 2rem;
                      font-weight: 400;
                      margin: 0;
                      margin-bottom: 1rem;
                    `}
                  >
                    Type
                  </h4>
                  <p
                    className={css`
                      margin: 0 0 0 2rem;
                    `}
                  >
                    {currentpet.animalType}
                  </p>
                </li>
                <li
                  className={css`
                    margin-bottom: 2rem;
                  `}
                >
                  {" "}
                  <h4
                    className={css`
                      font-size: 2rem;
                      font-weight: 400;
                      margin: 0;
                      margin-bottom: 1rem;
                    `}
                  >
                    Breed
                  </h4>
                  <p
                    className={css`
                      margin: 0 0 0 2rem;
                    `}
                  >
                    {currentpet.breed}
                  </p>
                </li>
                <li
                  className={css`
                    margin-bottom: 2rem;
                  `}
                >
                  {" "}
                  <h4
                    className={css`
                      font-size: 2rem;
                      font-weight: 400;
                      margin: 0;
                      margin-bottom: 1rem;
                    `}
                  >
                    Color
                  </h4>
                  <div
                    className={css`
                      width: 20px;
                      height: 20px;
                      border-radius: 50%;
                      background-color: ${currentpet.color};
                      margin: 0 0 0 2rem;
                      border: none;
                      border-radius: 10 px;
                      box-shadow: 2px 2px 26px 0px rgb(0 0 0 / 20%);
                    `}
                  ></div>
                </li>
                <li
                  className={css`
                    margin-bottom: 2rem;
                  `}
                >
                  {" "}
                  <h4
                    className={css`
                      font-size: 2rem;
                      font-weight: 400;
                      margin: 0;
                      margin-bottom: 1rem;
                    `}
                  >
                    Dietary Restrictions
                  </h4>
                  <p
                    className={css`
                      margin: 0 0 0 2rem;
                    `}
                  >
                    {currentpet.dietaryRestrictions}
                  </p>
                </li>
                <li
                  className={css`
                    margin-bottom: 2rem;
                  `}
                >
                  {" "}
                  <h4
                    className={css`
                      font-size: 2rem;
                      font-weight: 400;
                      margin: 0;
                      margin-bottom: 1rem;
                    `}
                  >
                    Hypoallergenic
                  </h4>
                  {currentpet.hypoallergenic === true ? (
                    <p
                      className={css`
                        margin: 0 0 0 2rem;
                      `}
                    >
                      Yes
                    </p>
                  ) : (
                    <p
                      className={css`
                        margin: 0 0 0 2rem;
                      `}
                    >
                      No
                    </p>
                  )}
                </li>
                <li
                  className={css`
                    margin-bottom: 2rem;
                  `}
                >
                  {" "}
                  <h4
                    className={css`
                      font-size: 2rem;
                      font-weight: 400;
                      margin: 0;
                      margin-bottom: 1rem;
                    `}
                  >
                    Height/Weight
                  </h4>
                  <p
                    className={css`
                      margin: 0 0 0 2rem;
                    `}
                  >
                    {currentpet.height} CM / {currentpet.weight} Kgm
                  </p>
                </li>
              </ul>
              <div
                className={css`
                  flex: 1;
                `}
              >
                <h4
                  className={css`
                    font-size: 2.5rem;
                    font-weight: 400;
                    margin: 0;
                  `}
                >
                  Bio
                </h4>
                <p
                  className={css`
                    font-size: 1.5rem;
                    margin: 1 0 0 0;
                  `}
                >
                  {currentpet.bio}
                </p>
              </div>
            </div>
          </div>
        </main>

        <Card
          className={css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            height: 30rem;
          `}
        >
          <h4
            className={css`
              color: #fff;
              font-size: 2.5rem;
              line-height: 1.5;
              font-weight: 700;
            `}
          >
            What Do You Think About {currentpet.name}? Adorable Right?
          </h4>
          {user ? (
            <div
              className={css`
                display: flex;
                align-items: stretch;
                border-top: 1px solid #321313;
              `}
            >
              <div
                className={css`
                  border-right: 1px solid #321313;
                  flex-grow: 1;
                `}
              >
                {currentuser.savedPets &&
                currentuser.savedPets.includes(currentpet._id) ? (
                  <ButtonSave
                    type="submit"
                    onClick={() => petSaveDelete(currentpet._id)}
                  >
                    Save <BookmarkIcon sx={{ fontSize: 30 }} />
                  </ButtonSave>
                ) : (
                  <ButtonSave
                    type="submit"
                    onClick={() => petSave(currentpet._id)}
                  >
                    Save <BookmarkBorderIcon sx={{ fontSize: 30 }} />
                  </ButtonSave>
                )}
              </div>
              <div
                className={css`
                  border-left: 1px solid #321313;
                  flex-grow: 1;
                `}
              >
                {currentuser.adoptedPets &&
                currentuser.adoptedPets.includes(currentpet._id) ? (
                  <ButtonAdopt onClick={() => returnPet(currentpet._id)}>
                    Return <PetsIcon sx={{ fontSize: 30 }} />
                  </ButtonAdopt>
                ) : (
                  <ButtonAdopt onClick={() => adoptPet(currentpet._id)}>
                    Adopt <PetsIcon sx={{ fontSize: 30 }} />
                  </ButtonAdopt>
                )}
              </div>
            </div>
          ) : null}
        </Card>
      </div>
    </Container>
  );
};

export default PetProfile;

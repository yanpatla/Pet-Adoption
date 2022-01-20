import { css } from "@emotion/css";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import authContext from "../../context/auth/authContext";
import petContext from "../../context/pet/petContext";
import { Container } from "../layout/Layout";
import MyAdoptedPets from "../pets/MyAdoptedPets";
 

const UserProfile = () => {
  const AuthContext = useContext(authContext);
  const PetContext = useContext(petContext);
  const {  getMyPets, loading } = PetContext;
  const { getUserById, currentuser, loadinguser } = AuthContext;

  let params = useParams();
  useEffect(() => {
    getUserById(params.id);
    getMyPets(params.id);
  }, []);
  return (
    <Container>
      {!loadinguser ? (
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
            {currentuser.name}'s Profile
          </h2>

          <div
            className={css`
              display: grid;
              grid-template-columns: 0.4fr 1fr;
            `}
          >
            <div>
              <ul
                className={css`
                  list-style: none;
                  padding-left: 2rem;
                `}
              >
                <li>
                  <h4
                    className={css`
                      font-size: 2rem;
                      font-weight: 400;
                      margin: 1rem 0;
                    `}
                  >
                    Name:
                  </h4>
                  <p
                    className={css`
                      margin: 0 0 0 2rem;
                    `}
                  >
                    {currentuser.name}
                  </p>
                </li>
                <li>
                  <h4
                    className={css`
                      font-size: 2rem;
                      font-weight: 400;

                      margin: 1rem 0;
                    `}
                  >
                    Email:
                  </h4>
                  <p
                    className={css`
                      margin: 0 0 0 2rem;
                    `}
                  >
                    {currentuser.email}
                  </p>
                </li>
                <li>
                  <h4
                    className={css`
                      font-size: 2rem;
                      font-weight: 400;

                      margin: 1rem 0;
                    `}
                  >
                    Phone Number:
                  </h4>
                  <p
                    className={css`
                      margin: 0 0 0 2rem;
                    `}
                  >
                    {currentuser.phoneNumber}
                  </p>
                </li>
                <li>
                  <h4
                    className={css`
                      font-size: 2rem;
                      font-weight: 400;

                      margin: 1rem 0;
                    `}
                  >
                    Role:
                  </h4>
                  <p
                    className={css`
                      margin: 0 0 0 2rem;
                    `}
                  >
                    {currentuser.role === true ? "Admin" : "User"}
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h4
                className={css`
                  font-size: 2rem;
                  font-weight: 400;

                  margin: 1rem 0;
                `}
              >
                Bio:
              </h4>
              <p
                className={css`
                  font-size: 1.5rem;
                  margin: 1 0 0 0;
                `}
              >
                {currentuser.bio === ""
                  ? "There no Bio Disponible Yet"
                  : currentuser.bio}
              </p>
            </div>
          </div>
          <section>
            <h2
              className={css`
                margin: 0;
                padding: 1rem 0 0 1rem;
                font-size: 4rem;
                color: rgba(50, 19, 19, 0.8);
              `}
            >
              {currentuser.name}'s Pets
            </h2>
            {loading ? null : <MyAdoptedPets />}
          </section>
        </section>
      ) : null}
    </Container>
  );
};

export default UserProfile;

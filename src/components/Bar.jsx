import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonLogin, ButtonSignUp } from "./layout/Layout";
import { css } from "@emotion/css";
import Login from "./login/Login";
import { Container } from "../components/layout/Layout";
import SignUp from "./signup/SignUp";
import authContext from "../context/auth/authContext";
import AccountMenu from "./AccountMenu";
const Bar = () => {
  const AuthContext = useContext(authContext);
  const { user, userAuth } = AuthContext;
  useEffect(() => {
    userAuth();
  }, []);
  const [open, setOpen] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenSignUp = () => {
    setOpenSignUp(true);
  };
  const handleCloseSignUp = () => {
    setOpenSignUp(false);
  };
  return (
    <Container>
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <Link to="/">
          <img
            className={css`
              width: 16rem;
            `}
            src=" /images/logo_transparent2.png"
            alt=""
          />
        </Link>

        <div
          className={css`
            display: flex;
            gap: 2rem;
          `}
        >
          {user ? (
            <div
              className={css`
                display: flex;
                gap: 2rem;
                align-items: center;
              `}
            >
              <h4
                className={css`
                  margin: 0;
                `}
              >
                Welcome {user.name}
              </h4>
              <AccountMenu />
            </div>
          ) : (
            <>
              <ButtonLogin onClick={handleOpen}>LogIn</ButtonLogin>

              <ButtonSignUp onClick={handleOpenSignUp}>SignUp</ButtonSignUp>
            </>
          )}
        </div>
        {open && <Login handleClose={handleClose} />}
        {openSignUp && (
          <SignUp
            setOpenSignUp={setOpenSignUp}
            handleCloseSignUp={handleCloseSignUp}
            setOpen={setOpen}
          />
        )}
      </div>
    </Container>
  );
};

export default Bar;

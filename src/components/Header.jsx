import React, { useState, useContext, useEffect } from "react";
import { css } from "@emotion/css";
import { Container } from "../components/layout/Layout";

const Header = () => {
  return (
    <header>
      <div
        className={css`
          background-color: #f4991a;
          background-position: center center;
          background-size: cover;
        `}
      >
        <Container>
          <div
            className={css`
              display: flex;
              justify-content: center;
              align-items: flex-start;
            `}
          >
            <div>
              <h3
                className={css`
                  display: flex;
                  flex-direction: column;
                  font-weight: 300;
                  font-size: 10rem;
                `}
              >
                FIND YOUR
                <span
                  className={css`
                    font-weight: 700;
                    color: #fff;
                  `}
                >
                  LIFE'S FRIEND
                </span>
              </h3>
            </div>
            <img
              className={css`
                width: 60rem;
              `}
              src="../images/dog_PNG50375.png"
              alt="Dog"
            />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;

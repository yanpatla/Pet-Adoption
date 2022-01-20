import { css } from "@emotion/css";
import { useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import authContext from "../../context/auth/authContext";
import * as Yup from "yup";
import Bar from "../Bar";
import {
  ButtonLogin,
  Container,
  InputEdit,
  Label,
  Legend,
  TextArea,
} from "../layout/Layout";

const SettingProfile = () => {
  const AuthContext = useContext(authContext);
  const { currentuser, updateUserById } = AuthContext;
  let id = useParams();
  const formik = useFormik({
    initialValues: {
      id: id.id,
      email: currentuser.email,
      password: "",
      validatePassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("El E-mail no es Valido"),

      password: Yup.string().min(6, "The Passaword Must to Have min 6 char "),
      validatePassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),

    onSubmit: (values) => {
      updateUserById(values);
    },
  });
  return (
    <>
      <div
        className={css`
          padding: 3rem 3rem;
        `}
      >
        <form onSubmit={formik.handleSubmit}>
          <fieldset>
            <Legend>Setting Information</Legend>

            <Label htmlFor="email">E-mail:</Label>
            <InputEdit
              type="email"
              id="email"
              placeholder="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <Label htmlFor="password">Password:</Label>
            <InputEdit
              type="password"
              id="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <Label htmlFor="validatePassword">Repeat Password:</Label>
            <InputEdit
              type="password"
              id="validatePassword"
              placeholder="Repeat Password"
              value={formik.values.validatePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </fieldset>
          <div
            className={css`
              margin: 2rem 0;
            `}
          >
            <ButtonLogin type="submit">Send</ButtonLogin>
          </div>
        </form>
      </div>
    </>
  );
};

export default SettingProfile;

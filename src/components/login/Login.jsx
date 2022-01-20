import React, { useContext } from "react";
import { css } from "@emotion/css";
import { ButtonSend, Form, Input, Modal } from "../layout/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import authContext from "../../context/auth/authContext";
import Alert from "../alert/Alert";
const Login = ({ handleClose }) => {
  const AuthContext = useContext(authContext);
  const { logIn, errors, message } = AuthContext;
  //*Validation Form
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El E-mail no es Valido")
        .required("The E-mail is Mandatory"),
      password: Yup.string().required("The Password is Mandatory"),
    }),

    onSubmit: (values) => {
      logIn(values);
    },
  });
  return (
    <Modal
      className={css`
        display: flex;
        flex-direction: column;
      `}
    >
      {errors ? <Alert /> : message ? <Alert /> : null}
      <Form onSubmit={formik.handleSubmit}>
        <div
          onClick={handleClose}
          className={css`
            text-align: end;
            &:hover {
              cursor: pointer;
            }
          `}
        >
          X
        </div>
        <div
          className={css`
            margin-bottom: 4rem;
          `}
        >
          <label
            className={css`
              color: #000;
              display: block;
              font-size: 2rem;
              font-weight: 700;
              margin-bottom: 2rem;
            `}
            htmlFor="email"
          >
            E-mail
          </label>
          <Input
            type="email"
            id="email"
            placeholder="User Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div
              className={css`
                background-color: rgb(229 231 235);
                border-left: 4px solid rgb(239 68 68);
                color: red;
              `}
            >
              <p
                className={css`
                  margin: 0;
                  margin-left: 0.5rem;
                  font-size: 2rem;
                  font-weight: 700;
                `}
              >
                Error
              </p>
              <p
                className={css`
                  margin-left: 0.5rem;
                  font-size: 1.3rem;
                `}
              >
                {formik.errors.email}
              </p>
            </div>
          ) : null}
        </div>
        <div
          className={css`
            margin-bottom: 4rem;
          `}
        >
          <label
            className={css`
              color: #000;
              display: block;
              font-size: 2rem;
              font-weight: 700;
              margin-bottom: 2rem;
            `}
            htmlFor="password"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            placeholder="User Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div
              className={css`
                background-color: rgb(229 231 235);
                border-left: 4px solid rgb(239 68 68);
                color: red;
              `}
            >
              <p
                className={css`
                  margin: 0;
                  margin-left: 0.5rem;
                  font-size: 2rem;
                  font-weight: 700;
                `}
              >
                Error
              </p>
              <p
                className={css`
                  margin-left: 0.5rem;
                  font-size: 1.3rem;
                `}
              >
                {formik.errors.password}
              </p>
            </div>
          ) : null}
        </div>

        <ButtonSend type="submit">Send</ButtonSend>
      </Form>
    </Modal>
  );
};

export default Login;

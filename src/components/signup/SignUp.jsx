import React, { useContext } from "react";
import { css } from "@emotion/css";
import { ButtonSend, Form, Input, Modal } from "../layout/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import authContext from "../../context/auth/authContext";
import Alert from "../alert/Alert";

const SignUp = ({ handleCloseSignUp, setOpenSignUp }) => {
  const AuthContext = useContext(authContext);
  const { message, errors, userRegister  } = AuthContext;
  //*Validation Form
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      validatePassword: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("The Name is Mandatory"),
      lastName: Yup.string().required("The Last Name is Mandatory"),
      email: Yup.string()
        .email("El E-mail no es Valido")
        .required("The E-mail is Mandatory"),
      password: Yup.string()
        .required("The Password is Mandatory")
        .min(6, "The Passaword Must to Have min 6 char "),
      validatePassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
      phoneNumber: Yup.number().required("The Phone Number is Mandatory"),
    }),

    onSubmit: (values) => {
      userRegister(values);
    },
  });

  return (
    <div className="">
      <Modal
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        {errors ? <Alert /> : message ? <Alert /> : null}
        <Form onSubmit={formik.handleSubmit}>
          <div
            onClick={handleCloseSignUp}
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
              display: flex;
              gap: 2rem;
            `}
          >
            <div className="">
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
                  htmlFor="name"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="User Full Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
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
                      {formik.errors.name}
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
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <Input
                  type="text"
                  id="lastName"
                  placeholder="User Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
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
                      {formik.errors.lastName}
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
            </div>
            <div className="">
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
                  htmlFor="validatePassword"
                >
                  Repeat Password
                </label>
                <Input
                  type="password"
                  id="validatePassword"
                  placeholder="Repeat Password"
                  value={formik.values.validatePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.validatePassword &&
                formik.errors.validatePassword ? (
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
                      {formik.errors.validatePassword}
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
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <Input
                  type="phone"
                  id="phoneNumber"
                  placeholder="User Phone Number"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
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
                      {formik.errors.phoneNumber}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <ButtonSend type="submit">Send</ButtonSend>
        </Form>
      </Modal>
    </div>
  );
};

export default SignUp;

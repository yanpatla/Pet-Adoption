import React, { useContext } from "react";
import { css } from "@emotion/css";
import {
  ButtonLogin,
 
  InputEdit,
  Label,
  Legend,
  TextArea,
} from "../layout/Layout";
import authContext from "../../context/auth/authContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const PersonalInformation = () => {
  const AuthContext = useContext(authContext);
  const { currentuser, updateUserById } = AuthContext;
  let id = useParams();
  const formik = useFormik({
    initialValues: {
      id: id.id,
      name: currentuser.name,
      bio: currentuser.bio,
      phoneNumber: currentuser.phoneNumber,
      lastName: currentuser.lastName,
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      email: Yup.string().email("El E-mail no es Valido"),

      phoneNumber: Yup.number(),
      bio: Yup.string().max(250, "No more Than 250 characters "),
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
            <>
              <Legend>Personal Information</Legend>

              <Label htmlFor="name">Name:</Label>

              <InputEdit
                type="text"
                id="name"
                placeholder="Name"
                value={formik.values.name || ` ${currentuser.name}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Label htmlFor="name"> Last Name:</Label>

              <InputEdit
                type="text"
                id="lastName"
                placeholder="Last Name "
                value={formik.values.lastName || ` ${currentuser.lastName}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <Label htmlFor="phoneNumber">Phone:</Label>
              <InputEdit
                type="tel"
                id="phoneNumber"
                placeholder="Phone Number"
                value={
                  formik.values.phoneNumber || ` ${currentuser.phoneNumber}`
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <Label htmlFor="bio">Bio:</Label>
              <TextArea
                id="bio"
                placeholder="Put a Short Bio no More than 250 characteres "
                value={formik.values.bio || ` ${currentuser.bio}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></TextArea>
            </>
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

export default PersonalInformation;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  usrname: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  repassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Repeat password is required"),
});

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled(Field)`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Error = styled(ErrorMessage)`
  color: red;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Register = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        "https://express-passport-jwt-production.up.railway.app/register"
      );
      setUsers(response.data);
    };
    getUsers();
  }, []);

  return (
    <Formik
      initialValues={{
        name: "",
        usrname: "",
        email: "",
        password: "",
        repassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert("Anda Berhasil Mendaftar!");
          navigate("/home");
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <FormWrapper style={{ paddingTop: "100px", width: "80%" }}>
          <h1 style={{ textAlign: "center" }}>Registrasi</h1>
          <FormGroup>
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input type="text" name="name" />
            <Error className="error" name="name" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="usrname">Username</Label>
            <Input type="usrname" name="usrname" />
            <Error name="usrname" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" />
            <Error name="email" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" />
            <Error name="password" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="repassword">Ulangi Password</Label>
            <Input type="password" name="repassword" />
            <Error name="repassword" />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            Register
          </SubmitButton>

          <p style={{ marginTop: "20px" }}>
            Sudah Punya Akun? <Link to="/login">Login</Link>
          </p>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Register;

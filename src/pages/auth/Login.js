import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  usrname: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
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

const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        "https://express-passport-jwt-production.up.railway.app/login"
      );
      setUsers(response.data);
    };
    getUsers();
  }, []);

  return (
    <Formik
      initialValues={{
        usrname: "",
        password: "",
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
          <h1 style={{ textAlign: "center" }}>Login</h1>
          <FormGroup>
            <Label htmlFor="usrname">Username</Label>
            <Input type="usrname" name="usrname" />
            <Error name="usrname" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" />
            <Error name="password" />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            Login
          </SubmitButton>

          <p style={{ marginTop: "20px" }}>
            Belum Punya Akun? <Link to="/register">Login</Link>
          </p>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;

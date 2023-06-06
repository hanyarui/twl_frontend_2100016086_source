import React, { useState } from "react";
import axios from "axios";
import "./Edit.css";
import Logo from "./../../assets/logo.png";
import { Container } from "react-bootstrap";

const Edit = () => {
  const [image, setImage] = useState(null);
  const [uploadError, setUploadError] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      setUploadError("Please select an image.");
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image);

      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdXNlcjEuY29tIiwiaWQiOiI2NDVjYjA5NTE0Zjk5YzI1OTkxNGUwZTQiLCJpYXQiOjE2ODM3OTYxNDUsImV4cCI6MTY4Mzg4MjU0NX0.5RF77NcYIBGiMU_7BaPRNYCUf7b5l56pGMEwCBuDGzU"; // Ganti dengan token yang valid

      const response = await axios.post(
        "https://express-passport-jwt-production.up.railway.app/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUploadSuccess("Image uploaded successfully");
      setUploadError("");
      console.log("Upload successful:", response.data);

      // Reset form fields after successful upload
      setImage(null);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setUploadError(error.response.data.message);
      } else {
        setUploadError("Upload failed. Please try again.");
      }
      setUploadSuccess("");
      console.error("Upload failed:", error);
    }
  };

  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ marginTop: "20px", textAlign: "left" }}>Edit Profile</h2>
        {uploadError && <p>{uploadError}</p>}
        {uploadSuccess && <p>{uploadSuccess}</p>}
        <img style={{ marginTop: "20px" }} src={Logo} alt="profile logo" />
        <form onSubmit={handleFormSubmit}>
          <input
            style={{ marginTop: "50px" }}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          <br></br>
          <button type="submit">Upload</button>
        </form>
      </div>
    </Container>
  );
};

export default Edit;

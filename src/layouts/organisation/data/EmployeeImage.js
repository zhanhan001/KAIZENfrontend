import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Button } from "@mui/material";

/**
 * {@code EmployeeTable} creates the layout for the CRUD interface.
 *
 * @author Tan Jie En
 * @version 1.0
 * @since 2021-10-20
 */

class EmployeeImage extends Component {
  // employees = state => ({employees: state.allEmployees.employees});

  constructor(props) {
    super(props);
    this.state = {
      // Initially, no file is selected
      selectedFile: null,
    };
  }

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();
    // Update the formData object
    formData.append(
      "file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    function objToQueryString(obj) {
      const keyValuePairs = [];
      for (const key in obj) {
        keyValuePairs.push(
          encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
        );
      }
      return keyValuePairs.join("&");
    }

    // Request made to the backend api
    // Send formData object
    const response = Auth.currentSession().then((res) => {
      const queryString = objToQueryString({
        empId: this.props.employee,
      });
      fetch(
        "/api/employees/image"
          + `?${queryString}`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + res.getIdToken().getJwtToken(),
            Accept: "multipart/form-data"
          },
          body: formData,
        }
      );
      console.log(formData);
    });
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div>
          <Button
            variant="contained"
            component="label"
            style={{
              margin: "20px",
            }}
          >
            Select Image
            <input type="file" onChange={this.onFileChange} hidden />
          </Button>
          <Button onClick={this.onFileUpload}>Upload</Button>
        </div>
        {this.fileData()}
      </div>
    );
  }
}

export default EmployeeImage;

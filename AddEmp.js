import { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddEmp() {

  const frstN = useRef("");
  const lastN = useRef("");
  const gen = useRef("");
  const dob = useRef("");
  const doj = useRef("");
  const eImg = useRef("");
  
  const navigate = useNavigate();
 
  function addEmpHandler() {
    var payload = {
        
        firstName: frstN.current.value,
        lastName: lastN.current.value,
        gender: gen.current.value,
        dob: dob.current.value,
        doj: doj.current.value,
        empImage: eImg.current.value
    };

    axios
      .post("https://localhost:44375/api/Data", payload)
      .then((response) => {
        navigate("/");
      });


  }

  return (
    <>
      <legend>Add Employee Details</legend>
      <form>
        
        <Form.Group className="mb-3" controlId="formFrstN">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" ref={frstN} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastN">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" ref={lastN} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGen">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" ref={gen} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" ref={dob} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDoj">
          <Form.Label>Date of Joining</Form.Label>
          <Form.Control type="date" ref={doj} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEImg">
          <Form.Label>Employee Image</Form.Label>
          <Form.Control type="text" ref={eImg} />
        </Form.Group>
      </form>
      <Button variant="primary" type="button" onClick={addEmpHandler}>
        Submit
      </Button>
    </>
  );


}


  export default AddEmp;
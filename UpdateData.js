import { useRef,useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate, useParams} from "react-router-dom";

function UpdateData() {
  
  const frstN = useRef("");
  const lastN = useRef("");
  const gen = useRef("");
  const dob = useRef("");
  const doj = useRef("");
  const eImg = useRef("");
  
  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    axios.get(`https://localhost:44375/api/Data/${id}`).then((response) => {
      
      frstN.current.value = response.data.firstName;
      lastN.current.value = response.data.lastName;
      gen.current.value = response.data.gender;
      dob.current.value = response.data.dob;
      doj.current.value = response.data.doj;
      eImg.current.value = response.data.empImage;
    });
  }, []);
 
  function updateDataHandler() {
    var payload = {
        
        firstName: frstN.current.value,
        lastName: lastN.current.value,
        gender:gen.current.value,
        dob: dob.current.value,
        doj: doj.current.value,
        empImage: eImg.current.value,
        
    };

    axios
      .put("https://localhost:44375/api/Data", payload)
      .then((response) => {
        navigate("/");
      });


  }

  return (
    <>
      <legend>Update Employee Details</legend>
      <form>
      <Form.Group className="mb-3" controlId="formEmpId">
          <Form.Label>Employee Id</Form.Label>
          <Form.Control type="text" ref={empId} />
        </Form.Group>
       <Form.Group className="mb-3" controlId="formFrstN">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" ref={frstN} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastN">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" ref={lastN} />
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
      <Button variant="primary" type="button" onClick={updateDataHandler}>
        Submit
      </Button>
    </>
  );


}


  export default UpdateData;
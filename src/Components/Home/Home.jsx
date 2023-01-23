import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HomePage(changeDisplay) {

  // const [data, setData] = useState();

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((data) => setData(data.json()))
  //     .catch((error) => console.error(error))
  // }, []);

  return (
    <div>
      <div>

      </div>
      <div>
        <Row className={"home-row"}>
          <Col md={3}>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffujifilm-x.com%2Fglobal%2Fproducts%2Fcameras%2Fgfx100s%2Fsample-images%2F&psig=AOvVaw3wC4VLaD99MeONsk22YcI0&ust=1673905519424000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLCixZDGyvwCFQAAAAAdAAAAABAE" /></Col>
          <Col md={9}>
                      <h3><b>Refer Your Friends, Colleagues and Earn Continuously</b></h3>
                      You can invite your Friends and professional colleagues from Invite tab to register on this platform. Once they register they can access all opportunities on this platform and earn better billing rates. You keep earning every hour your referred candidate works through Unique ERP Inc. As long as your profile is active and referred candidates working through Unique ERP, you keep earning. We will make quarterly payments based on the credits accumulated and payments received for your referred candidates

          </Col>
        </Row>
        <Row className={"home-row"}>
          <Col md={9}>
                      <h3><b>Interview and Earn</b></h3>
                      The key to the success is to find the right candidate for the given opportunity. Interview is the key step to achieve the success. You have strong interviewing skills then Join our interview panel and earn when the candidate you interviewed gets selected to a project or the job opportunity. Your account will be credited with credits based on job country for every successful candidate onboarded to a project or a job. We will make 

          </Col>
          <Col md={3}>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffujifilm-x.com%2Fglobal%2Fproducts%2Fcameras%2Fgfx100s%2Fsample-images%2F&psig=AOvVaw3wC4VLaD99MeONsk22YcI0&ust=1673905519424000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLCixZDGyvwCFQAAAAAdAAAAABAE" />

          </Col>
        </Row>
        <Row className={"home-row"}>
          <Col md={3}>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffujifilm-x.com%2Fglobal%2Fproducts%2Fcameras%2Fgfx100s%2Fsample-images%2F&psig=AOvVaw3wC4VLaD99MeONsk22YcI0&ust=1673905519424000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLCixZDGyvwCFQAAAAAdAAAAABAE" />
          </Col>
          <Col md={9}>
            Blah Blah Blah
          </Col>
        </Row>
      </div>
    </div>
  );
}
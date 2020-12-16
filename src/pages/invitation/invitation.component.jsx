import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Profile from '../../assets/img/profile/profile.jpeg'
import Image from 'react-bootstrap/Image'
import Container  from "react-bootstrap/Container";


const Invitation = () => {
    return (
        <div>
             <div >
            <h1 className="pt-3 text-center font-details pb-3" 
            style={{ 
                fontSize:40,
                 color: 'black',
                  textAlign: "center",
                   paddingTop: "100px"
                
                 }}>
                     <strong>
                4th BIRTHDAY PARTY..!!
                </strong>
            </h1>
            
            <Container>
            <Row className="pt-3 pb-5 align-items-center">
               <Col xs={12} md={6}>
                  <Row className="justify-content-center mb-2 mr-2">
                   <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid/>
                  </Row>
              </Col>
              
              <Col xs={12} md={6}>
                  
               <Row className=" align-items-start  my-details rounded">
                 <h1><strong>&nbsp;Ishaaq is turning </strong></h1>
                <br />
                </Row>
                <Row className="d-flex justify-content-center flex-wrap" >
                <h1><strong>&nbsp;Four On</strong> </h1>
                <br />
                <br />
                <br />
                 <br />
                 <h1><strong>&nbsp;December 20th.</strong> </h1>
                 <br />
                 <br />
                <br />
                <h1><strong> Join as we celebrate his Birthday.</strong></h1>
                <br />
                 <br />
                <br />
                <br />
                <h1 ><strong>&nbsp;MDS Manzil,Bangalore. </strong></h1>
                <br /> <br />
                <h1><strong></strong></h1>
                <h1><strong>MR & MRs ALLABAKASH</strong></h1>

               </Row>
               
              </Col>
           </Row>
            </Container>
        </div>
        </div>



    )
}

export default Invitation

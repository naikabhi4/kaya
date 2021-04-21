import React from 'react'
import { Card, Button, Col, Container, Row, Carousel } from 'react-bootstrap'
// import Button from '@material-ui/core/Button';
import "./styles/Home.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useHistory } from 'react-router';
function Home() {
  const history =useHistory();
  const questions = () =>{
    history.push("/questions");
  }

    return (
        <Container className="container1">
        <div className="covers">
        <Row className="row1">
    <Col className="info" md={6} >
    <div className="texts">
     <h1>Lorem ipsum dolor sit ? </h1>
     <p>loren ipsum loren ipsum loren ipsun loren loren</p>
     <Button className="button" onClick={questions}  >Start Diagnosis</Button>
    </div>
   </Col>
   <Col className="pict" md={6} >
    <img src="https://s3-alpha-sig.figma.com/img/9d5b/29c8/67de38e2b09d02571d8161e7c503415a?Expires=1620000000&Signature=fTMSc1cDBzW3b0O6mRe0fWrqE4gYIxyCNdnvfCj7FhkNbWbUXdWf-Bh3CwUxXNLbu3EimtR0MBtA-BWiv7w9ghEmqOtAwQ0GNPN5IpOV8HzHvls5SrdDslMIpiWAL1GOEdqntPIxKu6Q68MnNAWpKjFI8SiMhJE2IogAeCb~RovR~-rqmKIE-1jyCo46IoHUcxZo-RvZW9rfb6n7FYTKUDl47m7rf3fzbdXaKhzX6mvZV6UiypzeuPISBVBHewmg9IgYg4bJbu1W1YpQiVErqX7HuQlyLisj~~Plbjno4eEpYqE4sNim1m05yXPiLbcyHmFSn3tkEpaI0nyWiWJXUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=""/></Col>
  </Row>
       
 
  <Row className="row2">
  <Col className="calendar" md={12} sm={12} >
  <p>Last Visited</p>
  <Calendar/>
  </Col>
  <Col className="product" sm={12} lg={12}>
    <p>Last diagonal Report</p>
    <div className="cards">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.pinclipart.com/picdir/big/26-265789_clipart-transparent-beauty-products-clipart-png-download.png" />
  <Card.Body>
    <Button variant="primary" className="cardbtn">View Report</Button>
  </Card.Body>
</Card>
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.pinclipart.com/picdir/big/26-265789_clipart-transparent-beauty-products-clipart-png-download.png" />
  <Card.Body>
    <Button variant="primary"  className="cardbtn" >View Report</Button>
  </Card.Body>
</Card>
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.pinclipart.com/picdir/big/26-265789_clipart-transparent-beauty-products-clipart-png-download.png" />
  <Card.Body>
    <Button variant="primary"  className="cardbtn">View Report</Button>
  </Card.Body>
</Card>
    </div>
     </Col>
    </Row>
</div>

   <Row className="productrow">
  
   <Col className="recomendation" sm={12} lg={12}>
    <p>Recommended Product for Oily Skin</p>
    <div className="reccard">
    <Card  className="cosmetic" style={{ width: '15rem' }} lg={3} sm={12}>
  <Card.Img variant="top" src="https://www.pinclipart.com/picdir/big/26-265789_clipart-transparent-beauty-products-clipart-png-download.png" />
  <Card.Body>
    <Button variant="primary" className="cardbtn">View Report</Button>
  </Card.Body>
</Card>
    <Card className="cosmetic"  style={{ width: '15rem' }} lg={3} sm={12}>
  <Card.Img variant="top" src="https://www.pinclipart.com/picdir/big/26-265789_clipart-transparent-beauty-products-clipart-png-download.png" />
  <Card.Body>
    <Button variant="primary" className="cardbtn">View Report</Button>
  </Card.Body>
</Card>
    <Card className="cosmetic"  style={{ width: '15rem' }} lg={3} sm={12}>
  <Card.Img variant="top" src="https://www.pinclipart.com/picdir/big/26-265789_clipart-transparent-beauty-products-clipart-png-download.png" />
  <Card.Body>
    <Button variant="primary" className="cardbtn">View Report</Button>
  </Card.Body>
</Card>
 <Card className="cosmetic"  style={{ width: '15rem' }} lg={3} sm={12}>
  <Card.Img variant="top" src="https://www.pinclipart.com/picdir/big/26-265789_clipart-transparent-beauty-products-clipart-png-download.png" />
  <Card.Body>
    <Button variant="primary"  className="cardbtn" >View Report</Button>
  </Card.Body>
</Card>
    </div>
     </Col>
   
   </Row>
   <Row className="productrow2">
  
  <Col className="recomendation" sm={12}   lg={12}>
   <p>Recommended Product for Oily Skin</p>
   <div className="reccard">
   <Card  className="cosmetic" style={{ width: '15rem' }} lg={3} sm={12}>
 <Card.Img variant="top" src="https://www.pinclipart.com/picdir/big/26-265789_clipart-transparent-beauty-products-clipart-png-download.png" />
 <Card.Body>
   <Button variant="primary" className="cardbtn">View Report</Button>
 </Card.Body>
</Card>
   <Card className="cosmetic"  style={{ width: '15rem' }} lg={3} sm={12}>
 <Card.Img variant="top" src="https://www.pinclipart.com/picdir/big/26-265789_clipart-transparent-beauty-products-clipart-png-download.png" />
 <Card.Body>
   <Button variant="primary" className="cardbtn">View Report</Button>
 </Card.Body>
</Card>
   <Card className="cosmetic"  style={{ width: '15rem' }} lg={3} sm={12}>
 <Card.Img variant="top" src="https://www.pinclipart.com/picdir/big/26-265789_clipart-transparent-beauty-products-clipart-png-download.png" />
 <Card.Body>
   <Button variant="primary" className="cardbtn">View Report</Button>
 </Card.Body>
</Card>
<Card className="cosmetic"  style={{ width: '15rem' }} lg={3} sm={12}>
 <Card.Img variant="top" src="https://www.pinclipart.com/picdir/big/26-265789_clipart-transparent-beauty-products-clipart-png-download.png" />
 <Card.Body>
   <Button variant="primary" size="small"  className="cardbtn btn-sm" >View Report</Button>
 </Card.Body>
</Card>
   </div>
    </Col>
  
  </Row>
  <Row className="carousel">
    <Col>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src="https://s3-alpha-sig.figma.com/img/62d5/bff1/5f9abe0685acf525ac35a48360da6cb1?Expires=1620000000&Signature=HTFw-M~zyZ0G-t6jxhIL30jnRmt0DBROEzUydf4f8KcuGirzqsRAlDQBhrhgjyNQ-v4XepaXtYhL6psCcLhBuiEO8rwWKcPOBS-~Hss-DsZmIULtb0Jn99Qz9jIfj054dm1vD5W-v1sbJZDYmciq4B0jASSL8P~Wh80~jzxLAVVsEgijAJNoiA3ZUSYAlLTbYVmgV130sADTh7TasCeSsJNJebXeCakZjFVfjfF5Fgb5qqnDvHO~xPFdenXNKheunn~Evt4QSV3XZeV0fVP~J9yXZJZlUzuP6xBl-fnrVBLRXH6XCupY1q25cTCYZqXGUqGs0Tl~IhoZeXE9O9bnxQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src="https://s3-alpha-sig.figma.com/img/62d5/bff1/5f9abe0685acf525ac35a48360da6cb1?Expires=1620000000&Signature=HTFw-M~zyZ0G-t6jxhIL30jnRmt0DBROEzUydf4f8KcuGirzqsRAlDQBhrhgjyNQ-v4XepaXtYhL6psCcLhBuiEO8rwWKcPOBS-~Hss-DsZmIULtb0Jn99Qz9jIfj054dm1vD5W-v1sbJZDYmciq4B0jASSL8P~Wh80~jzxLAVVsEgijAJNoiA3ZUSYAlLTbYVmgV130sADTh7TasCeSsJNJebXeCakZjFVfjfF5Fgb5qqnDvHO~xPFdenXNKheunn~Evt4QSV3XZeV0fVP~J9yXZJZlUzuP6xBl-fnrVBLRXH6XCupY1q25cTCYZqXGUqGs0Tl~IhoZeXE9O9bnxQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src="https://s3-alpha-sig.figma.com/img/62d5/bff1/5f9abe0685acf525ac35a48360da6cb1?Expires=1620000000&Signature=HTFw-M~zyZ0G-t6jxhIL30jnRmt0DBROEzUydf4f8KcuGirzqsRAlDQBhrhgjyNQ-v4XepaXtYhL6psCcLhBuiEO8rwWKcPOBS-~Hss-DsZmIULtb0Jn99Qz9jIfj054dm1vD5W-v1sbJZDYmciq4B0jASSL8P~Wh80~jzxLAVVsEgijAJNoiA3ZUSYAlLTbYVmgV130sADTh7TasCeSsJNJebXeCakZjFVfjfF5Fgb5qqnDvHO~xPFdenXNKheunn~Evt4QSV3XZeV0fVP~J9yXZJZlUzuP6xBl-fnrVBLRXH6XCupY1q25cTCYZqXGUqGs0Tl~IhoZeXE9O9bnxQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </Col>
  </Row>
  <Row>
    <Col className="footer">
      <h1>Footer</h1>
      <p>Copyright 2021 by Kaya Clinic</p>
    </Col>
  
  </Row>
</Container>

    )
}

export default Home

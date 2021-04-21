import React from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import "./styles/Past.css"
function Past() {
    return (
        <div>
            <Container className="cardinfo">
                <Row>
                <Card className="cards" style={{ width: '10rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      This is product
    </Card.Text>
    <Button className="card-btn" variant="primary">View Report</Button>
  </Card.Body>
</Card>
 <Card className="cards" style={{ width: '10rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
     This is product
    </Card.Text>
    <Button className="card-btn" variant="primary">View Report</Button>
  </Card.Body>
</Card>
 <Card className="cards" style={{ width: '10rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
     This is product
    </Card.Text>
    <Button className="card-btn" variant="primary">View Report</Button>
  </Card.Body>
</Card>
                </Row>
            </Container>
        </div>
    )
}

export default Past

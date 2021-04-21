import { Button } from '@material-ui/core'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./styles/Upload.css"

function Upload() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="uploadcol">
                     <div className="upload">
                     <h1>Image</h1>
                         <img src="http://www.pngall.com/wp-content/uploads/2/Upload-Transparent.png" alt=""/>
                         <p>Drag or drop Image here</p>
                     </div>
                     <div className="nextbtn">
                         <Button className="next">Next</Button>
                     </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Upload

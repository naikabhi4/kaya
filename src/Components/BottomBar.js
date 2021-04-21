
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./styles/BottomBar.css"
import { useHistory } from 'react-router-dom'

function BottomBar() {
    const[toggle,setToggle] = useState(0)
    const history = useHistory()

    const toggletab = (index) => {
        setToggle(index)
       history.push(`/${index}`)
    }
    return (
       <Container className="container">
           <Row className="row">
               <Col className="col1" >
                  
               </Col>
               <Col  className={toggle===1 ? "active-tab":"col1"} onClick={()=>toggletab(1)
                         } >
                   Know Your Skin
               </Col>
               <Col  className={toggle===2 ? "active-tab":"col1"} onClick={()=>toggletab(2)} >
                   Measure Improvement
               </Col>
               <Col  className={toggle===3 ? "active-tab":"col1"}  onClick={()=>toggletab(3)} >
                   Past Recommendation
               </Col>
               <Col  className="col1" >
                   
               </Col>
           </Row>
       </Container>
    )
}

export default BottomBar

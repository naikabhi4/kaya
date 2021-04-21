import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import "./styles/Knowskin.css"

function Knowskin() {
    return (
        <div className="knowskin">
          <p>Know Your Skin</p>
            <Container>
                <Col >
                    <Row className="knowcol">
                    <div className="ask">
                    <p>Skin Type</p>
                    <FormControl className="colask" component="fieldset">
                   
      <FormLabel component="legend"> 1 How does the skin on the forehead and nose bridge usually feel?</FormLabel>
      <RadioGroup aria-label="oil" name="gender1" >
        <FormControlLabel value="oily" control={<Radio />} label="oily" />
        
      </RadioGroup>
    </FormControl>
    <FormControl component="fieldset">
      <FormLabel component="legend"> 2 How does the skin on the sides of your nose feel?</FormLabel>
      <RadioGroup aria-label="oil" name="gender1" >
        <FormControlLabel value="oily" control={<Radio />} label="oily" />
        
      </RadioGroup>
    </FormControl>
    <FormControl component="fieldset">
      <FormLabel component="legend"> 3 How does the skin on your cheeks feel?</FormLabel>
      <RadioGroup aria-label="cf" name="gender1" >
        <FormControlLabel value="oily" control={<Radio />} label="oily" />
        
      </RadioGroup>
    </FormControl>
    <FormControl component="fieldset">
      <FormLabel component="legend">4 Which of the following statements would you agree with?</FormLabel>
      <RadioGroup aria-label="oil" name="ms" >
        <FormControlLabel value="oily" control={<Radio />} label="Oily skin- My skin looks extremely shiny and feels sticky" />
        
      </RadioGroup>
    </FormControl>
    <FormControl component="fieldset">
      <FormLabel component="legend"> 5 How does your skin respond to sun exposure/hot humid climate?
behavior after washing your face</FormLabel>
      <RadioGroup aria-label="oil" name="ola" >
        <FormControlLabel value="oily" control={<Radio />} label="Oily skin- Feels fresh and rejuvenated, shine on cheeks, 
forehead and nose" />
        
      </RadioGroup>
    </FormControl>
    <FormControl component="fieldset">
      <FormLabel component="legend">6 How does the skin on the sides of your nose feel?</FormLabel>
      <RadioGroup aria-label="oil" name="sl" >
        <FormControlLabel value="oily" control={<Radio />} label="My skin feels sticky and looks dark-oily" />
        
      </RadioGroup>
    </FormControl>
    </div>
                    </Row>
                </Col>
            </Container>
        </div>
    )
}

export default Knowskin

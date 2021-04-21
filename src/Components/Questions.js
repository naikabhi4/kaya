
import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import "./styles/Questions.css"

import {  Col, Container, Row } from 'react-bootstrap'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

function Questions() {
  const history =useHistory();
 const imageup = () =>{
   history.push("/upload")
 }
    return (
      <>
       <Container>
     <Row>
     <Col className="qcol">
     <h1>General Questions</h1>
     <div className="questions">
     <FormControl component="fieldset">
      <FormLabel className="formlabel" component="legend"> 1 Medical Conditions</FormLabel>
      <RadioGroup aria-label="medical" name="medical" >
      <div className="options">
      <FormControlLabel value="Asthma/Allergies" control={<Radio />} label="Asthma/Allergies" />
        <FormControlLabel value="Hypertension" control={<Radio />} label="Hypertension" />
        <FormControlLabel value="Keloid Tendency" control={<Radio />} label="Keloid Tendency" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </div>
       
        </RadioGroup>
        </FormControl>
        <FormControl component="preg">
        <FormLabel className="formlabel" component="preg"> 2 Are you pregnant</FormLabel>
      <RadioGroup aria-label="preg" name="gender1" >
      <div className="options">
      <FormControlLabel value="pre-yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="pre-no" control={<Radio />} label="No" />
      </div>
       
        
        </RadioGroup>
        </FormControl>
     </div>
     </Col>
     </Row>
     </Container>
     <Container>
       <Row>
         <Col>
           <h1>Skin Type</h1>
           
           <div className="questions">
     <FormControl component="fieldset">
      <FormLabel className="formlabel" component="legend"> 1 How does the skin on the forehead and nose bridge usually feel?</FormLabel>
      <RadioGroup aria-label="medical" name="medical" >
      <div className="options">
      <FormControlLabel value="Oily" control={<Radio />} label="Oily" />
        <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
        <FormControlLabel value="cape" control={<Radio />} label="Change as per enviroment" />
        <FormControlLabel value="hf" control={<Radio />} label="Hot flush" />
        <FormControlLabel value="d" control={<Radio />} label="Dry" />
      </div>
       
        </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
      <FormLabel className="formlabel" component="legend"> 2 How does the skin on the sides of your nose feel?</FormLabel>
      <RadioGroup aria-label="medical" name="medical" >
      <div className="options">
      <FormControlLabel value="Oily" control={<Radio />} label="Oily" />
        <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
        <FormControlLabel value="cape" control={<Radio />} label="Change as per enviroment" />
        <FormControlLabel value="hf" control={<Radio />} label="Hot flush" />
        <FormControlLabel value="d" control={<Radio />} label="Dry" />
      </div>
       
        </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
      <FormLabel className="formlabel" component="legend"> 3 How does the skin on your cheeks feel?</FormLabel>
      <RadioGroup aria-label="medical" name="medical" >
      <div className="options">
      <FormControlLabel value="Oily" control={<Radio />} label="Oily" />
        <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
        <FormControlLabel value="cape" control={<Radio />} label="Change as per enviroment" />
        <FormControlLabel value="hf" control={<Radio />} label="Hot flush" />
        <FormControlLabel value="d" control={<Radio />} label="Dry" />
      </div>
       
        </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
      <FormLabel className="formlabel" component="legend"> 4 Which of the following statements would you agree with?</FormLabel>
      <RadioGroup aria-label="medical" name="medical" >
      <div className="options2">
      <FormControlLabel value="oskin" control={<Radio />} label="Oily skin- My skin looks extremely shiny and feels sticky" />
        <FormControlLabel value="nskin" control={<Radio />} label="Normal skin- My Skin Is Neither Very Oily Nor Very Dry" />
        <FormControlLabel value="cskin" control={<Radio />} label="Combination skin- My cheeks feel a little dry but nose and 
forehead (T-Zone) feel fresh and shiny
" />
        <FormControlLabel value="sskin" control={<Radio />} label="Sensitive skin- My skin feels hot,red and flushed with change 
of temperature/sun exposure
" />
 <FormControlLabel value="skin" control={<Radio />} label="Dry skin- None Of The Above"/>
      </div>
       
        </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
      <FormLabel className="formlabel" component="legend"> 5 Please select the option that best fits your skin current skin 
behavior after washing your face</FormLabel>
      <RadioGroup aria-label="medical" name="medical" >
      <div className="options2">
      <FormControlLabel value="oskin" control={<Radio />} label="Oily skin- My skin looks extremely shiny and feels sticky" />
        <FormControlLabel value="nskin" control={<Radio />} label="Normal skin- My Skin Is Neither Very Oily Nor Very Dry" />
        <FormControlLabel value="cskin" control={<Radio />} label="Combination skin- My cheeks feel a little dry but nose and 
forehead (T-Zone) feel fresh and shiny
" />
        <FormControlLabel value="sskin" control={<Radio />} label="Sensitive skin- My skin feels hot,red and flushed with change 
of temperature/sun exposure
" />
 <FormControlLabel value="skin" control={<Radio />} label="Dry skin- None Of The Above"/>
      </div>
       
        </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
      <FormLabel className="formlabel" component="legend"> 6 How does your skin respond to sun exposure/hot humid climate?</FormLabel>
      <RadioGroup aria-label="medical" name="medical" >
      <div className="options2">
      <FormControlLabel value="mskin" control={<Radio />} label="My skin feels sticky and looks dark-oily" />
        <FormControlLabel value="nskin" control={<Radio />} label="My skin feels the same-normal" />
        <FormControlLabel value="tskin" control={<Radio />} label="The skin on my nose and forehead tend to become very sticky 
and shiny-combination" />
        <FormControlLabel value="fr" control={<Radio />} label="My skin feels hot flushed and red sensitive" />
        <FormControlLabel value="ll" control={<Radio />} label="My face looks like lifeless,dull and patchy dry" />
      </div>
       
        </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
      <FormLabel className="formlabel" component="legend"> 7 Please select the option that best describes your skin behavior to 
Moisturisers/Cosmetics</FormLabel>
      <RadioGroup aria-label="medical" name="medical" >
      <div className="options2">
      <FormControlLabel value="ol" control={<Radio />} label="Oily-I cannot use anything on my face,I tend to get pimples 
immediately" />
        <FormControlLabel value="nr" control={<Radio />} label="Normal- I don’t usually need a moisturiser and am comfortable 
with cosmetics" />
        <FormControlLabel value="com" control={<Radio />} label="Combination- I usually only apply moisturiser on my cheeks and 
don’t get the right kind of cosmetics. The skin on my T-Zone 
differs from full face" />
        <FormControlLabel value="sens" control={<Radio />} label="Sensitive- My skin tends to breakout into rashes,so I use only 
particular products" />
      </div>
       
        </RadioGroup>
        </FormControl>
     </div>
           
         </Col>
       </Row>
     </Container>
     <div className="btn">
     <Button onClick={imageup} className="nxtbtn"> Next</Button>
     </div>
   
     </>
    )
}

export default Questions

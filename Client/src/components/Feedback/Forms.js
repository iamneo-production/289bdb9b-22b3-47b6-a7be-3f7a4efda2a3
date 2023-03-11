import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Col} from 'react-bootstrap';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Alert from 'react-bootstrap/Alert';
import './custom.css';
import Navbar from '../Navbar';
function Forms() {
    const [displayform, setDisplay] = useState(true)
    const [em_value, setEmValue] = useState('')
    const [nm_value, setNmValue] = useState('')
    const [ph_value, setPhValue] = useState()

    const [checked_val, setCheckBoxChecked] = useState([]);
    const [error_msg, setErrorMsg] = useState('Please enter the value for the above field');

    const handleOnChange = (isChecked, value) => {
        let temp = [...checked_val];
        var pre = value.split('_')[0]
        if (isChecked) {
            temp = temp.filter(item => item.split('_')[0] !== pre)
            temp.push(value);
            setCheckBoxChecked(temp);
            return;
        }

        setCheckBoxChecked(temp.filter(item => item !== value));
    };

    const validateForm = ()=>{
        setErrorMsg('Please enter the value for the above field');

        [...document.getElementsByClassName('alert-danger')].forEach(element => {
            element.style.display = "none";
        });
        if(nm_value===''){
            document.getElementById('name_er').style.display = "block";
        }
        else if(em_value===''){
            document.getElementById('email_er').style.display = "block";
        }
        else if(!em_value.includes('.com')||(!em_value.includes('@'))){
            document.getElementById('email_er').style.display = "block";
            setErrorMsg('Invalid Email')
        }
        else if(!ph_value){
            document.getElementById('phone_er').style.display = "block";
        }
        else if(ph_value.length <13){
            document.getElementById('phone_er').style.display = "block";
            setErrorMsg('Invalid Phone number')
        }
        else if(checked_val.length < Object.keys(feedback_type).length){
            let keys = Object.keys(feedback_type)
            checked_val.map((val)=>{
                keys = keys.filter(item => item !== val.split('_')[0])
            })
            keys.map(val =>{
                document.getElementById('er_'+val).style.display = "block";
            })
        }
        else return true;
    };
    
    const formSubmit = (e) =>{
        e.preventDefault();

        if (validateForm())
        {
            var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
            var new_id = 0;
            if(existingEntries == null) existingEntries = [];
            else{
                let lastentry = existingEntries.slice(-1)[0]
                new_id = parseInt(lastentry["id"]) + 1;
            }
            var entry = {
                "id": new_id, 
                "email": em_value,
                "name": nm_value,
                "phone": ph_value,
                "checkbox_values": checked_val,
            };
            // Save allEntries back to local storage
            existingEntries.push(entry);
            localStorage.setItem("allEntries", JSON.stringify(existingEntries));
            setDisplay(false)
        }
        
    };

    const feedback_type = {
        'qos': 'How would you rate the quality of articles and other resources?', 
        'qob': 'How would you rate the interface of the application?',
        'roc': 'How was our chatbot service?',
        'exp': 'Please rate your overall experience.'
    };

    const feedback_opts = ['Excellent', 'Good', 'Fair', 'Bad'];
    
    return (<>
        <Navbar/>
        <Container>
            
            {displayform ? 
            (<Card>
                <Card.Header>
                    <cite id="titlee" title="Source Title">We are committed to providing you with the best
                        experience possible, so we welcome your comments.
                    </cite>
                </Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    Please fill out this questionnaire. 
                    </blockquote>
                    
                </Card.Body>
                <Container className='padding30px'>
                    <Form>
                        <Row>
                            <Col>
                                
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label id="formlabel" className='required-field'>Customer Name</Form.Label>
                                    <Form.Control type="text" required placeholder="E.g. jon snow" value={nm_value} onChange={e => setNmValue(e.target.value)} />
                                    
                                </Form.Group>
                                <Alert variant='danger' id='name_er'>
                                    &#9432;{error_msg}
                                </Alert>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label id="formlabel" className='required-field'>Email address</Form.Label>
                                    <Form.Control type="email" required placeholder="E.g. abc@gmail.com" value={em_value} onChange={e => setEmValue(e.target.value)}/>
                                </Form.Group>
                                <Alert variant='danger' id='email_er'>
                                    &#9432;{error_msg}
                                </Alert>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label id="formlabel" className='required-field'>Phone</Form.Label>
                                    <InputGroup>
                                        <PhoneInput
                                        placeholder="9999999999"
                                        value={ph_value}
                                        onChange={setPhValue}/>
                                    </InputGroup>
                                </Form.Group>
                                <Alert variant='danger' id='phone_er'>
                                    &#9432;{error_msg}
                                </Alert>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            {Object.keys(feedback_type).map((ty)=>(
                                <>
                                    <Col>
                                        <Form.Group className="mb-3" controlId={ty}>
                                            <Form.Label id="formlabel" className='required-field'>{feedback_type[ty]}</Form.Label>
                                            <InputGroup>
                                                <div className="mb-3">
                                                    {feedback_opts.map((opt,key) => (
                                                        <Form.Check className="checkform"
                                                        inline
                                                        label={opt}
                                                        name={`${ty}_feedback_opts`}
                                                        id={`${ty}_${key}`}
                                                        checked={checked_val.includes(ty+'_'+opt)}
                                                        onChange={e => handleOnChange(e.target.checked, ty+'_'+opt)}
                                                        type='checkbox'
                                                        value={opt}
                                                        />
                                                    ))}
                                                </div>
                                            </InputGroup>
                                        </Form.Group>
                                        <Alert variant='danger' id={`er_${ty}`}>
                                            &#9432;{error_msg}
                                        </Alert>
                                    </Col>
                                    {((ty === 'qob')|| (ty === 'exp'))? <Row/>: null}
                                </>
                                ))}
                        
                        </Row>
                        <div class="form-outline mb-4">
                        <label id='anysugg' class="form-label" for="textAreaExample6">Any suggestions?</label>
  <textarea class="form-control" id="textAreaExample6" rows="3"></textarea>
  
</div>
                        <Button className='btn_purp' onClick={e=>formSubmit(e)}>Submit Review</Button>
                    </Form>
                </Container>
            </Card>
            ):(
                <Card bg='light' text='dark' id="thank">
                    <Card.Body>
                        <div  className='padding30px'>
                            <div class="circle">
                            <div class="checkmark"></div>
                            </div>
                        </div>
                        <Card.Text>
                            Thank you for providing the feedback
                        </Card.Text>
                        <Form.Text muted>
                            We will work towards improving your experience
                        </Form.Text>
                        <div className='padding30px'>
                            <Button className='btn_purp' onClick={()=>window.location.href='/submissions'}>Close</Button>
                        </div>
                    </Card.Body>
                </Card>
            )}
            
        </Container>
        <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="/">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="/about">About</a></li>
      <li class="menu__item"><a class="menu__link" href="/articles">Profiles</a></li>
     

    </ul>
    <p>&copy;2023 | All Rights Reserved</p>
  </footer></>
    );
}

export default Forms;
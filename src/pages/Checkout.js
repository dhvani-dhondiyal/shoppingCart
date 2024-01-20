import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import homepageImage from '../assets/images/homepage-image.png'
import underline from '../assets/images/underline.png'
import Button from '../components/elements/Button'
import routes from '../constants/routes.json'
 import { Form, FormGroup, FormLabel } from "react-bootstrap";
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Checkout = () => {
  return (
    <CheckoutWrapper>
      <FormGroup>
      <Form>
      <div class="ui input"><FormLabel >First Name :</FormLabel>
      
      <input type="text" placeholder="First Name"/></div>
      
      <div class="ui-input"><FormLabel >Last Name :</FormLabel><input type="text" placeholder="Last Name"/></div>
      <div class="ui-input"><FormLabel >Email :</FormLabel><input type="text" placeholder="Email"/></div>
      {/* <Image src={homepageImage} alt="people"></Image> */}
      <div class="ui-input"><FormLabel >Address :</FormLabel><input type="text" placeholder="Address"/></div>
      <div class="ui-input"><FormLabel >City :</FormLabel><input type="text" placeholder="City"/></div>
      <div class="ui-input"><FormLabel >State :</FormLabel><input type="text" placeholder="State"/></div>
      <div class="ui-input"><FormLabel >Country :</FormLabel><input type="text" placeholder="Country"/></div>
      <div class="ui-input"><FormLabel >Pincode :</FormLabel><input type="text" placeholder="Pincode"/></div>
      <div class="ui-input"><Form.Check type="checkbox"
        id="custom-switch" label="Cash on delivery" /></div>
      <div class="ui-input">
        <Button content="Place order"
            size="small"
            shape="round"
            color="dark"
            animation="scale"
          ></Button>
      </div>
      </Form>
      </FormGroup>
    </CheckoutWrapper>
  )
}

const CheckoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6rem;
  margin-bottom: 20rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`

const Message = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;

  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    align-items: center;
  }
`

const SmallMessage = styled.div`
  color: ${({ theme }) => theme.colors.grey.dark};
  font-size: 1.9rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-transform: uppercase;

  @media (max-width: 450px) {
    font-size: 1.4rem;
  }
`

const BigMessage = styled.div`
  font-size: 6.4rem;
  font-weight: bold;

  @media (max-width: 1024px) {
    text-align: center;
    margin-bottom: 3rem;
  }

  @media (max-width: 450px) {
    font-size: 5rem;
  }
`

const Underline = styled.img`
  width: 25rem;
  margin-top: -1rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    display: none;
  }
`

const Image = styled.img`
  width: 75rem;
  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: -1;
    width: 100%;
    opacity: 0.4;
    animation: none;
  }

  @media (max-width: 600px) {
    top: 25rem;
  }
`

export default Checkout

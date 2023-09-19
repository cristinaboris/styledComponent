import React from 'react'
import styled from 'styled-components'
import heroImg from '../../assets/hero.png'


const Container = styled.div`
display: flex;
height: 90%;
height: 100vh;
margin-bottom: 100px;

`

const Left = styled.div`
 width: 60%;
 background-color: white;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 @media only screen and (max-width:600px){
  z-index: 2;
  position: relative;
  
}

`
const Right = styled.div`
 width: 40%;
 background-color: white;
 display: flex;
 align-items: center;
 @media only screen and (max-width:600px){
  z-index: 1;
  position: absolute;
};

`
const Title = styled.div`
width: 60%;
font-size: 40px;
font-weight: bold;
color: darkblue;
text-align: center;

@media only screen and (max-width:600px){
  font-size: 30px;
}
`

const Description = styled.p`
width: 70%;
font-size: 20px;
color: gray;
`
const Image = styled.img`
width: 500px;

`

const ButtonContainer = styled.div`
display: flex;
@media only screen and (max-width:600px){
 justify-content: center;
 align-items: center;
}
`

const Button = styled.button`
font-weight: bold;
color: white;
padding: 20px 30px;
background-color: darkblue;
cursor: pointer;
border: 2px solid darkblue;
border-radius: 10px;
background: linear-gradient(to right, pink 50%, darkblue 50%);
background-size: 200% 100%;
background-position: right bottom;
transition: all 0.5s ease-in-out;
margin-left: 5px;

&:hover{
    color: darkblue;
    border: 2px solid blue;
    background-position: left bottom;
}
`

export const Hero = () => {
  return (
    <Container>
        <Left><Title>It-Manegement - IT Support and IT-Services for everyone</Title>
        <Description>Почни свій шлях в IT!
Комп'ютерна школа Hillel — одна з найбільших IT-шкіл в Україні, і з кожним роком ми продовжуємо розвиватися і впроваджувати інновації у навчання. </Description>
<ButtonContainer>
    <Button>About Us</Button>
    <Button>Contact Us</Button>
</ButtonContainer>
</Left>
        <Right><Image src={heroImg}></Image></Right>
     
    </Container>
  )
}

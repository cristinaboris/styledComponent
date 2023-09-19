
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
color: white;
background-color: black;
width: 100%;
margin-top:5% ;
`

const Title = styled.div`
color: white;
font-weight: bold;
font-size: 20px;
padding: 2%;
`
const Description = styled.div`
color: gray;
font-size: 20px;
font-weight: bold;
flex-direction: column;
align-items: center;
width: 30%;
`

const MenuUl = styled.ul`
display: flex;
list-style: none;
flex-direction: column;
padding: 20px;
`
const MenuLi = styled.li`
margin-top: 10px;
font-size: 20px;
font-weight: bold;
color: gray;
cursor: pointer;
&:hover{
  color: white;
}

`

const CopyWrite = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 10%;
background-color: gray;
color: white;
font-size: 20px;

`

export const Footer = () => {
  return (
    <>
    <Container>

        <Description>
            <Title>Amound Us</Title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum sunt amet sit sequi facere, facilis, eos voluptatem molestiae vel quae velit! Numquam magnam harum, doloribus sunt ea reiciendis laudantium.
        </Description>
        <MenuUl>
<MenuLi>Home</MenuLi>
<MenuLi>About Us</MenuLi>
<MenuLi>Services</MenuLi>
<MenuLi>Contact</MenuLi>
<MenuLi>Blog</MenuLi>
</MenuUl>
 <MenuUl>
<MenuLi>Home</MenuLi>
<MenuLi>About Us</MenuLi>
<MenuLi>Services</MenuLi>
<MenuLi>Contact</MenuLi>
<MenuLi>Blog</MenuLi>
</MenuUl>
    </Container>
    <CopyWrite>
  &copy; 2023 Practice
</CopyWrite>
    </>
  )
}

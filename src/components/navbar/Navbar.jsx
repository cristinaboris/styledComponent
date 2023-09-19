import React from 'react'
import styled from 'styled-components'

const Container  = styled.div`
position: fixed;
width: 100%;
height: 10%;
display: flex;
justify-content: space-between;
align-items: center;
background-color:${(props) => props.theme.colors.bgDefault};

@media only screen and (max-width:600px){
display: none;
}

`
const Logo = styled.h1`
font-size: 20px;
text-decoration: underline;
color: ${(props) => props.theme.colors.primary};
cursor: pointer;
`

const MenuUl = styled.ul`
display: flex;
list-style: none;
`
const MenuLi = styled.li`
color${(props) => props.theme.colors.text};
font-size: 20px;
font-weight: bold;
margin-right: 30px;
cursor: pointer;
&:hover{
    color: red;;
}
`

const Button = styled.button`
font-weight: bold;
background-color: darkblue ;
border: 2px solid white;
color: white;
cursor: pointer;
padding: 10px 30px;
border-radius: 10px;
&:hover{
    background-color: red;
}

`

const Left = styled.div`
display: flex;
justify-content: space-around;
flex: 1;
align-items: center;

`
const Center = styled.div`
display: flex;
flex: 2;
@media only screen and (max-width:800px){
display: none;
}
`
const Right = styled.div`
display: flex;
justify-content: space-around;
flex: 1;
@media only screen and (max-width:00px){
display: none;
}
`


const Navbar = () => {
  return (
    <Container>
<Left><Logo>IT Support</Logo></Left>
<Center>
<MenuUl>
<MenuLi>Home</MenuLi>
<MenuLi>About Us</MenuLi>
<MenuLi>Services</MenuLi>
<MenuLi>Contact</MenuLi>
<MenuLi>Blog</MenuLi>
</MenuUl>
</Center>
<Right><Button>Call us Now</Button></Right>
    </Container>
  )
}

export default Navbar
import React from 'react'
import styled from 'styled-components'
import section1 from '../../assets/section1.png'

const Container = styled.div`
background: white;
padding: 10px 20px;
margin-top: 4%;
`

const Wrraper= styled.div`
display: flex;
justify-content: center;
flex-direction: row;
margin: 30px 140px;


`

const Header = styled.div`
font-weight: bold;
font-size: 30px;
color: ${(props) => props.theme.colors.primary};
`
 const Subtitle = styled.div`
 color: ${(props) => props.theme.colors.secondary};
 font-weight: bold;
 `

 const Description = styled.p`
 color: ${(props) => props.theme.colors.textDark}
 `

 const Right = styled.div`
 width:40%`

 const Image = styled.img`
 width: 100%;
 `
const Left = styled.div`
width: 60%;
`

const List = styled.div`
margin-top: 60px;
list-style: none;
width: 100%;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`

const ListItem = styled.li`
color: ${(props) => props.theme.colors.primary};
border: 2px solid white;
max-width: 200px;
text-align: center;
border-left: 5px solid;
padding: 20px 20px;
margin: 2px;
-webkit-box-shadow: 10px 10px 22px 7px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 22px 7px rgba(0,0,0,0.75);
box-shadow: 10px 10px 22px 7px rgba(0,0,0,0.75);
`

export const InfoSection = () => {
  return (
 
    <Container>
    <Wrraper>
    <Left>
    <Header>header</Header>
    <Subtitle>
    subtitle
    </Subtitle>
    <Description>lorem Lorem ffff dsdsd gtgdf afsdfsa gdfgdfsdv sdfasfsfsf</Description>
    <List>
    <ListItem>List Item</ListItem>
    <ListItem>List Item</ListItem>
    <ListItem>List Item</ListItem>
    </List></Left>

    <Right>
    <Image src={section1}/>
    </Right>
    
        </Wrraper>
    </Container>
  )
}

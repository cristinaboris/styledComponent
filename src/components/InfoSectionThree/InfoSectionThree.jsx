import React from 'react'
import styled from 'styled-components'
import section2 from '../../assets/section2.png'
import { Container, Right, Wrraper, Header, Subtitle, List, ListItem ,Description,  Left,Image} from '../styles/styled.Section'

export const InfoSectionThree = () => {
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
    <Image src={section2}/>
    </Right>
    
        </Wrraper>
    </Container>
  )
}

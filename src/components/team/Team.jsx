import React from 'react'
import styled from 'styled-components'
import { Card } from '../styles/styled.Card'
import image1 from '../../assets/staff1.jpg'
import image2 from '../../assets/staff2.jpg'
import image3 from '../../assets/staff3.jpg'
import image4 from '../../assets/staff4.jpg'
import { TextBanner } from '../textBanner/TextBanner'


const Container = styled.div`
background-color: white;
padding: 4%;
`

const Wrraper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`

const TeamCard = styled.div`
margin: 1%;
height: 350px;
width: 280px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
-webkit-box-shadow: 10px 10px 41px 3px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 41px 3px rgba(0,0,0,0.75);
box-shadow: 10px 10px 41px 3px rgba(0,0,0,0.75);

`

const CardImage = styled.img`
height: 300px;
width: 280px;
object-fit: cover;
&:hover{
cursor: pointer;
opacity: 0.8;
}

`
const TextWrapper = styled.div`
display: flex;
flex-direction: column;

` 

const MemberName = styled.div`
color: ${(props) => props.theme.colors.primary};
`
const TeamPosition = styled.div`
color: ${(props) => props.theme.colors.textDark};
`

const Team = () => {
  return (
    <Container>
    <TextBanner title={'Wir union'} subtitle={'Our Team'}/>
    <Wrraper>
        <TeamCard>
        <CardImage src={image1}/>
<TextWrapper>

    <MemberName>name</MemberName>
    <TeamPosition>Position</TeamPosition>
</TextWrapper>

        </TeamCard>
        <TeamCard>
        <CardImage src={image2}/>
<TextWrapper>

    <MemberName>name</MemberName>
    <TeamPosition>Position</TeamPosition>
</TextWrapper>

        </TeamCard>
        <TeamCard>
        <CardImage src={image3}/>
<TextWrapper>

    <MemberName>name</MemberName>
    <TeamPosition>Position</TeamPosition>
</TextWrapper>

        </TeamCard>
        <TeamCard>
        <CardImage src={image4}/>
<TextWrapper>

    <MemberName>name</MemberName>
    <TeamPosition>Position</TeamPosition>
</TextWrapper>

        </TeamCard>
        </Wrraper>
    </Container>
  )
}

export default Team
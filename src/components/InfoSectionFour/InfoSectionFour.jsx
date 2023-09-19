import React from 'react'
import styled from 'styled-components'
import sectionImage from '../../assets/laptopDark.jpg'

const Container = styled.div`
height: ${({Height}) => Height};
padding-top: 2%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
background-image: url(${sectionImage});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
`

const Card = styled.div`
width: 250px;
`

const CardContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Number = styled.div`
font-weight:bold;
font-style: 50px;
color: ${(props) => props.theme.colors.text};
`
const Subtitle = styled.div`
font-weight: bold;
font-style: 20px;
color: white;
`




export const InfoSectionFour = () => {
  return (
    <Container Height={'300px'}><Card>
<CardContent>
    <Number>1M+</Number>
    <Subtitle>Subscribe</Subtitle>
</CardContent>
    </Card>
    <Card>
<CardContent>
    <Number>80K+</Number>
    <Subtitle>Start rating</Subtitle>
</CardContent>
    </Card>
    <Card>
<CardContent>
    <Number>100+</Number>
    <Subtitle>Number of project </Subtitle>
</CardContent>
    </Card>
    <Card>
<CardContent>
    <Number>3000+</Number>
    <Subtitle>Likes</Subtitle>
</CardContent>
    </Card>
    </Container>
  )
}

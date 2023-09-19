import React from 'react'
import styled from 'styled-components'
import sectionImage from '../../assets/laptopDark.jpg'

const Container = styled.div`
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

const Title = styled.div`
color: white;
font-size: 30px;
font-weight: bold;
padding: 2%;
`

const Description = styled.div`
color: white;
width: 40%;
font-weight: lighter;
font-size: 25px;
padding-bottom: 20px ;

`

const TextWrraper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`

export const InfoSectionTwo = () => {
  return (
    <Container>
   <TextWrraper>
   <Title>Title</Title>
<Description> 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odio perferendis quos ullam corrupti! Earum pariatur distinctio, sint quis quod minima perferendis laudantium, sed consequuntur alias eius ex, quaerat asperiores.
N saepe! Quo porro facilis sunt tempore quas odit necessitatibus delectus consectetur eum error, minus atque eveniet nisi harum nam.
! </Description>
<Description> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odio perferendis quos ullam corrupti! Earum pariatur distinctio, sint quis quod minima perferendis laudantium, sed consequuntur alias eius ex, quaerat asperiores.
N saepe! Quo porro facilis sunt tempore quas odit necessitatibus delectus consectetur eum error, minus atque eveniet nisi harum nam.
! </Description></TextWrraper>
    </Container>
  )
}

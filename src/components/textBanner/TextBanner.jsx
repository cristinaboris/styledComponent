import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title = styled.div`
color: darkblue;
`
const Subtitle = styled.div`
font-weight: bold;
font-size: 50px;
margin: 5px;
color: darkblue;
`

export const TextBanner = ({title, subtitle}) => {
  return (
    <Container>
<Title>
{title}
</Title>

<Subtitle>
{subtitle}
</Subtitle>
    </Container>
  )
}

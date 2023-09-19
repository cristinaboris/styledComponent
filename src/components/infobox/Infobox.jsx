import React from 'react'
import styled from 'styled-components'
import { TextBanner } from '../textBanner/TextBanner'
import { Card, CardContent, CardTitle,  Description, Button } from '../styles/styled.Card'

const Container = styled.div`
background: white;
display: flex;
justify-content: center;
flex-wrap: wrap;

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



export const Infobox = () => {
  return (
    <div>
   <TextBanner title={'what we provide'} subtitle={'Our Service'} />
   <Container>
<Card>
  <CardContent>
<CardTitle>
  Title
</CardTitle>
<Description>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi amet laborum veritatis at accusamus iure, aperiam assumenda tempore voluptas sit quod quisquam perferendis similique dolores neque illo officiis ducimus doloremque?
  Esse deserunt facere optio illo repellendus mollitia quis, vitae reiciendis hic laborum sunt a harum, veniam dolorum eveniet ea alias nostrum dolor voluptatum officia laudantium, 
</Description>
<Button>Read More</Button>
  </CardContent>
</Card>
<Card>
  <CardContent>
<CardTitle>
  Title
</CardTitle>
<Description>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi amet laborum veritatis at accusamus iure, aperiam assumenda tempore voluptas sit quod quisquam perferendis similique dolores neque illo officiis ducimus doloremque?
  Esse deserunt facere optio illo repellendus mollitia quis, vitae reiciendis hic laborum sunt a harum, veniam dolorum eveniet ea alias nostrum dolor voluptatum officia laudantium, 
</Description>
<Button>Read More</Button>
  </CardContent>
</Card>
<Card>
  <CardContent>
<CardTitle>
  Title
</CardTitle>
<Description>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi amet laborum veritatis at accusamus iure, aperiam assumenda tempore voluptas sit quod quisquam perferendis similique dolores neque illo officiis ducimus doloremque?
  Esse deserunt facere optio illo repellendus mollitia quis, vitae reiciendis hic laborum sunt a harum, veniam dolorum eveniet ea alias nostrum dolor voluptatum officia laudantium, 
</Description>
<Button>Read More</Button>
  </CardContent>
</Card>
<Card>
  <CardContent>
<CardTitle>
  Title
</CardTitle>
<Description>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi amet laborum veritatis at accusamus iure, aperiam assumenda tempore voluptas sit quod quisquam perferendis similique dolores neque illo officiis ducimus doloremque?
  Esse deserunt facere optio illo repellendus mollitia quis, vitae reiciendis hic laborum sunt a harum, veniam dolorum eveniet ea alias nostrum dolor voluptatum officia laudantium, 
</Description>
<Button>Read More</Button>
  </CardContent>
</Card>
   </Container>
   </div> )
}

/*<Container>

<Title>
  what we provide
</Title>
<Subtitle>Our Servise</Subtitle>
</Container>*/
import React from 'react'
import styled from 'styled-components'
import { Button, Card, CardContent, CardImage, CardTitle, Description } from '../styles/styled.Card'
import card1 from '../../assets/card1.jpg'
import card2 from '../../assets/card2.jpg'
import card3 from '../../assets/card3.png'
import { TextBanner } from '../textBanner/TextBanner'

const Container  = styled.div`
background-color: white;
display: flex;
justify-content: center;
flex-wrap: wrap;
`

const Blogs = () => {
  return (
    <>
    <TextBanner title={'Our Blog'} subtitle={'Recent News'}/>
    <Container>
        <Card>
            <CardContent>
            <CardImage src={card1
            }/>
<CardTitle>
title
</CardTitle>
<Description>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure suscipit, recusandae quis animi tenetur culpa nemo quos repellat tempore architecto molestiae mollitia corporis distinctio rerum soluta ut exercitationem enim? Recusandae.
    Hic null
</Description>
<Button>Read More</Button>

            </CardContent>
        </Card>
        <Card>
            <CardContent>
            <CardImage src={card2
            }/>
<CardTitle>
title
</CardTitle>
<Description>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure suscipit, recusandae quis animi tenetur culpa nemo quos repellat tempore architecto molestiae mollitia corporis distinctio rerum soluta ut exercitationem enim? Recusandae.
    Hic null
</Description>
<Button>Read More</Button>

            </CardContent>
        </Card>
        <Card>
            <CardContent>
            <CardImage src={card3
            }/>
<CardTitle>
title
</CardTitle>
<Description>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure suscipit, recusandae quis animi tenetur culpa nemo quos repellat tempore architecto molestiae mollitia corporis distinctio rerum soluta ut exercitationem enim? Recusandae.
    Hic null
</Description>
<Button>Read More</Button>

            </CardContent>
        </Card>
    </Container>
    </>
  )
}

export default Blogs
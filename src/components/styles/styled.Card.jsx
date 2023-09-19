import styled from "styled-components";

export const Card = styled.div`
width: 350px;
margin: 10px 10px;
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

export const CardContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
flex-direction: column;
`

export const CardTitle = styled.div`
color: darkblue;
`

export const Description = styled.div`
color: gray;
font-size: 15px;
text-align: center;
`

export const Button = styled.a`
color: red;
font-weight: bold;
margin-top: 0px;
cursor: pointer;
`

export const CardImage = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
` 

import styled from "styled-components"

export const Container = styled.div`
background: white;
padding: 10px 20px;
margin-top: 4%;
`

export const Wrraper= styled.div`
display: flex;
justify-content: center;
flex-direction: row-reverse;
margin: 30px 140px;
`

export const Header = styled.div`
font-weight: bold;
font-size: 30px;
color: ${(props) => props.theme.colors.primary};
`
 export const Subtitle = styled.div`
 color: ${(props) => props.theme.colors.secondary};
 font-weight: bold;
 `

 export const Description = styled.p`
 color: ${(props) => props.theme.colors.textDark}
 `

 export const Right = styled.div`
 width:40%`

 export const Image = styled.img`
 width: 100%;
 `
export const Left = styled.div`
width: 60%;
`

export const List = styled.div`
list-style: none;
margin-top: 50px;
width: 100%;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`

export const ListItem = styled.li`
color: ${(props) => props.theme.colors.primary};
border: 2px solid white;
max-width: 200px;
text-align: left;
border-left: 5px solid;
padding: 20px 20px;
margin: 2px;
-webkit-box-shadow: 10px 10px 22px 7px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 22px 7px rgba(0,0,0,0.75);
box-shadow: 10px 10px 22px 7px rgba(0,0,0,0.75);
`
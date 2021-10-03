import styled from "styled-components";
import Facebook from "./img/Facebook.png";

const HeaderBody = styled.div`
display: flex;
background-color: white;
`

const FacebookLogo = styled.img`
`
function HeaderSection(){

    return(
      <HeaderBody>
       <FacebookLogo src={Facebook}/>
      </HeaderBody>
    )
}


export default HeaderSection;
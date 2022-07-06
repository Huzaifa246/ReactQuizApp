import { Link } from "react-router-dom";
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.div`
  text-transform: uppercase;
  font-size: 8vw;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
`


const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Title>
          Project Quiz App
        </Title>
      </Link>
      <hr style={{margin:"10px", width:"100%",backgroundColor: "grey" }}/>
    </Container>
  );
};

export default Header;

import styled  from 'styled-components';

const ErrorContainer = styled.div`
width: "100%";
padding: 10;
marginBottom: 10;
borderRadius: 4;
backgroundColor: "orangered";
textAlign: "center";
color: "white";
textTransform: "capitalize";
`
const ErrorMessage = ({ children }) => {
  return ( 
    <ErrorContainer>
      {children}
    </ErrorContainer>
  );
};

export default ErrorMessage;

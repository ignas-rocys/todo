import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props) =>
    props.background ? props.background : "transparent"};
  border: none;
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : null)};
  font-size: 18px;
  color: ${props => props.color ? props.color : '#b9b9b6'};
  padding: ${props => props.padding ? props.padding : '10px'};
  cursor: pointer;
`;

export const Button = ({ clickHandler, name, background,color, borderRadius, padding }) => {
  return (
    <StyledButton
      onClick={clickHandler}
      background={background}
      borderRadius={borderRadius}
      padding={padding}
      color={color}
    >
      {name}
    </StyledButton>
  );
};

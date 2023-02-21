import styled from "@emotion/styled";

const StyledButton = styled.button`
  color: white;
  display: block;
  min-height: 45px;
  width: 100%;
  font-size: 1.4rem;
  padding: 0.2em 0.5em;
  background: linear-gradient(90.41deg, #711f8d 1.14%, #a818da 100%);
  border-radius: 5px;
`;

const Button = (props: any) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default Button;

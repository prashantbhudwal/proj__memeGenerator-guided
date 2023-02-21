import styled from "@emotion/styled";
// @ts-ignore
import { ReactComponent as TrollLogo } from "/src/assets/troll__logo.svg";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.75em;
  height: 65px;
  padding: 0 3em;
  background: linear-gradient(90deg, #672280 1.18%, #a626d3 100%);
  color: white;
  & .header__logo {
    & .logoSvg {
      height: 50px;
      width: 50px;
    }
  }

  & .header__title {
    font-size: 1.2rem;
    font-family: "Karla";
    font-weight: 600;
    margin-right: auto;
  }

  & .header__subtitle {
    display: block;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="header__logo">
        <TrollLogo className="logoSvg" />
      </div>
      <h1 className="header__title">Meme Generator</h1>
      <p className="header__subTitle">A Guided React Project</p>
    </StyledHeader>
  );
};

export default Header;

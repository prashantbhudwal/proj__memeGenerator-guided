import styled from "@emotion/styled";
import Button from "./Button";
import memeObject from "../memeData";
import { useState } from "react";

const StyledPromptForm = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Karla";

  & .form {
    display: flex;
    flex-direction: column;
    gap: 1em;

    & .inputPanel {
      display: flex;
      gap: 1em;

      & .form__input {
        min-width: 300px;
        padding: 0.3em 0.5em;
        font-size: 1.5rem;
        border: 1px solid #d5d4d8;
        border-radius: 5px;
      }
      & .form__input::placeholder {
        color: gray;
        font-size: 1rem;
      }
    }
  }
`;
const MemeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & .text {
    font-family: "Impact", sans-serif;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    text-shadow: 2px 2px 0 black, -1px -1px 0 #000, 1px -1px 0 #000,
      -1px 1px 0 #000, 1px 1px 0 #000;
  }

  & .topText {
    position: absolute;
    top: 15px;
    left: 0;
  }

  & .bottomText {
    position: absolute;
    bottom: 15px;
    left: 0;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const PromptForm = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const handleClick = function (event: any) {
    event.preventDefault();
    const memeArray = memeObject.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const randomImageUrl = memeArray[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: randomImageUrl }));
  };

  const handleChange = function (event: any) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  };

  return (
    <StyledPromptForm>
      <form action="" className="form">
        <div className="inputPanel">
          <label>
            <input
              type="text"
              name="topText"
              id="inputTopLine"
              className="form__input"
              placeholder="Top Text"
              value={meme.topText}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type="text"
              name="bottomText"
              id="inputBottomLine"
              className="form__input"
              placeholder="Bottom Text"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </label>
        </div>
        <Button onClick={(event: any) => handleClick(event)}>
          Get a new meme image
        </Button>
        {meme.randomImage && (
          <MemeSection>
            <h2 className="topText text">{meme.topText}</h2>
            <StyledImage src={meme.randomImage} alt="Meme Image" />
            <h2 className="bottomText text">{meme.bottomText}</h2>
          </MemeSection>
        )}
      </form>
    </StyledPromptForm>
  );
};
export default PromptForm;

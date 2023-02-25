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
        color: #0d0d0d;
        font-size: 1rem;
      }
    }
  }
`;

const PromptForm = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [memObject, setMemObject] = useState(memeObject);

  const handleClick = function (event: any) {
    event.preventDefault();
    const memeArray = memeObject.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const randomImageUrl = memeArray[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: randomImageUrl }));
  };

  return (
    <StyledPromptForm>
      <form action="" className="form">
        <div className="inputPanel">
          <label>
            <input
              type="text"
              name="topLine"
              id="inputTopLine"
              className="form__input"
              placeholder="main line"
            />
          </label>
          <label>
            <input
              type="text"
              name="bottomLine"
              id="inputBottomLine"
              className="form__input"
              placeholder="bottom line"
            />
          </label>
        </div>
        <Button onClick={(event: any) => handleClick(event)}>
          Get a new meme image
        </Button>
      </form>
    </StyledPromptForm>
  );
};
export default PromptForm;

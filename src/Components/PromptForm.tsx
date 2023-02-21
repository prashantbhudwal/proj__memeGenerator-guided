import styled from "@emotion/styled";
import Button from "./Button";

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
        <Button>Get a new meme image</Button>
      </form>
    </StyledPromptForm>
  );
};
export default PromptForm;

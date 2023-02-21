import { Global } from "@emotion/react";
import Header from "./Components/Header";
import globalStyles from "./globalStyles";
import PromptForm from "./Components/PromptForm";
import styled from "@emotion/styled";

export default function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <PromptForm />
    </>
  );
}

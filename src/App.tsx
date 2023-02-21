import { Global } from "@emotion/react";
import Header from "./Components/Header";
import globalStyles from "./globalStyles";

export default function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      The App Works
    </>
  );
}

import { Global } from "@emotion/react";
import globalStyles from "./globalStyles";

export default function App() {
  return (
    <>
      <Global styles={globalStyles} />
      The App Works
    </>
  );
}

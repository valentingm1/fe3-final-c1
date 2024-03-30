import React from "react";
import { useContextGlobal } from "./utils/global.context";

const Footer = () => {
  const { state } = useContextGlobal();
  const darkmode = state.theme ? "dark" : "";

  return (
    <footer className={`${darkmode}`}>
      <p>Powered by</p>
      <img src="/images/DH.png" alt="DH-logo" />
    </footer>
  );
};

export default Footer;

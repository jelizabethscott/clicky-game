import React from "react";
import "./Footer.css";

const Header = props => (
  <div className="footer">
    <div className="footerTitle">{props.children}</div>
  </div>
);

export default Footer;
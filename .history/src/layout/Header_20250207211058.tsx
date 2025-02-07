import React from "react";
import ButtonField from "../components/ButtonField";

const Header = () => {
  return (
    <div className="flex-basic-between" style={{ padding: "1.5rem 4rem" }}>
      <div style={{ fontSize: "40px", fontWeight: 600 }}>Doffy</div>
      <ButtonField > Create Pizza</ButtonField>
    </div>
  );
};

export default Header;

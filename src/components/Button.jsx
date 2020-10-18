import React from "react";
import { Button } from "antd";

const Btn = () => {
  return (
    <Button
      onClick={(val) => (val.target.innerText = "Clicked")}
      type="primary"
    >
      Button
    </Button>
  );
};

export default Btn;

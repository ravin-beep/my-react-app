// src/components/ui/Button.js
import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

  export {Button};

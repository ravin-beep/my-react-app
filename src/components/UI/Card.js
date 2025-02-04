// src/components/ui/Card.js
import React from "react";

const Card = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

const CardContent = ({ children }) => {
  return <div>{children}</div>;
};

export { Card, CardContent };

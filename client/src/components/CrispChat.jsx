import { Crisp } from "crisp-sdk-web";
import React, { useEffect } from "react";
import dotenv from "dotenv";

// dotenv.config();

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("ecc409d8-6c7a-4e6a-8654-386efcc45d3f");
  }, []);
  return <div></div>;
};

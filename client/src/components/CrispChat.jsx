import { Crisp } from "crisp-sdk-web";
import React, { useEffect } from "react";


export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure(import.meta.env.VITE_CRISP_ID);
  }, []);
  return <div></div>;
};

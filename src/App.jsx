import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";
import React from "react";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />;
      </UserProvider>
    </RecoilRoot>
  );
}

import React from "react";
import Main from "../components/main/Main";
import Header from "../components/header/Header";
import MemoSection from "./../components/memoSection/MemoSection";
import styled from "styled-components";
function main() {
  return (
    <>
      <Header />
      <Layout>
        <MemoSection />
        <Main />
      </Layout>
    </>
  )
  
}

export default main;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

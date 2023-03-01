import { Link } from "react-router-dom";
import styled from "styled-components";

const Headerwrap = styled.div`
  height: 79px;
  display: flex;
  line-height: 79px;
  align-items: center;
  border-bottom: 1px solid #eee;
`;

const Link2 = styled(Link)`
  font-family: "Gabriela";
  font-size: 30px;
  width: 15.62%;
  box-sizing: border-box;
  padding-left: 50px;
`;
const Right = styled.div`
  border-left: 1px solid #eee;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding-right: 50px;
  justify-content: end;
  width: calc(100% - 15.62%);
`;

const Button = styled.button`
  margin-left: 20px;
  padding-left: 24px;
  position: relative;
  background: none;
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 4px;
    height: 4px;
    background: #000;
    content: "";
    border-radius: 4px;
  }
`;
export { Headerwrap, Link2, Right, Button };

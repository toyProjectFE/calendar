import { Link } from "react-router-dom";
import styled from "styled-components";

const Headerwrap = styled.div`
    height:79px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 50px;
    border-bottom:1px solid #eee;
`

const Link2 = styled(Link)`
    font-family: 'Gabriela';
    font-size:30px;
    padding-right:120px;
    border-right:1px solid #ddd;
    height:79px;
    line-height: 79px;
`
const Right = styled.div`
    display: flex;
    align-items: center;
`

const Button = styled.button`
    margin-left:20px;
    padding-left:24px;
    position:relative;
    background:none;
    &::after{
        position: absolute;
        left: 0;
        top:0;
        bottom: 0;
        margin: auto;
        width:4px;
        height:4px;
        background:#000;
        content: '';
        border-radius: 4px;
    }
`
export {Headerwrap,Link2,Right,Button}

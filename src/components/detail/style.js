import styled from "styled-components";
const Detaillbg = styled.div`
  background: #f8f8f8;
  padding: 50px;
  width: 73.75%;
  height: calc(100vh - 80px);
  overflow: hidden;
  box-sizing: border-box;
`;
const TOPbox = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Tapboxli = styled.li`
  margin-right: 20px;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;
const Tapboxlink = styled.a`
  &.Textcolor01 {
    position: relative;
    color: #c650f0;
  }
  &.Textcolor02 {
    color: #b7b7b7;
  }
  &.Textcolor01::after {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: #c650f0;
    bottom: -5px;
    left: 0;
  }
`;
const Btnbox = styled.div`
  overflow-y: scroll;
  height: 656px;
  padding: 4px;
  &::-webkit-scrollbar {
    width: 1px;
    background: #f8f8f8;
  }
`;
const Allbox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  &.block {
    display: flex;
  }
  &.hidden {
    display: none;
  }
`;
const Allboxli = styled.li`
  margin-right: 2.12%;
  margin-top: 28px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 200px;
  width: 23.4%;
  padding: 25px;
  box-sizing: border-box;
  position: relative;
  &:nth-child(4n) {
    margin-right: 0;
  }
  &:nth-child(-n + 4) {
    margin-top: 0;
  }
  &:hover {
    border: 1px solid #c650f0;
  }
`;

const Button = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 26px;
  outline: 0;
  border: 0;
  line-height: 24px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  &:hover {
    background: #c650f0;
  }
  &.on {
    background: #c650f0;
  }
`;

const Title = styled.em`
  margin-top: 40px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const Content = styled.p`
  line-height: 20px;
  margin-top: 15px;
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  color: #555;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

// ----------------------------------여기서부터 오른쪽 등록 관련 css 입니다. ----------------------------------

const Detailbox = styled.div`
  display: flex;
  justify-content: center;
`;
const Rightbg = styled.div`
  width: calc(100% - 73.75%);
  height: calc(100vh - 80px);
  background: #fff;
  display: flex;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 60px 50px;
  &::-webkit-scrollbar {
    width: 1px;
    background: #fff;
  }
`;
const Rightcenter = styled.form`
  width: 100%;
`;
const Box = styled.div`
  margin-top: 40px;
  font-size: 0;
  width: 100%;
  &:nth-child(1) {
    margin-top: 0;
  }
`;
const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 20px;
  display: block;
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  background: #f8f8f8;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  border: 1px solid #f8f8f8;
  &::placeholder {
    color: #e2e2e2;
    font-family: "Pretendard";
  }
  &:focus {
    border: 1px solid #c650f0;
  }
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 300px;
  background: #f8f8f8;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  border: 1px solid #f8f8f8;
  &::placeholder {
    color: #e2e2e2;
    font-family: "Pretendard";
  }
  &:focus {
    border: 1px solid #c650f0;
  }
`;
const RightButton = styled.button`
  width: 100%;
  height: 50px;
  text-align: center;
  border: 0;
  outline: 0;
  background: #c650f0;
  font-weight: 600;
  color: #fff;
  font-family: "Pretendard";
  border-radius: 5px;
  margin-top: 30px;
  cursor: pointer;
`;

// -------------------------------------------- 모달 css -------------------------------------
const Modalbg = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 99999;
`;
const Modalcon = styled.div`
  width: 400px;
  height: 520px;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  margin: auto;
  border-radius: 10px;
  padding: 40px 40px;
  overflow: hidden;
`;

const Modaltitle = styled.em`
  display: block;
  font-size: 18px;
  line-height: 26px;
  font-weight: 500;
  margin: 20px 0;
  border-top: 1px solid #eee;
  padding-top: 25px;
`;
const Modalbtnwrap = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  font-size: 0;
  display: flex;
  align-items: center;
`;
const Modalbtn1 = styled.button`
  width: 100px;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  background: #fff;
  color: #c650f0;
  border: 1px solid #c650f0;
  cursor: pointer;
`;
const Modalbtn2 = styled.button`
  width: 100px;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  background: #c650f0;
  color: #fff;
  margin-left: 10px;
  border: 0;
  cursor: pointer;
`;
const Modalbtn3 = styled.button`
  width: 100px;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  background: #f7f7f7;
  margin-left: 10px;
  border: 0;
  cursor: pointer;
`;
export {
  Rightcenter,
  RightButton,
  Label,
  Input,
  Box,
  Textarea,
  Content,
  Title,
  Button,
  Allboxli,
  Allbox,
  Tapboxlink,
  Tapboxli,
  TOPbox,
  Detaillbg,
  Btnbox,
  Detailbox,
  Rightbg,
  Modalbg,
  Modalcon,
  Modaltitle,
  Modalbtnwrap,
  Modalbtn1,
  Modalbtn2,
  Modalbtn3,
};

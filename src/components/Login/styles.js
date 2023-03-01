import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const StyledDiv = styled.div`
  width: 30%;
  align-self: center;
  padding: 0 5%;
  box-sizing: border-box;
`;
const Loginbox = styled.div`
  display: flex;
  flex-direction: column;
`;
const LoginTitle = styled.h3`
  font-size: 36px;
  line-height: 1;
  font-weight: 600;
  margin-bottom: 30px;
  width: 100%;
`;
const FormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const IdInput = styled.input`
  width: 100%;
  height: 50px;
  background: #f8f8f8;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  border: 1px solid #f8f8f8;
  margin-bottom: 15px;
  &::placeholder {
    color: #e2e2e2;
    font-family: "Pretendard";
  }
  &:focus {
    border: 1px solid #c650f0;
  }
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: rgb(199, 80, 240);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  line-height: 50px;
  text-align: center;
  outline: 0;
  border: 0;
`;

const LoginBtnKaKAo = styled.button`
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: rgb(250, 255, 0);
  color: #000;
  font-weight: 600;
  cursor: pointer;
  line-height: 50px;
  text-align: center;
  outline: 0;
  border: 0;
`;
const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Liha = styled.div`
  display: flex;
  justify-content: center;
  background-color: beige;
  align-items: center;
  font-weight: 600;
  font-size: 50px;
  width: 70%;
`;

function LabledInput({ id, label, placeholder, value, onChange }) {
  return (
    <StyledContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  height: 30px;
  width: 300px;
  border: 0;
  border-radius: 5px;
  padding-left: 10px;
`;

const StyledLabel = styled.label`
  margin-right: 10px;
  font-weight: 700;
`;

const SignUpBtn = styled.button`
  background-color: transparent;
  border: 1px solid black;
  cursor: pointer;
`;
export {
  LoginTitle,
  Liha,
  MainContainer,
  StyledDiv,
  IdInput,
  LoginBtn,
  LoginBtnKaKAo,
  DivContainer,
  FormContainer,
  Loginbox,
  LabledInput,
  SignUpBtn,
};

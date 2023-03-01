import React, { useState } from "react";
import {
  Liha,
  MainContainer,
  IdInput,
  StyledDiv,
  LoginTitle,
  LoginBtn,
  LoginBtnKaKAo,
  DivContainer,
  FormContainer,
  LabledInput,
} from "./styles";
import { useMutation, useQueryClient } from "react-query";
import { loginUser } from "../../axios/api";

function Login() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation(loginUser, {
    onSuccess: (data) => {
      console.log("data", data);
      queryClient.invalidateQueries("user");
    },
  });

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleUserPwChange = (event) => {
    setUserPw(event.target.value);
  };

  const handleSubmitButtonClick = async (event) => {
    event.preventDefault();

    const loginUser = {
      email: userId,
      password: userPw,
    };
    mutation.mutate(loginUser);
  };

  return (
    <MainContainer>
      <StyledDiv>
        <LoginTitle>Login</LoginTitle>
        <form onSubmit={handleSubmitButtonClick}>
          <FormContainer>
            <LabledInput
              id="userId"
              label="아이디"
              placeholder="아이디를 입력해주세요."
              value={userId}
              onChange={handleUserIdChange}
            />

            <LabledInput
              id="userId"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              value={userPw}
              onChange={handleUserPwChange}
            />
            <LoginBtn>Login</LoginBtn>
            <LoginBtnKaKAo>kakao Login</LoginBtnKaKAo>

            <DivContainer>
              <span>아직 회원 아님?</span>
              <span>회원가입</span>
            </DivContainer>
          </FormContainer>
        </form>
      </StyledDiv>
      <Liha>동영상이지롱</Liha>
    </MainContainer>
  );
}

export default Login;

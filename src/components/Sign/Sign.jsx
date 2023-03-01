import React, { useState } from "react";
import {
  MainContainer,
  FormContainer,
  ArgeeContainer,
  CheckContainer,
  SignTitle,
  TitleContainer,
  FlexConatainer,
  LabledInput,
  CheckInputContainer,
  BtnCheck,
} from "./styles";

import { useMutation, useQueryClient } from "react-query";
import { addUser } from "../../axios/api";
import { useNavigate } from "react-router";

function Sign() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
      navigate("/");
    },
    onError: (response) => {
      alert(response.response.data.msg);
      setUserId("");
      setUserName("");
      setUserPw("");
      setUserPwCheck("");
    },
  });
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userPwCheck, setUserPwCheck] = useState("");

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleUserPwChange = (event) => {
    setUserPw(event.target.value);
  };

  const handleUserPwCheckChange = (event) => {
    setUserPwCheck(event.target.value);
  };

  const handleUserNameCheckChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmitButtonClick = async (event) => {
    event.preventDefault();

    const newUser = {
      username: userName,
      email: userId,
      password: userPw,
    };
    mutation.mutate(newUser);
  };

  return (
    <MainContainer>
      <FlexConatainer>
        <TitleContainer>
          <SignTitle>회원가입</SignTitle>
        </TitleContainer>

        <form onSubmit={handleSubmitButtonClick}>
          <FormContainer>
            <CheckInputContainer>
              <LabledInput
                id="userId"
                label="아이디"
                placeholder="제목을 입력해주세요."
                value={userId}
                onChange={handleUserIdChange}
              />
              <BtnCheck>중복확인</BtnCheck>
            </CheckInputContainer>
            <CheckInputContainer>
              <LabledInput
                id="userPw"
                label="비밀번호"
                placeholder="비밀번호를 입력해주세요."
                value={userPw}
                onChange={handleUserPwChange}
              />
            </CheckInputContainer>

            <LabledInput
              id="userPwCheck"
              label="비밀번호확인"
              placeholder="비밀번호를 한번 더 입력해주세요."
              value={userPwCheck}
              onChange={handleUserPwCheckChange}
            />

            <CheckInputContainer>
              <LabledInput
                id="userName"
                label="닉네임"
                placeholder="닉네임 한번 더 입력해주세요."
                value={userName}
                onChange={handleUserNameCheckChange}
              />
              <BtnCheck>중복확인</BtnCheck>
            </CheckInputContainer>
          </FormContainer>

          <ArgeeContainer>
            <span>이용약관동의</span>
            <CheckContainer>
              <div>
                <input type="checkbox" />
                <label>이용약관 동의</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>개인정보 수집,이용 동의</label>
              </div>
            </CheckContainer>
          </ArgeeContainer>

          <button type="submit">가입하기</button>
        </form>
      </FlexConatainer>
    </MainContainer>
  );
}

export default Sign;

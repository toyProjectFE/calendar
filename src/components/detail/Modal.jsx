import React, { useState } from "react";
import {
  Modalbg,
  Modalcon,
  Modaltitle,
  Modalbtnwrap,
  Modalbtn1,
  Modalbtn2,
  Modalbtn3,
  Input,
  Textarea,
} from "./style";
function Modal({ state, delBtn, closeBtn, fatchBtn }) {
  const [visibleBtn, setVisibleBtn] = useState(false);
  return (
    <Modalbg>
      <Modalcon>
        <p>작성자 : {state.author}</p>
        <Modaltitle>{state.title}</Modaltitle>
        <p>{state.contents}</p>
        <Modalbtnwrap>
          <Modalbtn1 onClick={() => setVisibleBtn(!visibleBtn)}>수정</Modalbtn1>
          <Modalbtn2 onClick={() => delBtn(state.id)}>삭제</Modalbtn2>
          <Modalbtn3 onClick={() => closeBtn()}>닫기</Modalbtn3>
        </Modalbtnwrap>
      </Modalcon>
      {visibleBtn && (
        <Modalcon style={{ zIndex: 1 }}>
          <p>작성자 : {state.author}</p>
          <Modaltitle>
            <Input
              type="text"
              placeholder="제목을 적어주세요"
              // onChange={titleHandler}
              // value={title}
              maxLength="60"
            />
          </Modaltitle>
          <p>
            <Textarea
              placeholder="내용을 적어주세요"
              // onChange={contents}
              // value={contents}
              maxLength="230"
            />
          </p>
          <Modalbtnwrap>
            <Modalbtn1 onClick={() => fatchBtn()}>수정</Modalbtn1>
            <Modalbtn3 onClick={() => setVisibleBtn(!visibleBtn)}>
              취소
            </Modalbtn3>
          </Modalbtnwrap>
        </Modalcon>
      )}
    </Modalbg>
  );
}

export default Modal;

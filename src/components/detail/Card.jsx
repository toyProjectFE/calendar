import React, { useState } from "react";
import { Content, Title, Button, Allboxli } from "./style";
import Modal from "./Modal";
function Card({ state, swichhander, delBtn }) {
  const [ModalOpen, setModalOpen] = useState(false);
  const ModalButton = (id) => {
    setModalOpen(id);
  };
  const closeBtn = () => {
    setModalOpen(false);
  };

  // fatchBtn, cancelBtn, retouchBtn;
  return (
    <Allboxli key={state.id}>
      <Button onClick={() => swichhander(state.id, state.complete)}>
        <svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4.24265"
            y="8.48528"
            width="6"
            height="2"
            transform="rotate(-135 4.24265 8.48528)"
            fill="white"
          />
          <rect
            x="2.82843"
            y="7.07108"
            width="10"
            height="2"
            transform="rotate(-45 2.82843 7.07108)"
            fill="white"
          />
        </svg>
      </Button>
      <div onClick={() => ModalButton(state.id)}>
        <p>작성자 : {state.author}</p>
        <div>
          <Title>{state.title}</Title>
          <Content>{state.contents}</Content>
        </div>
      </div>
      {ModalOpen === state.id && (
        <Modal
          setModalopen={setModalOpen}
          state={state}
          delBtn={delBtn}
          closeBtn={closeBtn}
        />
      )}
    </Allboxli>
  );
}

export default Card;

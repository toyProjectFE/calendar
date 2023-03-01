import styled from "styled-components";

const Calendar = styled.div`
  width: 60vw;
  height: 90vh;
`;
const Header = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const ColStart = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 1%;
`;

const Text = styled.span`
  font-size: 1em;
  margin-left: 50px;
`;

const TextMonth = styled.span`
  margin-left: 5px;
  font-size: 1.6em;
  font-weight: 600;
`;

const PrevNext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ColEnd = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
`;
const LogoutBtn = styled.button`
  border: 1px solid black;
  background-color: transparent;
  margin-left: 20px;
`;
const Days = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 1em;
  padding: 2px;
`;
const DaysCol = styled.div`
  width: 12.9%;
  height: 100%;
  padding-left: 1%;
  background: #ebcfc6;
`;

const Body = styled.div`
  width: 100%;
  height: 89%;
  display: flex;
  flex-direction: column;
`;
const BodyRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export {
  Calendar,
  Header,
  Text,
  ColStart,
  TextMonth,
  PrevNext,
  ColEnd,
  LogoutBtn,
  Days,
  DaysCol,
  Body,
  BodyRow,
};

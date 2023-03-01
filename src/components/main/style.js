import styled from "styled-components";

const Calendar = styled.div`
  width: calc(100% - 15.62%);
  height: calc(100% - 80px);
  border-left: 1px solid #eee;
  position: relative;
`;
const ColStart = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: 40px;
  box-sizing: border-box;
`;
const Text = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: #1d1d1d;
  margin-left: 10px;
`;

const TextMonth = styled.span`
  margin-left: 5px;
`;

const IconArrow = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  text-align: center;
  line-height: 28px;
  margin-right: 10px;
  &:hover {
    background: #f4f4f4;
  }
`;

const Days = styled.div`
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  display: flex;
  align-items: center;
`;
const DaysCol = styled.div`
  width: 14.28%;
  background: #f7f7f7;
  border-right: 1px solid #eee;
  &:first-child {
    color: #ff0000;
  }
  &:last-child {
    color: #0038ff;
  }
`;
const BodyRowsWarp = styled.div`
  height: calc(100vh - 200px);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const BodyRow = styled.div`
  width: 100%;
  display: flex;
`;

const Col = styled.div`
  &.col {
    width: 14.28%;
    border: 1px solid #eee;
    border-left: 0;
    border-top: 0;
    padding: 15px 15px;
    box-sizing: border-box;
    font-size: 16px;
    cursor: pointer;
  }
  &.col:first-child {
    color: #ff0000;
  }
  &.col:last-child {
    color: #0038ff;
  }
  &.disabled,.disabled:hover {
    color: #ebebeb !important;
    background: #FBFBFB !important;
  }
  &.selected {
    background: #f7f7f7;
  }
  &.col:hover {
    background: #f5e0fd;
  }
`;

export {
  Calendar,
  Text,
  ColStart,
  TextMonth,
  IconArrow,
  Days,
  DaysCol,
  BodyRow,
  BodyRowsWarp,
  Col,
};

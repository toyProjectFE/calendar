import axios from "axios";
import instance from "./instance";

const getMemo = async () => {
  const response = await instance.get(`/memo`);
  return response.data;
};

const postMemo = async () => {
  const response = await instance.post(`/memo`);

  return response.data;
};

const getSchedules = async () => {
  const response = await instance.get(`/data`);
  return response.data;
};

// 조회 디테일
const getDetail = async (id) => {
  const response = await instance.get(`/data/${id}`);
  return response.data;
};

//해당 날짜의 디테일 담을 공간
const addDate = async (newDate) => {
  await instance.post(`/data`, newDate);
};
//생성 디테일
const addSchedule = async (newSchedule) => {
  await instance.post(`/data/schedule`, newSchedule);
};
//삭제 디테일
const delSchedule = async (id) => {
  await instance.delete(`/data/schedule/${id}`);
};
//트루펄스 디테일
const swichSchedule = async (payload) => {
  console.log(payload);
  await instance.patch(`/data/schedule/${payload.id}`, {
    complete: payload.complete,
  });
};

// //조회 디테일
// const getDetail = async () => {
//   const response = await axios.get(
//     `${process.env.REACT_APP_SERVER_URL}/schedule`,
//   );
//   return response.data;
// };

// //생성 디테일
// const addSchedule = async (newSchedule) => {
//   await axios.post(`${process.env.REACT_APP_SERVER_URL}/schedule`, newSchedule);
// };
// //삭제 디테일
// const delSchedule = async (id) => {
//   await axios.delete(`${process.env.REACT_APP_SERVER_URL}/schedule/${id}`);
// };
// //트루펄스 디테일
// const swichSchedule = async (payload) => {
//   await axios.patch(
//     `${process.env.REACT_APP_SERVER_URL}/schedule/${payload.id}`,
//     {
//       complete: payload.complete,
//     },
//   );
// };

// const removeDate = async (id) => {
//   await instance.delete(`${process.env.REACT_APP_SERVER_URL}/schedule/${id}`);
// };
// const removeSchedule = async (id, postId) => {
//   await instance.delete(
//     `${process.env.REACT_APP_SERVER_URL}/schedule/${id}/${postId}`,
//   );
// };
export {
  getSchedules,
  addSchedule,
  getDetail,
  swichSchedule,
  delSchedule,
  addDate,
};

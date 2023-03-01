
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
  const response = await instance.get(`/date`);
  return response.data;
};



//해당 날짜 디테일 담은 공간
const addDate = async (newDate) => {
await instance.post(`/date`, newDate);
};

//조회 디테일
const getDetail = async (id) => {
  const response = await instance.get(`/date/${id}`);
  return response.data;
};


//생성 디테일
const addSchedule = async (id, newSchedule) => {
  console.log(id)
  await instance.post(`/date/${id}`, newSchedule);
};


//삭제 디테일
const delSchedule = async (id) => {
  await instance.delete(`/date/${id}`);
};
//트루펄스 디테일
const swichSchedule = async (payload) => {
  console.log(payload)
  await instance.patch(`/date/${payload.id}`, {
    complete: payload.complete,
  });
};

//조회 디테일
// const getDetail = async () => {
//   const response = await axios.get( `${process.env.REACT_APP_SERVER_URL}/schedule` );
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
//   await axios.patch(`${process.env.REACT_APP_SERVER_URL}/schedule/${payload.id}`,{
//     complete: payload.complete
//   });
// };

const removeDate = async (id) => {
  await instance.delete(`${process.env.REACT_APP_SERVER_URL}/schedule/${id}`);
};
const removeSchedule = async (id, postId) => {
  await instance.delete(
    `${process.env.REACT_APP_SERVER_URL}/schedule/${id}/${postId}`
  );
};


//로그인

const addUser = async (newUser) => {
  await instance.post(`/user/signup`, newUser);
};

const loginUser = async (newUser) => {
  await instance.post(`/user/login`, newUser);
};

export { getSchedules, addSchedule, removeSchedule, getDetail, swichSchedule,delSchedule,addDate,addUser,loginUser };
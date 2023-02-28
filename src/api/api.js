import axios from "axios";

//조회 디테일
const getDetail = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/schedule`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

//생성 디테일
const addSchedule = async (newSchedule) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/schedule`, newSchedule);
};

//트루펄스 디테일
const swichSchedule = async (payload) => {
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/schedule/${payload.id}`,
    {
      complete: payload.complete,
    },
  );
};

//로그인

const addUser = async (newUser) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/signup`, newUser);
};

const loginUser = async (newUser) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/login`, newUser);
};

export { swichSchedule, getDetail, addSchedule, loginUser, addUser };

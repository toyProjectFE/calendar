import axios from "axios";

//조회 디테일
const getDetail = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/schedule`
  );
  return response.data;
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
    }
  );
};

//로그인
const addUser = async (newUser) => {
  //   await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/signup`, newUser);

  await accessClient.post(
    `${process.env.REACT_APP_SERVER_URL}/user/signup`,
    newUser
  );
};

const loginUser = async (newUser) => {
  //   await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/login`, newUser);
  //   await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/login`, newUser);

  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/user/login`,
    // `${process.env.REACT_APP_SERVER_URL}/user/login`,
    newUser
  );
  const accessToken = response.headers["authorization"];

  localStorage.setItem("token", accessToken);
  console.log(accessToken);
};

//인증이 필요한 통신할때 사용
const accessClient = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/`,
  headers: {
    Authorization: `${localStorage.getItem("token")} `,
  },
});

export { swichSchedule, getDetail, addSchedule, loginUser, addUser };

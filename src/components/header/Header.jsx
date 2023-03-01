import React from "react";
import { Headerwrap, Link2, Right, Button } from "./style";
import { removeCookie } from "../../axios/cookies";
function Header() {
  // const removeCookies = removeCookie("ACCESS_TOKEN");
  return (
    <Headerwrap>
      <Link2 to="/Main">Calendar</Link2>
      <Right>
        <p>
          <span>000</span> 님 환영합니다!
        </p>
        <Button>로그아웃</Button>
      </Right>
    </Headerwrap>
  );
}
//이거 데이터 뽑아오기... 쿠키에서...
export default Header;

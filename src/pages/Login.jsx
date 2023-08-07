import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import apis from '../axios/api';
import GlobalStyle from '../components/GlobalStyle';
import { cookies } from '../shared/cookies';
import { RiKakaoTalkFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { SiNaver } from "react-icons/si";
import { IoMail } from "react-icons/io5";

function Login() {
  const navi = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    setUser((pre) => {
      return {...pre, [name]: value} ;
    });
  };

const submitButtonHandler = async (event) => {
  event.preventDefault();

  try {
    const result = await axios.post("http://54.180.144.151/users/login", user);
    console.log(result.headers)
    cookies.set("token", result.headers.authorization, {path: "/"})
    console.log(result.headers.authorization)
    navi("/");
}   catch (e) {
    alert("이메일 또는 비밀번호를 확인해주세요.")
    
}
};
  //    쿠키가 있는지 확인, 쿠키가 있으면 home으로 보내기(가드)
  useEffect(()=> {
    const token = cookies.get("token");
    console.log(token);
    if(token) {
      navi("/")
    }
  }, []);

  return (
  <StPageContainer>
    <GlobalStyle/>
    <StSection>
        <form onSubmit={submitButtonHandler}>
            <StLogoContainer>
                <StLogoWrapper>
                  <StLogo
                  onClick={() => {navi("/")}}>
                  함가자.
                  </StLogo>
                  {/* <LogoImage src="images/Login/ic_bi_yeogi_250px.png" alt="로고 이미지" /> */}
                    <LogoLink href="https://www.goodchoice.kr/" />
                </StLogoWrapper>
            </StLogoContainer>

            <StKaKaoLoginButton type="button">
              {/* <a href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fproxy%3DeasyXDM_Kakao_ysiizqzj6h_provider%26ka%3Dsdk%252F1.43.1%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko%2520device%252FMacIntel%2520origin%252Fhttps%25253A%25252F%25252Fwww.goodchoice.kr%26origin%3Dhttps%253A%252F%252Fwww.goodchoice.kr%26response_type%3Dcode%26redirect_uri%3Dkakaojs%26state%3Dqemiiti84mcikqunbzdata%26through_account%3Dtrue%26client_id%3Df6ffb505bb11d7cc3584d443ce35f704&talk_login=hidden#login"> */}
              <span>
              <RiKakaoTalkFill/>&nbsp;카카오톡으로 로그인
              </span>
              {/* </a> */}

            </StKaKaoLoginButton>

            <br/>

            <StFaceBookLoginButton type="button">
              <span>
                <BsFacebook/>&nbsp;Facebook으로 로그인
              </span>
            </StFaceBookLoginButton>

            <br/>

            <StNaverLoginButton href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=r3Mjf4OpPMMq8Lib0JKw&redirect_uri=https%3A%2F%2Fwww.goodchoice.kr%2Fuser%2FnaverLoginProcess&state=a27591363b21ea2fb56a59b71711600e">
              <span>
                <SiNaver/>&nbsp;네이버로 로그인
              </span>
            </StNaverLoginButton>

            <StSpace>
              <span>
                또는
              </span>
            </StSpace>

            <div>
                
                <StInputBox 
                name="email"
                type="email" 
                placeholder= "이메일 주소" 
                required
                data-msg-required="이메일 주소를 입력해 주세요."
                aria-invalid="true" 
                value={user.email}
                onChange={changeInputHandler}
                />
                <span 
                  style={{
                    display : 'flex',
                    position :'relative',
                    color : 'rgb(255,0,85)',
                    fontSize : '14px',
                    marginLeft : '6px',
                  }}
                  display={user.email}>{user.email.length === 0 ? "이메일을 입력해주세요." : ""}
                </span>
                
                {/* <label>이메일 주소를 입력해 주세요.</label> */}
            </div>

            <div>

                <StInputBox 
                name="password"
                type="password" 
                placeholder="비밀번호"
                required
                data-msg-required="비밀번호를 입력해 주세요."
                aria-invalid="true" 
                value={user.password}
                onChange={changeInputHandler} 
                />
                <span 
                  style={{
                  display : 'flex',
                  position :'relative',
                  color : 'rgb(255,0,85)',
                  fontSize : '14px',
                  marginLeft : '6px',
                  }}
                  display={user.password}>{user.password.length === 0 ? "비밀번호를 입력해주세요.": ""}
                </span>
                {/* <label>비밀번호를 입력해 주세요.</label> */}
            </div>

            <StLoginButton 
            type="submit">
                <span>로그인</span>
            </StLoginButton>
            <StBottomButtonWrapper>
                <div>
                    <StBottomButton href="https://www.goodchoice.kr/user/passwdResetStart">
                        <span>비밀번호 재설정</span>
                    </StBottomButton>
                </div>
                <div>
                    <StBottomButton 
                    onClick={() => navi("/register")}
                    type="button"
                    >
                        <span>회원가입</span>
                    </StBottomButton>
                </div>
            </StBottomButtonWrapper>
        </form>
    </StSection>
  </StPageContainer>
  )

}

export default Login
const StPageContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #fff;
  font-size: 18px;
  line-height: 44px;
`;
const StSection = styled.section`
  width: 336px;
  height: 557px;
  margin: 100px 346.5px 0 346.5px;
`;
const StLogoContainer = styled.div`
  margin-bottom: 16px;
`
const StLogoWrapper = styled.strong`
  width: 336px;
  height: 56px;
`;
const StLogo = styled.span`
  font-family: 'yg-jalnan';
  font-size: 24px;
  color: rgb(255,0,85);
  cursor: pointer;
`;
const LogoImage = styled.img`
  width: 112px;
  height: 44px;
`;
const LogoLink = styled.a`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  `;
const StKaKaoLoginButton = styled.button`
    width: 336px;
    height: 56px;
    margin-bottom: 8px;
    border-radius: 4px;
    font-size: 16px;
    line-height: 56px;
    text-align: center;
    padding: 0;
    border: none;
    background: #FCE51E;
    color: rgb(59,29,20);
    font-weight: 550;
    cursor: pointer;
    `;
const StFaceBookLoginButton = styled.button`
    width: 336px;
    height: 56px;
    margin-bottom: 8px;
    border-radius: 4px;
    font-size: 16px;
    line-height: 56px;
    text-align: center;
    padding: 0;
    border: none;
    background: rgb(24,119,242);
    color: #fff;
    font-weight: 650;
    cursor: pointer;
`;
const StNaverLoginButton = styled.button`
    width: 336px;
    height: 56px;
    margin-bottom: 8px;
    border-radius: 4px;
    font-size: 16px;
    line-height: 56px;
    text-align: center;
    padding: 0;
    border: none;
    background: rgb(40,209,17);
    color: #fff;
    font-weight: 550;
    cursor: pointer;
`;
const StSpace = styled.p`
    display: inline-block;
    top: 0;
    left: 50%;
    z-index: 10;
    width: 336px;
    height: 40px;
    margin: 0 0 0 -25px;
    background: #fff;
    font-size: 14px;
    line-height: 40px;
    color: rgba(0,0,0,0.38);
    text-align: center;
    /* text-decoration: line-through;  */

`;
const StInputBox = styled.input`
  width: 336px;
  height: 48px;
  border: 1px solid rgba(0,0,0,0.26);
  border-radius: 4px;
  font-size: 18px;
  margin: 0 0 8px;
  padding: 0 16px 0 16px;
  box-sizing: border-box;
  :focus{
    border: 1px solid rgb(0, 0, 0);

  }
`;
const StLoginButton = styled.button`
  width: 336px;
  height: 56px;
  margin-top: 16px;
  border-radius: 6px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  text-decoration: none solid rgba(0, 0, 0, 0.87);
  color: #fff;
  text-align: center;
  border: none;
  background-color: rgb(255,0,85);;
`
const StBottomButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const StBottomButton = styled.div`
  border: none;
  background-color: transparent;
  font-size: 14px;
  width: 168px;
  height: 56px;
  display: inline-block;
  cursor: pointer;
`
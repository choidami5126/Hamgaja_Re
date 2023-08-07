import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import ModalTerms from '../components/Modal';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { IoAccessibilitySharp } from "react-icons/io5";

function Register() {
    const navi = useNavigate();
    //  회원가입 State
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
        privacyTerm : true,
        marketingTerm: true,
        gpsTerm : true
    });
    //  비밀번호 확인 state
    const [confirmPassword, setConfirmPassword] = useState("");
    //  닉네임 중복체크 state
    const [isDuplicate, setIsDuplicate] = useState(false);
    
    //  ChangeInputHandler
    const changeInputHandler = (event) => {
        const { value, name } = event.target;
        setUser((pre) => {
            return {...pre, [name]: value} ;
        });
    };
    //  password check handler
    const changeConfirmPasswordInputHandler = (event) => {
        setConfirmPassword(event.target.value);
    }
    //  회원가입 Button Handler (서버요청)
    const submitButtonHandler = (event) => {
        event.preventDefault();
        console.log("isdu->", isDuplicate)
        if (user.password !== confirmPassword) {
            alert("비밀번호와 비밀번호 확인이 다릅니다.");
        }
        //서버에서 400에러로 아이디 중복에러 보내주면 어떻게 보여줄 수 있을지.
        // else if () {
        //     alert('이 아이디는 중복된 아이디입니다.')
        // }
        else if (user.email === '') {
            alert('아이디는 필수항목입니다.')
        }
        else if (user.username === ''){
            alert('닉네임은 필수항목입니다.')
        }
        //왜 오류가 나는지
        else if (isDuplicate === true){
            alert('닉네임 중복 확인을 하십시오.');
        }
        else {
                    // 서버에 보내기 (POST요청)
            axios.post("http://54.180.144.151/users/signup/user", user)
                .then(() =>{ 
                alert('회원 가입이 완료되었습니다.')
                navi('/login')
            })
            .catch((error) => {
                if (error.response.status === 400 && error.response.data.message === 'DUPLICATE_EMAIL') {
                    alert('입력하신 이메일은 중복된 이메일 입니다.')
                }   else {
                    // alert('서버 오류가 발생했습니다.')
                    alert('입력하신 이메일은 중복된 이메일 입니다.')
                } 
            });
        }    
    };
    //  닉네임 중복 확인 서버요청
    const checkDuplicateButtonHandler = (event) => {
        axios.post('http://54.180.144.151/users/check/username', user)
        .then((res) => {
            if (res.data.isDuplicate) {
                console.log("res ->", res)
                setIsDuplicate(true);
                alert('중복된 닉네임입니다.');
            }   else {
                setIsDuplicate(false);
                alert("사용 가능한 닉네임 입니다.")
            }
        })
        .catch((err) => {
            console.error(err);
            alert('중복된 닉네임이 존재합니다.')
        });
    };

    return (
    <StPageContainer>
        <GlobalStyle/>
        <ModalTerms/>
    <StSection>
        <StForm onSubmit={submitButtonHandler}>
            <StLogoWrapper>
                <StLogo
                onClick={() => {navi("/");}}>
                함가자.
                    <LogoLink href="https://www.goodchoice.kr/" />
                </StLogo>
            </StLogoWrapper>
            <div>
                <StTitleWrapper>
                회원가입
                </StTitleWrapper>
                
                <StContentTitleWrapper>
                    <StContentTitle>이메일 아이디</StContentTitle>
                </StContentTitleWrapper>
                
                <StInputBoxWrapper>
                    <StInputBox 
                    name="email"
                    type="email" 
                    placeholder="이메일 주소를 입력해주세요."
                    value={user.email}
                    onChange={changeInputHandler}
                    />
                    <div 
                    style={{
                        display : 'flex',
                        color : 'rgb(255,0,85)',
                        marginTop : '10px'
                    }}
                    display={user.email}>{user.email.length === 0 ? "이메일을 입력해주십시오.": ""}</div>
                    {/* <label>이메일 주소를 입력해주세요.</label> */}
                </StInputBoxWrapper>

                <StContentTitleWrapper>
                    <StContentTitle>비밀번호</StContentTitle>
                </StContentTitleWrapper>
                    <StInputBoxWrapper>
                        <StInputBox 
                        name="password"
                        type="password" 
                        placeholder="비밀번호를 입력해주세요."
                        value={user.password}
                        onChange={changeInputHandler} 
                        />
                    <div 
                    style={{
                        display : 'flex',
                        color : 'rgb(255,0,85)',
                        marginTop : '10px'
                    }}
                    display={user.password}>{user.password.length === 0 ? "8자리 이상 비밀번호를 입력해주십시오.": ""}</div>
                        {/* <label>비밀번호를 입력해주세요.</label> */}
                    </StInputBoxWrapper>
                
                <StContentTitleWrapper>
                    <StContentTitle>비밀번호 확인</StContentTitle>
                </StContentTitleWrapper>
                    <StInputBoxWrapper>
                        <StInputBox 
                        name="confirmPassword"
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        value={confirmPassword}
                        onChange={changeConfirmPasswordInputHandler} 
                        />
                    <div 
                        style={{
                            display : 'flex',
                            color : 'rgb(255,0,85)',
                            marginTop : '10px'
                        }}
                    display={confirmPassword}>{confirmPassword.length === 0 ? "8자리 이상 비밀번호를 입력해주십시오.": ""}
                    </div>
                    
                    </StInputBoxWrapper>

                <StContentTitleWrapper>
                    <StContentTitle>닉네임</StContentTitle>
                </StContentTitleWrapper>
                <StWrapper>
                    <StUsernameInputBoxWrapper>
                        <StUsernameInputBox 
                        name="username"
                        type="text"
                        value={user.username}
                        onChange={changeInputHandler} 
                        />
                        {/* <label>추천 닉네임이에요!</label> */}
                    </StUsernameInputBoxWrapper>
                    <StUsernameCheckButton 
                    type="button"
                    onClick={checkDuplicateButtonHandler}
                    >
                    중복검사
                    </StUsernameCheckButton>
                </StWrapper>
                {/* <div 
                        style={{
                            display : 'flex',
                            color : 'rgb(255,0,85)',
                            marginTop : '10px'
                        }}
                    display={user.username}>{user.username.length === 0 ? "닉네임을 입력해주십시오.": ""}
                    </div> */}
                <StRegisterButton>
                    <span>가입하기</span>
                </StRegisterButton>
            </div>
        </StForm>
        <div style={{display: 'flex', alignItems: 'right', justifyContent: 'right'}}>
            <StRegisterAuthButton
            onClick={() => {navi("/register/auth");}}>
            <IoAccessibilitySharp/>&nbsp;관리자회원가입
            </StRegisterAuthButton>
        </div>
        
    </StSection>
    </StPageContainer>
    )
}

export default Register;

const StPageContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: #fff;
    font-size: 18px;
    line-height: 44px;
    `
const StSection = styled.section`
    width: 336px;
    height: 557px;
    margin: 100px 346.5px 0 346.5px;
    `;
const StForm = styled.form`
    /* width: 650px;
    height: 336px; */
`
const StLogoWrapper = styled.strong`
    width: 336px;
    height: 44px;
    `;
const StLogo = styled.span`
    font-family: 'yg-jalnan';
    font-size: 27px;
    font-weight: 700;
    line-height: 44px;
    /* color: #E44647; */
    color: rgb(255,0,85);
    cursor: pointer;
    `;
const LogoLink = styled.a`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    `;
const StTitleWrapper = styled.strong`
    width: 336px;
    height: 26px;
    margin: 30px 0 10px 0;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    text-decoration: none solid rgba(0,0,0,0.87);
    `
const StTitle = styled.strong`
    
    `
const StContentTitleWrapper = styled.div`
    display: flex;
    text-align: left;
    margin-bottom: 9px;
`
const StContentTitle = styled.b`
    width: 336px;
    height: 26px;
    font-size: 16px;
    font-weight: bold;
    /* line-height: 22px */
    color: rgba(0,0,0,0.56);
    `
const StInputBoxWrapper = styled.div`
    width: 336px;
    height: 48px;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 6px;
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 38px;
    padding: 0 10px ;
`
const StInputBox = styled.input`
    width: 100%;
    height: 30px;
    border: none;
    font-size: 18px;
    margin-top: 8px;
`
const StUsernameInputBoxWrapper = styled.div`
    width: 236px;
    height: 48px;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 6px;
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 38px;
    /* padding: 0 10px; */
`
const StUsernameInputBox = styled.input`
    width: 230px;
    height: 30px;
    border: none;
    font-size: 18px;
    margin-top: 8px;
`
const StUsernameCheckButton = styled.button`
    width: 93px;
    height: 48px;
    /* font-weight: 700; */
    border: none;
    border-radius: 6px;
    background: #ebebeb;
    font-size: 14px;
    font-weight: bold;
    color: rgba(0,0,0,0.56);
    cursor: pointer;
`
const StWrapper = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    width: 358px;
`
const StRegisterAuthButton = styled.button`
    background-color: rgb(250, 250, 250);
    border: none;
    /* margin-bottom: 50px; */
    width: 40%;
    height: 53px;
    font-size: 16px;
    line-height: 56px;
    margin-top: 6px;
    border-radius: 6px;
    font-size: 16px;
    line-height: 56px;
    color: rgba(16, 16, 16, 0.3);
    text-align: center;
    border: none;
    cursor: pointer;
`
const StRegisterButton = styled.button`
    background-color: rgb(250, 250, 250);
    color: rgba(0, 0, 0, 0.16);
    border: none;
    margin-bottom: 50px;
    width: 100%;
    height: 56px;
    font-size: 16px;
    line-height: 56px;
    margin-top: 6px;
    border-radius: 6px;
    font-size: 16px;
    line-height: 56px;
    color: rgba(16, 16, 16, 0.3);
    text-align: center;
    border: none;
    cursor: pointer;
`
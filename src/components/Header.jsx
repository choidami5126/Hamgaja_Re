import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import { FaSistrix } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { cookies } from '../shared/cookies'

function Header() {
  const navigate = useNavigate()
  const [openSearch, setOpenSearch] = useState(false) // 검색창 on/off
  const [isScroll, setIsScroll] = useState(false) //스크롤 on/off
  const token = cookies.get('token')

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0 ? setIsScroll(true) : setIsScroll(false)
    })
  }, [isScroll])

  //검색창 on/off 토글 함수
  const openSearchHandler = () => {
    setOpenSearch((prev) => !prev) //이전 값과 반대로 바꿔준다
  }

  const logOutHandler = () => {
    cookies.remove('token')
    alert('로그아웃 되었습니다.')
    navigate('/')
  }

  return (
    <StHeader isScroll={isScroll}>
      <GlobalStyle />
      <Section>
        <StHamGaja onClick={() => navigate('/')}>함가자.</StHamGaja>
        <SelectArea>
          <FaSistrix style={{ color: 'white', fontSize: '21px' }} />
          <StUl>
            <li>내주변</li>
            <li>예약내역</li>
            <li>더보기</li>
            {token ? (
              <li onClick={logOutHandler}>로그아웃</li>
            ) : (
              <li onClick={() => navigate('/login')}>로그인</li>
            )}
          </StUl>
        </SelectArea>
      </Section>
    </StHeader>
  )
}

const StHeader = styled.div`
  height: 72px;
  width: 100%;

  position: fixed;
  top: 0px;
  bottom: 865px;

  display: block;
  background-color: #f7323f;
  box-sizing: border-box;
`

const Section = styled.div`
  width: 1024px;
  height: 64px;

  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StHamGaja = styled.span`
  font-family: 'yg-jalnan';
  font-size: 25px;
  font-weight: 700;
  color: white;

  margin-top: 3px;
`

const SelectArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const StUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  color: white;
  font-size: 18px;
  font-weight: 200;
  margin-left: 20px;
  cursor: pointer;
`

export default Header

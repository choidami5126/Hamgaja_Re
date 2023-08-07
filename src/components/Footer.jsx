import React from 'react'
import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai'
import GlobalStyle from './GlobalStyle'

function Footer() {
  const Github = (url) => {
    window.open(url)
  }

  return (
    <>
      <GlobalStyle />
      <StFooter>
        <Gitarea>
          <GitBox onClick={() => Github('https://github.com/choidami5126')}>
            <AiFillGithub style={{ fontSize: '30px' }} />
            <p>FE : Dahyun</p>
          </GitBox>
          <GitBox
            onClick={() => Github('https://github.com/Mindfulness-en-toute-Tranquillite')}
          >
            <AiFillGithub style={{ fontSize: '30px' }} />
            <p>FE : Jaehyeok</p>
          </GitBox>
          <GitBox onClick={() => Github('https://github.com/fghij7410')}>
            <AiFillGithub style={{ fontSize: '30px' }} />
            <p>BE : Dojae</p>
          </GitBox>
          <GitBox onClick={() => Github('https://github.com/slackjawed12')}>
            <AiFillGithub style={{ fontSize: '30px' }} />
            <p>BE : Minjae</p>
          </GitBox>
          <GitBox onClick={() => Github('https://github.com/hyukjin1210')}>
            <AiFillGithub style={{ fontSize: '30px' }} />
            <p>BE : Hyeokjin</p>
          </GitBox>
        </Gitarea>
      </StFooter>
    </>
  )
}

export default Footer

const StFooter = styled.div`
  height: 80px;
  width: 100%;

  margin-top: 30px;
  display: flex;
  justify-content: space-between;

  background-color: #f5f5f5;
  /* display: block; */
`

const GitBox = styled.div`
  font-family: 'yg-jalnan';
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const Gitarea = styled.div`
  width: 1000px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`

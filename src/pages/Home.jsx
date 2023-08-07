import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Wrapper from '../components/Wrapper'

function Home() {
  const navigate = useNavigate()
  return (
    <main>
      <Wrapper>
        <Header />
        <Home_Banner />
        <Main_link>
          <Home_Cate_ul>
            <li>
              <Home_Cate_Box onClick={() => navigate('/product')}>
                <Home_Cate_img src={`/images/home/ico_category_01.png`} />
                <Home_Cate_p>모텔</Home_Cate_p>
              </Home_Cate_Box>
            </li>
            <li>
              <Home_Cate_Box onClick={() => navigate('/product')}>
                <Home_Cate_img src={`/images/home/ico_category_02.png`} />
                <Home_Cate_p>호텔·리조트</Home_Cate_p>
              </Home_Cate_Box>
            </li>
            <li>
              <Home_Cate_Box onClick={() => navigate('/product')}>
                <Home_Cate_img src={`/images/home/ico_category_03.png`} />
                <Home_Cate_p>펜션</Home_Cate_p>
              </Home_Cate_Box>
            </li>
            <li>
              <Home_Cate_Box onClick={() => navigate('/product')}>
                <Home_Cate_img src={`/images/home/ico_category_04.png`} />
                <Home_Cate_p>게스트하우스</Home_Cate_p>
              </Home_Cate_Box>
            </li>
            <li>
              <Home_Cate_Box onClick={() => navigate('/product')}>
                <Home_Cate_img src={`/images/home/ico_category_05.png`} />
                <Home_Cate_p>캠핌·글램핑</Home_Cate_p>
              </Home_Cate_Box>
            </li>
            <li>
              <Home_Cate_Box onClick={() => navigate('/product')}>
                <Home_Cate_img src={`/images/home/ico_category_06.png`} />
                <Home_Cate_p>해외 여행</Home_Cate_p>
              </Home_Cate_Box>
            </li>
          </Home_Cate_ul>
        </Main_link>
        <Recommend>
          <p
            style={{
              fontSize: '24px',
              marginBottom: '20px',
              fontWeight: 'bold',
            }}
          >
            여기어때 소식
          </p>
          <Wrapper>
            <img src={`/images/home/recomend.jpg`} />
          </Wrapper>
        </Recommend>
        <img src={`/images/home/appdown.jpg`} />
        <Main_event>
          <p
            style={{
              fontSize: '24px',
              marginBottom: '20px',
              fontWeight: 'bold',
            }}
          >
            이벤트
          </p>
          <img style={{ width: '970px' }} src={`/images/home/event.jpg`} />
        </Main_event>
        <Ad_ask>
          <Ask_Box src="/images/home/apply_add.png" />
          <Ask_Box onClick={() => navigate('/post')} src="/images/home/to post.png" />
        </Ad_ask>
        <Footer />
      </Wrapper>
    </main>
  )
}

export default Home

const Home_Banner = styled.div`
  height: 450px;
  width: 100%;

  margin-top: 110px;
  box-sizing: border-box;

  background-image: url('images/home/home_banner 1.png');
  background-repeat: no-repeat;
  background-position: 50% 100%;
  background-size: contain;
`

const Main_link = styled.div`
  height: 168px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`

const Recommend = styled.div`
  height: 280px;
  width: 970px;

  margin-top: 30px;
`

const Appdown = styled.div`
  height: 320px;
  width: 962px;
  border: 1px solid black;
  box-sizing: border-box;
`

const Main_event = styled.div`
  height: 251.391px;
  width: 970px;

  margin-top: 50px;
`

const Ad_ask = styled.div`
  display: flex;
  height: 208px;
  width: 962px;

  gap: 10px;
  margin-top: 24px;
  box-sizing: border-box;
`

const Home_Cate_Box = styled.div`
  width: 163px;
  height: 107px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Home_Cate_p = styled.p`
  text-align: center;
  width: 163px;
  height: 32px;
  padding: 14px;
`

const Home_Cate_img = styled.img`
  width: 72px;
  height: 72px;
`
const Home_Cate_ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1024px;
  height: 107px;
`

const Ask_Box = styled.img`
  width: 476px;
  height: 200px;

  box-sizing: border-box;
  object-fit: 'cover';
`

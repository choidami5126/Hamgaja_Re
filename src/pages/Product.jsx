import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { __getProducts } from '../redux/modules/productsSlice'
import ProductCard from '../components/ProductCard'
import GlobalStyle from '../components/GlobalStyle'
import Footer from '../components/Footer'
import 'react-calendar/dist/Calendar.css'
import { Checkbox, CheckboxLabel } from './Post'

function Product() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { products, isLoading, error } = useSelector((state) => state.products)
  const productList = JSON.stringify(products)
  const [value, onChange] = useState(new Date())
  console.log('받아온 데이터', products)

  // const [cateList, setCateList] = useState({
  //   spa: false,
  //   miniBar: false,
  //   wifi: false,
  //   bathItem: false,
  //   tv: false,
  //   airConditioner: false,
  //   refrigerator: false,
  //   showerRoom: false,
  //   tub: false,
  //   dryer: false,
  //   iron: false,
  //   electricRiceCooker: false,
  // })
  const onCheckHandler = (e) => {
    const { name } = e.target
    // setCateList({ ...cateList, [name]: (pre) => !pre })
  }

  // const checkedCateList = cateList.map((item) => (item ? item : null))

  // const includeCateList = products?.map((item) => (item ? item : null))

  useEffect(() => {
    dispatch(__getProducts())
  }, [productList])

  if (!products || isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  // // 양선생님
  // const category = (cate) => {
  //   products.map((item) => {
  //     const cateList = item.category.map((item) => (item == cate ? item : null))
  //     if (item.includes(cateList)) {
  //       return item
  //     }
  //   })
  // }
  // {spa? category(spa):null}

  return (
    <div>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <div
          style={{
            width: '100%',
            height: '211px',
            boxSizing: 'border-box',
            backgroundColor: '#f7323f',
          }}
        >
          <p
            style={{
              margin: '100px 0 0 480px',
              fontSize: '38px',
              fontWeight: '400',
              color: 'white',
            }}
          >
            호텔·리조트
          </p>
          <select
            style={{
              margin: '10px 0 0 480px',
              fontSize: '18px',
              fontWeight: '400',
              color: 'white',
              border: 'none',
              backgroundColor: '#ED303D',
              color: 'white',
              width: '300px',
              height: '30px',
            }}
          >
            <option value="1">서울 : 강남/역삼/삼성/신사/청담</option>
          </select>
        </div>
        <MainBoard>
          <div
            name="filer"
            style={{
              width: '296px',
              height: '260px',
              border: '1px solid #DBDBDB',
              borderRadius: '4px',
              margin: '0 32px 0 32px',
              boxSizing: 'border-box',
            }}
          >
            <Wrapper>
              <CategoryBox>객실 내 시설</CategoryBox>
              <CheckboxList>
                <CheckboxLabel>
                  <Checkbox type="checkbox" name="spa" onChange={onCheckHandler} />
                  스파
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox type="checkbox" name="miniBar" onChange={onCheckHandler} />
                  미니바
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox type="checkbox" name="wifi" onChange={onCheckHandler} />
                  와이파이
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox type="checkbox" name="bathItem" onChange={onCheckHandler} />
                  욕실물품
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox type="checkbox" name="tv" onChange={onCheckHandler} />
                  티비
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="airConditioner"
                    onChange={onCheckHandler}
                  />
                  에어컨
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="refrigerator"
                    onChange={onCheckHandler}
                  />
                  냉장고
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox type="checkbox" name="showerRoom" onChange={onCheckHandler} />
                  객실샤워실
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox type="checkbox" name="tub" onChange={onCheckHandler} />
                  욕조
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox type="checkbox" name="dryer" onChange={onCheckHandler} />
                  드라이기
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox type="checkbox" name="iron" onChange={onCheckHandler} />
                  다리미
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="electricRiceCooker"
                    onChange={onCheckHandler}
                  />
                  전기밥솥
                </CheckboxLabel>
              </CheckboxList>
            </Wrapper>
          </div>
          <div
            style={{
              width: '635px',
              maxheight: 'none',
              marginRight: '32px',
            }}
          >
            <img style={{ width: '630px' }} src="images/product/topbtn.png" />

            <p style={{ fontWeight: 'bold', color: '#606060', fontSize: '18px' }}>
              인기추천
            </p>
            <div style={{ marginTop: '10px' }}>
              {products.map((item) => {
                return <ProductCard key={item.id} item={item} />
              })}
              {/* {checkedCateList
                ? products.map((item) =>
                    includeCateList.includes(checkedCateList) ? (
                      <ProductCard key={item.id} item={item} />
                    ) : null
                  )
                : null} */}
            </div>
          </div>
        </MainBoard>
      </Wrapper>
      <Footer />
    </div>
  )
}

export default Product

const MainBoard = styled.div`
  width: 1024px;
  max-height: none;

  padding: 5px 0 50px;
  margin-top: 30px;

  display: flex;
`

const StBtn = styled.button`
  align-items: flex-start;
  box-sizing: border-box;
  display: block;
  float: left;
  height: 40px;
  width: 132px;
`

const Card = styled.div`
  width: 635px;
  height: 280px;

  background-image: url('/images/home/hotel1.jpg');
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  border: 1px solid black;
`

const DateBox = styled.div`
  width: 250px;
  height: 100px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;

  padding: 10px;
`

const CategoryBox = styled.div`
  width: 250px;
  max-height: none;
  font-size: 15px;
  color: #827f7f;
  font-weight: bold;

  padding: 10px;
`
const CheckboxList = styled.div`
  width: 250px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

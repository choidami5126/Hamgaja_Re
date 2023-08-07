import { configureStore } from '@reduxjs/toolkit'
import itemSlice from '../modules/itemSlice'
import productsSlice from '../modules/productsSlice'
import { getDefaultMiddleware } from '@reduxjs/toolkit'

//
const store = configureStore({
  reducer: {
    item: itemSlice,
    products: productsSlice,
  },
  middleware: getDefaultMiddleware({ serializableCheck: false }),
  // 리덕스 툴킷에서 미들웨어로 무슨 값을 보낼 때
  // 직렬화 안된 값에 대한 알림 제거
})

export default store

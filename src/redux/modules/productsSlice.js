import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import apis from '../../axios/api'

const initialState = {
  products: [
    {
      name: '',
      star: '',
      mainImage: null,
      address: '',
      description: '',
      ownerComment: '',
      fileType: 'Hotel',
      roomList: [
        { roomName: ``, roomImage: null, roomPrice: `` },
        { roomName: ``, roomImage: null, roomPrice: `` },
        { roomName: ``, roomImage: null, roomPrice: `` },
      ],
    },
  ],
  details: [],
  isLoading: false,
  error: null,
}
// ${process.env.REACT_APP_SERVER_URL}

// 게시물 작성 함수
export const __addProducts = createAsyncThunk(
  '__addProducts',
  async (payload, thunkAPI) => {
    try {
      await apis.post('/products', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
// 게시물 조회 함수
export const __getProducts = createAsyncThunk(
  '__getProducts',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`http://54.180.144.151/products`)
      return thunkAPI.fulfillWithValue(response.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
//http://54.180.144.151/products/${payload}
// 게시물 디테일 조회 함수
export const __getProductsDetail = createAsyncThunk(
  '__getProductsDetail',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`http://54.180.144.151/products/${payload}`)
      return thunkAPI.fulfillWithValue(response.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    // 게시물 작성 Reducer -------------------------------
    [__addProducts.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__addProducts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = false
      state.products = [...state.products, action.payload]
    },
    [__addProducts.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 게시물 조회 Reducer -------------------------------
    [__getProducts.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__getProducts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = false
      state.products = action.payload
    },
    [__getProducts.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 게시물 디테일 조회 Reducer -------------------------------
    [__getProductsDetail.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__getProductsDetail.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = false
      state.details = action.payload
    },
    [__getProductsDetail.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})
export const {} = productsSlice.actions
export default productsSlice.reducer

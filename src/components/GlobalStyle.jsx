import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 100;
    font-style: normal;
}
@font-face {
    font-family: 'yg-jalnan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'AppleSDGothicNeoT';
    src: url('/assets/fonts/AppleSDGothicNeoT.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

    body {
    font-family: 'AppleSDGothicNeoT', sans-serif;
    line-height: 1.5;
  }
`
export default GlobalStyle

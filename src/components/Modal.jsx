import React, { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import styled from 'styled-components';

Modal.setAppElement('#root'); // 모달창이 사용하는 DOM 엘리먼트 지정

function ModalTerms() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    // 모달 열기
    const openModal = () => {
    setIsModalOpen(true);
    };
    // 모달 닫기
    const closeModal = () => {
    setIsModalOpen(false);
    };

    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);
    const [isChecked6, setIsChecked6] = useState(false);
    
    const allCheckHandler = (e) => {
        const isChecked = e.target.checked;
        setIsCheckedAll(isChecked);
        setIsChecked1(isChecked);
        setIsChecked2(isChecked);
        setIsChecked3(isChecked);
        setIsChecked4(isChecked);
        setIsChecked5(isChecked);
        setIsChecked6(isChecked);
    };
    console.log(allCheckHandler)

    const checkHandler1 = (e) => {
        setIsChecked1(e.target.checked);
    };
    
    const checkHandler2 = (e) => {
        setIsChecked2(e.target.checked);
    };
    
    const checkHandler3 = (e) => {
        setIsChecked3(e.target.checked);
    };
    
    const checkHandler4 = (e) => {
        setIsChecked4(e.target.checked);
    };
    
    const checkHandler5 = (e) => {
        setIsChecked5(e.target.checked);
    };

    const checkHandler6 = (e) => {
        setIsChecked6(e.target.checked);
    };


    return (
    <>
        {/* <button onClick={openModal}>모달 열기</button> */}
        <StModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        // className= "customModal"
        // overlayClassName= "customOverlay"
        >
        <section>
            <strong>여기어때 약관 동의</strong>
            <div>
                <p style={{fontWeight : '900'}}>
                <input type="checkbox" id="checkAll" checked={isCheckedAll} onChange={allCheckHandler} />
                전체동의
                </p>
                
                <p htmlFor="termsConditionsForUse">
                    <input type="checkbox" id="termsConditionsForUse" checked={isChecked1} onChange={checkHandler1} required/>
                    <a href="https://www.goodchoice.kr/more/terms/terms">이용약관 동의</a><span style={{color : 'red'}}>&nbsp;(필수)</span>
                </p>

                <p htmlFor="termsAge">
                    <input type="checkbox" id="termsAge" checked={isChecked2} onChange={checkHandler2} required/>
                    <a href="https://www.goodchoice.kr/more/over14yearsOldAgree">만 14세 이상 확인</a><span style={{color : 'red'}}>&nbsp;(필수)</span>
                </p>
                
                <p htmlFor="termsPersonalRequired">
                    <input type="checkbox" id="termsPersonalRequired" checked={isChecked3} onChange={checkHandler3} required/>
                    <a href="https://www.goodchoice.kr/more/privacyRequire">개인정보 수집 및 이용 동의</a><span style={{color : 'red'}}>&nbsp;(필수)</span>
                </p>
                
                <p htmlFor="termsPersonalSelective">
                    <input type="checkbox" id="termsPersonalSelective" value={isChecked4} checked={isChecked4} onChange={checkHandler4} />
                    <a href="https://www.goodchoice.kr/more/privacySelect">개인정보 수집 및 이용 동의</a>&nbsp;(선택)
                </p>
                
                <p htmlFor="termsMarketingAlert">
                    <input type="checkbox" id="termsMarketingAlert" checked={isChecked5} onChange={checkHandler5} />
                    <a href="http://api3.goodchoice.kr/more/marketingAgree">마케팅 알림 수신동의</a>&nbsp;(선택)
                </p>
                
                <p htmlFor="termsLocationBased">
                    <input type="checkbox" id="termsLocationBased" checked={isChecked6} onChange={checkHandler6} />
                    <a href="https://www.goodchoice.kr/more/terms/location">위치기반 서비스 이용약관 동의</a>&nbsp;(선택)
                </p>
                
                <button onClick={closeModal}>다음</button>
            </div>
        </section>
        </StModal>
    </>
    );
}

export default ModalTerms;

const StModal = styled(Modal)`
    & .ReactModal__Overlay {
    background-color: rgba(0, 0, 0, 1);
    z-index: 9999;
    }
    /* & .ReactModal__Content { */
        position: absolute;
        width: 100vw;
        height: 100vh;
        margin: auto;
        background-color: #fffefe;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
         /* border-radius: 10px; */
    /* } */
    & section {
        width: 336px;
        height: 477px;
        margin: 100px 380.5px 0px 380.5px;
        color: rgba(0,0,0,0.87);
        background: #fff;
        font-size: 14px;
        line-height: 26px;
        touch-action: none;
    }

    & strong {
        width: 336px;
        height: 44px;
        font-size: 24px;
        font-weight: 700;
        line-height: 44px;
        margin-bottom: 20px;
        text-align: center;
        color: rgba(0,0,0,0.87);
    }
    & div {
        width: 336px;
        height: 413px;
        margin-top: 20px;
        font-size: 15px;
        line-height: 26px;
        text-size-adjust: 100%;
    }
    & input {
        width: 24px;
        height: 24px;
        margin: 0 10px 0 0;
        font-size: 13.333px;
        vertical-align: top;
        cursor: pointer;
    }
    & p {
        width: 336px;
        height: 26px;
        margin-bottom: 25px;
        font-size: 15px;
        font-weight: 500;
        line-height: 26px;
    }
    & button {
        width: 336px;
        height: 56px;
        font-size: 16px;
        font-weight: 400;
        line-height: 56px;
        text-align: center;
        margin: 16px 0 0 ;
        border: none;
        border-radius: 6px;
        background-color: #EFEFEF4D;
        color: #c5c0c0;
        cursor: pointer;
    }
    & a {
        text-decoration: underline;
        :link  { color: #000000; text-decoration: underline;}
        :visited { color: black; text-decoration: none;}
    }
`;












// const StModal = styled(Modal)`
//     & .customOverlay {
//         background-color: rgba(0, 0, 0, 0.8);
//         z-index: 9999;
//     }

//     & .customModal {
//         position: absolute;
//         width: 100vw;
//         height: 100vh;
//         margin: 0 auto;
//         background-color: #ffffff;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         border-radius: 10px;
//     }

//     & h1 {
//         font-size: 24px;
//         margin-bottom: 20px;
//     }

//     & p {
//         font-size: 16px;
//         margin-bottom: 20px;
//     }

//     & button {
//         width: 336px;
//         height: 56px;
//         font-size: 16px;
//         font-weight: 400;
//         line-height: 56px;
//         text-align: center;
//         margin: 16px 0 0;
//         border: none;
//         border-radius: 6px;
//         background-color: #efefef4d;
//         color: #fff;
//         cursor: pointer;
//     }
// `;
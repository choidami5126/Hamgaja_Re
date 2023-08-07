import React, { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import styled from 'styled-components';
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";

Modal.setAppElement('#root'); // 모달창이 사용하는 DOM 엘리먼트 지정

function ModalRoomInfo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // 모달 열기
    const openModal = () => {
    setIsModalOpen(true);
    };
    // 모달 닫기
    const closeModal = () => {
    setIsModalOpen(false);
    };

    return (
    <>  
    <div>
        <StOpenButton onClick={openModal}><span style={{marginRight: '390px'}}>객실 이용 안내</span><IoIosArrowForward /></StOpenButton>
    </div>
        <StModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
            overlay: {
            display: 'flex',
            top: '0px',
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
            }}}
        >
        <div>
        <div style={{
                width: '560px',
                height: '100px',
                borderBottom: '1px solid black', 
                borderBlock: 'black'
            }}>객실 이용 안내
        <StCloseButton onClick={closeModal}><IoClose /></StCloseButton>
        </div>
        <section style={{
                width: '560px',
                height: '70px',
                borderBottom: '1px solid black', 
                borderBlock: 'black'
            }}>
            <div>
                <strong>기본정보</strong>
                <li></li>
            </div>
        </section>
        <section style={{
                width: '560px',
                height: '70px',
                borderBottom: '1px solid black', 
                borderBlock: 'black'
            }}>
            <div>
                <strong>편의시설</strong>
                <li></li>
            </div>
        </section>
        <section style={{
                width: '560px',
                height: '70px',
                borderBottom: '1px solid black', 
                borderBlock: 'black'
            }}>
            <div>
                <strong>추가 정보</strong>
                <li></li>
            </div>
        </section> 
                
        </div>
        </StModal>
        
    </>
    );
}

export default ModalRoomInfo;
const StOpenButton = styled.button`
    width: 510px;
    height: 48px;
    margin: 12px 0 12px 0;
    font-size: 16px;
    line-height: 48px;
    text-decoration: none solid rgba(0,0,0, 0.87);
    text-align: left;
    border: none;
    border-radius: 4px;
    /* border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px; */
    background-size: 12px auto;
    color: rgba (0,0,0, 0.87);
    background-color: #fff;
    cursor: pointer;
`
const StCloseButton = styled.button`
    margin-left: 400px;
    font-size: 23px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`
const StModal = styled(Modal)`
    width: 600px;
    height: 436px;
    margin: auto;
    background-color: #fffefe;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    /* position: absolute; */
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    margin: auto;
`

import React, { useEffect, useState } from 'react';

const Intro = () => {

    const [usercoment, setUserComent] = useState("");
    const speed = 100; //타이핑 속도

    const coment = "누구세요?";
    
    // 채팅창 애니메이션 구현
    setTimeout(()=>{
        document.querySelector('#popup').style.bottom = '50px';//채팅창 알림
    },3000)

    const onClick = ()=>{
        document.querySelector('#popup').style.bottom = '-50px';
        document.querySelector('#chat').style.display = 'block';
    }

    //타이핑 애니메이션



    return (
        <div id="intro">
            <div id="popup" onClick={onClick}>
                <span className="small-logo">🥑</span>새로운 메세지가 도착했습니다.
            </div>

            <div id="chat">

                <div className='chat-contents'>
                    <p className='hj'>
                        <span className='profile'></span>
                        <span className='chat-box'>안녕하세요</span>
                    </p>
                </div>

                <div className='user-insert'>
                    <div id="userComent">{usercoment}</div>
                    <button>전송</button>
                </div>
            </div>
        </div>
    );
};

export default Intro;
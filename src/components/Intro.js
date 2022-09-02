import React, { useEffect, useState } from 'react';
import ImgPopup from './ImgPopup';

const Intro = () => {
    let chatting = document.querySelector('.chat-contents');
    const [userComent, setUserComent] = useState("");

    const [img,setImg] = useState(false); //이미지팝업 상태관리

    let speed = 100;
    useEffect(()=>{
        // 채팅창 애니메이션 구현
        setTimeout(()=>{
            document.querySelector('#popup').style.bottom = '50px';//채팅창 알림
        },3000)
    },[])
    

    const onClick = ()=>{
        document.querySelector('#popup').style.bottom = '-50px';
        document.querySelector('#chat').style.display = 'block';
        setTimeout(()=>{
            setUserComent("누구세요?")
        },1500)

    }
    
    //userComent가 변경될때마다 typing 함수 실행
    useEffect(()=>{typing()},[userComent])

    //타이핑되는것처럼 보이는 함수
    const typing = async ()=>{
        if(userComent===""){
            document.querySelector('#userComent').innerHTML = "";
        }
        for(let i=0;i<userComent.length;i++){
            await wait(speed);
            document.querySelector('#userComent').innerHTML += userComent.charAt(i);
        }
    }

    function wait(ms){
        return new Promise(res=>setTimeout(res,ms))
    }

    const userChat = document.querySelectorAll('.user');
    //전송버튼을 누르면 유저의 코멘트가 채팅창에 나타나고, 입력란은 비워짐
    const onClick2 = ()=>{
        let userchat = document.createElement('div');
        let userchat1 = document.createElement('span');
        userchat.className = "user";
        userchat1.className = "chat-box";
        userchat1.innerHTML = userComent;
        userchat.appendChild(userchat1);
        chatting.appendChild(userchat);
        setUserComent("");
    }

    useEffect(()=>{
        if(userChat.length===1){
            setTimeout(()=>{
                let hjChat = document.createElement('div');
                let hjChat1 = document.createElement('span');
                hjChat.className = "hj";
                hjChat1.className = "chat-box";
                hjChat1.innerHTML = "저는 프론트엔드 개발자를 꿈꾸는 정현지입니다😎";
                hjChat.appendChild(hjChat1);
                chatting.appendChild(hjChat);
            },1000)
            setTimeout(()=>{
                let hjChat = document.createElement('div');
                hjChat.className = "hj";
                hjChat.innerHTML = `<div class="chat-box img"></div>`
                chatting.appendChild(hjChat);
            },2000)
        }
    },[userChat.length])
       
        window.addEventListener('click',(e)=>{
            if(e.target.className === "chat-box img"){
                console.log("이미지 팝업 실행")
                setImg(true);
            }

        })


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
                    <div id="userComent"></div>
                    <button onClick={onClick2}>전송</button>
                </div>
            </div>
            {img&& <ImgPopup/>}
        </div>
    );
};

export default Intro;
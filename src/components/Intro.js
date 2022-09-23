import React, { useEffect, useState } from 'react';
import ImgPopup from './ImgPopup';

const Intro = () => {
    let chatting = document.querySelector('.chat-contents');
    const [userComent, setUserComent] = useState("");

    const [img,setImg] = useState(false); //이미지팝업 상태관리
    const [count,setCount] = useState(0);

    let speed = 100;
    useEffect(()=>{
        // 채팅창 애니메이션 구현
        setTimeout(()=>{
            if(window.innerWidth>768){
                document.querySelector('#popup').style.bottom = '0';//채팅창 알림
            }else{
                document.querySelector('#popup').style.top = '0';//채팅창 알림
            }
            setTimeout(()=>{
                document.querySelector('#popup>img').classList.add('on');
            },1000)
        },3000)
    },[])
    

    const onClick = ()=>{
        if(window.innerWidth>768){
            document.querySelector('#popup').style.bottom = '-100px';
        }else{
            document.querySelector('#popup').style.top = '-100px';
        }
        
        document.querySelector('#chat').style.display = 'block';
        document.querySelector('#popup>img').classList.remove('on');
        setTimeout(()=>{
            setUserComent("누구세요?")
            setTimeout(()=>{
                //버튼 클릭미 class on
                document.querySelector('.user-insert>img').classList.add('on')
            })
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
    const onClick2 = (e)=>{
        if(e.target.className === 'on'){
            let userchat = document.createElement('div');
            let userchat1 = document.createElement('span');
            userchat.className = "user";
            userchat1.className = "chat-box";
            userchat1.innerHTML = userComent;
            userchat.appendChild(userchat1);
            chatting.appendChild(userchat);
            setUserComent("");
            //클래스 제거해서 키프레임 애니메이션 멈추기
            document.querySelector('.user-insert>img').classList.remove('on');
            document.querySelector('.user-insert>button').classList.remove('on');
        }
       
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

    useEffect(()=>{
        if(count===1){
            console.log("첫번째 닫기입니다.");
            setTimeout(()=>{
                let hjChat = document.createElement('div');
                let hjChat1 = document.createElement('span');
                hjChat.className = "hj";
                hjChat1.className = "chat-box margin";
                hjChat1.innerHTML = "혹시 저에 대해 더 알고싶거나, 관심이 생기신다면";
                hjChat.appendChild(hjChat1);
                chatting.appendChild(hjChat);
            },1000)
            setTimeout(()=>{
                let hjChat = document.createElement('div');
                let hjChat1 = document.createElement('span')
                hjChat.className = "hj";
                hjChat1.className = "chat-box";
                hjChat1.innerHTML = "jhyj3768@gmail.com으로 연락부탁드립니다.";
                hjChat.appendChild(hjChat1);
                chatting.appendChild(hjChat);
            },2000)
            setTimeout(()=>{
                let hjChat = document.createElement('div');
                let hjChat1 = document.createElement('span')
                hjChat.className = "hj";
                hjChat1.className = "chat-box";
                hjChat1.innerHTML = "이력서를 보내드리겠습니다.";
                hjChat.appendChild(hjChat1);
                chatting.appendChild(hjChat);
            },3000)
            setTimeout(()=>{
                let hjChat = document.createElement('div');
                let hjChat1 = document.createElement('span')
                hjChat.className = "hj";
                hjChat1.className = "chat-box";
                hjChat1.innerHTML = "감사합니다.😌";
                hjChat.appendChild(hjChat1);
                chatting.appendChild(hjChat);
            },4000)
            //이력서 첨부파일
            setTimeout(()=>{
                let hjChat = document.createElement('div');
                hjChat.className = "hj";
                hjChat.innerHTML = `<div class="chat-box file"><span>resume.pdf</span><a href="./resume.pdf" target="_blank"><img src="./imgs/download.png" alt=""/></a></div>`
                chatting.appendChild(hjChat);
            },5000)
        }
    },[count])
       
        window.addEventListener('click',(e)=>{
            if(e.target.className === "chat-box img"){
                console.log("이미지 팝업 실행")
                setImg(true);
            }

        })

    const closePopup = ()=>{
        console.log("이미지팝업 닫기")
        setImg(false);
        setCount(count+1); //첫번째 닫기에서만 뒤에 추가 채팅 입력
    }



    return (
        <div id="intro">
            <div id="popup" onClick={onClick}>
                <span className="small-logo">🥑</span>새로운 메세지가 도착했습니다.
                <img className='clickme' src="./imgs/clickme.png" alt=''/>
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
                    <button onClick={onClick2} className="on">전송</button>
                    <img className='clickme' src="./imgs/clickme.png" alt=''/>
                </div>
            </div>
            {img&& <ImgPopup closePopup={closePopup}/>}
        </div>
    );
};

export default Intro;
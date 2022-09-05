import React, { useEffect, useState } from 'react';
import Mypr from './Mypr';
import Portfolio from './Portfolio';
import Skills from './Skills';

const ImgPopup = ({closePopup}) => {
    
    const [current,setCurrent] = useState(0); //current값을 이용해서 슬라이드 구현하기
    const [popmessage,setPopmessage] = useState(false);

    //current값이 변경될때마다 li의 left값 변경해주기
    useEffect(()=>{
        lists.forEach((list,index)=>{
            list.style.left = `${(index-current)*100}%`
        })
    },[current])

    //유사배열 이용해서 인덱스 사용하기
    const lists = document.querySelectorAll('.list');
    
    //다음버튼
    const nextPage = ()=>{
        if(current<2){
            setCurrent(current+1);
            console.log(`다음버튼 클릭, current:${current}`)
            setPopmessage(false);
        }else{
            console.log('마지막사진입니다.')
            setPopmessage(true);
        }
    }
 
    //이전버튼
    const prevPage = ()=>{
        if(current>0){
            setCurrent(current-1);
            console.log(`이전버튼 클릭, current:${current}`)
            setPopmessage(false);
        }else{
            console.log('첫번째사진입니다.')
            setPopmessage(true);
        }
    }


    return (
        <div id="popupImg">
            <span id="prev-btn" onClick={prevPage}></span>
            <ul>
                <li className='list skills'><Skills/></li>
                <li className='list portfolio'><Portfolio/></li>
                <li className='list mypr'><Mypr/></li>
            </ul>
            {popmessage&& <div id="popmessage">{current===0? <h5>첫번째 사진입니다.</h5>:<h5>마지막 사진입니다.</h5>}</div>}
            <div className='likebtn' onClick={closePopup}>X</div>
            <span id="next-btn" onClick={nextPage}></span>
        </div>
    );
};

export default ImgPopup;
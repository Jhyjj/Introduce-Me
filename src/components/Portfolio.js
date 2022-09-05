import React from 'react';

const Portfolio = () => {
    return (
        <div id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li>
                    <img src="./신세개백화점.png" alt=""/>
                    <h4>신세개백화점</h4>
                    <span>개인프로젝트 - 반려견 장난감 쇼핑몰사이트<br/>
                    React를 이용한 프로젝트입니다. useState와 Redux를 이용해서 상태관리가 되고있습니다.
                    회원가입, 로그인, 검색, 장바구니, 리뷰작성, 1:1문의 등 기능을 구현했습니다.
                    서버는 node.js를 사용했고, DB는 AWS-MYSQL을 사용했습니다.
                    </span>
                </li>
                <li>
                    <img src="./집밥김선생.png" alt=""/>
                    <h4>집밥김선생</h4>
                    <span>팀 프로젝트 - 레시피 사이트<br/>
                     PHP로 작성된 팀프로젝트입니다. 회원가입, 로그인, 검색, 찜하기, 리뷰작성 등의 기능을 구현했습니다.
                     DB는 MYSQL을 사용했습니다.</span>
                </li>
                <li>
                    <img src="./hhh.png" alt=""/>
                    <h4>HHH</h4>
                    <span>팀 프로젝트 - 숙소 예약 사이트<br/>
                    React로 작성된 숙소예약사이트 입니다. 회원가입, 로그인, 검색, 숙소예약 등 기능을 구현했습니다.</span>
                </li>
                <li>
                    <img src="./introduce.png" alt=""/>
                    <h4>Introduce Me</h4>
                    <span>React로 작성한 자기소개 페이지입니다. 라이브러리를 사용하지 않고 간단한 슬라이드를 구현해보았습니다.</span>
                </li>
            </ul>
            <div>
                <h3>미니프로젝트</h3>
                <ul>
                    <li>
                        <img src="./baseball.png" alt=""/>
                        <h4>야구게임</h4>
                        <span>자바스크립트를 이용한 야구게임</span>
                    </li>
                    <li>
                        <img src="./minigame.png" alt=""/>
                        <h4>강쥐게임천국</h4>
                        <span>자바스크립트, 캔버스를 이용한 미니게임천국 패러디 사이트입니다.. 현재 사과게임만 실행되며(오류 수정중입니다.), 다른 게임도 추가예정입니다.</span>
                    </li>
                    <li>
                        <h4>Todo-list</h4>
                        <span>자바스크립트를 이용한 todo-list입니다.</span>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Portfolio;
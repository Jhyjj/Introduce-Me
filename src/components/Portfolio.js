import React from 'react';

const Portfolio = () => {
    return (
        <div id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li>
                    <img src="./imgs/신세개백화점.png" alt=""/>
                    <h4>신세개백화점</h4>
                    <span>반려견 장난감 쇼핑몰사이트</span>
                    <div className='protfolio_hover'>
                        <span>React를 이용한 개인프로젝트.<br/> useState와 Redux를 이용한 상태관리,
                    회원가입, 로그인, 검색, 장바구니, 리뷰작성, 1:1문의 등 기능을 구현했습니다.<br/>
                    서버는 node.js를 사용했고, DB는 AWS-MYSQL을 사용했습니다.</span><br/>
                       <a href="https://mm2-shopping-client.vercel.app/" target="_blank" className='home'></a>
                       <a href="https://github.com/Jhyjj/mm2_shopping_client" target="_blank" className='github'></a>
                       <a href="https://github.com/Jhyjj/mm2_shopping_server" target="_blank" className='github'></a>
                    </div>
                </li>
                <li>
                    <img src="./imgs/집밥김선생.png" alt=""/>
                    <h4>집밥김선생</h4>
                    <span>팀 프로젝트 - 레시피 사이트</span>
                     <div className='protfolio_hover'>
                        <span>
                        PHP로 작성된 팀프로젝트입니다.<br/> 회원가입, 로그인, 검색, 찜하기, 리뷰작성 등의 기능을 구현했습니다.<br/>
                     DB는 MYSQL을 사용했습니다.
                        </span><br/>
                       <a href="http://hjindo.dothome.co.kr/php/RECIPE2/" target="_blank" className='home'></a>
                       <a href="https://github.com/Jhyjj/Recipe.git" target="_blank" className='github'></a>
                    </div>
                </li>
                <li>
                    <img src="./imgs/hhh.png" alt=""/>
                    <h4>HHH</h4>
                    <span>팀 프로젝트 - 숙소 예약 사이트</span>
                    <div className='protfolio_hover'>
                        <span>React로 만든 숙소예약사이트 입니다.<br/> 회원가입, 로그인, 검색, 숙소예약 등 기능을 구현했습니다.<br/>현재 서버 만료 문제로 local서버로 변경했습니다.</span><br/>
                       <a href="https://hhh-client.vercel.app/" target="_blank" className='home'></a>
                       <a href="https://github.com/Jhyjj/hhh-client" target="_blank" className='github'></a>
                       <a href="https://github.com/Jhyjj/hhh_server" target="_blank" className='github'></a>
                    </div>
                </li>
                <li>
                    <img src="./imgs/introduce.png" alt=""/>
                    <h4>Introduce Me</h4>
                    <div className='protfolio_hover'>
                        <span>React로 작성한 자기소개 페이지입니다.<br/>PC 카카오톡을 모티브로 만들어보았습니다.<br/> 라이브러리를 사용하지 않고 간단한 슬라이드를 구현해보았습니다.</span><br/>
                       <a href="http://hjindo.dothome.co.kr/php/RECIPE2/" target="_blank" className='home'></a>
                       <a href="https://github.com/Jhyjj/Introduce-Me.git" target="_blank" className='github'></a>
                    </div>
                </li>
            </ul>
            <div>
                <h3>미니프로젝트</h3>
                <ul>
                    <li>
                        <img src="./imgs/baseball.png" alt=""/>
                        <h4>야구게임</h4>
                        <div className='protfolio_hover'>
                            <span>자바스크립트를 이용한 야구게임입니다.</span>
                            <a href="https://github.com/Jhyjj/baseballGame.git" target="_blank" className='github'></a>
                        </div>
                    </li>
                    <li>
                        <img src="./imgs/minigame.png" alt=""/>
                        <h4>강쥐게임천국</h4>
                        <div className='protfolio_hover'>
                        <span>자바스크립트, 캔버스로 만든 미니게임입니다.<br/> 현재 사과게임만 실행되며<br/><br/> 다른 게임도 추가예정입니다.</span>
                            <a href="https://github.com/Jhyjj/mini-game.git" target="_blank" className='github'></a>
                        </div>
                    </li>
                    <li>
                        <img src="./imgs/blog.png" alt=""/>
                        <h4>블로그</h4>
                        <div className='protfolio_hover'>
                        <span>리액트로 만든 블로그입니다.<br/> 이미지를 추가할 수 있는 에디터를 만들어보았습니다.</span>
                        <a href="https://github.com/Jhyjj/MyBlog.git" target="_blank" className='github'></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Portfolio;
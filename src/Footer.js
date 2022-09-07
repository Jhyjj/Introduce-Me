
const Footer = () => {

    //오른쪽 하단 시계 구현하기
    function getTime(){
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        console.log(`${hours}:${minutes}`)
    }

    function init(){
        getTime();
        setInterval(getTime,1000);
    }

    init();


    return (
        <div id="footer">
            <div className='inner-contents'>
                <nav>
                    <ul>
                        {/* 시작메뉴 */}
                        <li></li>
                        {/* 검색창 */}
                        <li></li>
                        {/* 실행메뉴 */}
                        <li></li>

                        {/* 오른쪽 시계 */}
                        <li></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Footer;
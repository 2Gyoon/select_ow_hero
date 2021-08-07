$(document).ready(function(){

    var hero_arr = [
        ["hero1.png", "아나"],
        ["hero2.png", "애쉬"],
        ["hero3.png", "바티스트"],
        ["hero4.png", "바스티온"],
        ["hero5.png", "브리기테"],
        ["hero6.png", "디바"],
        ["hero7.png", "둠피스트"],
        ["hero8.png", "에코"],
        ["hero9.png", "겐지"],
        ["hero10.png", "한조"],
        ["hero11.png", "정크랫"],
        ["hero12.png", "루시우"],
        ["hero13.png", "맥크리"],
        ["hero14.png", "메이"],
        ["hero15.png", "메르시"],
        ["hero16.png", "모이라"],
        ["hero17.png", "오리사"],
        ["hero18.png", "파라"],
        ["hero19.png", "리퍼"],
        ["hero20.png", "라인하르트"],
        ["hero21.png", "로드호그"],
        ["hero22.png", "시그마"],
        ["hero23.png", "솔져:76"],
        ["hero24.png", "솜브라"],
        ["hero25.png", "시메트라"],
        ["hero26.png", "토르비욘"],
        ["hero27.png", "트레이서"],
        ["hero28.png", "위도우메이커"],
        ["hero29.png", "윈스턴"],
        ["hero30.png", "레킹볼"],
        ["hero31.png", "자리야"],
        ["hero32.png", "젠야타"],
    ];

    var hero_li = `
    <li>
        <img src="./images/hero1.png" alt="아나">
    </li>
    `;

    for(i=0; i<hero_arr.length; i++){
        $(".hero").append(hero_li);
    }

    $(".hero li").each(function(i){
        $(this).find("img").attr({"src": "./images/"+hero_arr[i][0],"alt":hero_arr[i][1]});
    });



});
/*모바일 메뉴*/
 const mobileOpen = document.querySelector(".mobile_open_btn")
 const mobileClose = document.querySelector(".mobile_menu_close")

 mobileOpen.addEventListener("click",e => {
  document.querySelector("#mobile_menu_wrap").style.display = "block"
 });

 mobileClose.addEventListener("click",e => {
  document.querySelector("#mobile_menu_wrap").style.display = "none"
 });




/*학생포트폴리오 팝업*/


function portfoliomodal() {
    
    const modalOpen = document.querySelectorAll(".student_pfolio_name");  //{} //[{},{},{},{}]
    const modalClose = document.querySelectorAll(".portfolio_modal_btn");    

    for (let i = 0; i < modalOpen.length; i++) {
        modalOpen[i].addEventListener("click",e => {
            document.querySelector("#portfolio_modal").style.display = "block"
           });
    }

    // console.log(modalOpen);

    // modalOpen.forEach((con) => {
    //     console.log(con);
    // })

    // modalOpen.addEventListener("click",e => {
    //     document.querySelector("#portfolio_modal").style.display = "block"
    //    });
      
    modalClose[0].addEventListener("click",e => {
        document.querySelector("#portfolio_modal").style.display = "none"
       });
    } 

portfoliomodal();


 /**/ 
 /*스틱코드 단축 자동완성 호출 태그 : modal_js*/
/*
// 모달 열기
function modalOpen() {
    document.querySelector('mobile_menu_wrap').style.display = 'block';
    document.querySelector('.modal_background').style.display = 'block';
}

// 모달 끄기
function modalClose() {
    document.querySelector('mobile_menu_wrap').style.display = 'none';
    document.querySelector('.modal_background').style.display = 'none';

}


//버튼 클릭리스너 달기
document.querySelector('#mobile_open_btn').addEventListener('click', modalOpen);
document.querySelector('#mobile_menu_close').addEventListener('click', modalClose);
*/
// gnb
$("#gnb").on("mouseenter", function () {
  $(".sub").stop().slideDown();
});
/* id gnb에 마우스를 올리면 함수가 실행됩니다
어떤 함수인가? sub클래스에 슬라이드 다운이라는 애니메이션이 작동되는 함수
단 애니메이션은 거의 stop()메서드를 사용해야합니다. 반복 이벤트 동작을 방지하기 위해서 */
$("#gnb").on("mouseleave", function () {
  $(".sub").stop().slideUp();
});
/* 슬라이드 업하는 코드 */
$("#gnb>li").on("mouseenter", function () {
  $(this).children("a").addClass("on");
});
// li ( sub 메뉴 )에 마우스가 올라가져 있을 때도 주메뉴에 활성화가
// 되어야한다는 요구사항을 만족하기 위해서 작성된 코드
// this란 맨 앞의 이벤트가 붙어지는 대상을 의미합니다 => gnb>li
$("#gnb>li").on("mouseleave", function () {
  $(this).children("a").removeClass("on");
});

// tab

// tab은 공지사항 / 갤러리의 메뉴를 선택하는 요소 li는 각각 notice, gallery 가르키는 요소
$(".tab>li").on("click", function () {
  // li를 클릭하면 해당 내용을 불러와야합니다
  // ( 공지사항을 클릭시 notice를, 갤러리를 클릭시 gallery를 불러와야한다 )

  /* 탭의 li를 클릭했을 때
  tab에서 li를 찾아서 on을 지웁니다
  content에서 div를 찾아서 on을 지웁니다
  그리고 클릭한 li에 on을 붙입니다
   */
  $(".tab").find("li").removeClass("on");
  $(".content").find("div").removeClass("on");
  $(this).addClass("on");
  /* 클릭한 대상의 a태그를 지정해서 그 a태그 안의 속성 "href"의 값을 변수에 담습니다
  담아진 값을 콘솔로 보면 #notice등으로 우리가 보여야하는 아이디명을 담고 있기 때문에
  $(conId)을 하면 보여야하는 요소를 선택하게 되는 것 입니다
  그리고 on을 붙여주는 것 입니다
   */
  // var conId = $(".tab>li>a").attr("href"); <-- 이 코드는 잘못된 코드
  var conId = $(this).children("a").attr("href");
  $(conId).addClass("on");
});

// slide
/* setInterval ( 콜백함수, 시간 ) 콜백함수에 반복적으로 적용할 함수를 넣고, 시간은 반복시간
따라서 반복시간마다 콜백함수를 실행합니다
ul인 frame을 top -300px로 위로 올린 뒤, 콜백함수로 0index의 li를 appendTo라는 메소드로
ul의 뒤에 붙입니다 따라서 순환하는 슬라이드처럼 되도록 하는 것
동시에 css를 top 0으로 맞추도록 하면서 부드럽게 슬라이드 되도록 합니다
단) css에 높이값과 기준점을 잡아주어야만 부드럽게 슬라이드가 가능합니다
*/
setInterval(function () {
  $(".frame").animate({ top: "-300px" }, function () {
    $(".frame>li").eq(0).appendTo(".frame"); //.appendTo 뜯어서 가져다 붙인다
    $(".frame").css({ top: 0 });
  });
}, 3000);

$("#notice>ul>li").on("click", function () {
  $(".popup").css("display", "block");
});
$("#close").click(function () {
  $(".popup").css("display", "none");
});

// img태그를 이용한 슬라이더에서는 밑의 코드로 슬라이딩이 자연스럽지 않고
// 이미지만 바뀝니다. 배경으로 넣은 이미지로 작성될 경우에만 밑에 코드가 적용됩니다.
// setInterval(function () {
//   var current_index = $(".frame").fliter(".on").index();
//   var next_index;
//   if (((current_index |= $(".frame>li")), length - 1)) {
//     next_index = current_index + 1;
//   } else {
//     next_index = 0;
//   }
//   $(".frame>li")
//     .fliter(".on")
//     .stop()
//     .animate({ bottom: "-100%" }, 3000, function () {
//       $(this).removeClass("on").hide();
//     });
//   $(".frame>li")
//     .eq(next_index)
//     .show({ bottom: "100%" })
//     .animate({ bottom: "0%" }, 3000, function () {
//       $(this).addClass("on");
//     });
// }, 3000);
// // 실행할 함수, 시간

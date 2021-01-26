$(document).ready(function() {

  //첫번째 레이어
  var $panel = $(".pop_box1");
  var $panelContents = $panel.find(".pop_contents1");

  $("#btn_popup_open1").on("click", function(e) {
    // 팝업 가운데 설정(가로)
    if ($panelContents.outerWidth() < $(document).width()) {
      $panelContents.css("margin-left", "-" + $panelContents.outerWidth() / 2 + "px");
    } else {
      $panelContents.css("left", "0px");
    }

    // 팝업 가운데 설정(세로)
    if ($panelContents.outerHeight() < $(document).height()) {
      $panelContents.css("margin-top", "-" + $panelContents.outerHeight() / 2 + "px");
    } else {
      $panelContents.css("top", "0px");
    }

    // 레이어 팝업 열기
    $panel.fadeIn();
  });

  // 팝업 닫기 이벤트 정의
  $("#btn_popup_close1").on("click", popupClose);

  // 팝업 배경 클릭 이벤트 정의
  $panel.find(".pop_bg1").on("click", popupClose);

  function popupClose(e) {
    $panel.fadeOut();
    // 이벤트 기본 동작 중단
    e.preventDefault();
  }
});

$(document).ready(function(){
  //두번째 레이어
  var $panel = $(".pop_box2");
  var $panelContents = $panel.find(".pop_contents2");

  $("#btn_popup_open2").on("click", function(e) {
    // 팝업 가운데 설정(가로)
    if ($panelContents.outerWidth() < $(document).width()) {
      $panelContents.css("margin-left", "-" + $panelContents.outerWidth() / 2 + "px");
    } else {
      $panelContents.css("left", "0px");
    }

    // 팝업 가운데 설정(세로)
    if ($panelContents.outerHeight() < $(document).height()) {
      $panelContents.css("margin-top", "-" + $panelContents.outerHeight() / 2+ "px");
    } else {
      $panelContents.css("top", "0px");
    }

    // 레이어 팝업 열기
    $panel.fadeIn();
  });

  // 팝업 닫기 이벤트 정의
  $("#btn_popup_close2").on("click", popupClose);

  // 팝업 배경 클릭 이벤트 정의
  $panel.find(".pop_bg2").on("click", popupClose);

  function popupClose(e) {
    $panel.fadeOut();
    // 이벤트 기본 동작 중단
    e.preventDefault();
  }
});

$(document).ready(function(){
  //세번째 레이어
  var $panel = $(".pop_box3");
  var $panelContents = $panel.find(".pop_contents3");

  $("#btn_popup_open3").on("click", function(e) {
    // 팝업 가운데 설정(가로)
    if ($panelContents.outerWidth() < $(document).width()) {
      $panelContents.css("margin-left", "-" + $panelContents.outerWidth() / 2 + "px");
    } else {
      $panelContents.css("left", "0px");
    }

    // 팝업 가운데 설정(세로)
    if ($panelContents.outerHeight() < $(document).height()) {
      $panelContents.css("margin-top", "-" + $panelContents.outerHeight() / 2+ "px");
    } else {
      $panelContents.css("top", "0px");
    }

    // 레이어 팝업 열기
    $panel.fadeIn();
  });

  // 팝업 닫기 이벤트 정의
  $("#btn_popup_close3").on("click", popupClose);

  // 팝업 배경 클릭 이벤트 정의
  $panel.find(".pop_bg3").on("click", popupClose);

  function popupClose(e) {
    $panel.fadeOut();
    // 이벤트 기본 동작 중단
    e.preventDefault();
  }
});

$(document).ready(function(){
  //네번째 레이어
  var $panel = $(".pop_box4");
  var $panelContents = $panel.find(".pop_contents4");

  $("#btn_popup_open4").on("click", function(e) {
    // 팝업 가운데 설정(가로)
    if ($panelContents.outerWidth() < $(document).width()) {
      $panelContents.css("margin-left", "-" + $panelContents.outerWidth() / 2 + "px");
    } else {
      $panelContents.css("left", "0px");
    }

    // 팝업 가운데 설정(세로)
    if ($panelContents.outerHeight() < $(document).height()) {
      $panelContents.css("margin-top", "-" + $panelContents.outerHeight() / 2+ "px");
    } else {
      $panelContents.css("top", "0px");
    }

    // 레이어 팝업 열기
    $panel.fadeIn();
  });

  // 팝업 닫기 이벤트 정의
  $("#btn_popup_close4").on("click", popupClose);

  // 팝업 배경 클릭 이벤트 정의
  $panel.find(".pop_bg4").on("click", popupClose);

  function popupClose(e) {
    $panel.fadeOut();
    // 이벤트 기본 동작 중단
    e.preventDefault();
  }
});

$(document).ready(function(){
  //다섯번째 레이어
  var $panel = $(".pop_box5");
  var $panelContents = $panel.find(".pop_contents5");

  $("#btn_popup_open5").on("click", function(e) {
    // 팝업 가운데 설정(가로)
    if ($panelContents.outerWidth() < $(document).width()) {
      $panelContents.css("margin-left", "-" + $panelContents.outerWidth() / 2 + "px");
    } else {
      $panelContents.css("left", "0px");
    }

    // 팝업 가운데 설정(세로)
    if ($panelContents.outerHeight() < $(document).height()) {
      $panelContents.css("margin-top", "-" + $panelContents.outerHeight() / 2+ "px");
    } else {
      $panelContents.css("top", "0px");
    }

    // 레이어 팝업 열기
    $panel.fadeIn();
  });

  // 팝업 닫기 이벤트 정의
  $("#btn_popup_close5").on("click", popupClose);

  // 팝업 배경 클릭 이벤트 정의
  $panel.find(".pop_bg5").on("click", popupClose);

  function popupClose(e) {
    $panel.fadeOut();
    // 이벤트 기본 동작 중단
    e.preventDefault();
  }
});

$(document).ready(function(){
  //여섯번째 레이어
  var $panel = $(".pop_box6");
  var $panelContents = $panel.find(".pop_contents6");

  $("#btn_popup_open6").on("click", function(e) {
    // 팝업 가운데 설정(가로)
    if ($panelContents.outerWidth() < $(document).width()) {
      $panelContents.css("margin-left", "-" + $panelContents.outerWidth() / 2 + "px");
    } else {
      $panelContents.css("left", "0px");
    }

    // 팝업 가운데 설정(세로)
    if ($panelContents.outerHeight() < $(document).height()) {
      $panelContents.css("margin-top", "-" + $panelContents.outerHeight() / 2+ "px");
    } else {
      $panelContents.css("top", "0px");
    }

    // 레이어 팝업 열기
    $panel.fadeIn();
  });

  // 팝업 닫기 이벤트 정의
  $("#btn_popup_close6").on("click", popupClose);

  // 팝업 배경 클릭 이벤트 정의
  $panel.find(".pop_bg6").on("click", popupClose);

  function popupClose(e) {
    $panel.fadeOut();
    // 이벤트 기본 동작 중단
    e.preventDefault();
  }
});

$(document).ready(function(){
  //일곱번째 레이어
  var $panel = $(".pop_box7");
  var $panelContents = $panel.find(".pop_contents7");

  $("#btn_popup_open7").on("click", function(e) {
    // 팝업 가운데 설정(가로)
    if ($panelContents.outerWidth() < $(document).width()) {
      $panelContents.css("margin-left", "-" + $panelContents.outerWidth() / 2 + "px");
    } else {
      $panelContents.css("left", "0px");
    }

    // 팝업 가운데 설정(세로)
    if ($panelContents.outerHeight() < $(document).height()) {
      $panelContents.css("margin-top", "-" + $panelContents.outerHeight() / 2+ "px");
    } else {
      $panelContents.css("top", "0px");
    }

    // 레이어 팝업 열기
    $panel.fadeIn();
  });

  // 팝업 닫기 이벤트 정의
  $("#btn_popup_close7").on("click", popupClose);

  // 팝업 배경 클릭 이벤트 정의
  $panel.find(".pop_bg7").on("click", popupClose);

  function popupClose(e) {
    $panel.fadeOut();
    // 이벤트 기본 동작 중단
    e.preventDefault();
  }
});
//http://blog.naver.com/yangwonder/221476064445

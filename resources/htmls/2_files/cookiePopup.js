
jindo.$Fn(function() {
    var popupTimerCookie =  jindo.$Cookie().get("popupTimerCookie");
    var popupElement = jindo.$$.getSingle('.notice_popup_wrap');

    if(!popupElement) {
        return null;
    }

    //쿠키가 없다면
    if(popupTimerCookie == null) {
        //팝업 띄우기
        jindo.$Element(popupElement).show();
        jindo.$Element(jindo.$$.getSingle('.pop_dimmed')).show();

        //닫기 버튼
        jindo.$Fn(function(oEvent) {
            if(jindo.$$.getSingle("#no_see").checked) {
                //1주일간 안보기 체크한 경우 쿠키에 저장
                jindo.$Cookie().set("popupTimerCookie", "true", 7, 'book.naver.com');
            } else {
                //그냥 닫기 한 경우 쿠키 제거
                jindo.$Cookie().remove("popupTimerCookie");
            }
            jindo.$Element(popupElement).hide();
            jindo.$Element(jindo.$$.getSingle('.pop_dimmed')).hide();

        }, this).attach(jindo.$("closeBtn"), "click");
    }
}).attach(window, "load");

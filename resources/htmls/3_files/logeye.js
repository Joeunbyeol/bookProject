
window.logeye = (typeof window.logeye === "undefined") ? {}
    : window.logeye;
logeye.call = (function() {
    /**
     * "url":"http://testdss.naver.com:8281/upm/api/util/logeye"
     * "storeId":"200056611",
     * "trackType":"NP",
     * "trackChannel":"bk",
     * "serviceId":"book"
     */
    var _url;
    var _storeId;
    var _trackType;
    var _trackChannel;
    var _serviceId;


    function _init() {

    }//end of init()

    function _setParams(params) {
        if(!params.storeId) {
            return ;
        }

        _url = (params.url) ? params.url : "https://upm.search.naver.com/upm/api/util/logeye";
        _storeId = params.storeId;
        _trackType = (params.trackType) ? params.trackType : "NP";
        _trackChannel = (params.trackChannel) ? params.trackChannel : "bk";
        _serviceId = (params.serviceId) ? params.serviceId : "book";
    }


    /**
     * 로그아이 API를 호출하기 위해서는 CP마다 지정된 storeId가 필수
     */
    function callLogEye() {
        if(!_storeId) {
            return ;
        }

        jQuery.ajax({
            method : "POST",
            crossDomain:true,
            xhrFields: {
                withCredentials:true
            },
            statusCode : {
                401 : function() {
                    //alert("No Authorization");
                },
                500 : function() {
                    alert("Internal Server Error");
                }
            },
            url : _url,
            data: {
                "storeId":_storeId,
                "trackType":_trackType,
                "trackChannel":_trackChannel,
                "serviceId":_serviceId
            }
        }).done(function(msg) {
            //alert( "result : " + JSON.stringify(msg) );
        });
    }

    return {
        init : _init,
        setParams : _setParams,
        callLogEye : callLogEye
    }

}());
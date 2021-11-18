$(window).on('load', function () {
    $('.flexslider').flexslider({
        animation: "fade",
        controlNav: "thumbnails",
        itemWidth: 350,
        slideshow: false,
        directionNav: false
    });
});

/*================= 카카오 js ================= */
var dnleh = 37.502370203304615;
var rudeh = 127.034668718745;

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(dnleh, rudeh), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커가 표시될 위치입니다
var markerPosition  = new kakao.maps.LatLng(dnleh, rudeh); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);   
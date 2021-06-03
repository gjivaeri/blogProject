var naver_id_login = new naver_id_login("LCyzgmhiZBYF1CjX49vl", "http://localhost:3000/callback");
// 접근 토큰 값 출력
//이걸 가지고 회원 프로필 조회 가능.
//저장해서 주기적으로 갱신해줘야 합니다. 이걸 삭제함으로써 로그아웃을 구현합니다.
alert(naver_id_login.oauthParams.access_token);
// 네이버 사용자 프로필 조회
naver_id_login.get_naver_userprofile("naverSignInCallback()");
// 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
//sql로 저장하도록 고쳐야 합니다
//현재 제대로 실행이 안되고 있습니다. 원인 불명.
function naverSignInCallback() {
    alert(naver_id_login.getProfileData('id'));
    alert(naver_id_login.getProfileData('nickname'));
}

window.opener.location.href="http://localhost:3000/";
self.close();
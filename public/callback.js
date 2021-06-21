var login = new naver_id_login("LCyzgmhiZBYF1CjX49vl", "http://localhost:3000/callback");
// 네이버 사용자 프로필 조회
login.get_naver_userprofile("naverSignInCallback()");

// 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
function naverSignInCallback() {
    console.log('login success');
}
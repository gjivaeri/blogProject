var login = new naver_id_login("LCyzgmhiZBYF1CjX49vl", "http://localhost:3000/callback");
// 접근 토큰 값 출력
//이걸 가지고 회원 프로필 조회 가능.
//저장해서 주기적으로 갱신해줘야 합니다. 이걸 삭제함으로써 로그아웃을 구현합니다.
alert(login.oauthParams.access_token);

// 네이버 사용자 프로필 조회
login.get_naver_userprofile("naverSignInCallback()");

// 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
function naverSignInCallback() {
    console.log('login success');
}
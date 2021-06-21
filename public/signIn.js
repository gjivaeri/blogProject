var login = new naver_id_login("LCyzgmhiZBYF1CjX49vl", "http://localhost:3000/callback");
var state = login.getUniqState();
login.setButton("green", 3, 40);
login.setDomain("http://localhost:3000/");
login.setState(state);
login.setPopup();
login.init_naver_id_login();
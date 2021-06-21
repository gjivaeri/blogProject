
import Head from 'next/head';
import { useContext } from 'react';
import { LoginContext } from '../public/context';
import Link from "next/link";
import Cookies from 'js-cookie';

export default function callback() {
    var { id, setID } = useContext(LoginContext);
    return (
        <div>
            <Head>
                <script type="text/javascript" src="/naverLogin.js"></script>
                <script type="text/javascript" src="/jQuery.js"></script>
                <script type="text/javascript" src="/callback.js"></script>
                <title>블로그 로그인</title>
            </Head>
            <button onClick={() => {
                setID(login.getProfileData('id'));
                let user = {
                    uid: login.getProfileData('id'),
                    displayName: login.getProfileData('name')
                }
                Cookies.set('userNaver', JSON.stringify(user));
                window.opener.location.href = 'http://localhost:3000';
                self.close();
            }}>로그인 완료하기</button>
        </div>
    )
}

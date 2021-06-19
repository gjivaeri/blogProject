import Head from 'next/head';

export default function callback() {
    return (
        <div>
            <Head>
                <script type="text/javascript" src="/naverLogin.js"></script>
                <script type="text/javascript" src="/jQuery.js"></script>
                <script type="text/javascript" src="/callback.js"></script>
            </Head>
            <p>로그인 중입니다. 잠시만 기다려 주세요...</p>
        </div>
    )
}


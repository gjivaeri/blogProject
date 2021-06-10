const axios = require('axios');
import Link from 'next/link';

const submit = (event) => {
    const category = (document.getElementById('category') as HTMLInputElement).value;
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const content = (document.getElementById('content') as HTMLInputElement).value;
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    
    axios.post('/api/postEdit', null, {
        params: {
            postId: Math.floor(Date.now() / 1000), 
            title: title, 
            content: content, 
            date: date, 
            author: '1', 
            category: category,
        }
    })
    .then((response) => {
        //console.log(response);
    })
}
export default function postEdit() {
    return (
        <>
        <h1>글 작성/수정</h1>
        <nav>
            <ul className='nav-container'>
                <li className='nav-item'>홈</li>
                <li className='nav-item'>내 글</li>
                <li className='nav-item'>로그아웃</li>
            </ul>
        </nav>
        <form>
            <div className='category'>
                <select id='category'>
                    <option value='diary'>일기</option>
                    <option value='review'>리뷰</option>
                    <option value='til'>TIL</option>
                </select>
            </div>
            <div className='title'>
                <input type='text' id='title' placeholder='제목'></input>
            </div>
            <div className='content'>
                <textarea id='content'></textarea>
            </div>
            <Link href='postList'>
                <button onClick={submit} type='button'>작성</button>
            </Link>
            <Link href='postList'>
                <button type='button'>취소</button>
            </Link>
            
        </form>
        </>
    )
}
const axios = require('axios');
import Link from 'next/link';
import dynamic from 'next/dynamic'
import React, { useEffect, useRef, useState } from 'react'

import { EditorState } from 'draft-js';
//import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert';

  const Editor = dynamic(
        () => import('react-draft-wysiwyg').then(mod => mod.Editor),
        { ssr: false }
      );

export default function postEdit() {
    const categoryReference = useRef();
    const titleReference = useRef();
    const contentReference = useRef();

    const submit = (event) => {
        const category = (categoryReference.current as HTMLInputElement).value;//(document.getElementById('category') as HTMLInputElement).value;
        const title = (titleReference.current as HTMLInputElement).value;
        const content = (contentReference.current as HTMLInputElement).value;
        const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        
        axios.post('/api/postEdit', null, {
            params: {
                //postId: Math.floor(Date.now() / 1000), 
                title: title, 
                content: content, 
                //date: date, 
                author: '1', 
                category: category,
            }
        })
        .then(response => {
            //console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }
    
    useEffect(() => {
        //setEditorState(true);
        
      });

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      );
      const  [convertedContent, setConvertedContent] = useState(null);
      
    const handleEditorChange = async (state) => {
        setEditorState(state);
        convertContentToHTML();
    };

    const convertContentToHTML = async () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
    };
    console.log(convertedContent);
   
    

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
                <select ref={categoryReference} id='category'>
                    <option value='diary'>일기</option>
                    <option value='review'>리뷰</option>
                    <option value='til'>TIL</option>
                </select>
            </div>
            <div className='title'>
                <input ref={titleReference} type='text' id='title' placeholder='제목'></input>
            </div>
            <div className='content'>
                <textarea ref={contentReference} id='content'></textarea>
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

export default function postEdit() {
    return (
        <>
        <h1>글 작성/수정</h1>
        <nav>
            <ul className="nav-container">
                <li className="nav-item">홈</li>
                <li className="nav-item">내 글</li>
                <li className="nav-item">로그아웃</li>
            </ul>
        </nav>
        <form>
            <div id="category">
                <select name="category">
                    <option value="diary">일기</option>
                    <option value="review">리뷰</option>
                    <option value="til">TIL</option>
                </select>
            </div>
            <div id="title">
                <input type="text" name="title" placeholder="제목"></input>
            </div>
            <div id="content">
                <textarea name="content"></textarea>
            </div>
            <button type="button">작성</button>
            <button type="button">취소</button>
        </form>
        </>
    )
}
// import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>ABOUT ME</span>

        <div className={styles.sidebarContent}>
          <p>
            Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
            amet ex esse.Sunt eu ut nostrud id quis proident no meaning words.
          </p>
          <img
            src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>CATEGORIES</span>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <Link className="link" href="/category/diary">
              Diary
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <Link className="link" href="/category/til">
              Til
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <Link className="link" href="/category/review">
              Review
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <Link className="link" href="/category/style">
              Style
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <Link className="link" href="/category/tech">
              Tech
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <Link className="link" href="/category/cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.sidebarItem}>
        <div className="sidebarTitle">FOLLOW US</div>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}

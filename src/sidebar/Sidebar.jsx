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
            <Link className="link" href="/posts?cat=Life">
              Diary
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <Link className="link" href="/posts?cat=Music">
              Til
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <Link className="link" href="/posts?cat=Sport">
              Review
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <Link className="link" href="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <Link className="link" href="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <Link className="link" href="/posts?cat=Cinema">
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

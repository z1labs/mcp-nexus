import Link from "next/link";
import { ToastContainer } from "react-toastify";

import SocialsList from "@/components-new/layout/Footer/SocialsList";

import { MENU } from "@/logic/constants/menu";

import styles from "./style.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.main}>
            <div className={styles.logo}>
              <Link href="/">
                <img
                  src="/img/svg/logo-symbol.svg"
                  alt="Zero1 Labs"
                  width={56}
                  height={56}
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <div>
                <span>Zero1 Labs</span>
                <small>
                  © {new Date().getFullYear()} Zero1 Labs. All right reserved.
                </small>
              </div>
            </div>
            <SocialsList className={styles.socials} />
          </div>
          <nav className={styles.menu}>
            <ul className={styles.menuList}>
              {MENU.map((item, idx) => (
                <li key={idx}>
                  <span>{item.headline}</span>
                  <ul>
                    {item.list.map((el, i) => (
                      <li key={i}>
                        <Link href={el.url}>{el.name}</Link>
                        {el?.list && (
                          <ul>
                            {el.list.map((itm, ii) => (
                              <li key={ii}>
                                <Link href={itm.url}>{itm.name}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
      <ToastContainer theme="dark" />
    </>
  );
}

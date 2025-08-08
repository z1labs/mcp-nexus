"use client";

import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import Link from "next/link";
import clsx from "clsx";

import Button from "@/components/common/Button";
import SocialsList from "@/components/layout/Footer/SocialsList";

import useOutsideClick from "@/hooks/useOutsideClick";

import { MENU } from "@/logic/constants/menu";

import styles from "./style.module.scss";

export default function Header() {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [isHovering, setHover] = useState(false);

  const ref = useRef();

  useOutsideClick(ref, () => setMenuIsOpened(false));

  const { connectedWallet } = useSelector((state) => state.UserReducer);

  const { data: session } = useSession();
  const { logout } = useAuth();

  const createUser = async () => {};

  useEffect(() => {
    if (connectedWallet?.address) {
      createUser();
    }
  }, [session, connectedWallet]);

  useEffect(() => {
    document.addEventListener(
      "keyup",
      ({ key }) => key === "Escape" && setMenuIsOpened(false),
      { passive: true }
    );
  }, [menuIsOpened]);

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.row}>
            <div
              className={clsx(styles.block, menuIsOpened && styles.isOpened)}
            >
              <Link href="/" className={styles.logo}>
                <img
                  src="/img/svg/logo-symbol-black.svg"
                  alt="Zero1 Labs"
                  width={64}
                  height={64}
                  loading="lazy"
                  decoding="async"
                />
                <span>Zero1 Labs</span>
              </Link>
              <button
                type="button"
                className={clsx(
                  styles.btnToggle,
                  menuIsOpened && styles.isPressed
                )}
                title="Toggle menu"
                aria-label="Toggle menu"
                onClick={() => setMenuIsOpened(!menuIsOpened)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>

            <div className={styles.buttons}>
              <div className={styles.buttonsReg}>
                <Button href="#" secondary disabled>
                  Nexus
                </Button>
                <Button href="/mainframe" secondary>
                  Mainframe
                </Button>
                <Button href="https://cypher.z1labs.ai/" secondary>
                  Cypher
                </Button>
              </div>
              {connectedWallet?.isConnected && connectedWallet?.address ? (
                <Button
                  className={styles.connectedBtn}
                  onClick={async () => {
                    await logout();
                  }}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  {isHovering
                    ? `Disconnect Wallet`
                    : `${walletSubstr(connectedWallet.address)}`}
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    setHover(false);
                    setVisibleConnectModal(true);
                  }}
                >
                  Connect Wallet
                </Button>
              )}
            </div>

            <nav
              className={clsx(styles.menu, menuIsOpened && styles.isOpened)}
              ref={ref}
            >
              <ul className={styles.menuList}>
                {MENU.map((item, idx) => (
                  <li key={idx}>
                    <span>{item.headline}</span>
                    <ul className={styles.menuNav}>
                      {item.list.map(
                        (el, i) =>
                          el.url !== "/brand-kit" && (
                            <li key={i}>
                              <Link
                                href={el.url}
                                onClick={() => setMenuIsOpened(false)}
                              >
                                <b>{el.name}</b>
                                <span>{el.description}</span>
                              </Link>
                              {el?.list && (
                                <ul>
                                  {el.list.map((itm, ii) => (
                                    <li key={ii}>
                                      <Link
                                        href={itm.url}
                                        onClick={() => setMenuIsOpened(false)}
                                      >
                                        <b>{itm.name}</b>
                                        <span>{itm.description}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          )
                      )}
                    </ul>
                    {idx === 3 && (
                      <SocialsList className={styles.socials} isLight />
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

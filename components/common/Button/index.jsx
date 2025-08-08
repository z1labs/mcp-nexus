"use client";

import Link from "next/link";
import classnames from "classnames";

import styles from "./style.module.scss";

export default function Button({
  type = "button",
  size = "md",
  href,
  secondary = false,
  loading = false,
  className = "",
  children,
  ...props
}) {
  const classes = classnames(styles.btn, className, {
    [styles.sizeXS]: size === "xs",
    [styles.sizeSM]: size === "sm",
    [styles.sizeLG]: size === "lg",
    [styles.isSecondary]: secondary,
    [styles.isDisabled]: props?.disabled || false,
    [styles.isLoading]: loading,
  });

  const content = loading ? <span className={styles.spinner} /> : children;

  if (href) {
    return props?.target ? (
      <Link
        href={href}
        className={classes}
        target={props.target}
        rel="noreferrer"
        {...props}
      >
        {content}
      </Link>
    ) : (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {content}
    </button>
  );
}

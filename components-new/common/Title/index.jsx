"use client";

import { useEffect, useId } from "react";
import { useInView } from "react-intersection-observer";
import SplitType from "split-type";
import clsx from "clsx";

import styles from "./style.module.scss";

export default function Title({
  children,
  size = 2,
  type,
  block = false,
  tac = false,
  pageTitle = false,
  fade = true,
  className,
  ...props
}) {
  const { ref, inView } = useInView({
    threshold: 0.0001,
    triggerOnce: true,
  });

  const id = useId().replace(/:/g, "");

  useEffect(() => {
    if (id && fade) new SplitType(`#${id}`, { types: "words, chars" });
  }, [children, fade, id]);

  const classes = clsx(
    styles.title,
    className,
    size === 1 && styles.h1, // 136px :: 8.5rem
    size === 2 && styles.h2, // 64px :: 4rem
    size === 3 && styles.h3, // 40px :: 2.5rem
    size === 4 && styles.h4, // 27px :: 1.6875rem
    size === 5 && styles.h5, // 20px :: 1.25rem
    size === 6 && styles.h6,
    pageTitle && styles.pageTitle,
    tac && styles.tac,
    inView && styles.isVisible,
    !fade && styles.noFade
  );

  const style = {
    // opacity: !id ? 0 : 1,
  };

  if (block) {
    return (
      <div className={classes} ref={ref} id={id} style={style} {...props}>
        {children}
      </div>
    );
  } else {
    return type === 1 ? (
      <h1 className={classes} ref={ref} id={id} style={style} {...props}>
        {children}
      </h1>
    ) : type === 2 ? (
      <h2 className={classes} ref={ref} id={id} style={style} {...props}>
        {children}
      </h2>
    ) : type === 3 ? (
      <h3 className={classes} ref={ref} id={id} style={style} {...props}>
        {children}
      </h3>
    ) : type === 4 ? (
      <h4 className={classes} ref={ref} id={id} style={style} {...props}>
        {children}
      </h4>
    ) : type === 5 ? (
      <h5 className={classes} ref={ref} id={id} style={style} {...props}>
        {children}
      </h5>
    ) : type === 6 ? (
      <h6 className={classes} ref={ref} id={id} style={style} {...props}>
        {children}
      </h6>
    ) : (
      <div className={classes} ref={ref} id={id} style={style} {...props}>
        {children}
      </div>
    );
  }
}

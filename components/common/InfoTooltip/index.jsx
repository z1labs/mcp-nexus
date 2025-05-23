"use client";

import { useId } from "react";
import { Tooltip } from "react-tooltip";
import clsx from "clsx";

import styles from "./style.module.scss";

export default function InfoTooltip({ icon, className, children, ...props }) {
  const id = useId().replace(/:/g, "");

  return (
    <>
      <span
        aria-label="Info"
        id={id}
        className={clsx(styles.tooltip, className)}
      >
        {icon ? (
          icon
        ) : (
          <img
            src="/img/svg/icons/info.svg"
            alt="Info"
            width={16}
            height={16}
            loading="lazy"
            decoding="async"
          />
        )}
      </span>
      <Tooltip
        anchorSelect={`#${id}`}
        clickable
        noArrow
        className="no-styles"
        {...props}
      >
        <div className={styles.content}>{children}</div>
      </Tooltip>
    </>
  );
}

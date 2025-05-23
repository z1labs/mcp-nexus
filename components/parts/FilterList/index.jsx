"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

import styles from "./style.module.scss";

export default function FilterList({
  className,
  options = [],
  onSelect = (item) => {},
  defaultSelected = 0,
  wide = false,
}) {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (options.length > 0) {
      setSelected(options[defaultSelected].slug);
    }
  }, []);

  const List = () => (
    <ul className={styles.list}>
      {options.map((item) => (
        <li key={item.slug}>
          <button
            type="button"
            className={clsx(item.slug === selected && styles.isSelected)}
            disabled={item?.disabled}
            onClick={() => {
              setSelected(item.slug);
              onSelect(item);
            }}
          >
            {item?.icon && item.icon}
            {item.name}
            {item.soon && <span>Soon</span>}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={clsx(styles.block, className)}>
      {wide ? (
        <div className="container">
          <List />
        </div>
      ) : (
        <List />
      )}
    </div>
  );
}

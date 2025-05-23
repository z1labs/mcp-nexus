"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import Title from "@/components-new/common/Title";
import TextParagraph from "@/components-new/common/TextParagraph";

import styles from "./style.module.scss";

export default function SectionProducts(factory, deps) {
  const [items, setItems] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [showPaginator, setShowPaginator] = useState(false);
  const [loadMoreData, setLoadMoreData] = useState({
    page: 1,
  });

  const loadData = async (page = 1) => {
    const limit = 12;

    const { items, foundItems } = await getMCPItems({
      limit: limit,
      page,
    });

    if (page > 1) {
      setItems((prevState) => [...prevState, ...items]);
      setLoadingMore(false);
    } else {
      setItems(items);
    }
    setLoadMoreData((prevState) => ({
      ...prevState,
      page: page,
    }));

    if (foundItems > page * limit) {
      setShowPaginator(true);
    } else {
      setShowPaginator(false);
    }
  };

  const onLoadMore = async () => {
    setLoadingMore(true);
    loadData(loadMoreData.page + 1).then();
  };

  useEffect(() => {
    loadData(1).then();
  }, []);

  return (
    <div className={styles.section}>
      <div className="container">
        {items.map((item, idx) => (
          <div
            className={clsx(styles.card, item?.soon && styles.isDisabled)}
            key={item.ID}
          >
            <ul className={styles.meta}>
              {item.mcp_cat_names.map((el, i) => (
                <li key={i}>
                  <span className={styles.tag}>{el}</span>
                </li>
              ))}
              {item?.soon > 0 && (
                <li>
                  <span className={styles.tagSoon}>Coming soon</span>
                </li>
              )}
            </ul>
            <Title type={3} size={5} className={styles.title}>
              {item.outer_link ? (
                <Link href={item.outer_link} target="_blank">
                  {item.post_title}
                </Link>
              ) : (
                item.post_title
              )}
            </Title>
            <TextParagraph
              className={styles.description}
              innerHTML={item.post_content_formatted}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

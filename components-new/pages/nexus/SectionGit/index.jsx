"use client";

import Title from "@/components-new/common/Title";
import TextParagraph from "@/components-new/common/TextParagraph";
import Button from "@/components-new/common/Button";

import styles from "./style.module.scss";

export default function SectionGit() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Title type={2} size={2} tac>
          Build with Us
        </Title>
        <TextParagraph size="md" tac className={styles.description}>
          <p>
            Jump into the code, file issues, or propose your own MCP add-on.
            <br />
            Every two-week sprint ships something new—your PR could be next.
          </p>
        </TextParagraph>
        <div className={styles.buttons}>
          <Button href="https://github.com/z1labs" size="lg" target="_blank">
            Open GitHub Repo
          </Button>
        </div>
      </div>
    </section>
  );
}

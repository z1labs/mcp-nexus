import Title from "@/components/common/Title";
import TextParagraph from "@/components/common/TextParagraph";

import styles from "./style.module.scss";

export default function SectionHero() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Title type={1} size={2} pageTitle tac>
          Agent Mission <br />
          Dashboard
        </Title>
        <TextParagraph tac className={styles.description}>
          <p>Real-time stats on context usage, badge claims, and agent engagement across the MCP network</p>
        </TextParagraph>
      </div>
    </section>
  );
}

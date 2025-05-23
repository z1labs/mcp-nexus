import Title from "@/components-new/common/Title";
import TextParagraph from "@/components-new/common/TextParagraph";
import Button from "@/components-new/common/Button";

import styles from "./style.module.scss";

export default function SectionHero() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Title type={1} size={2} pageTitle tac className={styles.title}>
          Nexus – A Modular Interface for Scalable, Contextual AI
        </Title>
        <TextParagraph tac className={styles.description}>
          <p>
            Nexus reimagines AI development by replacing rigid, monolithic
            stacks with a dynamic, chat-native interface powered by modular
            backend components. These components are seamlessly integrated via
            the Model Context Protocol (MCP).
          </p>
        </TextParagraph>
        <div className={styles.buttons}>
          <Button size="lg" href="https://mcp.z1labs.ai" target="_blank">
            Try It Out
          </Button>
        </div>
      </div>
    </section>
  );
}

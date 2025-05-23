import { LayoutProvider } from "@/components/layout/LayoutProvider";

import "@/styles/styles.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}

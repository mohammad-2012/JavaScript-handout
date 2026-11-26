import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "@fontsource-variable/vazirmatn";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import Shell from "@/components/Shell";

export const metadata: Metadata = {
  title: { default: "جزوه جاوااسکریپت", template: "%s | جزوه جاوااسکریپت" },
  description:
    "مستندات کامل و تعاملی جاوااسکریپت به زبان فارسی، از پایه تا پیشرفته.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Shell>{children}</Shell>
        </ThemeProvider>
      </body>
    </html>
  );
}

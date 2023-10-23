import ThemeRegistry from "../../themes/ThemeRegistry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../../ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asesorias y Servicios GYG SAS",
  description: "Asesorias y Servicios GYG SAS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head></head>
      <ThemeRegistry>
        <body className={inter.className}>
          <nav>
            <Navbar />
          </nav>
          <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            {children}
          </main>
          <footer></footer>
        </body>
      </ThemeRegistry>
    </html>
  );
}

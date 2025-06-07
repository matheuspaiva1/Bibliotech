import { Telex } from "next/font/google";
import "./globals.css";

const telex = Telex({
  variable: "--font-telex",
  subsets: ["latin"],
  weight: '400', // ✅ use apenas 400
});



export const metadata = {
  title: "Bibliotech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${telex.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

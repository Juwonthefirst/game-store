import NavBar from "../components/navbar.jsx";
import { poppins } from "@/utils/fonts";
import "./globals.css";

export const metadata = {
  title: "Vite Games",
  description: "Your one stop shop to all your gaming needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

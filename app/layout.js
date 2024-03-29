import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Raleway } from "next/font/google";



const raleway = Raleway({subsets: ["latin"]});

export const metadata = {
  title: "Shalom Castro Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}

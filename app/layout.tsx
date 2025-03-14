
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
className="h-screen"
        >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

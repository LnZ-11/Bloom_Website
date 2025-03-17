
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";
import LeafMotifBackground from "./components/leafBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-auto w-full">
        <Navbar/>
        <LeafMotifBackground>
        {children}
        </LeafMotifBackground>
        <Footer/>
      </body>
    </html>
  );
}

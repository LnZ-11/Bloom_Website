
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import LeafMotifBackground from "./components/leafBackground";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="h-auto w-full">
        <Navbar/>
        <LeafMotifBackground>
        <main className="flex flex-col font-[caveat] w-full max-w-5xl mx-auto gap-4 h-auto justify-center  text-center text-black">
        {children}
        </main>
        </LeafMotifBackground>
        <Footer/>
      </body>
    </html>
  );
}

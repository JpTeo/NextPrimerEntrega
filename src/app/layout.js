import Footer from "./components/Footer";
import MenuList from "./components/MenuList";
import "./globals.css"


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <MenuList></MenuList>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}


import AuthProvider from "./(components)/AuthProvider";
import Nav from "./(components)/Nav";
import "./globals.css";
import { Fira_Sans } from "next/font/google";

export const firaSans = Fira_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "OWB Pets",
  description: "Picture archive of OWB pets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${firaSans.className}`}>
          <Nav />
          <main>{children}</main>
        </body>
      </AuthProvider>
    </html>
  );
}

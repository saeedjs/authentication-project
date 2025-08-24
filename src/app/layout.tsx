import "../styles/globals.scss";
import { UserContextProvider } from "@/context/UserContext";
import LocalFont from 'next/font/local'

//variable fonts
const Vazir = LocalFont({
  variable: "--font-vazir",
  src: [
    {
      path: "../../public/fonts/vazir/Vazir-Thin-FD.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-Light-FD.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-FD.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-Medium-FD.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-Bold-FD.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-Black-FD.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fa" dir="rtl">
      <body className={`${Vazir?.variable}`}>
        <UserContextProvider>
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}

import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Beckerman Tutoring Services",
  description: "Personalized academic support and executive functioning coaching for students of all ages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ minHeight: "80vh", padding: "2rem" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

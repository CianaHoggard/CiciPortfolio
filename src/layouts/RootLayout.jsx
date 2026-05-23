import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import HomeLogo from "../components/HomeLogo.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

export default function RootLayout() {
  return (
    <div className="layout">
      <ScrollToTop />
      <Sidebar />
      <HomeLogo />

      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

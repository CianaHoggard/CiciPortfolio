import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import HomeLogo from "../components/HomeLogo.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import PageLoader from "../components/PageLoader.jsx";
import usePageLoader from "../hooks/usePageLoader.js";

export default function RootLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const loaded = usePageLoader(location.pathname);

  return (
    <div className="layout">
      <ScrollToTop />

      <PageLoader loading={!loaded} />

      <Sidebar />
      <HomeLogo />

      <main className={`main ${loaded ? "pageReady" : "pageLoading"}`}>
        <div className={`container ${isHome ? "homeContainer" : ""}`}>
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}

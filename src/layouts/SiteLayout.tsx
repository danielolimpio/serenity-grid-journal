import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CategoryCircles from "@/components/CategoryCircles";
import { Outlet, useLocation } from "react-router-dom";

const SiteLayout = () => {
  const { pathname } = useLocation();
  // Hide circles only inside individual articles for a cleaner reading view
  const hideCircles = pathname.startsWith("/artigo/");
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      {!hideCircles && <CategoryCircles />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default SiteLayout;

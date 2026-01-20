import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import DealsSection from "@/components/DealsSection";
import NewArrivals from "@/components/NewArrivals";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <DealsSection />
        <FeaturedProducts />
        <NewArrivals />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

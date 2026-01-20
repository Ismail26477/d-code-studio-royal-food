import { Link } from "react-router-dom";
import { Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { getNewArrivals } from "@/data/products";

const NewArrivals = () => {
  const newArrivals = getNewArrivals();

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">New Arrivals</h2>
              <p className="text-muted-foreground">
                Just landed - the latest tech products
              </p>
            </div>
          </div>
          <Button variant="ghost" className="hidden sm:flex" asChild>
            <Link to="/products?new=true">
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="text-center mt-8 sm:hidden">
          <Button variant="outline" asChild>
            <Link to="/products?new=true">
              View All New Arrivals
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;

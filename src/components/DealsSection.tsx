import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { getDealsOfDay } from "@/data/products";

const DealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  const deals = getDealsOfDay();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to 24 hours
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-destructive/10 via-background to-warning/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center animate-pulse-glow">
              <Flame className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Deal of the Day
              </h2>
              <p className="text-muted-foreground">
                Grab these limited-time offers before they're gone!
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Ends in:</span>
            <div className="flex gap-2">
              <div className="gradient-primary text-primary-foreground px-3 py-2 rounded-lg text-center min-w-[56px]">
                <span className="text-xl font-bold">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <p className="text-xs opacity-80">HRS</p>
              </div>
              <div className="gradient-primary text-primary-foreground px-3 py-2 rounded-lg text-center min-w-[56px]">
                <span className="text-xl font-bold">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <p className="text-xs opacity-80">MIN</p>
              </div>
              <div className="gradient-primary text-primary-foreground px-3 py-2 rounded-lg text-center min-w-[56px]">
                <span className="text-xl font-bold">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <p className="text-xs opacity-80">SEC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <Link to="/products?deal=true">View All Deals</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;

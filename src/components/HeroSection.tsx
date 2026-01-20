import { Link } from "react-router-dom";
import { Play, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              New Arrivals Every Week
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Your{" "}
              <span className="gradient-text">Raghukul</span>{" "}
              Destination
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Discover premium electronics and gadgets from around the world.
              Quality products, competitive prices, and exceptional service
              delivered to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gradient-primary border-0" asChild>
                <Link to="/products">
                  Shop Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/products?deal=true">
                  View Deals
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold gradient-text">50K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">1000+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>

          {/* Video/Image */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
                poster="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&h=450&fit=crop"
              >
                <source
                  src="https://cdn.coverr.co/videos/coverr-scrolling-through-phone-5889/1080p.mp4"
                  type="video/mp4"
                />
                {/* Fallback image if video doesn't load */}
                <img
                  src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&h=450&fit=crop"
                  alt="Tech showcase"
                  className="h-full w-full object-cover"
                />
              </video>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group h-16 w-16 rounded-full gradient-primary flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                  <Play className="h-6 w-6 text-primary-foreground ml-1" />
                </button>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-4 hidden sm:block animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center">
                  <span className="text-2xl">🚚</span>
                </div>
                <div>
                  <p className="font-semibold">Free Shipping</p>
                  <p className="text-sm text-muted-foreground">On orders ₹999+</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg p-4 hidden sm:block animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <p className="font-semibold">Top Rated</p>
                  <p className="text-sm text-muted-foreground">4.8/5 Average</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
};

export default HeroSection;

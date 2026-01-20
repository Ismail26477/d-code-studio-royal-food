import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Smartphone,
  Laptop,
  Tablet,
  Headphones,
  Watch,
  Cable,
} from "lucide-react";
import { Category } from "@/data/products";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: Category;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Laptop,
  Tablet,
  Headphones,
  Watch,
  Cable,
};

const CategoryCard = ({ category, className }: CategoryCardProps) => {
  const IconComponent = iconMap[category.icon] || Smartphone;

  return (
    <Link to={`/products?category=${category.id}`}>
      <Card
        className={cn(
          "group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer",
          className
        )}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Icon */}
          <div className="absolute top-4 left-4 h-12 w-12 rounded-full gradient-primary flex items-center justify-center">
            <IconComponent className="h-6 w-6 text-primary-foreground" />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-lg font-bold">{category.name}</h3>
            <p className="text-sm text-white/80">
              {category.productCount} Products
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;

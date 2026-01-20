import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const { addToCart, isInCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const inWishlist = isInWishlist(product.id);
  const inCart = isInCart(product.id);

  return (
    <Card
      className={cn(
        "group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Discount Badge */}
        {product.discount > 0 && (
          <Badge className="absolute left-2 top-2 gradient-primary border-0">
            {product.discount}% OFF
          </Badge>
        )}

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute right-2 top-2 h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm transition-colors",
            inWishlist && "text-destructive"
          )}
          onClick={() => toggleWishlist(product)}
        >
          <Heart
            className={cn("h-5 w-5", inWishlist && "fill-current")}
          />
        </Button>

        {/* Quick Add Button - shows on hover */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <Button
            className="w-full rounded-none gradient-primary border-0"
            onClick={() => addToCart(product)}
            disabled={inCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {inCart ? "In Cart" : "Add to Cart"}
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Brand */}
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {product.brand}
        </p>

        {/* Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="mt-1 font-semibold line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <div className="flex items-center gap-0.5 rounded bg-success px-1.5 py-0.5 text-xs font-medium text-success-foreground">
            {product.rating}
            <Star className="h-3 w-3 fill-current" />
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviews.toLocaleString()} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold text-foreground">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice > product.price && (
            <>
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="text-sm font-medium text-success">
                {product.discount}% off
              </span>
            </>
          )}
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <p className="mt-2 text-sm text-destructive font-medium">
            Out of Stock
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;

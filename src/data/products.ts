export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  category: string;
  brand: string;
  inStock: boolean;
  stockCount: number;
  features: string[];
  specifications: Record<string, string>;
  isFeatured?: boolean;
  isNewArrival?: boolean;
  isDealOfDay?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  productCount: number;
  image: string;
}

export const categories: Category[] = [
  {
    id: "smartphones",
    name: "Smartphones",
    icon: "Smartphone",
    description: "Latest smartphones from top brands",
    productCount: 45,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
  },
  {
    id: "laptops",
    name: "Laptops",
    icon: "Laptop",
    description: "Powerful laptops for work and gaming",
    productCount: 32,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
  },
  {
    id: "tablets",
    name: "Tablets",
    icon: "Tablet",
    description: "Tablets for productivity and entertainment",
    productCount: 18,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
  },
  {
    id: "audio",
    name: "Audio",
    icon: "Headphones",
    description: "Headphones, earbuds and speakers",
    productCount: 56,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
  },
  {
    id: "wearables",
    name: "Wearables",
    icon: "Watch",
    description: "Smartwatches and fitness trackers",
    productCount: 24,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: "Cable",
    description: "Chargers, cases and more",
    productCount: 89,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
  },
];

export const products: Product[] = [
  // Smartphones
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro Max",
    description: "The most powerful iPhone ever with A17 Pro chip, titanium design, and advanced camera system.",
    price: 119999,
    originalPrice: 134999,
    discount: 11,
    rating: 4.8,
    reviews: 2453,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop",
    ],
    category: "smartphones",
    brand: "Apple",
    inStock: true,
    stockCount: 25,
    isFeatured: true,
    isDealOfDay: true,
    features: ["A17 Pro Chip", "48MP Camera", "Titanium Design", "USB-C", "Action Button"],
    specifications: {
      Display: "6.7-inch Super Retina XDR",
      Processor: "A17 Pro",
      RAM: "8GB",
      Storage: "256GB",
      Battery: "4422 mAh",
      OS: "iOS 17",
    },
  },
  {
    id: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    description: "Ultimate productivity with S Pen, AI features, and stunning 200MP camera.",
    price: 109999,
    originalPrice: 124999,
    discount: 12,
    rating: 4.7,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&h=800&fit=crop",
    ],
    category: "smartphones",
    brand: "Samsung",
    inStock: true,
    stockCount: 18,
    isFeatured: true,
    features: ["Galaxy AI", "200MP Camera", "S Pen Included", "Titanium Frame", "100x Space Zoom"],
    specifications: {
      Display: "6.8-inch Dynamic AMOLED 2X",
      Processor: "Snapdragon 8 Gen 3",
      RAM: "12GB",
      Storage: "256GB",
      Battery: "5000 mAh",
      OS: "Android 14",
    },
  },
  {
    id: "pixel-8-pro",
    name: "Google Pixel 8 Pro",
    description: "The best of Google with Tensor G3 chip and advanced AI photography.",
    price: 89999,
    originalPrice: 99999,
    discount: 10,
    rating: 4.6,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=800&fit=crop",
    ],
    category: "smartphones",
    brand: "Google",
    inStock: true,
    stockCount: 30,
    isNewArrival: true,
    features: ["Tensor G3", "Magic Eraser", "7 Years Updates", "Pro Camera", "AI Features"],
    specifications: {
      Display: "6.7-inch LTPO OLED",
      Processor: "Tensor G3",
      RAM: "12GB",
      Storage: "128GB",
      Battery: "5050 mAh",
      OS: "Android 14",
    },
  },
  // Laptops
  {
    id: "macbook-pro-16",
    name: "MacBook Pro 16-inch M3 Max",
    description: "The most powerful MacBook Pro ever with M3 Max chip for professionals.",
    price: 249999,
    originalPrice: 279999,
    discount: 11,
    rating: 4.9,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=800&fit=crop",
    ],
    category: "laptops",
    brand: "Apple",
    inStock: true,
    stockCount: 12,
    isFeatured: true,
    features: ["M3 Max Chip", "36GB RAM", "Liquid Retina XDR", "22hr Battery", "MagSafe"],
    specifications: {
      Display: "16.2-inch Liquid Retina XDR",
      Processor: "Apple M3 Max",
      RAM: "36GB",
      Storage: "512GB SSD",
      Battery: "22 hours",
      Weight: "2.14 kg",
    },
  },
  {
    id: "dell-xps-15",
    name: "Dell XPS 15 OLED",
    description: "Stunning 3.5K OLED display with Intel 13th Gen for creative professionals.",
    price: 159999,
    originalPrice: 179999,
    discount: 11,
    rating: 4.5,
    reviews: 654,
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=800&fit=crop",
    ],
    category: "laptops",
    brand: "Dell",
    inStock: true,
    stockCount: 8,
    isNewArrival: true,
    features: ["3.5K OLED", "Intel i7-13700H", "RTX 4060", "32GB RAM", "InfinityEdge"],
    specifications: {
      Display: "15.6-inch 3.5K OLED",
      Processor: "Intel i7-13700H",
      RAM: "32GB",
      Storage: "1TB SSD",
      Graphics: "NVIDIA RTX 4060",
      Weight: "1.86 kg",
    },
  },
  {
    id: "asus-rog-strix",
    name: "ASUS ROG Strix G16",
    description: "Ultimate gaming laptop with RTX 4070 and 240Hz display.",
    price: 139999,
    originalPrice: 159999,
    discount: 13,
    rating: 4.6,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&h=800&fit=crop",
    ],
    category: "laptops",
    brand: "ASUS",
    inStock: true,
    stockCount: 15,
    isDealOfDay: true,
    features: ["RTX 4070", "240Hz Display", "Intel i9", "RGB Keyboard", "MUX Switch"],
    specifications: {
      Display: "16-inch QHD 240Hz",
      Processor: "Intel i9-13980HX",
      RAM: "32GB",
      Storage: "1TB SSD",
      Graphics: "NVIDIA RTX 4070",
      Weight: "2.5 kg",
    },
  },
  // Tablets
  {
    id: "ipad-pro-12",
    name: "iPad Pro 12.9-inch M2",
    description: "The ultimate iPad experience with M2 chip and Liquid Retina XDR display.",
    price: 99999,
    originalPrice: 112999,
    discount: 12,
    rating: 4.8,
    reviews: 1567,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=800&fit=crop",
    ],
    category: "tablets",
    brand: "Apple",
    inStock: true,
    stockCount: 20,
    isFeatured: true,
    features: ["M2 Chip", "Liquid Retina XDR", "Apple Pencil 2", "Face ID", "5G"],
    specifications: {
      Display: "12.9-inch Liquid Retina XDR",
      Processor: "Apple M2",
      RAM: "8GB",
      Storage: "256GB",
      Battery: "10 hours",
      Weight: "682g",
    },
  },
  {
    id: "galaxy-tab-s9",
    name: "Samsung Galaxy Tab S9 Ultra",
    description: "Largest and most powerful Galaxy Tab with S Pen included.",
    price: 89999,
    originalPrice: 99999,
    discount: 10,
    rating: 4.6,
    reviews: 876,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&h=800&fit=crop",
    ],
    category: "tablets",
    brand: "Samsung",
    inStock: true,
    stockCount: 14,
    isNewArrival: true,
    features: ["14.6-inch Display", "S Pen", "Snapdragon 8 Gen 2", "IP68", "DeX Mode"],
    specifications: {
      Display: "14.6-inch Dynamic AMOLED 2X",
      Processor: "Snapdragon 8 Gen 2",
      RAM: "12GB",
      Storage: "256GB",
      Battery: "11200 mAh",
      Weight: "732g",
    },
  },
  // Audio
  {
    id: "airpods-pro-2",
    name: "Apple AirPods Pro (2nd Gen)",
    description: "Active Noise Cancellation, Adaptive Audio, and USB-C charging.",
    price: 24999,
    originalPrice: 27999,
    discount: 11,
    rating: 4.7,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&h=800&fit=crop",
    ],
    category: "audio",
    brand: "Apple",
    inStock: true,
    stockCount: 50,
    isFeatured: true,
    features: ["Active Noise Cancellation", "Adaptive Audio", "USB-C", "Spatial Audio", "H2 Chip"],
    specifications: {
      Driver: "Apple-designed",
      Connectivity: "Bluetooth 5.3",
      Battery: "6 hours (30 with case)",
      "Noise Cancellation": "Active",
      Water: "IPX4",
    },
  },
  {
    id: "sony-wh1000xm5",
    name: "Sony WH-1000XM5",
    description: "Industry-leading noise cancellation with exceptional sound quality.",
    price: 29999,
    originalPrice: 34999,
    discount: 14,
    rating: 4.8,
    reviews: 2156,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=800&fit=crop",
    ],
    category: "audio",
    brand: "Sony",
    inStock: true,
    stockCount: 35,
    isDealOfDay: true,
    features: ["Industry-leading ANC", "30hr Battery", "Multipoint", "LDAC", "Speak-to-Chat"],
    specifications: {
      Driver: "30mm",
      Connectivity: "Bluetooth 5.2",
      Battery: "30 hours",
      "Noise Cancellation": "Active",
      Weight: "250g",
    },
  },
  {
    id: "bose-qc-ultra",
    name: "Bose QuietComfort Ultra",
    description: "Premium comfort meets immersive audio with CustomTune technology.",
    price: 34999,
    originalPrice: 39999,
    discount: 13,
    rating: 4.7,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=800&fit=crop",
    ],
    category: "audio",
    brand: "Bose",
    inStock: true,
    stockCount: 22,
    isNewArrival: true,
    features: ["CustomTune", "Immersive Audio", "24hr Battery", "Aware Mode", "Premium Comfort"],
    specifications: {
      Driver: "35mm TriPort",
      Connectivity: "Bluetooth 5.3",
      Battery: "24 hours",
      "Noise Cancellation": "Active",
      Weight: "250g",
    },
  },
  // Wearables
  {
    id: "apple-watch-ultra-2",
    name: "Apple Watch Ultra 2",
    description: "The most rugged and capable Apple Watch for extreme adventures.",
    price: 79999,
    originalPrice: 89999,
    discount: 11,
    rating: 4.9,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&h=800&fit=crop",
    ],
    category: "wearables",
    brand: "Apple",
    inStock: true,
    stockCount: 18,
    isFeatured: true,
    features: ["S9 Chip", "Titanium Case", "36hr Battery", "Dive Computer", "Precision GPS"],
    specifications: {
      Display: "49mm Always-On Retina",
      Processor: "S9 SiP",
      Battery: "36 hours",
      "Water Resistance": "100m",
      Material: "Titanium",
    },
  },
  {
    id: "galaxy-watch-6",
    name: "Samsung Galaxy Watch 6 Classic",
    description: "Classic design with rotating bezel and advanced health monitoring.",
    price: 34999,
    originalPrice: 39999,
    discount: 13,
    rating: 4.5,
    reviews: 987,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
    ],
    category: "wearables",
    brand: "Samsung",
    inStock: true,
    stockCount: 25,
    isDealOfDay: true,
    features: ["Rotating Bezel", "BioActive Sensor", "Sleep Tracking", "Wear OS", "Sapphire Glass"],
    specifications: {
      Display: "1.5-inch Super AMOLED",
      Processor: "Exynos W930",
      Battery: "40 hours",
      "Water Resistance": "5ATM",
      Material: "Stainless Steel",
    },
  },
  // Accessories
  {
    id: "anker-powerbank",
    name: "Anker 737 Power Bank 24000mAh",
    description: "Massive 24000mAh capacity with 140W output for laptops and phones.",
    price: 7999,
    originalPrice: 9999,
    discount: 20,
    rating: 4.6,
    reviews: 2341,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&h=800&fit=crop",
    ],
    category: "accessories",
    brand: "Anker",
    inStock: true,
    stockCount: 60,
    isFeatured: true,
    isDealOfDay: true,
    features: ["24000mAh", "140W Output", "USB-C PD", "LED Display", "Laptop Charging"],
    specifications: {
      Capacity: "24000mAh",
      "Max Output": "140W",
      Ports: "2x USB-C, 1x USB-A",
      Weight: "632g",
      "Charge Time": "1.5 hours",
    },
  },
  {
    id: "belkin-magsafe-charger",
    name: "Belkin 3-in-1 MagSafe Charger",
    description: "Premium wireless charging stand for iPhone, Apple Watch, and AirPods.",
    price: 12999,
    originalPrice: 14999,
    discount: 13,
    rating: 4.5,
    reviews: 876,
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=800&h=800&fit=crop",
    ],
    category: "accessories",
    brand: "Belkin",
    inStock: true,
    stockCount: 40,
    isNewArrival: true,
    features: ["15W MagSafe", "Fast Charging", "Night Mode", "Premium Build", "Cable Management"],
    specifications: {
      Output: "15W iPhone, 5W Watch, 5W AirPods",
      Material: "Chrome & Plastic",
      Cable: "1.5m included",
      Compatibility: "iPhone 12+, Apple Watch, AirPods",
    },
  },
  {
    id: "samsung-45w-charger",
    name: "Samsung 45W Super Fast Charger",
    description: "Official Samsung 45W charger for ultra-fast charging.",
    price: 2999,
    originalPrice: 3999,
    discount: 25,
    rating: 4.4,
    reviews: 1543,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop",
    ],
    category: "accessories",
    brand: "Samsung",
    inStock: true,
    stockCount: 100,
    features: ["45W Output", "USB-C PD 3.0", "Compact Design", "Travel Ready"],
    specifications: {
      Output: "45W PD 3.0",
      Input: "100-240V",
      Connector: "USB-C",
      Weight: "75g",
    },
  },
  {
    id: "spigen-iphone-case",
    name: "Spigen Ultra Hybrid iPhone 15 Pro Case",
    description: "Crystal clear protection with Air Cushion technology.",
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    rating: 4.7,
    reviews: 4532,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1601593346740-925612772716?w=800&h=800&fit=crop",
    ],
    category: "accessories",
    brand: "Spigen",
    inStock: true,
    stockCount: 200,
    features: ["Air Cushion", "Crystal Clear", "MagSafe Compatible", "Raised Bezels", "Anti-Yellowing"],
    specifications: {
      Material: "TPU + PC",
      Compatibility: "iPhone 15 Pro",
      "Drop Protection": "Military Grade",
      MagSafe: "Compatible",
    },
  },
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((product) => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.isFeatured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter((product) => product.isNewArrival);
};

export const getDealsOfDay = (): Product[] => {
  return products.filter((product) => product.isDealOfDay);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.brand.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};

import { IProductsProps } from "@/components/common/product/type";

// Mock product data for alrafahia.co.za laser-cut wall art
export const mockProducts: IProductsProps[] = [
   {
      id: 1,
      title: "BMW F80/F82 M3/M4 Laser-Cut Wall Art - Satin Black Powder-Coated",
      slug: "/bmw-f80-f82-m3-m4-laser-cut-wall-art",
      price: 499,
      discount: 44, // 44% discount from 899
      rate: 4.8,
      saleCount: 25,
      createdAt: "2024-01-15T10:00:00Z",
      count: 10,
      colors: ["Satin Black"],
      size: ["Medium", "Large"],
      description: "Premium laser-cut wall art featuring the iconic BMW F80/F82 M3/M4 design. Crafted with precision and finished with satin black powder coating for a sleek, modern look.",
      category: "automotive",
      imgs: [
         "/img/products/wall-art/bmw-m3-m4/1.jpg",
         "/img/products/wall-art/bmw-m3-m4/1.jpg",
         "/img/products/wall-art/bmw-m3-m4/1.jpg"
      ]
   },
   {
      id: 2,
      title: "Ferrari F40 Laser-Cut Wall Art - Powder-Coated Satin Black",
      slug: "/ferrari-f40-laser-cut-wall-art",
      price: 699,
      discount: 30, // 30% discount from 999
      rate: 4.9,
      saleCount: 18,
      createdAt: "2024-01-20T14:30:00Z",
      count: 8,
      colors: ["Satin Black"],
      size: ["Medium", "Large"],
      description: "Exquisite Ferrari F40 laser-cut wall art showcasing the legendary supercar's silhouette. Premium powder-coated finish ensures durability and elegance.",
      category: "automotive",
      imgs: [
         "/img/products/wall-art/ferrari-f40/1.jpg",
         "/img/products/wall-art/ferrari-f40/1.jpg",
         "/img/products/wall-art/ferrari-f40/1.jpg"
      ]
   },
   {
      id: 3,
      title: "Elegant Islamic Laser Cut Wall Art - Ayatul Qursi - Satin Black Finish",
      slug: "/islamic-ayatul-qursi-laser-cut-wall-art",
      price: 599,
      discount: 40, // 40% discount from 999
      rate: 4.7,
      saleCount: 32,
      createdAt: "2024-01-10T09:15:00Z",
      count: 15,
      colors: ["Satin Black", "Gold"],
      size: ["Small", "Medium", "Large"],
      description: "Beautiful Islamic wall art featuring Ayatul Qursi in elegant Arabic calligraphy. Laser-cut with precision and finished in satin black for a sophisticated look.",
      category: "islamic",
      imgs: [
         "/img/products/wall-art/islamic-ayatul-qursi/1.jpg",
         "/img/products/wall-art/islamic-ayatul-qursi/1.jpg",
         "/img/products/wall-art/islamic-ayatul-qursi/1.jpg"
      ]
   },
   {
      id: 4,
      title: "Africa Lasercut Wall Art with Elephant Outline",
      slug: "/africa-elephant-laser-cut-wall-art",
      price: 899,
      discount: 0, // No discount - sold out
      rate: 4.6,
      saleCount: 45,
      createdAt: "2024-01-05T16:45:00Z",
      count: 0, // Sold out
      colors: ["Satin Black", "Bronze"],
      size: ["Medium", "Large"],
      description: "Stunning African-inspired wall art featuring a detailed elephant outline within the continent's shape. A perfect tribute to African wildlife and heritage.",
      category: "african",
      imgs: [
         "/img/products/wall-art/africa-elephant/1.jpg",
         "/img/products/wall-art/africa-elephant/1.jpg",
         "/img/products/wall-art/africa-elephant/1.jpg"
      ]
   },
   {
      id: 5,
      title: "Porsche 911 Laser-Cut Wall Art - Satin Black",
      slug: "/porsche-911-laser-cut-wall-art",
      price: 649,
      discount: 20,
      rate: 4.8,
      saleCount: 22,
      createdAt: "2024-01-25T11:20:00Z",
      count: 12,
      colors: ["Satin Black"],
      size: ["Medium", "Large"],
      description: "Iconic Porsche 911 silhouette in premium laser-cut wall art. Features the classic 911 profile with satin black powder coating.",
      category: "automotive",
      imgs: [
         "/img/products/wall-art/porsche-911/1.jpg",
         "/img/products/wall-art/porsche-911/1.jpg",
         "/img/products/wall-art/porsche-911/1.jpg"
      ]
   },
   {
      id: 6,
      title: "Islamic Bismillah Laser-Cut Wall Art - Gold Finish",
      slug: "/islamic-bismillah-laser-cut-wall-art",
      price: 549,
      discount: 25,
      rate: 4.9,
      saleCount: 28,
      createdAt: "2024-01-18T13:10:00Z",
      count: 18,
      colors: ["Gold", "Satin Black"],
      size: ["Small", "Medium"],
      description: "Elegant Bismillah wall art in beautiful Arabic calligraphy. Available in gold or satin black finish, perfect for Islamic home decor.",
      category: "islamic",
      imgs: [
         "/img/products/wall-art/islamic-bismillah/1.jpg",
         "/img/products/wall-art/islamic-bismillah/1.jpg",
         "/img/products/wall-art/islamic-bismillah/1.jpg"
      ]
   },
   {
      id: 7,
      title: "African Lion Silhouette Laser-Cut Wall Art",
      slug: "/african-lion-laser-cut-wall-art",
      price: 749,
      discount: 15,
      rate: 4.7,
      saleCount: 19,
      createdAt: "2024-01-22T15:30:00Z",
      count: 14,
      colors: ["Satin Black", "Bronze"],
      size: ["Medium", "Large"],
      description: "Majestic African lion silhouette in laser-cut wall art. Captures the power and beauty of the king of the jungle.",
      category: "african",
      imgs: [
         "/img/products/wall-art/african-lion/1.jpg",
         "/img/products/wall-art/african-lion/1.jpg",
         "/img/products/wall-art/african-lion/1.jpg"
      ]
   },
   {
      id: 8,
      title: "Custom Name Laser-Cut Wall Art - Personal Design",
      slug: "/custom-name-laser-cut-wall-art",
      price: 399,
      discount: 10,
      rate: 4.8,
      saleCount: 35,
      createdAt: "2024-01-28T12:00:00Z",
      count: 25,
      colors: ["Satin Black", "Gold", "Silver"],
      size: ["Small", "Medium", "Large"],
      description: "Personalized laser-cut wall art with your custom name or text. Available in multiple sizes and finishes. Perfect for gifts or personal spaces.",
      category: "custom",
      imgs: [
         "/img/products/wall-art/custom-name/1.jpg",
         "/img/products/wall-art/custom-name/1.jpg",
         "/img/products/wall-art/custom-name/1.jpg"
      ]
   }
];

// Helper function to get products by category
export const getProductsByCategory = (category: string): IProductsProps[] => {
   return mockProducts.filter(product => product.category === category);
};

// Helper function to get featured products (first 4)
export const getFeaturedProducts = (): IProductsProps[] => {
   return mockProducts.slice(0, 4);
};

// Helper function to get products with discount
export const getProductsOnSale = (): IProductsProps[] => {
   return mockProducts.filter(product => product.discount > 0);
};



import { Product, Artisan, Category } from "@/types";

export const artisans: Artisan[] = [
  {
    id: "artisan1",
    name: "Bhuvaneshwari ",
    image: "/artists/an.jpg",
    bio: "Certified in various textile arts including Block Printing, Batik, and other clothing-related crafts from Nampally Chainat Bhavan. Passionate about empowering students with hands-on skills in traditional and contemporary art forms.",
    location: "Hyderabad, Telangana, India"
  },
  {
    id: "artisan2",
    name: "G. Sai Haershal",
    image: "/artists/harshal.jpg",
    bio: "I Love to craft",
    location: "Ahmedabad, India"
  },
  {
    id: "artisan3",
    name: "Abhishek Pratap",
    image: "/artists/Abhi.jpg",
    bio: "With a passion for traditional weaving techniques, Abhishek creates beautiful wall hangings that tell stories.",
    location: "Varanasi, India"
  },
  {
    id: "artisan4",
    name: "G. Nishma",
    image: "/artists/nishma.jpg",
    bio: "Nishma's intricate origami designs transform recycled newspaper into stunning functional art pieces.",
    location: "Bengaluru, India"
  },
  {
    id: "artisan5",
    name: "D. Richa",
    image: "/artists/richa.jpg",
    bio: "Richa's intricate origami designs transform recycled newspaper into stunning functional art pieces.",
    location: "Bengaluru, India"
  },
];

export const categories: Category[] = [
  {
    id: "cat1",
    name: "Wall Hangings",
    description: "Beautiful handcrafted decorations for your walls",
    image: "/catogory-img/wallhang.webp"
  },
  {
    id: "cat2",
    name: "Usable Crafts",
    description: "Replacing the daily use product with a usable craft",
    image: "/catogory-img/usable-craft.jpg"
  },
  {
    id: "cat3",
    name: "Jewelry",
    description: "Handmade earrings, necklaces, and accessories",
    image: "/catogory-img/jwel.jpg"
  },
  {
    id: "cat4",
    name: "Home Decor",
    description: "Functional and decorative items for your living space",
    image: "/catogory-img/home.avif"
  },
  {
    id: "cat5",
    name: "Other",
    description: "Eco-friendly decorative figures for your home",
    image: "/catogory-img/other.jpg"
  },
];

export const products: Product[] = [
  {
    id: "prod1",
    name: "Zen Bells",
    description: "Bright, bold, and beautifully crafted, ColorWhirl Harmony is a handmade wall hanging that brings a joyful swirl of colors to any space. Made entirely from upcycled newspapers and shaped with precision by hand, each vibrant disc radiates a sense of energy and balance. Its spiral arrangement and textured finish add an artistic touch — perfect for those who appreciate sustainable, soulful home decor.",
    price: 1499,
    images: [
      "/wall_hangings/WallHanging.jpg", 
      "/wall_hangings/WallHanging1.jpg", 
      "/wall_hangings/WallHanging2.jpg",
      "/wall_hangings/WallHanging4.jpg"
    ],
    category: "Wall Hangings",
    tags: ["handmade", "eco-friendly", "home decor"],
    material: "Paper",
    featured: true,
    new: true,
    artisan: artisans[2],
    stock: 15
  },
  {
    id: "prod2",
    name: "Hand Bag",
    description: "Bag made of paper and coloured in the differenet colour",
    price: 999,
    images: [
      "/usable/Bag1.jpg", 
      "/usable/Bag2.jpg", 
      "/usable/Bag3.jpg"
    ],
    category: "Usable Crafts",
    tags: ["terracotta", "planters", "handpainted"],
    material: "Terracotta Clay",
    featured: true,
    new: true,
    artisan: artisans[0],
    stock: 8
  },
  {
    id: "prod3",
    name: "Nritya Bells",
    description: "Lightweight, colorful earrings made from recycled magazine paper. These statement pieces are coated for durability while remaining incredibly lightweight to wear.",
    price: 299,
    images: [
      "/ear-rings/1-a-Photoroom.jpg",
      "/ear-rings/1-b-Photoroom.jpg",
      "/ear-rings/1-c-Photoroom.jpg",
    ],
    category: "Jewelry",
    tags: ["recycled", "jewelry", "sustainable"],
    material: "Recycled Paper",
    featured: false,
    new: true,
    artisan: artisans[1],
    stock: 22
  },
  {
    id: "prod4",
    name: "Newspaper Phone Stand",
    description: "Functional and stylish phone stand crafted from recycled newspaper. Strong enough to hold your device while showcasing the beauty of upcycled materials.",
    price: 799,
    images: [
      "/home_decoration/art.png"
    ],
    category: "Home Decor",
    tags: ["recycled", "functional", "desk accessories"],
    material: "Recycled Newspaper",
    featured: true,
    discount: 10,
    new: false,
    artisan: artisans[3],
    stock: 18
  },
  {
    id: "prod5",
    name: "Santaclose",
    description: "Intricately folded 3D origami swan made from recycled paper. Each piece contains hundreds of individually folded paper triangles assembled with precision.",
    price: 299,
    images: [
      "/home_decoration/snowman-Photoroom.jpg",
    ],
    category: "Other",
    tags: ["origami", "papercraft", "art"],
    material: "Recycled Paper",
    featured: false,
    discount: 15,
    new: true,
    artisan: artisans[3],
    stock: 5
  },
  {
    id: "prod6",
    name: "Hemp String Necklace with Wooden Pendant",
    description: "Elegantly simple necklace featuring a hand-carved wooden pendant on sustainable hemp string. Each wooden piece is uniquely patterned.",
    price: 299,
    images: [
      "/ear-rings/5-a-Photoroom.jpg",
      "/ear-rings/5-b-Photoroom.jpg",
    ],
    category: "Jewelry",
    tags: ["natural", "jewelry", "sustainable"],
    material: "Hemp and Reclaimed Wood",
    featured: true,
    new: false,
    artisan: artisans[1],
    stock: 12
  },
  {
    id: "prod7",
    name: "Floral Fringe",
    description: "Vibrant wall art created from carefully selected recycled fabric scraps. Each piece tells a story through color and texture.",
    price: 999,
    images: [
      "/wall_hangings/wallhanging5.jpg", 

    ],
    category: "Wall Hangings",
    tags: ["recycled", "textiles", "art"],
    material: "Reclaimed Fabric",
    featured: false,
    new: false,
    artisan: artisans[2],
    stock: 3
  },
  {
    id: "prod8",
    name: "Pearl Tales",
    description: "Lightweight, colorful earrings made from recycled magazine paper. These statement pieces are coated for durability while remaining incredibly lightweight to wear.",
    price: 299,
    images: [
      "/ear-rings/2-a-Photoroom.jpg",
    ],
    category: "Jewelry",
    tags: ["recycled", "jewelry", "sustainable"],
    material: "Recycled Paper",
    featured: false,
    discount: 5,
    new: false,
    artisan: artisans[1],
    stock: 22
  },
  {
    id: "prod9",
    name: "Rustic Rounds",
    description: "Lightweight, colorful earrings made from recycled magazine paper. These statement pieces are coated for durability while remaining incredibly lightweight to wear.",
    price: 299,
    images: [
      "/ear-rings/3-a-Photoroom.jpg",
      "/ear-rings/3-b-Photoroom.jpg",
      "/ear-rings/3-c-Photoroom.jpg",
    ],
    category: "Jewelry",
    tags: ["recycled", "jewelry", "sustainable"],
    material: "Recycled Paper",
    featured: false,
    new: false,
    artisan: artisans[1],
    stock: 22
  },
  {
    id: "prod10",
    name: "Velvet Bells",
    description: "Lightweight, colorful earrings made from recycled magazine paper. These statement pieces are coated for durability while remaining incredibly lightweight to wear.",
    price: 299,
    images: [
      "/ear-rings/4-a-Photoroom.jpg",
      "/ear-rings/4-b-Photoroom.jpg",
      "/ear-rings/4-c-Photoroom.jpg",
      "/ear-rings/4-d-Photoroom.jpg"
    ],
    category: "Jewelry",
    tags: ["recycled", "jewelry", "sustainable"],
    material: "Recycled Paper",
    featured: false,
    new: false,
    artisan: artisans[1],
    stock: 22
  },
];

export const featuredProducts = products.filter(product => product.featured);
export const newArrivals = products.filter(product => product.new);
export const discountedProducts = products.filter(product => product.discount);
export const bestSeller = products.filter(product => product.stock < 10);

const Product = require("./modals/product/product");


const dummyData = [
  {
    name: "Product 1",
    brand: "Brand 1",
    category: "Category 1",
    description: "Description for product 1",
    price: 29.99,
    sizesAvailable: ["S", "M", "L"],
    colorsAvailable: ["Red", "Blue", "Green"],
    images: ["image1.jpg", "image2.jpg"],
    stockQuantity: 100,
    rating: 4.5,
    reviews: [
      {
        userId: "user1",
        rating: 5,
        comment: "Great product!",
        createdAt: new Date()
      }
    ],
    createdAt: new Date(),
    modifiedAt: new Date()
  },
  {
    name: "Product 2",
    brand: "Brand 2",
    category: "Category 2",
    description: "Description for product 2",
    price: 39.99,
    sizesAvailable: ["M", "L", "XL"],
    colorsAvailable: ["Black", "White", "Gray"],
    images: ["image3.jpg", "image4.jpg"],
    stockQuantity: 80,
    rating: 4.2,
    reviews: [
      {
        userId: "user2",
        rating: 4,
        comment: "Nice product!",
        createdAt: new Date()
      }
    ],
    createdAt: new Date(),
    modifiedAt: new Date()
  },
  // Add more dummy data here
];

const seedData = async () => {
  try {
    // console.log(dummyData)
    // await Product.deleteMany({});
    // await Product.insertMany(dummyData);
    console.log("Dummy data generated successfully");
  } catch (error) {
    console.error("Error generating dummy data:", error);
  }
};
module.exports = seedData;

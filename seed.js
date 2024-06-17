// Import Product model (adjust path as needed)
const Product = require('./modals/product/product');

// Define seedData function
async function seedData() {
    // let count=0;
    // try {
    //     // Find all products
    //     const products = await Product.find();

    //     // Update each product to set discount to 40
    //     const updatedProducts = await Promise.all(products.map(async (product) => {
           
    //         product.discount = 40;
    //         await product.save();
    //         console.log(product.productName,product.discount)
    //         return product;
    //     }));

    //     return { message: 'Discount set to 40% on all products.', products: updatedProducts };
    // } catch (err) {
    //     console.error('Error setting discount:', err);
    //     throw new Error('Internal server error');
    // }
}

// Export seedData function
module.exports = seedData;

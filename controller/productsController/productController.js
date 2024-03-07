const Product = require('../../modals/product/product');

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get product by ID
const getProductById = async (req, res) => {
   const {Id}= req.params;
    try {
        const product = await Product.findById(Id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to create a product by ID
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to update a product by ID
const updateProduct = async (req, res) => {
    const { Id } = req.params;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(Id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to delete a product by ID
const deleteProduct = async (req, res) => {
    const { Id } = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(Id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts
};
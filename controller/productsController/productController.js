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
const uploadProductImage = async (req, res) => {
    try {
      // Check if file is uploaded
      if (!req.file) {
        return res.status(400).json({ message: 'No image uploaded' });
      }
  
      // Construct image URL
      const imageUrl = req.protocol + '://' + req.get('host') + '/' + req.file.path;
//   console.log(imageUrl)
      // Update product with image URL
      const productId = req.params.Id;
      const product = await Product.findByIdAndUpdate(productId, { productImage: imageUrl }, { new: true });
  
      // Return updated product
      res.status(200).json({ message: 'Image uploaded successfully', product: product });
    } catch (error) {
      console.error('Error uploading image:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  const uploadproductSubImages = async (req, res) => {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'No image uploaded' });
      }
      const productImages = req.files.map(file => req.protocol + '://' + req.get('host') + '/assets/images/productsubImages/' + file.filename); // Construct the image URLs
      console.log(productImages)
      const productId = req.params.Id;
      const product = await Product.findByIdAndUpdate(productId, { productSubImages: productImages }, { new: true });
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Images uploaded successfully', product: product });
    } catch (error) {
      console.error('Error uploading images:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
module.exports = {
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    uploadProductImage,
    uploadproductSubImages
};
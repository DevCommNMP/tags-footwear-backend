const Product = require('../../modals/product/product');

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('category subcategory subcategoryType');
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getPremiumLeather = async (req, res) => {
    try {
        const products = await Product.find({ isPremiumLeather: true })
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get product by ID
const getProductById = async (req, res) => {
   const {id}= req.params;
//    console.log(title)
    try {
      // Finding a product by its title
const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// get product varienst
const getProductByVariants = async (req, res) => {
    const { id } = req.params;
    console.log(id);

    try {
        // Finding a product by its ID
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const productNameParts = product.productName.split('-'); 
        const joinPartsName = productNameParts.slice(0, productNameParts.length - 1).join('-');

        // Finding products with similar names
        const data = await Product.find({ productName: { $regex: joinPartsName, $options: 'i' } }); 
        console.log(data);

        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to create a product by ID
const createProduct = async (req, res) => {
    console.log(req.body)
    try {
        const product = await Product.create({

            
            title: req.body.title,
            productImage: "https://drive.google.com/file/d/1LSbvJ5NetEo-0b86Eo3Q8LeFIRHOAsSY/view?usp=sharing",
            productName: req.body.skewId,
            sizesAvailable: req.body.sizesAvailable,
            price:req.body.price,  
            colorsAvailable: req.body.colorsAvailable,
            description:req.body.description,
            // productSubImages:"https://drive.google.com/file/d/1LSbvJ5NetEo-0b86Eo3Q8LeFIRHOAsSY/view?usp=sharing",
            subcategory: req.body.category,
            subcategoryType: req.body.footwearType,
            tag: req.body.selectedTag,
            rating: 4.7,
            promotionalPrice:req.body.promotionalPrice,
            isPremiumLeather:req.body.isPremiumLeather,
            // reviews: [],
            SellingPrice: req.body.price,
            discount:req.body.discount,
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error)
    }
};

// Controller function to update a product by ID
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { title, skewId, sizesAvailable, price, colorsAvailable, description, category, footwearType, selectedTag,discount } = req.body;
    console.log(req.body);
const productdata=await Product.findById(id)
console.log(productdata)
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                $set: {
                    ...(title && { title }),
                    ...(skewId && { productName: skewId }),
                    ...(sizesAvailable && { sizesAvailable }),
                    ...(price && { price, SellingPrice: price }),
                    ...(colorsAvailable && { colorsAvailable }),
                    ...(description && { description }),
                    ...(category && { subcategory: category }),
                    ...(footwearType && { subcategoryType: footwearType }),
                    ...(selectedTag && { tag: selectedTag }),
                    discount:discount,
                    rating: 4.7
                }
            },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({success:false,error:false, message: "Product not found" });
        }

        res.status(200).json({success:true,error:false,updatedProduct});
    } catch (error) {
        console.error(error);
        res.status(500).json({success:false,error:false, message: "Server error" });
    }
}

// Controller function to delete a product by ID
const deleteProduct = async (req, res) => {
    const { Id } = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(Id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found',success:true});
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message ,success:false});
    }
};
const uploadProductImage = async (req, res) => {
    const {id,image}=req.body;
    try {
      // Check if file is uploaded
      if (!req.file) {
        return res.status(400).json({ message: 'No image uploaded',success:false });
      }
  
      // Construct image URL
      const imageUrl = req.protocol + '://' + req.get('host') + '/' + req.file.path;
//   console.log(imageUrl)
      // Update product with image URL
      const productId = req.params.Id;
      const product = await Product.findByIdAndUpdate(productId, { productImage: imageUrl }, { new: true });
  
      // Return updated product
      res.status(200).json({ message: 'Image uploaded successfully', product: product,success:true });
    } catch (error) {
      console.error('Error uploading image:', error);
      res.status(500).json({ message: 'Internal server error',success:false });
    }
  };
  const uploadproductSubImages = async (req, res) => {
    // console.log("hello")
    try {
        // console.log(req.files);
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'No image uploaded',success:false });
      }
      const productImages = req.files.map(file => req.protocol + '://' + req.get('host') + '/assets/images/productsubImages/' + file.filename); // Construct the image URLs
      console.log(productImages)
      const productId = req.params.Id;
      const product = await Product.findByIdAndUpdate(productId, { productSubImages: productImages }, { new: true });
      if (!product) {
        return res.status(404).json({ message: 'Product not found',success:false  });
      }
      res.status(200).json({ message: 'Images uploaded successfully', product: product ,success:true});
    } catch (error) {
      console.error('Error uploading images:', error);
      res.status(500).json({ message: 'Internal server error',success:false });
    }
  };
  

  const getProductsByCategory = async (req, res) => {
    
    const {categoryName}=req.params;
    
    try {
        const products = await Product.find().populate('category subcategory subcategoryType');
       
        const filteredProducts = products.filter(item => item.subcategory && item.subcategory.subcategoriesName === categoryName);
        res.json(filteredProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProductById,
    createProduct,
    getPremiumLeather,
    getProductsByCategory,
    updateProduct,
    getProductByVariants,
    deleteProduct,
    getAllProducts,
    uploadProductImage,
    uploadproductSubImages
};
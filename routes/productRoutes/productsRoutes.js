// productRoutes.js

const express = require('express');
const router = express.Router();
const {getAllProducts,getProductById,checkUniqueTitles,
    createProduct,
    updateProduct,
    getProductByVariants,
    uploadProductImage,
    getPremiumLeather,
    getProductBySlug,
    bulkDiscountController,
    deleteProduct,uploadproductSubImages,getProductsByCategory} = require('../../controller/productsController/productController');

    const productImageUpload=require('../../config/multerConfig/productImageUpload')
    const uploadSubImages=require('../../config/multerConfig/productSubimagesUplaod')
    
    // .post(productImage.single('productImage'),createProduct)
   //   .post(upload.array('photos', 5), productController.addProduct)

// Route to get all products
router.get('/products', getAllProducts);
router.get('/products/premium-leather', getPremiumLeather);
// Route to create  prodduct 
router.post('/products', createProduct);
//  upload product Image 
router.post('/products/:Id', productImageUpload.single("productImage"), uploadProductImage);

//  upload product Image 
router.post('/products/subImages/:Id', uploadSubImages.array("productSubImages"), uploadproductSubImages);
router.post('/v1/bulkDiscount/',bulkDiscountController)
// Route to get a single product by ID
router.get('/products/:id', getProductById);

router.get('/allproductVarients/:slugtitle', getProductByVariants);
//Route to update a particular product
router.put('/products/:id', updateProduct);

//Route to delete a particular post by Id
router.delete('/products/:Id', deleteProduct);
router.get('/:categoryName', getProductsByCategory);
// Other routes for creating, updating, and deleting products can be added here
router.get("/v1/products/:slugtitle",getProductBySlug)
router.get('/test/title',checkUniqueTitles)
module.exports = router;

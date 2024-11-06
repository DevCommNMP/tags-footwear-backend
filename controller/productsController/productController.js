const Product = require("../../modals/product/product");
const Data = require("../../test");

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start
    .replace(/-+$/, ""); // Trim - from end
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}).populate(
      "category subcategory subcategoryType"
    );
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPremiumLeather = async (req, res) => {
  try {
    const products = await Product.find({ isPremiumLeather: true });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get product by ID
const getProductById = async (req, res) => {
  const { id } = req.params;
  //    console.log(title)
  try {
    // Finding a product by its title
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductBySlug = async (req, res) => {
  const { slugtitle } = req.params; // Extract slugTitle from request parameters
  // console.log(slugtitle);
  try {
    // Find the product by its slugTitle
    const product = await Product.findOne({ slugTitle });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product); // Return the product data
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle server errors
  }
};

// get product varienst
const getProductByVariants = async (req, res) => {
  const { slugtitle } = req.params;
  // console.log(slugtitle);

  try {
    // Finding a product by its ID
    const product = await Product.findOne({ slugTitle: slugtitle });

    // console.log(product)
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const productNameParts = product.productName.split("-");
    const joinPartsName = productNameParts
      .slice(0, productNameParts.length - 1)
      .join("-");

    // Finding products with similar names
    const data = await Product.find({
      productName: { $regex: joinPartsName, $options: "i" },
    });
    // console.log(data);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to create a product by ID
const createProduct = async (req, res) => {
  try {
    // Generate initial slug from the title
    let slugTitle = slugify(req.body.title, { lower: true });

    // Check for duplicate slugs and update accordingly
    let count = 1;
    let isSlugTaken = await Product.findOne({ slugTitle }).populate(
      "subcategory"
    );
    // console.log(isSlugTaken);
    while (isSlugTaken) {
      // Append brand or subcategory or a count to make the slug unique
      const professionalSuffix = req.body.brand
        ? `-${slugify(req.body.brand)}`
        : `-${slugify(isSlugTaken.productName)}`;

      slugTitle = `${slugify(req.body.title, {
        lower: true,
      })}${professionalSuffix}-v${count}`;
      isSlugTaken = await Product.findOne({ slugTitle });
      count++;
    }

    // Create product with the unique slugTitle
    const product = await Product.create({
      title: req.body.title,
      slugTitle, // Use the generated unique slugTitle
      // productImage: "https://drive.google.com/file/d/1LSbvJ5NetEo-0b86Eo3Q8LeFIRHOAsSY/view?usp=sharing",
      productName: req.body.skewId,
      sizesAvailable: req.body.sizesAvailable,
      price: req.body.price,
      colorsAvailable: req.body.colorsAvailable,
      description: req.body.description,
      subcategory: req.body.category,
      subcategoryType: req.body.footwearType,
      tag: req.body.selectedTag,
      rating: 4.7,
      // productName: req.body.productName,
      promotionalPrice: req.body.promotionalPrice,
      isPremiumLeather: req.body.isPremiumLeather,
      SellingPrice: req.body.price,
      discount: req.body.discount,
    });

    // Respond with the created product
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
    // console.log(error);
  }
};

// Controller function to update a product by ID
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    skewId,
    sizesAvailable,
    price,
    colorsAvailable,
    description,
    category,
    footwearType,
    selectedTag,
    discount,
  } = req.body;
  // console.log(req.body);

  try {
    // Find the product by ID
    const productData = await Product.findById(id);
    if (!productData) {
      return res
        .status(404)
        .json({ success: false, error: true, message: "Product not found" });
    }

    // If title is being updated, generate a unique slugTitle
    let slugTitle;
    if (title) {
      slugTitle = slugify(title, { lower: true });

      // Check if the slugTitle is unique
      let isSlugTaken = await Product.findOne({ slugTitle, _id: { $ne: id } });
      let count = 1;

      // Append brand, subcategory, or versioning to make the slug unique if needed
      while (isSlugTaken) {
        let professionalSuffix = productData.brand
          ? `-${slugify(productData.brand, { lower: true })}`
          : `-${slugify(productData.subcategory, { lower: true })}`;
        slugTitle = `${slugify(title, {
          lower: true,
        })}${professionalSuffix}-v${count}`;
        isSlugTaken = await Product.findOne({ slugTitle, _id: { $ne: id } });
        count++;
      }
    }

    // Update the product with the new data
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: {
          ...(title && { title, slugTitle }), // Update title and slugTitle if title exists
          ...(skewId && { productName: skewId }),
          ...(sizesAvailable && { sizesAvailable }),
          ...(price && { price, SellingPrice: price }),
          ...(colorsAvailable && { colorsAvailable }),
          ...(description && { description }),
          ...(category && { subcategory: category }),
          ...(footwearType && { subcategoryType: footwearType }),
          ...(selectedTag && { tag: selectedTag }),
          discount: discount,
          rating: 4.7,
        },
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, error: true, message: "Product not found" });
    }

    res.status(200).json({ success: true, error: false, updatedProduct });
  } catch (error) {
    // console.error(error);
    res
      .status(500)
      .json({ success: false, error: true, message: "Server error" });
  }
};

// Controller function to delete a product by ID
const deleteProduct = async (req, res) => {
  const { Id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(Id);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ message: "Product not found", success: true });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};
const uploadProductImage = async (req, res) => {
  const { id, image } = req.body;
  try {
    // Check if file is uploaded
    if (!req.file) {
      return res
        .status(400)
        .json({ message: "No image uploaded", success: false });
    }

    // Construct image URL
    const imageUrl =
      req.protocol + "://" + req.get("host") + "/" + req.file.path;
    //   console.log(imageUrl)
    // Update product with image URL
    const productId = req.params.Id;
    const product = await Product.findByIdAndUpdate(
      productId,
      { productImage: imageUrl },
      { new: true }
    );

    // Return updated product
    res
      .status(200)
      .json({
        message: "Image uploaded successfully",
        product: product,
        success: true,
      });
  } catch (error) {
    // console.error("Error uploading image:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
const uploadproductSubImages = async (req, res) => {
  // console.log("hello")
  try {
    // console.log(req.files);
    if (!req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ message: "No image uploaded", success: false });
    }
    const productImages = req.files.map(
      (file) =>
        req.protocol +
        "://" +
        req.get("host") +
        "/assets/images/productsubImages/" +
        file.filename
    ); // Construct the image URLs
    // console.log(productImages);
    const productId = req.params.Id;
    const product = await Product.findByIdAndUpdate(
      productId,
      { productSubImages: productImages },
      { new: true }
    );
    if (!product) {
      return res
        .status(404)
        .json({ message: "Product not found", success: false });
    }
    res
      .status(200)
      .json({
        message: "Images uploaded successfully",
        product: product,
        success: true,
      });
  } catch (error) {
    // console.error("Error uploading images:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const getProductsByCategory = async (req, res) => {
  const { categoryName } = req.params;

  try {
    const products = await Product.find().populate(
      "category subcategory subcategoryType"
    );

    const filteredProducts = products.filter(
      (item) =>
        item.subcategory && item.subcategory.subcategoriesName === categoryName
    );
    res.json(filteredProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Importing product data
// Adjust the path accordingly

// Function to check for unique titles in the product data

const checkUniqueTitles = async (req, res) => {
  try {
    // Retrieve all products from the database
    const products = await Product.find();

    // Prepare the response data with sno, _id, and slug
    const checkedResponse = products.map((item, index) => ({
      sno: index + 1,  // sno starts from 1
      _id: item._id,
      slug: item.slugTitle,
      product_link:`https://tagsfootwear.com/products/${item.slugTitle}`
    }));

    // Send the response with the constructed data
    res.status(200).json({ checkedResponse });
  } catch (error) {
    // Handle any errors
    console.error("Error while updating slugs:", error);
    res.status(500).json({ message: "Server error while updating slugs", error });
  }
};


// const checkUniqueTitles = async (req, res) => {
//   try {
//     // Use MongoDB aggregation to find duplicates
//     const duplicates = await Product.aggregate([
//       {
//         $group: {
//           _id: "$slugTitle", // Group by slugTitle field
//           count: { $sum: 1 }, // Count occurrences of each slugTitle
//           docs: { $push: "$_id" }, // Collect the _id of each document
//         },
//       },
//       {
//         $match: {
//           count: { $gt: 1 }, // Only keep those with more than 1 occurrence (i.e., duplicates)
//         },
//       },
//     ]);

//     if (duplicates.length === 0) {
//       return res.status(200).json({ message: "No duplicate slugs found" });
//     }

//     res.status(200).json({
//       message: "Duplicate slugs found",
//       duplicates: duplicates.map((dup) => ({
//         slugTitle: dup._id,
//         count: dup.count,
//         ids: dup.docs,
//       })),
//     });
//   } catch (error) {
//     // console.error("Error while finding duplicate slugs:", error);
//     res
//       .status(500)
//       .json({ message: "Server error while finding duplicate slugs", error });
//   }
// };


const bulkDiscountController = async (req, res) => {
  const { discount } = req.body;

  try {
    // Update all products, setting the discount field to the provided value
    const updatedProducts = await Product.updateMany({}, { discount });

    // Fetch all products to verify the updates
    const allProducts = await Product.find(); // Fetch all fields

    // Log all products with serial number and discount
    allProducts.forEach((product, index) => {
      console.log(`${index + 1}. Product ID: ${product._id}, Discount: ${product.discount}`);
    });

    // Return a response to the client
    res.status(200).json({
      message: `${updatedProducts.matchedCount} products were found and updated with a discount of ${discount}.`,
      updatedCount: updatedProducts.modifiedCount,
      products: allProducts // Optional: include all products in the response if needed
    });
  } catch (error) {
    // Handle any errors that occur during the update
    console.error("Error updating or fetching data:", error.message);
    res.status(500).json({ message: "Error updating products", error: error.message });
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
  uploadproductSubImages,
  checkUniqueTitles,
  getProductBySlug,
  bulkDiscountController
};

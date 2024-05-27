const Product = require("./modals/product/product");


const dummyData =[
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 2.5  | Colour - Black | Sole - Metro",
      "title": "Women stylish fancy comfortable black block heels",
      "productName": "312 - Black",
      "promotionalSellingPrice": "3395",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 0
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Black",
          "Gold",
          "Peach"
      ],
      "gender": "Women",
      "SellingPrice": 3395,
      "subcategory": "661bbfe06de6bcc2719e4743",
      "subcategoryType": "661bc7436de6bcc2719e4772",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 2.5  | Colour - Gold | Sole - Metro",
      "title": "Women stylish fancy comfortable Golden block heels ",
      "productName": "ST 312 - Gold",
      "promotionalSellingPrice": "3395",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Gold",
          "Black",
          "Peach"
      ],
      "gender": "Women",
      "SellingPrice": 3395,
      "subcategory": "661bbfe06de6bcc2719e4743",
      "subcategoryType": "661bc7436de6bcc2719e4772",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 2.5  | Colour - Peach | Sole - Metro",
      "title": "Women stylish fancy comfortable peach block heels ",
      "productName": "ST 312 - Peach",
      "promotionalSellingPrice": "3395",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Peach",
          "Black",
          "Gold"
      ],
      "gender": "Women",
      "SellingPrice": 3395,
      "subcategory": "661bbfe06de6bcc2719e4743",
      "subcategoryType": "661bc7436de6bcc2719e4772",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 3  | Colour - Pink | Sole - Metro",
      "title": "Women Pink Strap Block heel",
      "productName": "ST 350 - Pink",
      "promotionalSellingPrice": "2785",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 0
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Pink",
          "Black",
          "White"
      ],
      "gender": "Women",
      "SellingPrice": 2785,
      "subcategory": "661bbfe06de6bcc2719e4743",
      "subcategoryType": "662b3587e02b6c5f28260bdc",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 3  | Colour - Black | Sole - Metro",
      "title": "Women Black Strap Block heel",
      "productName": "ST 350 - Black",
      "promotionalSellingPrice": "2785",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 0
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Black",
          "White",
          "Pink"
      ],
      "gender": "Women",
      "SellingPrice": 2785,
      "subcategory": "661bbfe06de6bcc2719e4743",
      "subcategoryType": "662b3587e02b6c5f28260bdc",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 3  | Colour - White | Sole - Metro",
      "title": "Women White Strap Block heel",
      "productName": "ST 350 - White",
      "promotionalSellingPrice": "2785",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "White",
          "Black",
          "Pink"
      ],
      "gender": "Women",
      "SellingPrice": 2785,
      "subcategory": "661bbfe06de6bcc2719e4743",
      "subcategoryType": "662b3587e02b6c5f28260bdc",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height -2  | Colour - Black | Sole - Metro",
      "title": "Women black ankle strap Block Heels (353)",
      "productName": "353 - Black",
      "promotionalSellingPrice": "2625",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 0
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Black",
          "White",
          "Chique"
      ],
      "gender": "Women",
      "SellingPrice": 2625,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height -2  | Colour - White | Sole - Merto",
      "title": "Women white ankle strap Block Heels (353)",
      "productName": "353 - White",
      "promotionalSellingPrice": "2625",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "White",
          "Black",
          "Chique"
      ],
      "gender": "Women",
      "SellingPrice": 2625,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height -2  | Colour - Chique | Sole - Metro",
      "title": "Women Chique ankle strap Block Heels (353)",
      "productName": "353 - Chique",
      "promotionalSellingPrice": "2625",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 0
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 0
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Chique",
          "Black",
          "White"
      ],
      "gender": "Women",
      "SellingPrice": 2625,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - N Blue | Sole - TPR",
      "title": "Women Blue Round-Toe Ballerinas with Braided Hem ",
      "productName": "K-23-811 - N Blue",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Navy Blue",
          "Rust",
          "O Green"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "663c9cf74393a247c9e6df6a",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Rust | Sole - TPR",
      "title": "Women Rust Round-Toe Ballerinas with Braided Hem ",
      "productName": "K-23-811 - Rust",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 0
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Rust",
          "O Green",
          "Navy Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "663c9cf74393a247c9e6df6a",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - O Green | Sole - TPR",
      "title": "Women Green Round-Toe Ballerinas with Braided Hem ",
      "productName": "K-23-811 - O Green",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Olive Green",
          "Navy Blue",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "663c9cf74393a247c9e6df6a",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Brownx | Sole - TPR",
      "title": "Brown Double Shaded flat Sandals",
      "productName": "K-23-290 - Brownx",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 0
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Brownx",
          "Rust",
          "Black"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "663c9cf74393a247c9e6df6a",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Rust | Sole - TPR",
      "title": "Rust Double Shaded flat Sandals",
      "productName": "K-23-290 - Rust",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 0
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Black",
          "Brownx"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "663c9cf74393a247c9e6df6a",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Black | Sole - TPR",
      "title": "Black Double Shaded flat Sandals",
      "productName": "K-23-290 - Black",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 0
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Black",
          "Brownx",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "663c9cf74393a247c9e6df6a",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Chico | Sole - TPR",
      "title": "Women Chico Textured Leather Open Toe Flats With Backstrap",
      "productName": "K-19-150 - Chico",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 0
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Chico",
          "Rust",
          "Brownz"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "663c9cf74393a247c9e6df6a",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Rust | Sole - TPR",
      "title": "Women Rust Textured Leather Open Toe Flats With Backstrap",
      "productName": "K-19-150 - Rust",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 0
          },
          {
              "size": 40,
              "quantity": 0
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Brownz",
          "Chico"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "663c9cf74393a247c9e6df6a",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Brownz | Sole - TPR",
      "title": "Women Brownz Textured Leather Open Toe Flats With Backstrap",
      "productName": "K-19-150 - Brownz ",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 0
          },
          {
              "size": 40,
              "quantity": 0
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Brownz",
          "Chico",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "663c9cf74393a247c9e6df6a",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Brownx | Sole - TPR",
      "title": "Women Brown Slip-on Ballerinas with Genuine Leather Upper",
      "productName": "K-23-587 - Brownx",
      "promotionalSellingPrice": "3345",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Brownx",
          "Rust",
          "Maroon"
      ],
      "gender": "Women",
      "SellingPrice": 3345,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Rust | Sole - TPR",
      "title": "Women Rust Slip-on Ballerinas with Genuine Leather Upper",
      "productName": "K-23-587 - Rust ",
      "promotionalSellingPrice": "3345",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Maroon",
          "Brownx"
      ],
      "gender": "Women",
      "SellingPrice": 3345,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Maroon | Sole - TPR",
      "title": "Women Maroon Slip-on Ballerinas with Genuine Leather Upper",
      "productName": "K-23-587 - Maroon ",
      "promotionalSellingPrice": "3345",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Maroon",
          "Brownx",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3345,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": true,

"productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",        "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 1.5 | Colour - Brown | Sole - TPR",
      "title": "Women Brown Bellies Sandal",
      "productName": "K-23-802 - Brown",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 0
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Brown",
          "Green",
          "Beige"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "662d236d42b4adad5eed7556",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": true,

"productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",        "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 1.5 | Colour - Green | Sole - TPR",
      "title": "Women Green Bellies Sandal",
      "productName": "K-23-802 - Green",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Green",
          "Beige",
          "Brown"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "662d236d42b4adad5eed7556",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": true,

"productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",        "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 1.5 | Colour - Beige | Sole - TPR",
      "title": "Women Beige Brown Bellies Sandal",
      "productName": "K-23-802 - Beige",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Beige",
          "Brown",
          "Green"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "662d236d42b4adad5eed7556",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Beige | Sole - TPR",
      "title": "Women Beige Casual Ballerinas",
      "productName": "K-22-629 - Beige ",
      "promotionalSellingPrice": "3265",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Beige",
          "Chico",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3265,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Rust | Sole - TPR",
      "title": "Women Rust Casual Ballerinas",
      "productName": "K-22-629 - Rust ",
      "promotionalSellingPrice": "3265",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 0
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 0
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Beige",
          "Chico"
      ],
      "gender": "Women",
      "SellingPrice": 3265,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Chico | Sole - TPR",
      "title": "Women Chico Casual Ballerinas",
      "productName": "K-22-629 - Chico",
      "promotionalSellingPrice": "3265",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Chico",
          "Rust",
          "Beige"
      ],
      "gender": "Women",
      "SellingPrice": 3265,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": true,

"productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",        "description": "Upper Material - Leather | Heel Type - Block | Heel Height - 3 | Colour - Brownx | Sole - TPR",
      "title": "Women Marron",
      "productName": "K-22-480 - Marron",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Brownx",
          "Black",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": true,

"productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",        "description": "Upper Material - Leather | Heel Type - Block | Heel Height - 3 | Colour - Black | Sole - TPR",
      "title": "Women Black",
      "productName": "K-22-480 - Black ",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 0
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Black",
          "Rust",
          "Brownx"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": true,

"productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",        "description": "Upper Material - Leather | Heel Type - Block | Heel Height - 3 | Colour - Rust | Sole - TPR",
      "title": "Women Rust",
      "productName": "K-22-480 - Rust ",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 0
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Brownx",
          "Black"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 2 | Colour - Orange | Sole - TPR",
      "title": "Women Orange Wedges Sandal",
      "productName": "K-23-857 - Orange ",
      "promotionalSellingPrice": "3325",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Orange",
          "Mango Green",
          "Mango Yellow"
      ],
      "gender": "Women",
      "SellingPrice": 3325,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 2 | Colour - M. Green | Sole - TPR",
      "title": "Women M. Green Wedges Sandal",
      "productName": "K-23-857 - M. Green ",
      "promotionalSellingPrice": "3325",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Mango Green",
          "Mango Yellow",
          "Orange"
      ],
      "gender": "Women",
      "SellingPrice": 3325,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 2 | Colour - M. Yellow | Sole - TPR",
      "title": "Women M. Yellow Wedges Sandal",
      "productName": "K-23-857 - M.Yellow",
      "promotionalSellingPrice": "3325",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Mango Yellow",
          "Orange",
          "Mango Green"
      ],
      "gender": "Women",
      "SellingPrice": 3325,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Bolck | Heel Height - 2.5 | Colour - Rust | Sole - TPR",
      "title": "Women Rust Leather Block Heels Sandal ",
      "productName": "K-23-535 - Rust",
      "promotionalSellingPrice": "3465",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 0
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Maroon",
          "Navy Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3465,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "661bc69c6de6bcc2719e4769",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Block | Heel Height - 2.5 | Colour - Maroon | Sole - TPR",
      "title": "Women Maroon Leather Block Heels Sandal ",
      "productName": "K-23-535 - Maroon",
      "promotionalSellingPrice": "3465",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Maroon",
          "Navy Blue",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3465,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "661bc69c6de6bcc2719e4769",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Block | Heel Height - 2.5 | Colour - N Blue | Sole - TPR",
      "title": "Women Blue Leather Block Heels Sandal ",
      "productName": "K-23-535 - N Blue",
      "promotionalSellingPrice": "3465",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Navy Blue",
          "Rust",
          "Maroon"
      ],
      "gender": "Women",
      "SellingPrice": 3465,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "661bc69c6de6bcc2719e4769",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - G M T | Sole - TPR",
      "title": "Toe-Ring Flip-Flops Leather flat slippers",
      "productName": "K-18-263 - G M T",
      "promotionalSellingPrice": "3015",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 0
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Gun Metal",
          "White",
          "Black"
      ],
      "gender": "Women",
      "SellingPrice": 3015,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - White | Sole - TPR",
      "title": "Women White Toe-Ring Flip-Flops Leather flat slippers",
      "productName": "K-18-263 - White",
      "promotionalSellingPrice": "3015",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "White",
          "Black",
          "Gun Metal"
      ],
      "gender": "Women",
      "SellingPrice": 3015,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Beige | Sole - TPR",
      "title": "Women Beige Toe-Ring Flip-Flops Leather flat slippers",
      "productName": "K-18-263 - Beige",
      "promotionalSellingPrice": "3015",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Beige",
          "Gun Metal",
          "White"
      ],
      "gender": "Women",
      "SellingPrice": 3015,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - White | Sole - TPR",
      "title": "Women White Round Toe Thong SlidesLeather Flat ",
      "productName": "K-23-115 - White",
      "promotionalSellingPrice": "2785",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "White",
          "Rust",
          "Navy Blue"
      ],
      "gender": "Women",
      "SellingPrice": 2785,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Rust | Sole - TPR",
      "title": "Women Rust Round Toe Thong SlidesLeather Flat ",
      "productName": "K-23-115 - Rust",
      "promotionalSellingPrice": "2785",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Navy Blue",
          "White"
      ],
      "gender": "Women",
      "SellingPrice": 2785,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - N Blue | Sole - TPR",
      "title": "Women Blue Round Toe Thong SlidesLeather Flat ",
      "productName": "K-23-115 - N Bule ",
      "promotionalSellingPrice": "2785",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Navy Blue",
          "White",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 2785,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 2 | Colour - Black | Sole - TPR",
      "title": "Women black Wedges Sandal  ",
      "productName": "K-19 -41 - Black ",
      "promotionalSellingPrice": "3325",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Black",
          "Rust",
          "Beige"
      ],
      "gender": "Women",
      "SellingPrice": 3325,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 2 | Colour - Beige | Sole - TPR",
      "title": "Women beige Wedges Sandal  ",
      "productName": "K-19 -41 - Beige ",
      "promotionalSellingPrice": "3325",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Beige",
          "Black",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3325,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 2 | Colour - Rust | Sole - TPR",
      "title": "Women Rust Wedges Sandal  ",
      "productName": "K-19 -41 - Rust ",
      "promotionalSellingPrice": "3325",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 0
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Beige",
          "Black"
      ],
      "gender": "Women",
      "SellingPrice": 3325,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - N.Blue | Sole - TPR",
      "title": "Women's Blue Low Top Flat Leather ",
      "productName": "K-23-705 - N.Blue ",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Navy Blue",
          "Chique",
          "Brown"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Chique | Sole - TPR",
      "title": "Women's chique Low Top Flat Leather ",
      "productName": "K-23-705 - Chique",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 0
          },
          {
              "size": 40,
              "quantity": 0
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Chique",
          "Brown",
          "Navy Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Brown | Sole - TPR",
      "title": "Women's Brown Low Top Flat Leather ",
      "productName": "K-23-705 - Brown",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Brown",
          "Navy Blue",
          "Chique"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": true,

"productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",        "description": "Upper Material - Leather | Heel Type - Block | Heel Height - 1.5 | Colour - Brownx | Sole - TPR",
      "title": "Women's Brown Strappy Leather Wedge",
      "productName": "K-23-282 - Brownx",
      "promotionalSellingPrice": "3325",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 3
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Brownx",
          "Navy Blue",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3325,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "662d236d42b4adad5eed7556",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": true,

"productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",        "description": "Upper Material - Leather | Heel Type - Block | Heel Height - 1.5 | Colour - N Blue | Sole - TPR",
      "title": "Women's Blue Strappy Leather Wedge",
      "productName": "K-23-282 - N Blue",
      "promotionalSellingPrice": "3325",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Navy Blue",
          "Rust",
          "Brownx"
      ],
      "gender": "Women",
      "SellingPrice": 3325,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "662d236d42b4adad5eed7556",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": true,

"productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",        "description": "Upper Material - Leather | Heel Type - Block | Heel Height - 1.5 | Colour - Rust | Sole - TPR",
      "title": "Women's Rust Strappy Leather Wedge",
      "productName": "K-23-282 - Rust",
      "promotionalSellingPrice": "3325",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 3
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Brownx",
          "Navy Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3325,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "662d236d42b4adad5eed7556",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 1.5 | Colour - N Blue | Sole - TPR",
      "title": "Women Blue Wedges Formal ",
      "productName": "K-23-799 - N Blue",
      "promotionalSellingPrice": "3575",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 0
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Navy Blue",
          "Rust",
          "O Green"
      ],
      "gender": "Women",
      "SellingPrice": 3575,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "66505c74ca398d96dc4528f1",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 1.5 | Colour - Rust | Sole - TPR",
      "title": "Women Rust Wedges Formal ",
      "productName": "K-23-799 - Rust",
      "promotionalSellingPrice": "3575",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Olive Green",
          "Navy Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3575,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "66505c74ca398d96dc4528f1",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 1.5 | Colour - O Green | Sole - TPR",
      "title": "Women Green Wedges Formal ",
      "productName": "K-23-799 - O Green",
      "promotionalSellingPrice": "3575",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Olive Green",
          "Navy Blue",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3575,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "66505c74ca398d96dc4528f1",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 1.5 | Colour - N Blue | Sole - TPR",
      "title": "Women Blue Wedges Sandal",
      "productName": "K-23-558 - N Blue",
      "promotionalSellingPrice": "3515",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Navy Blue",
          "Rust",
          "Beige"
      ],
      "gender": "Women",
      "SellingPrice": 3515,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 1.5 | Colour - Beige | Sole - TPR",
      "title": "Women Beige Wedges Sandal",
      "productName": "K-23-558 - Beige",
      "promotionalSellingPrice": "3515",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Beige",
          "Navy Blue",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3515,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 1.5 | Colour - Rust | Sole - TPR",
      "title": "Women Rust Wedges Sandal",
      "productName": "K-23-558 - Rust",
      "promotionalSellingPrice": "3515",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 0
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Beige",
          "Navy Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3515,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Block | Heel Height - 2 | Colour - Rust | Sole - TPR",
      "title": "Women Rust Bellies Sandal",
      "productName": "K-23-543 - Rust",
      "promotionalSellingPrice": "3465",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Chique",
          "Maroon"
      ],
      "gender": "Women",
      "SellingPrice": 3465,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "662b3587e02b6c5f28260bdc",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Block | Heel Height - 2 | Colour - Chique | Sole - TPR",
      "title": "Women Chique Bellies Sandal",
      "productName": "K-23-543 - Chique",
      "promotionalSellingPrice": "3465",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Chique",
          "Maroon",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3465,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "662b3587e02b6c5f28260bdc",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Block | Heel Height - 2 | Colour - Maroon | Sole - TPR",
      "title": "Women Maroon Bellies Sandal",
      "productName": "K-23-543 - Maroon",
      "promotionalSellingPrice": "3465",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 0
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Maroon",
          "Rust",
          "Chique"
      ],
      "gender": "Women",
      "SellingPrice": 3465,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "662b3587e02b6c5f28260bdc",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Maroon | Sole - TPR",
      "title": "Women Maroon Patterned Leather Flats ",
      "productName": "K-23-245 - Maroon",
      "promotionalSellingPrice": "2875",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Maroon",
          "Beige",
          "Yellow"
      ],
      "gender": "Women",
      "SellingPrice": 2875,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Beige | Sole - TPR",
      "title": "Women Beige Patterned Leather Flats ",
      "productName": "K-23-245 - Beige",
      "promotionalSellingPrice": "2875",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Beige",
          "Yellow",
          "Maroon"
      ],
      "gender": "Women",
      "SellingPrice": 2875,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Yellow | Sole - TPR",
      "title": "Women Yellow Patterned Leather Flats ",
      "productName": "K-23-245 - Yellow",
      "promotionalSellingPrice": "2875",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Yellow",
          "Maroon",
          "Beige"
      ],
      "gender": "Women",
      "SellingPrice": 2875,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type -Flat | Heel Height - NA | Colour - N.Blue | Sole - TPR",
      "title": "Women  N.Blue Flat Sandal ",
      "productName": "K-23-832 - N.Blue",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Navy Blue",
          "Browon",
          "Chikoo"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Browon | Sole - TPR",
      "title": "Women  Browon  Flat Sandal ",
      "productName": "K-23-832 - Browon",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Browon",
          "Chikoo",
          "Navy Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Chikoo | Sole - TPR",
      "title": "Women  Chikoo  Flat Sandal ",
      "productName": "K-23-832 - Chikoo",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Chikoo",
          "Navy Blue",
          "Browon"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 2 | Colour - Maroon | Sole - TPR",
      "title": "Women  Maroon  Wedges Sandal ",
      "productName": "K-18-173 - Maroon",
      "promotionalSellingPrice": "3405",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Maroon",
          "Black",
          "Begie"
      ],
      "gender": "Women",
      "SellingPrice": 3405,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 2 | Colour - Black | Sole - TPR",
      "title": "Women  Black  Wedges Sandal ",
      "productName": "K-18-173 - Black",
      "promotionalSellingPrice": "3405",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Black",
          "Begie",
          "Maroon"
      ],
      "gender": "Women",
      "SellingPrice": 3405,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 2 | Colour - Begie | Sole - TPR",
      "title": "Women  Begie  Wedges Sandal ",
      "productName": "K-18-173 - Begie",
      "promotionalSellingPrice": "3405",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Begie",
          "Maroon",
          "Black"
      ],
      "gender": "Women",
      "SellingPrice": 3405,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - N.Blue / B/TT | Sole - TPR",
      "title": "Women  N.Blue Flat Sandal ",
      "productName": "K-21-495 - N.Blue / B/TT",
      "promotionalSellingPrice": "3045",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Navy Blue",
          "Black",
          "Olive Green"
      ],
      "gender": "Women",
      "SellingPrice": 3045,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - O Green/ B. TT | Sole - TPR",
      "title": "Women  O Green Flat Sandal ",
      "productName": "K-21-495 - O Green /B.TT",
      "promotionalSellingPrice": "3045",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Olive Green",
          "Navy Blue",
          "Black"
      ],
      "gender": "Women",
      "SellingPrice": 3045,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - NT/B.TT | Sole - TPR",
      "title": "Women  NT/B Flat Sandal ",
      "productName": "K-21-495 - NT/B.TT",
      "promotionalSellingPrice": "3045",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Brown",
          "Black",
          "Olive Green"
      ],
      "gender": "Women",
      "SellingPrice": 3045,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Beige | Sole - TPR",
      "title": "Women  Beige  Flat Sandal ",
      "productName": "K-17-425 - Beige ",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Beige",
          "Maroon",
          "Chique"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Maroon | Sole - TPR",
      "title": "Women  Maroon  Flat Sandal ",
      "productName": "K-17-425 - Maroon ",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Maroon",
          "Chique",
          "Beige"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Chique | Sole - TPR",
      "title": "Women  Chique  Flat Sandal ",
      "productName": "K-17-425 - Chique",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Chique",
          "Beige",
          "Maroon"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Maroon | Sole - TPR",
      "title": "Women  Maroon  Flat Sandal ",
      "productName": "K-22-627 - Maroon ",
      "promotionalSellingPrice": "3265",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Maroon",
          "Brownz",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3265,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "66505c74ca398d96dc4528f1",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Brownz | Sole - TPR",
      "title": "Women  Brownz  Flat Sandal ",
      "productName": "K-22-627 - Brownz ",
      "promotionalSellingPrice": "3265",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Brownz",
          "Rust",
          "Maroon"
      ],
      "gender": "Women",
      "SellingPrice": 3265,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "66505c74ca398d96dc4528f1",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Rust | Sole - TPR",
      "title": "Women  Rust  Flat Sandal ",
      "productName": "K-22-627 - Rust",
      "promotionalSellingPrice": "3265",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Maroon",
          "Brownz"
      ],
      "gender": "Women",
      "SellingPrice": 3265,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "66505c74ca398d96dc4528f1",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - N.Blue | Sole - TPR",
      "title": "Women  N.Blue Flat Sandal ",
      "productName": "K-23-308 - N.Blue",
      "promotionalSellingPrice": "3265",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Navy Blue",
          "Rust",
          "Maroon"
      ],
      "gender": "Women",
      "SellingPrice": 3265,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Rust | Sole - TPR",
      "title": "Women  Rust  Flat Sandal ",
      "productName": "K-23 - 308 - Rust",
      "promotionalSellingPrice": "3265",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Maroon",
          "Navy Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3265,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Maroon | Sole - TPR",
      "title": "Women  Maroon  Flat Sandal ",
      "productName": "K-23 - 308 -Maroon",
      "promotionalSellingPrice": "3265",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Maroon",
          "Navy Blue",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3265,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Begie | Sole - TPR",
      "title": "Women  Begie  Flat Sandal ",
      "productName": "K-22-85 - Begie",
      "promotionalSellingPrice": "3265",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Begie",
          "Chique",
          "Navy Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3265,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - N.Blue | Sole - TPR",
      "title": "Women  N.Blue Flat Sandal ",
      "productName": "K-22-85 - N.Blue",
      "promotionalSellingPrice": "3265",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Navy Blue",
          "Begie",
          "Chique"
      ],
      "gender": "Women",
      "SellingPrice": 3265,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Rust | Sole - TPR",
      "title": "Women  Rust  Flat Sandal ",
      "productName": "K-22-85 - Rust",
      "promotionalSellingPrice": "3265",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Chique",
          "Navy Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3265,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 2 | Colour - Begie | Sole - TPR",
      "title": "Women  Begie  Wedges Sandal ",
      "productName": "K-20-207 - Begie",
      "promotionalSellingPrice": "3325",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Begie",
          "Maroon",
          "Navy Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3325,
      "subcategory": "661bbfd66de6bcc2719e4740",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 2 | Colour - N.Blue | Sole - TPR",
      "title": "Women  N.Blue Wedges Sandal ",
      "productName": "K-20-207 - N.Blue",
      "promotionalSellingPrice": "3325",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Navy Blue",
          "Maroon",
          "Begie"
      ],
      "gender": "Women",
      "SellingPrice": 3325,
      "subcategory": "661bbfd66de6bcc2719e4740",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 2 | Colour - Maroon | Sole - TPR",
      "title": "Women  Maroon  Wedges Sandal ",
      "productName": "K-20-207 - Maroon",
      "promotionalSellingPrice": "3325",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Maroon",
          "Begie",
          "Navy Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3325,
      "subcategory": "661bbfd66de6bcc2719e4740",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - T Blue | Sole - TPR",
      "title": "Women  T Blue Flat Sandal ",
      "productName": "K-23-250 - T Blue",
      "promotionalSellingPrice": "3095",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "T Blue",
          "Maroon",
          "Orange"
      ],
      "gender": "Women",
      "SellingPrice": 3095,
      "subcategory": "661bbfd66de6bcc2719e4740",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Maroon | Sole - TPR",
      "title": "Women  Maroon  Flat Sandal ",
      "productName": "K-23-250 - Maroon",
      "promotionalSellingPrice": "3095",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Maroon",
          "Orange",
          "Teal Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3095,
      "subcategory": "661bbfd66de6bcc2719e4740",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Orange | Sole - TPR",
      "title": "Women  Orange  Flat Sandal ",
      "productName": "K-23-250 - Orange",
      "promotionalSellingPrice": "3095",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Orange",
          "Teal Blue",
          "Maroon"
      ],
      "gender": "Women",
      "SellingPrice": 3095,
      "subcategory": "661bbfd66de6bcc2719e4740",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 2 | Colour - M Yellow | Sole - TPR",
      "title": "Women  M Yellow Wedges Sandal ",
      "productName": "K-23-727 - M Yellow",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Mango Yellow",
          "Light Gray",
          "Chique"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 2 | Colour - L Gray | Sole - TPR",
      "title": "Women  L Gray Wedges Sandal ",
      "productName": "K-23-727 - L Gray",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Light Gray",
          "Chique",
          "Mango Yellow"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 2 | Colour - Chique | Sole - TPR",
      "title": "Women  Chique  Wedges Sandal ",
      "productName": "K-23-727 - Chique",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Chique",
          "Mango Yellow",
          "Light Gray"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 1.5 | Colour - Rust | Sole - TPR",
      "title": "Women  Rust  Wedges Sandal ",
      "productName": "K-22-647 - Rust",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Black",
          "Chikoo"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "66505ab3ca398d96dc452592",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 1.5 | Colour - Black | Sole - TPR",
      "title": "Women  Black  Wedges Sandal ",
      "productName": "K-22-647 - Black",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Black",
          "Chikoo",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "66505ab3ca398d96dc452592",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 1.5 | Colour - Chikoo | Sole - TPR",
      "title": "Women  Chikoo  Wedges Sandal ",
      "productName": "K-22-647 - Chikoo",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Chikoo",
          "Rust",
          "Black"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "66505ab3ca398d96dc452592",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Maroon | Sole - TPR",
      "title": "Women  Maroon  Flat Sandal ",
      "productName": "K-23-639 - Maroon",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Maroon",
          "Begie",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Begie | Sole - TPR",
      "title": "Women  Begie  Flat Sandal ",
      "productName": "K-23-639 - Begie",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Begie",
          "Rust",
          "Maroon"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Rust | Sole - TPR",
      "title": "Women  Rust  Flat Sandal ",
      "productName": "K-23-639 - Rust",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Maroon",
          "Begie"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Rust | Sole - TPR",
      "title": "Women  Rust  Flat Sandal ",
      "productName": "K-23-702 - Rust",
      "promotionalSellingPrice": "3265",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Maroon",
          "Begie"
      ],
      "gender": "Women",
      "SellingPrice": 3265,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Maroon | Sole - TPR",
      "title": "Women  Maroon  Flat Sandal ",
      "productName": "K-23-702 - Maroon",
      "promotionalSellingPrice": "3265",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Maroon",
          "Begie",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3265,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Begie | Sole - TPR",
      "title": "Women  Begie  Flat Sandal ",
      "productName": "K-23-702 - Begie",
      "promotionalSellingPrice": "3265",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Begie",
          "Rust",
          "Maroon"
      ],
      "gender": "Women",
      "SellingPrice": 3265,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Maroon | Sole - TPR",
      "title": "Women  Maroon  Flat Sandal ",
      "productName": "K-12-307 - Maroon",
      "promotionalSellingPrice": "3095",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Maroon",
          "Begie",
          "Olive Green"
      ],
      "gender": "Women",
      "SellingPrice": 3095,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Begie | Sole - TPR",
      "title": "Women  Begie  Flat Sandal ",
      "productName": "K-12-307 - Begie",
      "promotionalSellingPrice": "3095",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Begie",
          "Olive Green",
          "Maroon"
      ],
      "gender": "Women",
      "SellingPrice": 3095,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - O.Green | Sole - TPR",
      "title": "Women  O.Green Flat Sandal ",
      "productName": "K-12-307 - O.Green",
      "promotionalSellingPrice": "3095",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Olive Green",
          "Maroon",
          "Begie"
      ],
      "gender": "Women",
      "SellingPrice": 3095,
      "subcategory": "661bbfc26de6bcc2719e473d",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Browon | Sole - TPR",
      "title": "Women  Browon  Flat Sandal ",
      "productName": "K-22-689 - Browon",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Browon",
          "Chikoo",
          "Navy Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - N.Blue | Sole - TPR",
      "title": "Women  N.Blue Flat Sandal ",
      "productName": "K-22-689 - N.Blue",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Navy Blue",
          "Browon",
          "Chikoo"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Chikoo | Sole - TPR",
      "title": "Women  Chikoo  Flat Sandal ",
      "productName": "K-22-689 - Chikoo",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Chikoo",
          "Navy Blue",
          "Browon"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "662d236d42b4adad5eed7556",
      "subcategoryType": "665058afca398d96dc452233",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - N.Blue | Sole - TPR",
      "title": "Women  N.Blue Flat Sandal ",
      "productName": "K-23-695 - N.Blue",
      "promotionalSellingPrice": "3265",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Navy Blue",
          "Chikoo",
          "Begie"
      ],
      "gender": "Women",
      "SellingPrice": 3265,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Begie | Sole - TPR",
      "title": "Women  Begie  Flat Sandal ",
      "productName": "K-23-695 - Begie",
      "promotionalSellingPrice": "3265",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Begie",
          "Navy Blue",
          "Chikoo"
      ],
      "gender": "Women",
      "SellingPrice": 3265,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Chikoo | Sole - TPR",
      "title": "Women  Chikoo  Flat Sandal ",
      "productName": "K-23-695 - Chikoo",
      "promotionalSellingPrice": "3265",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Chikoo",
          "Begie",
          "Navy Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3265,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Ruat | Sole - TPR",
      "title": "Women  Ruat  Flat Sandal ",
      "productName": "K-23-751 - Rust",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Navy Blue",
          "Begie"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "66505c74ca398d96dc4528f1",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - N Blue | Sole - TPR",
      "title": "Women  N Blue Flat Sandal ",
      "productName": "K-23-751 - N.Blue",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Navy Blue",
          "Begie",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "66505c74ca398d96dc4528f1",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Begie | Sole - TPR",
      "title": "Women  Begie  Flat Sandal ",
      "productName": "K-23-751 - Begie",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Begie",
          "Rust",
          "Navy Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "66505c74ca398d96dc4528f1",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 2 | Colour - N.Blue | Sole - TPR",
      "title": "Women  N.Blue Wedges Sandal ",
      "productName": "K-22-217 - N.Blue ",
      "promotionalSellingPrice": "3325",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Navy Blue",
          "Brownz",
          "Rust"
      ],
      "gender": "Women",
      "SellingPrice": 3325,
      "subcategory": "661bbfd66de6bcc2719e4740",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 2 | Colour - Brownz | Sole - TPR",
      "title": "Women  Brownz  Wedges Sandal ",
      "productName": "K-22-217 - Brownz",
      "promotionalSellingPrice": "3325",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Brownz",
          "Rust",
          "Navy Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3325,
      "subcategory": "661bbfd66de6bcc2719e4740",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Wedges | Heel Height - 2 | Colour - Rust B.TT | Sole - TPR",
      "title": "Women  Rust B Wedges Sandal ",
      "productName": "K-22-217 - Rust-B.TT",
      "promotionalSellingPrice": "3325",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Rust",
          "Navy Blue",
          "Brownz"
      ],
      "gender": "Women",
      "SellingPrice": 3325,
      "subcategory": "661bbfd66de6bcc2719e4740",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - N.Blue | Sole - TPR",
      "title": "Women  N.Blue Flat Sandal ",
      "productName": "K-23-815 - N.Blue",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Navy Blue",
          "Browon",
          "Chikoo"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "66505c74ca398d96dc4528f1",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Browon | Sole - TPR",
      "title": "Women  Browon  Flat Sandal ",
      "productName": "K-23-815 - Browon",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Browon",
          "Chikoo",
          "Navy Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "66505c74ca398d96dc4528f1",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Leather | Heel Type - Flat | Heel Height - NA | Colour - Chikoo | Sole - TPR",
      "title": "Women  Chikoo  Flat Sandal ",
      "productName": "K-23-815 - Chikoo",
      "promotionalSellingPrice": "3435",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Chikoo",
          "Navy Blue",
          "Browon"
      ],
      "gender": "Women",
      "SellingPrice": 3435,
      "subcategory": "663c9cf74393a247c9e6df6a",
      "subcategoryType": "66505c74ca398d96dc4528f1",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Flat | Heel Height - NA  | Colour - Pista | Sole - TPR",
      "title": "Women pista Embellished Flats",
      "productName": "SW1 - Pista",
      "promotionalSellingPrice": "3345",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Pista",
          "Begie",
          "Peach"
      ],
      "gender": "Women",
      "SellingPrice": 3345,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Flat | Heel Height - NA | Colour - Beige | Sole - TPR",
      "title": "Women beige Embellished Flats",
      "productName": "SW1 - Beige",
      "promotionalSellingPrice": "3345",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Beige",
          "Peach",
          "Pista"
      ],
      "gender": "Women",
      "SellingPrice": 3345,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Flat | Heel Height - NA | Colour - Peach | Sole - TPR",
      "title": "Women peach Embellished Flats",
      "productName": "SW1 - Peach",
      "promotionalSellingPrice": "3345",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Peach",
          "Pista",
          "Beige"
      ],
      "gender": "Women",
      "SellingPrice": 3345,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "661bc6d26de6bcc2719e476f",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Flat | Heel Height - NA | Colour - Gold | Sole - TPR",
      "title": "Women Gold Flat Heel Sands",
      "productName": "SW2 - Gold",
      "promotionalSellingPrice": "3345",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Gold",
          "Sultan",
          "Silver"
      ],
      "gender": "Women",
      "SellingPrice": 3345,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "661bc6766de6bcc2719e4763",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Flat | Heel Height - NA | Colour - Sultan | Sole - TPR",
      "title": "Women Sultan Flat Heel Sands",
      "productName": "SW2 - Sultan",
      "promotionalSellingPrice": "3345",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Sultan",
          "Silver",
          "Gold"
      ],
      "gender": "Women",
      "SellingPrice": 3345,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "661bc6766de6bcc2719e4763",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Flat | Heel Height - NA | Colour - Silver | Sole - TPR",
      "title": "Women Silver Flat Heel Sands",
      "productName": "SW2 - Silver",
      "promotionalSellingPrice": "3345",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Silver",
          "Gold",
          "Sultan"
      ],
      "gender": "Women",
      "SellingPrice": 3345,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "661bc6766de6bcc2719e4763",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Wedges | Heel Height - 1.5 | Colour - Blue | Sole - TPR",
      "title": "Blue Solid Wedge Sandals",
      "productName": "SW3 - Blue",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 0
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Blue",
          "Black",
          "Beige"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "66505ab3ca398d96dc452592",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Wedges | Heel Height - 1.5 | Colour - Beige | Sole - TPR",
      "title": "beige Solid Wedge Sandals",
      "productName": "SW3 - Beige",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 0
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 0
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Beige",
          "Blue",
          "Black"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "66505ab3ca398d96dc452592",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Wedges | Heel Height - 1.5 | Colour - Black | Sole - TPR",
      "title": "black Solid Wedge Sandals",
      "productName": "SW3 - Black",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 0
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Black",
          "Beige",
          "Blue"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "66505ab3ca398d96dc452592",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Wedges | Heel Height - 1.5 | Colour - Brown | Sole - TPR",
      "title": "Solid Plain brown Wedge",
      "productName": "SW4 - Brown",
      "promotionalSellingPrice": "3375",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 0
          },
          {
              "size": 38,
              "quantity": 0
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Brown",
          "Black"
      ],
      "gender": "Women",
      "SellingPrice": 3375,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "66505ab3ca398d96dc452592",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Wedges | Heel Height - 1.5 | Colour - Black | Sole - TPR",
      "title": "Solid Plain black Wedge",
      "productName": "SW4 - Black",
      "promotionalSellingPrice": "3375",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Black",
          "Brown"
      ],
      "gender": "Women",
      "SellingPrice": 3375,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "66505ab3ca398d96dc452592",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Pointed | Heel Height - 3  | Colour - Beige | Sole - TPR",
      "title": "Women Beige Pointed Heel Sandal ",
      "productName": "SW6 - Beige ",
      "promotionalSellingPrice": "2815",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Beige",
          "Green",
          "Black",
          "Peach"
      ],
      "gender": "Women",
      "SellingPrice": 2815,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "661bbfe06de6bcc2719e4743",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Pointed | Heel Height - 3  | Colour - Green | Sole - TPR",
      "title": "Women Green Pointed Heel Sandal ",
      "productName": "SW6 - Green ",
      "promotionalSellingPrice": "2815",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Green",
          "Beige",
          "Black",
          "Peach"
      ],
      "gender": "Women",
      "SellingPrice": 2815,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "661bbfe06de6bcc2719e4743",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Pointed | Heel Height - 3 | Colour - Black | Sole - TPR",
      "title": "Women Black Pointed Heel Sandal ",
      "productName": "SW6 - Black ",
      "promotionalSellingPrice": "2815",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Black",
          "Beige",
          "Green",
          "Peach"
      ],
      "gender": "Women",
      "SellingPrice": 2815,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "661bbfe06de6bcc2719e4743",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Pointed | Heel Height - 3 | Colour - Peach | Sole - TPR",
      "title": "Women Peach Pointed Heel Sandal ",
      "productName": "SW6 - Peach",
      "promotionalSellingPrice": "2815",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Peach",
          "Beige",
          "Black",
          "Green"
      ],
      "gender": "Women",
      "SellingPrice": 2815,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "661bbfe06de6bcc2719e4743",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Flat | Heel Height - NA  | Colour - Grey | Sole - TPR",
      "title": "Women Grey Flat Heel Sandal ",
      "productName": "SW7 - Grey",
      "promotionalSellingPrice": "2815",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Grey",
          "Musturd",
          "Blue"
      ],
      "gender": "Women",
      "SellingPrice": 2815,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "661bc6766de6bcc2719e4763",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Flat | Heel Height - NA | Colour - Musturd | Sole - TPR",
      "title": "Women Musturd Flat Heel Sandal ",
      "productName": "SW7 - Musturd",
      "promotionalSellingPrice": "2815",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Musturd",
          "Gray",
          "Blue"
      ],
      "gender": "Women",
      "SellingPrice": 2815,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "661bc6766de6bcc2719e4763",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Flat | Heel Height - NA | Colour - Blue | Sole - TPR",
      "title": "Women Blue Flat Heel Sandal ",
      "productName": "SW7 - Blue ",
      "promotionalSellingPrice": "2815",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Blue",
          "Gray",
          "Musturd"
      ],
      "gender": "Women",
      "SellingPrice": 2815,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "661bc6766de6bcc2719e4763",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Flat | Heel Height - NA | Colour - Beige | Sole - TPR",
      "title": "Women Beige Haze Toe Ring Flat Sandal",
      "productName": "SW8 - Beige",
      "promotionalSellingPrice": "3345",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Beige",
          "Pista",
          "Black"
      ],
      "gender": "Women",
      "SellingPrice": 3345,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "661bc6766de6bcc2719e4763",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Flat | Heel Height - NA | Colour - Pista | Sole - TPR",
      "title": "Women pista Haze Toe Ring Flat Sandal",
      "productName": "SW8 - Pista",
      "promotionalSellingPrice": "3345",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 0
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Pista",
          "Black",
          "Beige"
      ],
      "gender": "Women",
      "SellingPrice": 3345,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "661bc6766de6bcc2719e4763",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Flat | Heel Height - NA | Colour - Black | Sole - TPR",
      "title": "Women black Haze Toe Ring Flat Sandal",
      "productName": "SW8 - Black",
      "promotionalSellingPrice": "3345",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 0
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Black",
          "Beige",
          "Pista"
      ],
      "gender": "Women",
      "SellingPrice": 3345,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "661bc6766de6bcc2719e4763",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Block | Heel Height - 1 | Colour - Black | Sole - TPR",
      "title": "Vintage Black block heel Sandals",
      "productName": "SW9 - Black",
      "promotionalSellingPrice": "2115",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Black",
          "Blue",
          "Peach"
      ],
      "gender": "Women",
      "SellingPrice": 2115,
      "subcategory": "661bbfd66de6bcc2719e4740",
      "subcategoryType": "661bc7436de6bcc2719e4772",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Block | Heel Height - 1 | Colour - Blue | Sole - TPR",
      "title": "Vintage Blue block heel Sandals",
      "productName": "SW9 - Blue",
      "promotionalSellingPrice": "2115",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 0
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Blue",
          "Peach",
          "Black"
      ],
      "gender": "Women",
      "SellingPrice": 2115,
      "subcategory": "661bbfd66de6bcc2719e4740",
      "subcategoryType": "661bc7436de6bcc2719e4772",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Block | Heel Height - 1 | Colour - Peach | Sole - TPR",
      "title": "Vintage peach block heel Sandals",
      "productName": "SW9 - Peach",
      "promotionalSellingPrice": "2115",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 0
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Peach",
          "Black",
          "Blue"
      ],
      "gender": "Women",
      "SellingPrice": 2115,
      "subcategory": "661bbfd66de6bcc2719e4740",
      "subcategoryType": "661bc7436de6bcc2719e4772",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Wedges | Heel Height - 1.5 | Colour - Black | Sole - TPR",
      "title": "Women Black Wedges Heel Sandal",
      "productName": "SW10 - Black",
      "promotionalSellingPrice": "3345",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Black",
          "Pista",
          "Beige"
      ],
      "gender": "Women",
      "SellingPrice": 3345,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "66505ab3ca398d96dc452592",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Wedges | Heel Height - 1.5 | Colour - Pista | Sole - TPR",
      "title": "Women Pista Wedges Heel Sandal",
      "productName": "SW10 - Pista ",
      "promotionalSellingPrice": "3345",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Pista",
          "Beige",
          "Black"
      ],
      "gender": "Women",
      "SellingPrice": 3345,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "66505ab3ca398d96dc452592",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Wedges | Heel Height - 1.5 | Colour - Beige | Sole - TPR",
      "title": "Women Beige Wedges Heel Sandal",
      "productName": "SW10 - Beige ",
      "promotionalSellingPrice": "3345",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Beige",
          "Black",
          "Pista"
      ],
      "gender": "Women",
      "SellingPrice": 3345,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "66505ab3ca398d96dc452592",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Wedges | Heel Height - 1.5 | Colour - Green | Sole - TPR",
      "title": "Womens green Beky Thong Wedge Sandal",
      "productName": "SW11 - Green",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Green",
          "Peach",
          "Gray"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "66505ab3ca398d96dc452592",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Wedges | Heel Height - 1.5 | Colour - Peach | Sole - TPR",
      "title": "Womens peach Beky Thong Wedge Sandal",
      "productName": "SW11 - Peach",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 0
          },
          {
              "size": 39,
              "quantity": 0
          },
          {
              "size": 40,
              "quantity": 0
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Peach",
          "Gray",
          "Green"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "66505ab3ca398d96dc452592",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Wedges | Heel Height - 1.5 | Colour - Grey | Sole - TPR",
      "title": "Womens gray Beky Thong Wedge Sandal",
      "productName": "SW11 - Gray",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 0
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Gray",
          "Green",
          "Peach"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bc65b6de6bcc2719e475d",
      "subcategoryType": "66505ab3ca398d96dc452592",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Flat | Heel Height - NA | Colour - M R H | Sole - TPR",
      "title": "Embellished T-strap flat sandal",
      "productName": "SW12 - M R H",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Marron",
          "Black",
          "Tan",
          "Peach",
          "Beige"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bbfd66de6bcc2719e4740",
      "subcategoryType": "661bc65b6de6bcc2719e475d",
      "reviews": 4.7,
      "tag": "trending"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Flat | Heel Height - NA | Colour - Tan | Sole - TPR",
      "title": "Embellished tan colour T-strap flat sandal",
      "productName": "SW12 - Tan",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 1
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Tan",
          "Marron",
          "Black",
          "Peach",
          "Beige"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bbfd66de6bcc2719e4740",
      "subcategoryType": "661bc65b6de6bcc2719e475d",
      "reviews": 4.7,
      "tag": "new"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Flat | Heel Height - NA | Colour - Peach | Sole - TPR",
      "title": "Embellished peach colour T-strap flat sandal",
      "productName": "SW12 - Peach",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 1
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 2
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Peach",
          "Marron",
          "Black",
          "Tan",
          "Beige"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bbfd66de6bcc2719e4740",
      "subcategoryType": "661bc65b6de6bcc2719e475d",
      "reviews": 4.7,
      "tag": "hot"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Flat | Heel Height - NA | Colour - Black | Sole - TPR",
      "title": "Embellished black colour T-strap flat sandal",
      "productName": "SW12 - Black",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 0
          },
          {
              "size": 40,
              "quantity": 1
          },
          {
              "size": 41,
              "quantity": 0
          }
      ],
      "colorsAvailable": [
          "Black",
          "Marron",
          "Tan",
          "Peach",
          "Beige"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bbfd66de6bcc2719e4740",
      "subcategoryType": "661bc65b6de6bcc2719e475d",
      "reviews": 4.7,
      "tag": "popular"
  },
  {
      "isPremiumLeather": false,
      "productImage":"https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg",
      "description": "Upper Material - Synthetic| Heel Type - Flat | Heel Height - NA | Colour - Beige | Sole - TPR",
      "title": "Embellished beige colour T-strap flat sandal",
      "productName": "SW12 - Beige",
      "promotionalSellingPrice": "3235",
      "sizesAvailable": [
          {
              "size": 36,
              "quantity": 1
          },
          {
              "size": 37,
              "quantity": 2
          },
          {
              "size": 38,
              "quantity": 2
          },
          {
              "size": 39,
              "quantity": 1
          },
          {
              "size": 40,
              "quantity": 2
          },
          {
              "size": 41,
              "quantity": 1
          }
      ],
      "colorsAvailable": [
          "Beige",
          "Marron",
          "Black",
          "Tan",
          "Peach"
      ],
      "gender": "Women",
      "SellingPrice": 3235,
      "subcategory": "661bbfd66de6bcc2719e4740",
      "subcategoryType":"661bc65b6de6bcc2719e475d",
      "reviews": 4.7,
      "tag": "trending"
  }
]

const seedData = async () => {
  try {
  //  await Product.deleteMany({})
    // await Product.insertMany(dummyData);
    console.log("Dummy data generated successfully");
  } catch (error) {
    console.error("Error generating dummy data:", error);
  }
};
module.exports = seedData;










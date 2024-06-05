const Product = require("./modals/product/product");


const dummyData =
[
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Wedges | Heel Height - 1.5  Colour - Tan | Sole - TPR",
        "title": "Womens  Tan colour Embellished Slipon Wedge Heels",
        "productName": "SW13 - Tan",
        "promotionalPrice": "3345",
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
                "quantity": 0
            },
            {
                "size": 41,
                "quantity": 1
            }
        ],
        "colorsAvailable": [
            "Tan",
            "Peach",
            "Beige"
        ],
        "gender": "Women",
        "SellingPrice": 3345,
        "subcategory": "661bbfc26de6bcc2719e473d",
        "subcategoryType": "661bc7436de6bcc2719e4772",
        "reviews": 4.7,
        "tag": "hot"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Wedges | Heel Height - 1.5 Colour - Peach | Sole - TPR",
        "title": "Womens  peach colour Embellished Slipon Wedge Heels",
        "productName": "SW13 - Peach",
        "promotionalPrice": "3345",
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
            "Peach",
            "Beige",
            "Tan"
        ],
        "gender": "Women",
        "SellingPrice": 3345,
        "subcategory": "661bbfc26de6bcc2719e473d",
        "subcategoryType": "661bc7436de6bcc2719e4772",
        "reviews": 4.7,
        "tag": "trending"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Wedges | Heel Height - 1.5  Colour - Beige | Sole - TPR",
        "title": "Womens  beige colour Embellished Slipon Wedge Heels",
        "productName": "SW13 - Beige",
        "promotionalPrice": "3345",
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
            "Peach",
            "Tan"
        ],
        "gender": "Women",
        "SellingPrice": 3345,
        "subcategory": "661bbfc26de6bcc2719e473d",
        "subcategoryType": "661bc7436de6bcc2719e4772",
        "reviews": 4.7,
        "tag": "new"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 1 Colour - Black | Sole - TPR",
        "title": "Women's Synthetic Embellished Designer block heel Sandals",
        "productName": "SW14 -  Black",
        "promotionalPrice": "2565",
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
                "quantity": 1
            },
            {
                "size": 41,
                "quantity": 0
            }
        ],
        "colorsAvailable": [
            "Black",
            " Tan",
            " Marron"
        ],
        "gender": "Women",
        "SellingPrice": 2565,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc65b6de6bcc2719e475d",
        "reviews": 4.7,
        "tag": "popular"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 1 Colour - Tan | Sole - TPR",
        "title": "Women's Synthetic Embellished Designer block heel Sandals",
        "productName": "SW14 - Tan",
        "promotionalPrice": "2565",
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
            "Tan",
            " Black",
            " Marron"
        ],
        "gender": "Women",
        "SellingPrice": 2565,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc65b6de6bcc2719e475d",
        "reviews": 4.7,
        "tag": "trending"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 1 Colour - M R H | Sole - TPR",
        "title": "Women's Synthetic Embellished Designer block heel Sandals",
        "productName": "SW14 - M R H",
        "promotionalPrice": "2565",
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
            " Black",
            " Tan"
        ],
        "gender": "Women",
        "SellingPrice": 2565,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc65b6de6bcc2719e475d",
        "reviews": 4.7,
        "tag": "hot"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Flat | Heel Height - NA Colour - Beige | Sole - TPR",
        "title": "Women beige Casual flat Sandal",
        "productName": "SW15 - Beige",
        "promotionalPrice": "2885",
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
                "quantity": 0
            }
        ],
        "colorsAvailable": [
            "Beige",
            "White",
            "Peach",
            "Black",
            "Green"
        ],
        "gender": "Women",
        "SellingPrice": 2885,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc6766de6bcc2719e4763",
        "reviews": 4.7,
        "tag": "popular"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Flat | Heel Height - NA Colour - White | Sole - TPR",
        "title": "Women white Casual flat Sandal",
        "productName": "SW15 - White",
        "promotionalPrice": "2885",
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
            "White",
            "Beige",
            "Peach",
            "Black",
            "Green"
        ],
        "gender": "Women",
        "SellingPrice": 2885,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc6766de6bcc2719e4763",
        "reviews": 4.7,
        "tag": "new"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Flat | Heel Height - NA Colour - Peach | Sole - TPR",
        "title": "Women peach Casual flat Sandal",
        "productName": "SW15 - Peach",
        "promotionalPrice": "2885",
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
                "quantity": 1
            }
        ],
        "colorsAvailable": [
            "Peach",
            "White",
            "Beige",
            "Black",
            "Green"
        ],
        "gender": "Women",
        "SellingPrice": 2885,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc6766de6bcc2719e4763",
        "reviews": 4.7,
        "tag": "new"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Flat | Heel Height - NA Colour - Black | Sole - TPR",
        "title": "Women black Casual flat Sandal",
        "productName": "SW15 - Black",
        "promotionalPrice": "2885",
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
            "Black",
            "White",
            "Beige",
            "Peach",
            "Green"
        ],
        "gender": "Women",
        "SellingPrice": 2885,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc6766de6bcc2719e4763",
        "reviews": 4.7,
        "tag": "popular"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Flat | Heel Height - NA  Colour - Green | Sole - TPR",
        "title": "Women green Casual flat Sandal",
        "productName": "SW15 - Green",
        "promotionalPrice": "2885",
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
                "quantity": 1
            },
            {
                "size": 41,
                "quantity": 1
            }
        ],
        "colorsAvailable": [
            "Green",
            "White",
            "Beige",
            "Peach",
            "Black"
        ],
        "gender": "Women",
        "SellingPrice": 2885,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc6766de6bcc2719e4763",
        "reviews": 4.7,
        "tag": "trending"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Flat | Heel Height - NA  Colour - Black | Sole - TPR",
        "title": "black thong flat sandal ",
        "productName": "SW16 - Black",
        "promotionalPrice": "3235",
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
                "quantity": 1
            }
        ],
        "colorsAvailable": [
            "Black",
            " Gun Metal",
            " Sultan"
        ],
        "gender": "Women",
        "SellingPrice": 3235,
        "subcategory": "661bbfc26de6bcc2719e473d",
        "subcategoryType": "661bc65b6de6bcc2719e475d",
        "reviews": 4.7,
        "tag": "hot"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Flat | Heel Height - NA Colour - Gun metal | Sole - TPR",
        "title": "gun metal thong flat sandal ",
        "productName": "SW16 - Gun Metal",
        "promotionalPrice": "3235",
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
                "quantity": 1
            }
        ],
        "colorsAvailable": [
            "Gun Metal",
            " Black",
            " Sultan"
        ],
        "gender": "Women",
        "SellingPrice": 3235,
        "subcategory": "661bbfc26de6bcc2719e473d",
        "subcategoryType": "661bc65b6de6bcc2719e475d",
        "reviews": 4.7,
        "tag": "popular"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Flat | Heel Height - NA Colour - Sultan | Sole - TPR",
        "title": "sultan thong flat sandal ",
        "productName": "SW16 - Sultan",
        "promotionalPrice": "3235",
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
            "Sultan",
            " Black",
            " Gun Metal"
        ],
        "gender": "Women",
        "SellingPrice": 3235,
        "subcategory": "661bbfc26de6bcc2719e473d",
        "subcategoryType": "661bc65b6de6bcc2719e475d",
        "reviews": 4.7,
        "tag": "new"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Wedges | Heel Height - 1.5Colour - Blue | Sole - TPR",
        "title": "Blue Comfort Sandal",
        "productName": "SW17 - Blue",
        "promotionalPrice": "3235",
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
            " Black",
            " Tan"
        ],
        "gender": "Women",
        "SellingPrice": 3235,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc6d26de6bcc2719e476f",
        "reviews": 4.7,
        "tag": "hot"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Wedges | Heel Height - 1.5Colour - Black | Sole - TPR",
        "title": "Black Comfort Sandal Style",
        "productName": "SW17 - Black",
        "promotionalPrice": "3235",
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
            " Blue",
            " Tan"
        ],
        "gender": "Women",
        "SellingPrice": 3235,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc6d26de6bcc2719e476f",
        "reviews": 4.7,
        "tag": "trending"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Wedges | Heel Height - 1.5Colour - Tan | Sole - TPR",
        "title": "Comfort in Every Step Tan Sandals TAGS",
        "productName": "SW17 - Tan",
        "promotionalPrice": "3235",
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
            "Tan",
            " Blue",
            " Black"
        ],
        "gender": "Women",
        "SellingPrice": 3235,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc6d26de6bcc2719e476f",
        "reviews": 4.7,
        "tag": "new"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Wedges | Heel Height - 1.5Colour - Marron | Sole - TPR",
        "title": "Cozy Comfort Marron Slides for Relaxation",
        "productName": "SW18-Marron",
        "promotionalPrice": "3345",
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
            " Sultan"
        ],
        "gender": "Women",
        "SellingPrice": 3345,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc7436de6bcc2719e4772",
        "reviews": 4.7,
        "tag": "popular"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Wedges | Heel Height - 1.5Colour - Sultan | Sole - TPR",
        "title": "Sultan Comfort Slides Luxury for Your Feet",
        "productName": "SW18-Sultan",
        "promotionalPrice": "3345",
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
            " Marron"
        ],
        "gender": "Women",
        "SellingPrice": 3345,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc7436de6bcc2719e4772",
        "reviews": 4.7,
        "tag": "hot"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Wedges | Heel Height - 1.5Colour - Black | Sole - TPR",
        "title": "Black Comfort Slide Into Style with TAGS",
        "productName": "SW18-Black ",
        "promotionalPrice": "3345",
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
            " Marron"
        ],
        "gender": "Women",
        "SellingPrice": 3345,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc7436de6bcc2719e4772",
        "reviews": 4.7,
        "tag": "trending"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Flat | Heel Height - NAColour - Green | Sole - TPR",
        "title": "Comfort in Green Stylish Sandals for Every Step",
        "productName": "SW19- Green",
        "promotionalPrice": "3235",
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
            " Yellow",
            " Peach"
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
        "description": "Upper Material - Synthetic | Heel Type - Flat | Heel Height - NAColour - Yellow | Sole - TPR",
        "title": "Sunshine Comfort Yellow Sandal Trends",
        "productName": "SW19 - Yellow",
        "promotionalPrice": "3235",
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
            "Yellow",
            " Green",
            " Peach"
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
        "description": "Upper Material - Synthetic | Heel Type - Flat | Heel Height - NAColour - Peach | Sole - TPR",
        "title": "Comfort in Every Step Peach Sandals for Your Sole",
        "productName": "SW19- Peach",
        "promotionalPrice": "3235",
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
            " Green",
            " Yellow"
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
        "description": "Upper Material - Synthetic | Heel Type - Flat | Heel Height - NAColour - Green | Sole - TPR",
        "title": "Comfort in Every Step Green Sandal Tags",
        "productName": "SW20- Green",
        "promotionalPrice": "3235",
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
            " Yellow",
            " Peach"
        ],
        "gender": "Women",
        "SellingPrice": 3235,
        "subcategory": "661bbfc26de6bcc2719e473d",
        "subcategoryType": "661bc6d26de6bcc2719e476f",
        "reviews": 4.7,
        "tag": "popular"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Flat | Heel Height - NAColour - Yellow | Sole - TPR",
        "title": "Comfort in Every Step Yellow Sandal TAGS",
        "productName": "SW20- Yellow",
        "promotionalPrice": "3235",
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
            "Yellow",
            " Green",
            " Peach"
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
        "description": "Upper Material - Synthetic | Heel Type - Flat | Heel Height - NAColour - Peach | Sole - TPR",
        "title": "Comfortable Peach Sandal A Summer Essential",
        "productName": "SW20- Peach",
        "promotionalPrice": "3235",
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
            " Green",
            " Yellow"
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
        "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 1  Colour - Black | Sole - TPR",
        "title": "Flat Black Festivities",
        "productName": "SW22 - Black",
        "promotionalPrice": "2675",
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
            " Gray",
            " Peach"
        ],
        "gender": "Women",
        "SellingPrice": 2675,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "665058afca398d96dc452233",
        "reviews": 4.7,
        "tag": "trending"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 1 Colour - Grey | Sole - TPR",
        "title": "Grey Elegance Festive Flatwear",
        "productName": "SW22 - Gray",
        "promotionalPrice": "2675",
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
                "quantity": 1
            }
        ],
        "colorsAvailable": [
            "Grey",
            " Black",
            " Peach"
        ],
        "gender": "Women",
        "SellingPrice": 2675,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "665058afca398d96dc452233",
        "reviews": 4.7,
        "tag": "popular"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 1 Colour - Peach | Sole - TPR",
        "title": "Peachy Festive Flats Perfect for Celebrations!",
        "productName": "SW22 - Peach",
        "promotionalPrice": "2675",
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
            " Black",
            " Gray"
        ],
        "gender": "Women",
        "SellingPrice": 2675,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "665058afca398d96dc452233",
        "reviews": 4.7,
        "tag": "new"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height -  1Colour - Peach | Sole - TPR",
        "title": "Peachy Festive Flats The Perfect Blend of Style and Comfort",
        "productName": "SW21-Peach",
        "promotionalPrice": "2505",
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
            "Tan",
            " Black"
        ],
        "gender": "Women",
        "SellingPrice": 2505,
        "subcategory": "661bbfc26de6bcc2719e473d",
        "subcategoryType": "665058afca398d96dc452233",
        "reviews": 4.7,
        "tag": "trending"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 1Colour - Black | Sole - TPR",
        "title": "Flat Black Festivity A Fusion of Style",
        "productName": "SW21-Black",
        "promotionalPrice": "2505",
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
            "Tan",
            " Peach"
        ],
        "gender": "Women",
        "SellingPrice": 2505,
        "subcategory": "661bbfc26de6bcc2719e473d",
        "subcategoryType": "665058afca398d96dc452233",
        "reviews": 4.7,
        "tag": "hot"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 1Colour - Tan | Sole - TPR",
        "title": "Flat Festive Wear Tan Tags",
        "productName": "SW21-Tan",
        "promotionalPrice": "2505",
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
            " Peach"
        ],
        "gender": "Women",
        "SellingPrice": 2505,
        "subcategory": "661bbfc26de6bcc2719e473d",
        "subcategoryType": "665058afca398d96dc452233",
        "reviews": 4.7,
        "tag": "new"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Pointed | Heel Height - 2.5 Colour - Grey | Sole - TPR",
        "title": "Reptilian grey Print Block Heeled Sandals",
        "productName": "SW23 - Gray",
        "promotionalPrice": "2535",
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
            "Grey",
            " Blue",
            " Light Blue"
        ],
        "gender": "Women",
        "SellingPrice": 2535,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "662b3587e02b6c5f28260bdc",
        "reviews": 4.7,
        "tag": "popular"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Pointed | Heel Height - 2.5 Colour - L Blue | Sole - TPR",
        "title": "Reptilian blue Print Block Heeled Sandals",
        "productName": "SW23 - L Blue",
        "promotionalPrice": "2535",
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
            "Light Blue",
            " Blue",
            " Grey"
        ],
        "gender": "Women",
        "SellingPrice": 2535,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "662b3587e02b6c5f28260bdc",
        "reviews": 4.7,
        "tag": "hot"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Pointed | Heel Height - 2.5 Colour - Peach | Sole - TPR",
        "title": "Reptilian peach Print Block Heeled Sandals",
        "productName": "SW23 - Peach",
        "promotionalPrice": "2535",
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
            " Blue",
            " Light Blue"
        ],
        "gender": "Women",
        "SellingPrice": 2535,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "662b3587e02b6c5f28260bdc",
        "reviews": 4.7,
        "tag": "trending"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 2 Colour - Gold | Sole - TPR",
        "title": "Tag footwear Women's Ecru Toe Ring Sandals",
        "productName": "SW24 - Gold",
        "promotionalPrice": "3295",
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
            "Gold",
            " Silver",
            " Peach"
        ],
        "gender": "Women",
        "SellingPrice": 3295,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc6d26de6bcc2719e476f",
        "reviews": 4.7,
        "tag": "popular"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 2 Colour - Silver | Sole - TPR",
        "title": "Tag footwear Women's Ecru Toe Ring Sandals",
        "productName": "SW24 - Silver",
        "promotionalPrice": "3295",
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
            " Gold",
            " Peach"
        ],
        "gender": "Women",
        "SellingPrice": 3295,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc6d26de6bcc2719e476f",
        "reviews": 4.7,
        "tag": "popular"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 2 Colour - Peach | Sole - TPR",
        "title": "Tag footwear Women's Ecru Toe Ring Sandals",
        "productName": "SW24 - Peach",
        "promotionalPrice": "3295",
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
            "Peach",
            " Gold",
            " Silver"
        ],
        "gender": "Women",
        "SellingPrice": 3295,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc6d26de6bcc2719e476f",
        "reviews": 4.7,
        "tag": "trending"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 2.5 Colour - Lavendor | Sole - TPR",
        "title": "Lavish Lavender Comfort Perfect for Party Wear",
        "productName": "SW25 - Lavendor",
        "promotionalPrice": "3125",
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
            "Lavendor",
            " Peach",
            " Gray"
        ],
        "gender": "Women",
        "SellingPrice": 3125,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "662b3587e02b6c5f28260bdc",
        "reviews": 4.7,
        "tag": "hot"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 2.5 Colour - Peach | Sole - TPR",
        "title": "Comfortable Elegance Peachy Party Wear",
        "productName": "SW25 - Peach",
        "promotionalPrice": "3125",
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
            "Peach",
            " Lavendor",
            " Gray"
        ],
        "gender": "Women",
        "SellingPrice": 3125,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "662b3587e02b6c5f28260bdc",
        "reviews": 4.7,
        "tag": "popular"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 2.5 Colour - Grey | Sole - TPR",
        "title": "Grey Comfort: Party Wear Elegance",
        "productName": "SW25 - Gray",
        "promotionalPrice": "3125",
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
            "Grey",
            " Lavendor",
            " Peach"
        ],
        "gender": "Women",
        "SellingPrice": 3125,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "662b3587e02b6c5f28260bdc",
        "reviews": 4.7,
        "tag": "new"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 1Colour - Peach | Sole - TPR",
        "title": "Comfortably Peachy Daily Wear Essentials",
        "productName": "SW26 - Peach",
        "promotionalPrice": "3235",
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
            " Orange"
        ],
        "gender": "Women",
        "SellingPrice": 3235,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc65b6de6bcc2719e475d",
        "reviews": 4.7,
        "tag": "hot"
    },
    {
        "isPremiumLeather": false,
        "description": "Upper Material - Synthetic | Heel Type - Block | Heel Height - 1Colour - Orange | Sole - TPR",
        "title": "Orange Comfort Everyday Style Essentials",
        "productName": "SW26 - Orange ",
        "promotionalPrice": "3235",
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
            "Peach"
        ],
        "gender": "Women",
        "SellingPrice": 3235,
        "subcategory": "661bbfe06de6bcc2719e4743",
        "subcategoryType": "661bc65b6de6bcc2719e475d",
        "reviews": 4.7,
        "tag": "trending"
    }
]

const seedData = async () => {
  try {

    console.log("Server is healthy");
  } catch (error) {
    console.error("Error generating dummy data:", error);
  }
};
module.exports = seedData;










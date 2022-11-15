import { shoesSizes } from "./sizes"

const productsList = [
  {
    id: 0,
    title: "SAMBA ARGENTINA SHOES",
    collection: "Originals",
    price: ["$149.99"],
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0c6edd3002fc40ec8141aedd00f53ef3_9366/Samba_Argentina_Shoes_Blue_HQ7037_01_standard.jpg",
    detailImages: ["https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d457d95fe7e148f88d7aaedd00b4c8b3_9366/Samba_Argentina_Shoes_Blue_HQ7037_02_standard_hover.jpg","https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/612be4bffd4b4a35a009aedd00b4e54a_9366/Samba_Argentina_Shoes_Blue_HQ7037_03_standard.jpg","https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2bf0242d0b83433d9b8baedd00f54ba6_9366/Samba_Argentina_Shoes_Blue_HQ7037_04_standard.jpg","https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aea964a49a71423e946daedd00f55b85_9366/Samba_Argentina_Shoes_Blue_HQ7037_05_standard.jpg","https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/577f82a5b05c46a9aaa3aedd00b4aca6_9366/Samba_Argentina_Shoes_Blue_HQ7037_06_standard.jpg","https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/98bd18884e924b9098f2aedd00f56e38_9366/Samba_Argentina_Shoes_Blue_HQ7037_41_detail.jpg","https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bc69485b6fca47eda114aedd00b4fd28_9366/Samba_Argentina_Shoes_Blue_HQ7037_42_detail.jpg"],
    colors: 'Clear Blue / Cloud White / Tactile Blue',
    sizes: shoesSizes,
    rating: '★★★★☆ 112',
    categories: ['football'],
  },
  {
    id: 1,
    title: "Ultraboost 22 Shoes",
    collection: "Performance",
    price: ["$2,000"],
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b1c66b53dada408ab11dae2b0050e046_9366/Ultraboost_22_Shoes_Yellow_GX6639_01_standard.jpg",
    detailImages: ["https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d457d95fe7e148f88d7aaedd00b4c8b3_9366/Samba_Argentina_Shoes_Blue_HQ7037_02_standard_hover.jpg","https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/612be4bffd4b4a35a009aedd00b4e54a_9366/Samba_Argentina_Shoes_Blue_HQ7037_03_standard.jpg","https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2bf0242d0b83433d9b8baedd00f54ba6_9366/Samba_Argentina_Shoes_Blue_HQ7037_04_standard.jpg","https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aea964a49a71423e946daedd00f55b85_9366/Samba_Argentina_Shoes_Blue_HQ7037_05_standard.jpg","https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/577f82a5b05c46a9aaa3aedd00b4aca6_9366/Samba_Argentina_Shoes_Blue_HQ7037_06_standard.jpg","https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/98bd18884e924b9098f2aedd00f56e38_9366/Samba_Argentina_Shoes_Blue_HQ7037_41_detail.jpg","https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bc69485b6fca47eda114aedd00b4fd28_9366/Samba_Argentina_Shoes_Blue_HQ7037_42_detail.jpg"],
    sizes: shoesSizes,
    categories: ['football'],
  },
  {
    id: 2,
    title: "Inter Miami CF",
    collection: "Performance",
    price: ["$4,500"],
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/aa351bd0a1a745aa9efaab1200f68738_9366/Inter_Miami_CF_Home_Jersey_White_EH8628_01_laydown.jpg",
    categories: ['football'],
  },
  {
    id: 3,
    title: "Aqua Slides",
    collection: "Sportswear",
    price: ["$500"],
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/5b6c737a6ad248f2a263acb801059a20_9366/Adilette_Aqua_Slides_Orange_GZ5235_01_standard.jpg",
    categories: ['football'],
  },
  {
    id: 4,
    title: "Running shoes",
    collection: "Performance",
    price: ["$3,699"],
    image: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/3f12a8508d744600aea7aed200c300c4_9366/galaxy-6-shoes.jpg",
    categories: ['football','men'],
  },
  {
    id: 5,
    title: "Stan Smith shoes",
    collection: "Originals",
    price: ["$4,500"],
    image: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/8787a0066e664f2abff6ad0500e56a40_9366/GY5695_01_standard.jpg",
    categories: ['football','men','shoes'],
  },
]

  export default productsList


export const scrappedProducts =  [
    {
        "id": 80,
        "title": "ULTRA 4DFWD SHOES",
        "collection": "Running",
        "price": "฿8,000",
        "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/c91c5dd3f18444f1b510ae98017b1970_9366/Ultra_4DFWD_Shoes_Beige_GY9837_01_standard.jpg",
        "detailImages": [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/bb20952f99f749bdab25ae98017b2dce_9366/Ultra_4DFWD_Shoes_Beige_GY9837_02_standard_hover.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/ccfaac529a2c4e818d35ae98017b3587_9366/Ultra_4DFWD_Shoes_Beige_GY9837_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/ebc3e5d97a7d405fb818ae98017b3e7d_9366/Ultra_4DFWD_Shoes_Beige_GY9837_04_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/a3c9f339c37d4020a76dae98017b4a1f_9366/Ultra_4DFWD_Shoes_Beige_GY9837_05_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/9a8bd5d639214d84ac01ae98017b23bc_9366/Ultra_4DFWD_Shoes_Beige_GY9837_06_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/f6fadc4d735a4ceeba04ae98017b6d22_9366/Ultra_4DFWD_Shoes_Beige_GY9837_09_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/b01760dde30d40f8abc9ae98017b572d_9366/Ultra_4DFWD_Shoes_Beige_GY9837_41_detail.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/4d17bb0ebb794dec95e6ae98017b6139_9366/Ultra_4DFWD_Shoes_Beige_GY9837_42_detail.jpg"
        ],
        "colors": "Aluminium / Zero Metalic / Magic Beige",
        "sizes": [
            "6 UK",
            "7.5 UK",
            "8.5 UK",
            "10 UK",
            "10.5 UK",
            "11 UK",
            "11.5 UK"
        ],
        "categories": [
            "men",
            "shoes"
        ]
    },
    {
        "id": 81,
        "title": "ULTRA 4DFWD SHOES",
        "collection": "Running",
        "price": "฿8,000",
        "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/1a21c2bd10db44f1873dae9801719513_9366/Ultra_4DFWD_Shoes_Green_GY8389_01_standard.jpg",
        "detailImages": [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/a2252e9224854a51b080ae990106fb87_9366/Ultra_4DFWD_Shoes_Green_GY8389_010_hover_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/09f95f6174ac45609c2aae980171ab87_9366/Ultra_4DFWD_Shoes_Green_GY8389_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/e304a3923fac43b1a1faae980171b36b_9366/Ultra_4DFWD_Shoes_Green_GY8389_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/1bd8e3b70132435ba4fdae980171bd28_9366/Ultra_4DFWD_Shoes_Green_GY8389_04_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/1da05150f40c4cb28c69ae980171c606_9366/Ultra_4DFWD_Shoes_Green_GY8389_05_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/9e88ef7edfcb43e2bca2ae980171a1ce_9366/Ultra_4DFWD_Shoes_Green_GY8389_06_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/7978b60aa13f446ab2c7ae980171f37b_9366/Ultra_4DFWD_Shoes_Green_GY8389_09_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/e0094aee42c74590b371ae980171d2f9_9366/Ultra_4DFWD_Shoes_Green_GY8389_41_detail.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/ab06981df4fd43f79e15ae980171db1f_9366/Ultra_4DFWD_Shoes_Green_GY8389_42_detail.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/ed2013f2617c4240809dae980171e5c3_9366/Ultra_4DFWD_Shoes_Green_GY8389_43_detail.jpg"
        ],
        "colors": "Focus Olive / Core Black / Orbit Green",
        "sizes": [
            "6 UK",
            "6.5 UK",
            "7 UK",
            "7.5 UK",
            "9 UK",
            "10 UK",
            "10.5 UK",
            "11 UK",
            "11.5 UK",
            "12 UK"
        ],
        "categories": [
            "men",
            "shoes"
        ]
    },
    {
        "id": 82,
        "title": "STAN SMITH LUX SHOES",
        "collection": "Originals",
        "price": "฿5,800",
        "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/0fdbcc2e73074cca8ac5af170059c3d9_9366/Stan_Smith_Lux_Shoes_White_HQ6786_HM1.jpg",
        "detailImages": [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/21a97914e6844072be20af170059cfba_9366/Stan_Smith_Lux_Shoes_White_HQ6786_HM3_hover.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/8415d8f04d4640dab18eaf170059dee5_9366/Stan_Smith_Lux_Shoes_White_HQ6786_HM4.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/c3d8d413cab14a809d06af170059ea2a_9366/Stan_Smith_Lux_Shoes_White_HQ6786_HM5.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/27debf10fe6248839287af170059f6f2_9366/Stan_Smith_Lux_Shoes_White_HQ6786_HM6.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/7cb35703c0e540dfac98af17005a025f_9366/Stan_Smith_Lux_Shoes_White_HQ6786_HM7.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/70f3dd5b005d4d798ce7af17005a0e6a_9366/Stan_Smith_Lux_Shoes_White_HQ6786_HM8.jpg"
        ],
        "colors": "Off White / Cream White / Pantone",
        "sizes": [
            "5 UK",
            "6 UK",
            "6.5 UK",
            "7 UK",
            "7.5 UK",
            "9 UK",
            "9.5 UK",
            "10 UK",
            "10.5 UK",
            "11 UK",
            "11.5 UK",
            "12 UK"
        ],
        "categories": [
            "men",
            "shoes"
        ]
    },
    {
        "id": 83,
        "title": "SUPERSTAR SHOES",
        "collection": "Originals",
        "price": "฿4,000",
        "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/SUPERSTAR_SHOES_White_EG4958_01_standard.jpg",
        "detailImages": [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/8a358bcd5e3d453da815aad6009a249e_9366/SUPERSTAR_SHOES_White_EG4958_02_standard_hover.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/3708ab90979a4ba59535aad6009a2fa8_9366/SUPERSTAR_SHOES_White_EG4958_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/ff2e419f1eda4ebab23faad6009a3a9e_9366/SUPERSTAR_SHOES_White_EG4958_04_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/31cf91f6e16c4f0aa11caad6009a4590_9366/SUPERSTAR_SHOES_White_EG4958_05_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/27a4cab6236447958c5caad6009a19be_9366/SUPERSTAR_SHOES_White_EG4958_06_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/bd43ce71f589498ab6b1aad6009a0e6e_9366/SUPERSTAR_SHOES_White_EG4958_07_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/3d0933f855c445fea224aad600bac8b7_9366/SUPERSTAR_SHOES_White_EG4958_09_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/82195e908dde47519a74aad6009a50e0_9366/SUPERSTAR_SHOES_White_EG4958_41_detail.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/3f6f4c7ce81a496f85d4aad6009a58e3_9366/SUPERSTAR_SHOES_White_EG4958_42_detail.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/a540f36ec2c446f198c0aad6009a620e_9366/SUPERSTAR_SHOES_White_EG4958_43_detail.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/f7a9b761e4414c2985b2ab1400f8c9e1_9366/SUPERSTAR_SHOES_White_EG4958_HM1.jpg"
        ],
        "colors": "Cloud White / Core Black / Cloud White",
        "sizes": [
            "3.5 UK",
            "4 UK",
            "4.5 UK",
            "5 UK",
            "5.5 UK",
            "6 UK",
            "6.5 UK",
            "7 UK",
            "7.5 UK",
            "8 UK",
            "8.5 UK",
            "9 UK",
            "9.5 UK",
            "10 UK",
            "10.5 UK",
            "11 UK",
            "11.5 UK",
            "12 UK"
        ],
        "categories": [
            "men",
            "shoes"
        ]
    },
    {
        "id": 84,
        "title": "STAN SMITH SHOES",
        "collection": "Originals",
        "price": "฿4,000",
        "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg",
        "detailImages": [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/ac706d8555244a6e8ea7ac1e00f521d1_9366/Stan_Smith_Shoes_White_FX5502_02_standard_hover.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/72a38538fd684788b5d9ac1e00f52860_9366/Stan_Smith_Shoes_White_FX5502_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/f86168171d2a4644a8eeac1e00f52f85_9366/Stan_Smith_Shoes_White_FX5502_04_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/79e5a7b748c54cbf8c57ac1e00f53669_9366/Stan_Smith_Shoes_White_FX5502_05_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/4bc9628836bf42a181f1ac1e00f51b22_9366/Stan_Smith_Shoes_White_FX5502_06_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/e111d2c7b44442e0b16cac1e01048b6d_9366/Stan_Smith_Shoes_White_FX5502_09_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/d5afac8099674bfea559ac1e00f53d7c_9366/Stan_Smith_Shoes_White_FX5502_41_detail.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/e53b9a57b0a745be924bac1e00f54427_9366/Stan_Smith_Shoes_White_FX5502_42_detail.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/43afbbf4e6ab41cab1ccaca000996da7_9366/Stan_Smith_Shoes_White_FX5502_HM1.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/424656d133304bba9f5faca000996839_9366/Stan_Smith_Shoes_White_FX5502_HM2.jpg"
        ],
        "colors": "Cloud White / Cloud White / Green",
        "sizes": [
            "3 UK",
            "3.5 UK",
            "4 UK",
            "4.5 UK",
            "5 UK",
            "5.5 UK",
            "6 UK",
            "6.5 UK",
            "7 UK",
            "7.5 UK",
            "8 UK",
            "8.5 UK",
            "9 UK",
            "9.5 UK",
            "10 UK",
            "10.5 UK",
            "11 UK",
            "11.5 UK",
            "12 UK",
            "12.5 UK"
        ],
        "categories": [
            "men",
            "shoes"
        ]
    }
]
const Product = require('../models/product');

const getProductsStats = async(req,res) => {
    try{
        const result = await Product.aggregate([
            {
                $match : {
                    inStock : true,
                    price : {
                        $gte : 100
                    }
                }
            },

            //group documents
            {
                $group : {
                    _id : "$category",
                    avgPrice : {
                        $avg : "$price"
                    },
                    
                    count : {
                            $sum : 1,
                    },
                },
          },
            
        ]);

        res.status(200).json({
            success : true,
            data : result
        })

    }catch(e){
        console.log(e);
        res.status(500).json({
            success : false,
            message : 'Some error occurred!'
        });
    }
}



const insertSampleProducts = async(req,res) => {
    try{
            const sampleProducts = [
                {
                    name : "Laptop",
                    category : "Electronics",
                    price : 999,
                    inStock : true,
                    tags : ["computer" , "tech"],
                },
                {
                    name : "SmartPhone",
                    category : "Electronics",
                    price : 300,
                    inStock : true,
                    tags : ["computer" , "tech"],
                },
                {
                    name : "SmartPhone",
                    category : "Electronic",
                    price : 300,
                    inStock : false,
                    tags : ["computer" , "tech"],
                }
            ];

            const result = await Product.insertMany(sampleProducts);
            res.status(201).json({
                success: true,
                data : `Inserted ${result.length} sample products`,
            })
    }catch(e){
        console.log(e);
        res.status(500).json({
            success : false,
            message : 'Some error occurred!'
        });
    }
};

const getProductsAnalysis = async(req,res) => {
    try{
        const result = await Product.aggregate([
            {
                $match : {
                    category : "Electronics"
                },
            },
            {
                $group : {
                    _id : null,
                    totalRevenue : {
                        $sum : "$price"
                    },
                    averagePrice : {
                        $avg : "$price"
                    },
                    maxProductPrice : {
                        $max : "price"
                    },
                    minProductPrice : {
                        $min : "price"
                    }
                }
            }
        ])

        res.status(200).json({
            success : true,
            data : result
        })
    }catch(e){
        res.status(500).json({
            success : false,
            message : "Some error occurred"
        })
    }
}

module.exports = {insertSampleProducts , getProductsStats, getProductsAnalysis}
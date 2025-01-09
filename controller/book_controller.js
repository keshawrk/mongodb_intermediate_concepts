const Author = require ('../models/author');
const  Book = require ('../models/book');


const createAuthor = async(req, res) => {
    try{
        const author = new Author(req.body);
        await author.save();

        res.status(201).json({
            success : true,
            data :  author,
        });

    }catch(e){
        console.log(e);
        req.status(500).json({
            success : false,
            message : 'some error occured'
        })
    }
}


const createBook = async(req, res) => {
    try{
        const book = new Book(req.body);
        await book.save();

        res.status(201).json({
            success : true,
            data :  book,
        });
    }catch(e){
        console.log(e);
        req.status(500).json({
            success : false,
            message : 'some error occured'
        })
    }
}

const getBookWithAuthor = async(req, res) => {
    try{
        const book = new Book.findById(req.params.id).populate('author');
        if(!book){
            return res.status(404).json({
                success: false,
                message : "Book Not Found"
            })
        }
       

        res.status(201).json({
            success : true,
            data :  book,
        });
    }catch(e){
        console.log(e);
        req.status(500).json({
            success : false,
            message : 'some error occured'
        })
    }
}

module.exports = {createAuthor, createBook, getBookWithAuthor};
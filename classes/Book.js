// import the Media class:
const Media = require('../classes/Media.js')

// create your Book class:
class Book extends Media{
    constructor(title, year, genre, author, numPages, rating){
        super(title, year, genre)
        this.author = author;
        this.numPages = numPages;
        this.rating = rating; 
    }

    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }

    static highestRating(arr){
        let highest = 0
        let result 
        for(const book of arr){
            if(book.rating > highest){
                highest = book.rating
                result = book
            }
        }
        return result
    }
}


// don't change below
// module.exports = Book;
module.exports = Book

try{
    var {search}= require('./utils.js')
}catch(e){

}
var books = [
    {
        id: 'manas',
        title: 'Manas',
        author: 'Vivek Dutta Mishra',
        cover: 'https://m.media-amazon.com/images/I/412eqQc7WNL._SY445_SX342_.jpg',
        price: 199,
        rating: 4.7,
        genre : 'selfHelp',
        reviews: [
            { rating: 5, name: 'Sanjay', title: 'Great Book', text: 'A book of Mahabharata in a poetic format. Read several times' },
            { rating: 4, name: 'Shivanshi', title: 'Myth Buster', text: 'Answers several myths of Mahabharata' },
            { rating: 5, name: 'Prabhat', title: 'Mahabharata Courtroom', text: 'A book of Mahabharata. Waiting for the second part' },
        ]
    },
    {
        id: 'rashmirathi',
        title: 'Rashmirathi',
        author: 'Ramdhari Singh Dinkar',
        cover: 'https://m.media-amazon.com/images/I/51ForZD4R5L._SY445_SX342_.jpg',
        price: 99,
        rating: 4.7,
        genre: 'selfHelp',
        reviews: [
            { rating: 5, name: 'Vivek', title: 'My Favorite', text: 'Finest poetry, unfortunately not factual' },
            { rating: 4, name: 'Shivanshi', title: 'Interesting but complicated', text: 'Was not aware of many things written in the book' },
            { rating: 5, name: 'Prabhat', title: 'Interesting Plot', text: 'A book of Mahabharata. Waiting for the second part' },
        ]
    },
    {
        id: 'the-accursed-god',
        title: 'The Accursed God',
        author: 'Vivek Dutta Mishra',
        cover: 'https://m.media-amazon.com/images/I/41xektjU1NL._SY445_SX342_.jpg',
        price: 399,
        rating: 4.5,
        genre: 'mythology',
        reviews: [
            { rating: 5, name: 'Sanjay', title: 'Great Book', text: 'A book of Mahabharata. Waiting for the second part' },
            { rating: 4, name: 'Shivanshi', title: 'Interesting but complicated', text: 'A book of Mahabharata. The beginning appears confusing' },
            { rating: 5, name: 'Prabhat', title: 'Interesting Plot', text: 'A book of Mahabharata. Waiting for the second part' },
        ]
    },
    {
        id: 'parshuram-epic',
        title: 'Parshuram Epic',
        author: 'Ramdhari Singh Dinkar',
        cover: 'https://th.bing.com/th/id/OIP.RLGKnnt5apoC9qQ-qXF71AHaM7?w=189&h=330&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        price: 199,
        rating: 4.6,
        genre:'mythology',
        reviews: [
            { rating: 5, name: 'Vivek', title: 'Great Story', text: 'An incredible take on the Parshuram mythology' },
            { rating: 4, name: 'Shivanshi', title: 'Good Read', text: 'Had no idea about this epic. A bit hard to follow at times' },
            { rating: 5, name: 'Prabhat', title: 'Great Literature', text: 'A masterpiece that makes you think' },
        ]
    },
    {
        id: 'on-the-way-to-krishna',
        title: 'On The Way To Krishna',
        author: 'Ramdhari Singh Dinkar',
        cover: 'https://th.bing.com/th/id/OIP.IOQ2soF6lMNio3Ylkp6a2AHaMw?w=190&h=328&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        price: 249,
        rating: 4.8,
        genre: 'mythology',
        reviews: [
            { rating: 5, name: 'Vivek', title: 'Epic Retelling', text: 'The retelling of Krishna’s life is fantastic and insightful' },
            { rating: 5, name: 'Shivanshi', title: 'One of the Best', text: 'Deep and spiritual. A must-read for mythology lovers' },
            { rating: 4, name: 'Prabhat', title: 'Interesting', text: 'A great read but the depth may be overwhelming at times' },
        ]
    },
    {
        id: 'the-alchemist',
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        cover: 'https://th.bing.com/th/id/OIP.Yd6jD-KBqjLvVob539XvWgHaKZ?w=202&h=285&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        price: 349,
        rating: 4.7,
        genre:'action',
        reviews: [
            { rating: 5, name: 'Vivek', title: 'Inspirational', text: 'A life-changing novel. Inspires to follow your dreams' },
            { rating: 4, name: 'Shivanshi', title: 'Wonderful Story', text: 'A beautiful philosophical journey, though a bit repetitive at times' },
            { rating: 5, name: 'Prabhat', title: 'Amazing', text: 'A must-read for anyone on a personal growth journey' },
        ]
    },
    {
        id: 'the-count-of-monte-cristo',
        title: 'The Count of Monte Cristo',
        author: 'Alexandre Dumas',
        cover: 'https://m.media-amazon.com/images/I/415bCctFbxL._SY445_SX342_.jpg',
        price: 499,
        rating: 4.8,
        genre:'action',
        reviews: [
            { rating: 5, name: 'Vivek', title: 'One of the greatest classics', text: 'One of my all-time favorite books. Read several times' },
            { rating: 5, name: 'Shivanshi', title: 'Nice Plot', text: 'An excellent book' },
            { rating: 5, name: 'Reena', title: 'Interesting Plot', text: 'A book of Mahabharata. Waiting for the second part' },
        ]
    },
    {
        id: 'the-three-musketeers',
        title: 'The Three Musketeers',
        author: 'Alexandre Dumas',
        cover: 'https://th.bing.com/th/id/OIP.SETrOLzDRFNUQ32nCgqdRgAAAA?w=196&h=282&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        price: 399,
        rating: 4.6,
        genre:'crime',
        reviews: [
            { rating: 5, name: 'Vivek', title: 'Classic Adventure', text: 'A true adventure classic! I love the camaraderie between the musketeers' },
            { rating: 4, name: 'Shivanshi', title: 'Great Action', text: 'Full of action and memorable characters. Could have been shorter' },
            { rating: 5, name: 'Reena', title: 'Amazing Story', text: 'An action-packed historical novel. Must-read' },
        ]
    },
    {
        id: 'the-black-tulip',
        title: 'The Black Tulip',
        author: 'Alexandre Dumas',
        cover: 'https://th.bing.com/th/id/OIP.nlC4XS0WvAqx3bNcbqh8XwAAAA?w=194&h=320&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        price: 399,
        rating: 4.7,
        genre:'crime',
        reviews: [
            { rating: 5, name: 'Vivek', title: 'Great Romantic Novel', text: 'A beautifully written romantic historical novel' },
            { rating: 5, name: 'Shivanshi', title: 'A Beautiful Story', text: 'A book that stays with you long after reading' },
            { rating: 4, name: 'Reena', title: 'Intriguing Plot', text: 'The historical context adds so much to the story' },
        ]
    },
    {
        id: 'the-wicked-king',
        title: 'The Wicked King',
        author: 'Vivek Dutta Mishra',
        cover: 'https://th.bing.com/th/id/OIP.ZIZQUGZC9cP50s3-GsG3qQHaLQ?w=156&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        price: 349,
        rating: 4.6,
        genre:'mystery',
        reviews: [
            { rating: 5, name: 'Sanjay', title: 'Mind-Blowing', text: 'Amazing take on Mahabharata. Highly recommend' },
            { rating: 4, name: 'Shivanshi', title: 'Great Read', text: 'Interesting approach to Mahabharata. A bit heavy in some parts' },
            { rating: 5, name: 'Prabhat', title: 'Amazing', text: 'The plot twist was unexpected, a great book' },
        ]
    },
]


function addBook(book){
    //write validation logic to check book info is present
    if(!book.title)
        return "Invalid Title";
    if(!book.author)
        return "Missing Author";
    if(! book.price || isNaN(book.price) || book.price < 0)
        return "Invalid Price";
    if(!book.rating || isNaN(book.rating) || book.rating<1 || book.rating>5)
        return "Invalid Rating";
    
    books.push(book); //save to database;

    return null; //no error.
}
function sortOnTitle(books){
    return bubbleSort(books,'title');
}
function sortOnPrice(books) {
    return bubbleSort(books,'price'); 
}

function sortOnRating(books) {
    return bubbleSort(books,'rating');
}

function sortOnAuthor(books) {
    return bubbleSort(books,'author');
}


// function sortOnPrice(books) {

//     //let books=displayBooks;
//     //let sorted;
//     let size = books.length;

//     do {
//         var sorted = true; //optimisitic assumption that the  list is sorted
//         for (let i = 0; i < size - 1; i++) {
//             if (books[i].price > books[i+1].price) {
//                 let temp = books[i];
//                 books[i] = books[i + 1];
//                 books[i + 1] = temp;
//                 sorted = false; //oh! my assumption was wrong
//             }
//         }
//         size--;
//     } while (!sorted);
//     //console.log(books);
//     //showBookCards(books);

//     return books;
// }

// function sortOnRating(books) {
//     let size = books.length;
//     //let books=displayBooks;
//     do {
//         var sorted = true; //optimisitic assumption that the  list is sorted
//         for (let i = 0; i < size - 1; i++) {
//             if (books[i].rating < books[i+1].rating) {
//                 let temp = books[i];
//                 books[i] = books[i + 1];
//                 books[i + 1] = temp;
//                 sorted = false; //oh! my assumption was wrong
//             }
//         }
//         size--;
//     } while (!sorted);
//     //console.log(books);
//     //showBookCards(books);

//     return books;
// }

// function sortOnAuthor(books){
//     //let books=displayBooks;
//     let size = books.length;

//     do {
//         var sorted = true; //optimisitic assumption that the  list is sorted
//         for (let i = 0; i < size - 1; i++) {
//             if (books[i].author.toLowerCase() > books[i+1].author.toLowerCase()) {
//                 let temp = books[i];
//                 books[i] = books[i + 1];
//                 books[i + 1] = temp;
//                 sorted = false; //oh! my assumption was wrong
//             }
//         }
//         size--;
//     } while (!sorted);
//     //showBookCards(books);
//     return books;
// }

function byAuthor(author){
    return book => book.author.toLowerCase().includes(author);
}

function byTitle(title){
    return book => book.title.toLowerCase().includes(title);
}

var searchByAuthor=function(books,author){
    author=author.toLowerCase();
    return search(books, byAuthor(author));
}

var searchByTitle=function(books,title){
    title=title.toLowerCase();
    return search(books, byTitle(title));
}

var searchByPriceRange=function(books,min,max){
    return search(books,inRange('price',min,max));
}

var searchByRatingRange=function(books,min,max){
    return search(books,inRange('rating',min,max));
}


try {

    module.exports = {
        books: books,
        addBook: addBook,
        sortOnAuthor, //same as sortOnAuthor:sortOnAuthor
        sortOnPrice,
        sortOnRating,
        sortOnTitle,
        searchByAuthor,
        searchByTitle,
        searchByPriceRange,
        searchByRatingRange,
    }
} catch (e) {
    //web application.
    //no harm done.
}

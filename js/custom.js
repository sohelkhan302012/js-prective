// 1. Design a Library System object that allows you to:

// Add books.
// Check available books.
// Borrow books.
// Return books.

// const booksLibrary = {
//   bookList: [],
//   addBook({ title, author, year }) {
//     this.bookList.push({ title, author, year });
//   },
//   returnbook(returnbooks) {
//     this.bookList.push(returnbooks);
//   },
//   checkavailablebooks() {
//     return this.bookList;
//   },
//   borrowBook(book) {
//     book;
//     let bookIndex = this.bookList.findIndex(
//       (b) =>
//         b.title.toLowerCase() === book.toLowerCase() ||
//         b.author.toLowerCase() === book.toLowerCase() ||
//         b.year === book
//     );
//     let Issuebook;
//     if (bookIndex !== -1) {
//       Issuebook = this.bookList[bookIndex];
//       this.bookList.splice(bookIndex, 1);
//       console.log(`${book} has been borrowed.`);
//       console.log(Issuebook);

//       return Issuebook;
//     } else {
//       console.log(`Book not found.`);
//     }
//   },
// };

// booksLibrary.addBook({
//   title: "The Catcher in the Rye",
//   author: "J.D. Salinger",
//   year: "1951",
// });
// booksLibrary.addBook({
//   title: "the catcher in the League",
//   author: "S.D. Slock",
//   year: "1949",
// });
// booksLibrary.addBook({
//   title: "hero of the League",
//   author: "S.K. Rook",
//   year: "1975",
// });
// let borrowbook;
// console.log(booksLibrary.checkavailablebooks());
// borrowbook = booksLibrary.borrowBook("1975");
// console.log(borrowbook);
// console.log(booksLibrary.checkavailablebooks());
// booksLibrary.returnbook(borrowbook);
// console.log(booksLibrary.checkavailablebooks());

// <------------------------------------------------------>

// 2. Create a Shopping Cart object to:

// Add items.
// Remove items.
// View the cart total.
// Apply a discount code

// let discountPrice;
// let finalPrice;
// const shoppingCart = {
//   items: [],
//   addItems({ itemname, Price, quantity, seller }) {
//     this.items.push({ itemname, Price, quantity, seller });
//   },

//   viewCartTotal() {
//     return this.items;
//   },

//   removeitem(removeitems) {
//     let itemindex = this.items.findIndex(
//       (x) =>
//         x.itemname === removeitems ||
//         x.Price === removeitems ||
//         x.seller === removeitems
//     );

//     if (itemindex !== -1) {
//       this.items.splice(itemindex, 1);
//     } else {
//       console.log(`Item not found in the cart.`);
//     }
//   },

//   totalPrice() {
//     if (this.items.length > 0) {
//       return this.items.reduce((acc, x) => acc + x.Price * x.quantity, 0);
//     } else {
//       console.log("No items in the cart.");
//     }
//   },

//   discountcodelist: [
//     {
//       disocuntCode: "sohelkhan302012",
//       discountpersent: 40,
//     },
//     {
//       disocuntCode: "arbajkhan847",
//       discountpersent: 60,
//     },
//   ],

//   applyDiscount(disocuntCode) {
//     if (disocuntCode == "sohelkhan302012") {
//       //   let discountcodeindex = this.discountcodelist.findIndex(
//       //     this.discountcodelist[this.disocuntCode]
//       //   );
//       //   let disocuntpersentvalue =
//       //     this.discountcodelist[discountcodeindex].discountpersent;
//       discountPrice = this.totalPrice() * 0.4;

//       finalPrice = this.totalPrice() - discountPrice;
//       return discountPrice;
//     } else {
//       console.log("discount Code in not valid.");
//     }
//   },
// };

// shoppingCart.addItems({
//   itemname: "apple",
//   Price: 10,
//   quantity: 5,
//   seller: "ABC store",
// });
// shoppingCart.addItems({
//   itemname: "banana",
//   Price: 5,
//   quantity: 12,
//   seller: "banana store",
// });
// shoppingCart.addItems({
//   itemname: "pineapple",
//   Price: 40,
//   quantity: 4,
//   seller: "farmer store",
// });

// console.log(shoppingCart.items);
// console.log(shoppingCart.viewCartTotal());
// console.log(shoppingCart.removeitem(5));
// console.log(shoppingCart.viewCartTotal());
// console.log(shoppingCart.totalPrice());
// console.log(shoppingCart.applyDiscount("sohelkhan302012"));
// console.log(discountPrice);
// console.log(finalPrice);

// 3. Build a Movie Ticket Booking object to:

// Select a movie.
// Choose seats.
// Confirm booking.
// Check available seats.

// const movieTicketBooking = {
//   movienameslist: [
//     {
//       moviename: "3idots",
//       ticketPrice: 100,
//       availableSeats: 2,
//       seats: ["A", "B"],
//     },
//     {
//       moviename: "12thfail",
//       ticketPrice: 120,
//       availableSeats: 4,
//       seats: ["A", "B", "C", "D"],
//     },
//     {
//       moviename: "pathan",
//       ticketPrice: 200,
//       availableSeats: 1,
//       seats: ["A"],
//     },
//   ],
//   availablemovie() {
//     return this.movienameslist;
//   },
//   selectedMovie: [],
//   seletedmovei() {
//     return this.selectedMovie;
//   },
//   ticket() {
//     return this.selectedMovie.reduce(
//       (acc, movie) => acc + movie.ticketPrice,
//       0
//     );
//   },

//   selectMovie(moviename) {
//     let movie = movieTicketBooking.movienameslist.find(
//       (movie) => movie.moviename === moviename
//     );

//     if (movie && movie.availableSeats > 0) {
//       let seetName = prompt(
//         `Plase select Sit ${moviename}, availableSeats ${movie.availableSeats} and Enter A B C D`
//       );
//       seetName = seetName.toString().toLowerCase();
//       let setindex = movie.seats.findIndex(
//         (seat) => seat.toLowerCase() === seetName
//       );
//       let setletter = movie.seats[setindex].toLowerCase();
//       if (setletter === seetName) {
//         movieTicketBooking.selectedMovie.push(movie);
//         movie.availableSeats--;
//         console.log(
//           `Selected movie: ${movie.moviename} tickets: ${movie.ticketPrice}  Remaining seats: ${movie.seats[setindex]}`
//         );
//         movie.seats.splice(setindex, 1);
//         alert(
//           `confirm your movie ticket bookings your total tickets: ${movie.ticketPrice} Remaining`
//         );
//       } else {
//         console.log("No available seats selection.");
//       }
//     } else {
//       console.log("No available seats for selected movie.");
//     }
//   },
// };

// movieTicketBooking.selectMovie("3idots");
// movieTicketBooking.selectMovie("3idots");
// movieTicketBooking.selectMovie("12thfail");
// movieTicketBooking.selectMovie("pathan");
// console.log(movieTicketBooking.availablemovie());
// console.log(movieTicketBooking.seletedmovei());

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

// <----------------------------   exciese  -------------------------->

// 2. Create a Shopping Cart object to:

// Add items.
// Remove items.
// View the cart total.
// Apply a discount code

// const shoppingCart = {
//   items: [],

//   discountcodelist: [
//     {
//       Code: "abcd124034",
//       persent: 40,
//     },
//     {
//       Code: "abcd126034",
//       persent: 60,
//     },
//     {
//       Code: "abcd123734",
//       persent: 37,
//     },
//     {
//       Code: "abcd121834",
//       persent: 18,
//     },
//   ],
//   addItems(itemsobj) {
//     this.items.push(itemsobj);
//   },

//   viewCart() {
//     for (let item of this.items) {
//       console.log(
//        `item : ${item.itemname} Price : ${item.Price} quantity: ${item.quantity}   seller: ${item.seller}`);
//     }
//   },

//   removeitem(removeitems) {
//     let itemindex = this.items.findIndex((x) => x.itemname === removeitems);

//     if (itemindex !== -1) {
//       this.items.splice(itemindex, 1);
//       return `item ${removeitems} removed successfully`;
//     } else {
//       return `Item ${removeitems}  not found in the cart.`;
//     }
//   },

//   totalPrice() {
//     if (this.items.length > 0) {
//       return this.items.reduce((acc, x) => acc + x.Price * x.quantity, 0);
//     } else {
//       console.log("No items in the cart.");
//       return 0;
//     }
//   },

//   applyDiscount(CodeText) {
//     let totalPrice = this.totalPrice();
//     let discountindex = this.discountcodelist.find((x) => x.Code === CodeText);
//     console.log(totalPrice, discountindex);

//     if (discountindex) {
//       let discountPrice = (totalPrice * discountindex.persent) / 100;
//       console.log(discountPrice);
//       let finalPrice = totalPrice - discountPrice;
//       return finalPrice;
//     } else {
//       console.log(totalPrice);
//       return totalPrice;
//     }
//   },
//   checkout(discont) {
//     if (this.items.length > 0) {
//       console.log(`Your total price is ${this.applyDiscount(discont)}`);
//     } else {
//       alert("Cart is empty");
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

// console.log(shoppingCart.removeitem("apple"));
// console.log(shoppingCart.checkout("abcd123734"));
// console.log(shoppingCart.viewCart());

// <----------------------------   exciese  -------------------------->

// 3. Build a Movie Ticket Booking object to:

// Select a movie.
// Choose seats.
// Confirm booking.
// Check available seats.

// const movieTicketBooking = {
//   movienameslist: [
//     {
//       moviename: "3idots",

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

// <----------------------------   exciese  -------------------------->

// 4. Design a Bank Account object to:

// Open a new account.
// Deposit money.
// Withdraw money.
// Transfer funds between accounts.

// const bankAccountopj = {
//   accounts: [],
//   varifyAccount(varifyaccountNumber, varifyaccountPin) {
//     let varifiedAccount = this.accounts.find(
//       (account) =>
//         account.accountNumber === varifyaccountNumber &&
//         account.pin === varifyaccountPin
//     );
//     if (varifiedAccount) {
//       return varifiedAccount;
//     } else {
//       console.log("Invalid account number or pin");
//     }
//   },
//   varifyHolder() {
//     let enterPin = prompt("Please enter your PIN");
//     let enterAccountNumber = prompt("Please enter your account Number");
//     return (verifyAccount = this.varifyAccount(enterAccountNumber, enterPin));
//   },

//   opanAccount(accountOpen) {
//     return this.accounts.push(accountOpen);
//   },

//   depositMoney() {
//     let depositerAccount = this.varifyHolder();
//     if (depositerAccount) {
//       if (depositerAccount.accountType === "saving") {
//         let depositAmount = Number(prompt("Enter amount to deposit"));
//         if (depositAmount < depositerAccount.accountLimit) {
//           if (depositAmount > 0) {
//             depositerAccount.balance += depositAmount;
//             depositerAccount.statement.push(depositAmount);
//             console.log(
//               `account holder name ${depositerAccount.accountHolderName}, deposit Amount ${depositAmount} ,Amount deposited successfully, current balance is ${depositerAccount.balance},`
//             );
//           } else {
//             console.log(`Your amount is low`);
//           }
//         } else {
//           console.log("Your account limit exceeded.");
//         }
//       } else if (depositerAccount.accountType === "currant") {
//         let depositAmount = Number(prompt("Enter amount to deposit"));
//         if (depositAmount < depositerAccount.accountLimit) {
//           if (depositAmount > 0) {
//             depositerAccount.balance += depositAmount;
//             depositerAccount.statement.push(depositAmount);
//             console.log(
//               `account holder name ${depositerAccount.accountHolderName}, deposit Amount ${depositAmount} ,Amount deposited successfully, current balance is ${depositerAccount.balance},`
//             );
//           } else {
//             console.log(`Your amount is low`);
//           }
//         } else {
//           console.log("Your account limit exceeded.");
//         }
//       }
//     } else {
//       console.log("Invalid account type");
//     }
//   },
//   viewbalance() {
//     let viewbalanceaccount = this.varifyHolder();
//     if (viewbalanceaccount) {
//       console.log(
//         `account holder name ${viewbalanceaccount.accountHolderName}, current balance is ${viewbalanceaccount.balance},`
//       );
//     } else {
//       console.log("Invalid account");
//     }
//   },
//   withdrawMoney() {
//     let withdrawAccount = this.varifyHolder();
//     if (withdrawAccount) {
//       if (withdrawAccount.accountType === "saving") {
//         let withdrawAmount = Number(prompt("Enter amount to withdraw"));
//         if (withdrawAmount < withdrawAccount.accountLimit) {
//           if (withdrawAmount > 0) {
//             let transitionPin = prompt("Enter amount to transitionPin");
//             if (transitionPin === withdrawAmount.transitionpin) {
//               withdrawAccount.balance -= withdrawAmount;
//               withdrawAccount.statement.push(withdrawAmount);
//               console.log(
//                 `account holder name ${withdrawAccount.accountHolderName}, withdraw Amount ${withdrawAmount} ,Amount withdraw successfully, current balance is ${withdrawAccount.balance},`
//               );
//             } else {
//               console.log("Invalid transition pin");
//             }
//           } else {
//             console.log(`Your amount is low`);
//           }
//         } else {
//           console.log("Your account limit exceeded.");
//         }
//       } else if (withdrawAccount.accountType === "currant") {
//         let withdrawAmount = Number(prompt("Enter amount to withdraw"));
//         if (withdrawAmount < withdrawAccount.accountLimit) {
//           if (withdrawAmount > 0) {
//             let transitionPin = prompt("Enter amount to transitionPin");
//             if (transitionPin === withdrawAmount.transitionpin) {
//               withdrawAccount.balance -= withdrawAmount;
//               withdrawAccount.statement.push(withdrawAmount);
//               console.log(
//                 `account holder name ${withdrawAccount.accountHolderName}, withdraw Amount ${withdrawAmount} ,Amount withdraw successfully, current balance is ${withdrawAccount.balance},`
//               );
//             } else {
//               console.log("Invalid transition pin");
//             }
//           } else {
//             console.log(`Your amount is low`);
//           }
//         } else {
//           console.log("Your account limit exceeded.");
//         }
//       }
//     } else {
//       console.log("Invalid account type");
//     }
//   },
//   fundtransfer() {
//     let fundtransferaccount = this.varifyHolder();

//     if (fundtransferaccount) {
//       if (fundtransferaccount.accountType === "saving") {
//         let secondAccountNumber = prompt(
//           "Please enter the account number to which you want to transfer funds."
//         );
//         let secondAccount = this.accounts.find(
//           (fund) => fund.accountNumber === secondAccountNumber
//         );
//         console.log(secondAccount);
//         if (secondAccount) {
//           let transferAmount = Number(prompt("Enter amount to deposit"));
//           if (transferAmount < fundtransferaccount.accountLimit) {
//             if (
//               transferAmount > 0 &&
//               fundtransferaccount.balance > transferAmount
//             ) {
//               let transitionPin = prompt("Enter amount to transition Pin ");
//               if (transitionPin === fundtransferaccount.transitionpin) {
//                 secondAccount.balance += transferAmount;
//                 fundtransferaccount.balance -= transferAmount;
//                 console.log(
//                   `account holder name ${fundtransferaccount.accountHolderName}, withdraw Amount ${transferAmount} ,Amount withdraw successfully, current balance is ${fundtransferaccount.balance},`
//                 );
//               } else {
//                 console.log("Invalid transition pin");
//               }
//             } else {
//               console.log(`Your amount is low`);
//             }
//           } else {
//             console.log("Your account limit exceeded.");
//           }
//         } else {
//           console.log("Invalid account number");
//         }
//       } else if (fundtransferaccount.accountType === "currant") {
//         let secondAccountNumber = prompt(
//           "Please enter the account number to which you want to transfer funds."
//         );
//         let secondAccount = this.accounts.find(
//           (fund) => fund.accountNumber === secondAccountNumber
//         );
//         console.log(secondAccount);
//         if (secondAccount) {
//           let transferAmount = Number(prompt("Enter amount to deposit"));
//           if (transferAmount < fundtransferaccount.accountLimit) {
//             if (
//               transferAmount > 0 &&
//               fundtransferaccount.balance > transferAmount
//             ) {
//               let transitionPin = prompt("Enter amount to transition Pin ");
//               if (transitionPin === fundtransferaccount.transitionpin) {
//                 secondAccount.balance += transferAmount;
//                 fundtransferaccount.balance -= transferAmount;
//                 console.log(
//                   `account holder name ${fundtransferaccount.accountHolderName}, withdraw Amount ${transferAmount} ,Amount withdraw successfully, current balance is ${fundtransferaccount.balance},`
//                 );
//               } else {
//                 console.log("Invalid transition pin");
//               }
//             } else {
//               console.log(`Your amount is low`);
//             }
//           } else {
//             console.log("Your account limit exceeded.");
//           }
//         } else {
//           console.log("Invalid account number");
//         }
//       }
//     } else {
//       console.log("Invalid account type");
//     }
//   },
//   statement(){
//     let account = this.varifyHolder();
//     if(account){
//       console.log(`Account holder name: ${account.accountHolderName}, Statement: ${account.statement}`);
//     }else{
//       console.log("Invalid account");
//     }
//   }
// };

// bankAccountopj.opanAccount({
//   accountNumber: "1234567890",
//   balance: 0,
//   accountHolderName: "sohel khan",
//   pin: "7739",
//   transitionpin: "8177",
//   accountType: "saving",
//   accountLimit: 50000,
//   statement: [],
// });
// bankAccountopj.opanAccount({
//   accountNumber: "9876543210",
//   balance: 0,
//   accountHolderName: "sajid ali",
//   pin: "9377",
//   transitionpin: "3451",
//   accountType: "currant",
//   accountLimit: 500000,
//   statement: [],
// });

// bankAccountopj.depositMoney();
// bankAccountopj.statement();

// bankAccountopj.withdrawMoney();
// bankAccountopj.viewbalance();
// bankAccountopj.fundtransfer();
// bankAccountopj.viewbalance();

// <----------------------------   exciese  -------------------------->

// 5. Create a Weather Tracker object to:

// Add daily weather reports.
// Get the highest temperature for a week.
// Find the average temperature for a month

// const weather = {
//   weatherReport: [],
//   addWeatherReport(weather) {
//     this.weatherReport.push(weather);
//   },
//   heighthestTemperaturweek() {
//     let highestTemperature = -Infinity;
//     this.weatherReport.forEach((weather) => {
//       if (weather.Temperature > highestTemperature) {
//         highestTemperature = weather.Temperature;
//       } else {
//         highestTemperature = highestTemperature;
//       }
//     });
//     return highestTemperature;
//   },
//   averageTemperatureMonth() {
//     let allTemprature = 0;
//     this.weatherReport.forEach((weather) => {
//       allTemprature += weather.Temperature;
//     });
//     console.log(allTemprature);

//     let avaragetempraturemonbth = allTemprature / this.weatherReport.length;
//     return avaragetempraturemonbth.toFixed(2);
//   },
// };

// weather.addWeatherReport({
//   date: "19-11-2024",
//   Temperature: 30,
//   wind_speed: 15,
//   visibility: 10,
//   wind_direction: "north",
// });
// weather.addWeatherReport({
//   date: "18-11-2024",
//   Temperature: 35,
//   wind_speed: 15,
//   visibility: 15,
//   wind_direction: "south",
// });
// weather.addWeatherReport({
//   date: "17-11-2024",
//   Temperature: 37,
//   wind_speed: 12,
//   visibility: 16,
//   wind_direction: "east",
// });
// weather.addWeatherReport({
//   date: "16-11-2024",
//   Temperature: 46,
//   wind_speed: 12,
//   visibility: 15,
//   wind_direction: "north",
// });
// weather.addWeatherReport({
//   date: "15-11-2024",
//   Temperature: 60,
//   wind_speed: 15,
//   visibility: 15,
//   wind_direction: "west",
// });
// weather.addWeatherReport({
//   date: "14-11-2024",
//   Temperature: 45,
//   wind_speed: 15,
//   visibility: 15,
//   wind_direction: "north",
// });
// weather.addWeatherReport({
//   date: "13-11-2024",
//   Temperature: 50,
//   wind_speed: 15,
//   visibility: 15,
//   wind_direction: "north",
// });

// console.log(weather.weatherReport);
// console.log(weather.heighthestTemperaturweek());
// console.log(weather.averageTemperatureMonth());

// <----------------------------   exciese  -------------------------->

// 6. Build a Todo List object to:

// Add tasks.
// Mark tasks as complete.
// Delete tasks.
// Show all pending tasks.

// const tasks = {
//   alltasks: [],
//   completedTasks: [],
//   pandingtasks: [],
//   addTask(task) {
//     this.alltasks.push(task);
//   },
//   allPandingTasks() {
//     let pandingtask = this.alltasks.filter(
//       (pandingtask) =>
//         pandingtask.taskstatus.toLowerCase() === "panding".toLowerCase()
//     );
//     this.pandingtasks.push(...pandingtask);
//     return pandingtask;
//   },
//   allCompletedTask() {
//     let completedTask = this.alltasks.filter(
//       (completedtask) =>
//         completedtask.taskstatus.toLowerCase() === "complete".toLowerCase()
//     );
//     this.completedTasks.push(...completedTask);
//     return completedTask;
//   },

//   deleteTask(index) {
//     let taskIndex = this.alltasks.findIndex(
//       (indextask) => indextask.taskName === index
//     );
//     this.alltasks.splice(taskIndex, 1);
//     this.pandingtasks.splice(taskIndex, 1);
//   },
// };

// tasks.addTask({
//   taskName: "first task",
//   taskstatus: "complete",
// });
// tasks.addTask({
//   taskName: "Second task",
//   taskstatus: "panding",
// });
// tasks.addTask({
//   taskName: "school task",
//   taskstatus: "complete",
// });
// tasks.addTask({
//   taskName: "office task",
//   taskstatus: "panding",
// });
// tasks.addTask({
//   taskName: "home task",
//   taskstatus: "complete",
// });

// console.log(tasks.alltasks);
// tasks.allPandingTasks();
// tasks.allCompletedTask();
// tasks.deleteTask("office task");
// console.log(tasks.pandingtasks);
// console.log(tasks.completedTasks);

// <----------------------------   exciese  -------------------------->

// 7. Design a School Management object to:

// Add students.
// Assign grades.
// Calculate average grades for a class.
// List students above a certain grade threshold.

// const schoolManagement = {
//   students: [],
//   addStudent(student) {
//     return this.students.push(student);
//   },
//   assignGrade(rollNo, Number) {
//     let student = this.students.find((student) => student.rollNo === rollNo);
//     if (student) {
//       student.marks += Number;
//       if (Number >= 95) {
//         student.grade = "A++";
//         console.log(
//           `Grade assigned successfully : ${student.name} , ${student.grade}`
//         );
//       } else if (Number >= 90) {
//         student.grade = "A+";
//         console.log(
//           `Grade assigned successfully : ${student.name} , ${student.grade}`
//         );
//       } else if (Number >= 85) {
//         student.grade = "A";
//         console.log(
//           `Grade assigned successfully : ${student.name} , ${student.grade}`
//         );
//       } else if (Number >= 75) {
//         student.grade = "B";
//         console.log(
//           `Grade assigned successfully : ${student.name} , ${student.grade}`
//         );
//       } else if (Number >= 60) {
//         student.grade = "C";
//         console.log(
//           `Grade assigned successfully : ${student.name} , ${student.grade}`
//         );
//       } else if (Number >= 50) {
//         student.grade = "D";
//         console.log(
//           `Grade assigned successfully : ${student.name} , ${student.grade}`
//         );
//       } else {
//         student.grade = "E";
//         console.log(
//           `Grade assigned successfully : ${student.name} , ${student.grade}`
//         );
//       }
//     } else {
//       console.log("Student not found");
//     }
//   },
//   avarageGrade() {
//     let totalMarks = 0;
//     this.students.forEach((student) => {
//       totalMarks += student.marks;
//     });
//     let avaragemarks = totalMarks / this.students.length;
//     let avarageGrade;
//     if (avaragemarks >= 95) {
//       avarageGrade = "A++";
//     } else if (avaragemarks >= 90) {
//       avarageGrade = "A+";
//     } else if (avaragemarks >= 85) {
//       avarageGrade = "A";
//     } else if (avaragemarks >= 75) {
//       avarageGrade = "B";
//     } else if (avaragemarks >= 60) {
//       avarageGrade = "C";
//     } else if (avaragemarks >= 50) {
//       avarageGrade = "D";
//     } else {
//       avarageGrade = "E";
//     }
//     console.log(avarageGrade);
//     return avarageGrade;
//   },
//   certainGradeThreshold(GradeThreshold) {
//     let gradeThreshold = this.students.filter((grade) => grade.grade < GradeThreshold);
//     for(let i of gradeThreshold){
//       console.log(`students name: ${i.name} , students age: ${i.age}, students grade: ${i.grade}`);
//     }
//   }
// };
// schoolManagement.addStudent({
//   name: "John Doe",
//   age: 15,
//   grade: "",
//   rollNo: "S101",
//   marks: 0,
// });
// schoolManagement.addStudent({
//   name: "Tony Stark",
//   age: 19,
//   grade: "",
//   rollNo: "S102",
//   marks: 0,
// });
// schoolManagement.addStudent({
//   name: "Caption",
//   age: 17,
//   grade: "",
//   rollNo: "S103",
//   marks: 0,
// });
// schoolManagement.addStudent({
//   name: "Natasha",
//   age: 18,
//   grade: "",
//   rollNo: "S104",
//   marks: 0,
// });
// schoolManagement.addStudent({
//   name: "Arbaj",
//   age: 19,
//   grade: "",
//   rollNo: "S105",
//   marks: 0,
// });
// schoolManagement.addStudent({
//   name: "Yasir",
//   age: 17,
//   grade: "",
//   rollNo: "S106",
//   marks: 0,
// });
// schoolManagement.addStudent({
//   name: "Arsh",
//   age: 20,
//   grade: "",
//   rollNo: "S107",
//   marks: 0,
// });
// console.log(schoolManagement.students);
// schoolManagement.assignGrade("S104", 90.5);
// schoolManagement.assignGrade("S103", 57);
// schoolManagement.assignGrade("S102", 68);
// schoolManagement.assignGrade("S101", 79);
// schoolManagement.assignGrade("S105", 93);
// schoolManagement.assignGrade("S106", 98);
// schoolManagement.assignGrade("S107", 82);
// schoolManagement.avarageGrade();
// schoolManagement.certainGradeThreshold("B");

// <----------------------------   exciese  -------------------------->

// 8. Create a Hotel Management object to:

// Check room availability.
// Book a room.
// Cancel a booking.
// Generate a bill for a guest.

// const hotelManagement = {
//   rooms: [],
//   bookedRooms: [],
//   addRoom(room) {
//     this.rooms.push(room);
//   },
//   checkRoomAvailability() {
//     let availableRooms = this.rooms.filter(
//       (room) => room.status.toLowerCase() === "available"
//     );
//     for (let room of availableRooms) {
//       console.log(
//         `Room ${room.roomNumber} is available, room rent is ${room.roomrent}, room type is ${room.roomtype}`
//       );
//     }
//   },
//   bookRoom(room) {
//     let bookedRoom = this.rooms.find(
//       (bookedroom) => bookedroom.roomNumber === room
//     );

//     if (bookedRoom.status.toLowerCase() === "available") {
//       bookedRoom.status = "Booked";
//       this.bookedRooms.push(bookedRoom);
//       this.rooms.splice(this.rooms.indexOf(bookedRoom), 1);
//       console.log(`Room ${room} has been booked.`);
//       this.generateBill(room);
//     } else {
//       console.log(`Room ${room} is not available.`);
//     }
//   },
//   cancelBooking(room) {
//     let cancelRoom = this.bookedRooms.find(
//       (bookedroom) => bookedroom.roomNumber === room
//     );
//     if (cancelRoom) {
//       cancelRoom.status.toLowerCase() = "available";
//       this.rooms.push(cancelRoom);
//       this.bookedRooms.splice(this.bookedRooms.indexOf(cancelRoom), 1);
//       console.log(`Room ${room} has been cancel booking.`);
//     } else {
//       console.log(`Room ${room} is not available for cancel booking.`);
//     }
//   },
//   generateBill(room) {
//     let bookedRoombill = this.bookedRooms.find(
//       (bookedroom) => bookedroom.roomNumber === room
//     );
//     if (bookedRoombill) {
//       let gstbill = (bookedRoombill.roomrent / 100) * 18;
//       let totalBill = bookedRoombill.roomrent + gstbill;
//       console.log(
//         `Bill for room ${room} is ${totalBill} with 18 GST ${gstbill}`
//       );
//     } else {
//       console.log(`Room ${room} is not available.`);
//     }
//   },
// };

// hotelManagement.addRoom({
//   roomNumber: "201",
//   status: "available",
//   roomtype: "AC",
//   roomrent: 300,
// });
// hotelManagement.addRoom({
//   roomNumber: "101",
//   status: "available",
//   roomtype: "NONAC",
//   roomrent: 200,
// });
// hotelManagement.addRoom({
//   roomNumber: "202",
//   status: "Not available",
//   roomtype: "AC",
//   roomrent: 300,
// });
// hotelManagement.addRoom({
//   roomNumber: "102",
//   status: "available",
//   roomtype: "NONAC",
//   roomrent: 200,
// });

// console.log(hotelManagement.rooms);
// hotelManagement.checkRoomAvailability();
// hotelManagement.bookRoom("101");
// // console.log(hotelManagement.rooms);
// hotelManagement.cancelBooking("102");

// <----------------------------   exciese  -------------------------->

// 9. Build a Car Rental System object to:

// Add new cars.
// Rent a car to a customer.
// Return a rented car.
// Check availability of cars.

// const carRentalSystem = {
//   cars: [],
//   rentedCar: [],
//   addCar(car) {
//     this.cars.push(car);
//   },

//   rentcar(Carbrand, Carmodel) {
//     let rentedCar = this.cars.find(
//       (car) => car.brand === Carbrand && car.model === Carmodel
//     );
//     let index = this.cars.findIndex(
//       (car) => car.brand === Carbrand && car.model === Carmodel
//     );
//     if (rentedCar && rentedCar.status === "available") {
//       rentedCar.status = "rented";
//       this.rentedCar.push(rentedCar);
//       this.cars.splice(index, 1);
//       console.log(`Car ${rentedCar.brand} ${rentedCar.model} has been rented.`);
//     } else {
//       console.log("Car not available or already rented.");
//     }
//     return rentedCar;
//   },
//   returnCar(rentedcar) {
//     rentedcar.status = "available";
//     return this.addCar(rentedcar);
//   },
//   CheckAvailability() {
//     return this.cars.filter((car) => car.status === "available");
//   },
// };
// carRentalSystem.addCar({
//   brand: "Mahindra",
//   model: "Thar Rox",
//   year: 2023,
//   color: "Black",
//   status: "available",
// });
// carRentalSystem.addCar({
//   brand: "BMW",
//   model: "BMW i",
//   year: 2023,
//   color: "White",
//   status: "Notavailable",
// });
// carRentalSystem.addCar({
//   brand: "Audi",
//   model: "Audi Q7 facelift",
//   year: 2019,
//   color: "Blue",
//   status: "available",
// });

// console.log(carRentalSystem.cars);
// let rentedcar = carRentalSystem.rentcar("Audi", "Audi Q7 facelift");
// console.log(carRentalSystem.cars);
// carRentalSystem.returnCar(rentedcar);
// console.log(carRentalSystem.cars);
// console.log(carRentalSystem.CheckAvailability());

// <----------------------------   exciese  -------------------------->

// 10. Create a Gym Membership object to:

// Register a new member.
// Track attendance.
// Renew membership.
// View member details.

// const gymsystem = {
//   gymMembers: [],
//   registerMember(member) {
//     this.gymMembers.push(member);
//   },
//   presentAttendance(memberId) {
//     let presentMembers = this.gymMembers.find(
//       (member) => member.membershipid === memberId
//     );
//     if (presentMembers.membership === "Active") {
//       presentMembers.attendance++;
//       console.log(`${presentMembers.name} has attended today.`);
//     } else {
//       console.log(
//         `${presentMembers.name} is not active. Membership is expired.`
//       );
//     }
//     return presentMembers;
//   },
//   TrackAttendance(memberid) {
//     let trackAttendance = this.gymMembers.find(
//       (member) => member.membershipid === memberid
//     );
//     console.log(
//       `${trackAttendance.name} has attended ${trackAttendance.attendance} times.`
//     );
//   },
//   renewMembership(memberid) {
//     let renewMembership = this.gymMembers.find(
//       (member) => member.membershipid === memberid
//     );
//     if (renewMembership.membership === "expired") {
//       renewMembership.membership = "Active";
//       console.log(`${renewMembership.name}'s membership has been renewed.`);
//     } else {
//       console.log(`${renewMembership.name}'s membership is already active.`);
//     }
//     return renewMembership;
//   },
//   viewMember(memberid) {
//     let viewMember = this.gymMembers.find(
//       (member) => member.membershipid === memberid
//     );
//     console.log(
//       `Name :  ${viewMember.name} , age : ${viewMember.age}, membershipType : ${viewMember.membershipType},  membership : ${viewMember.membership}, attendance: ${viewMember.attendance}`
//     );
//   },
// };

// gymsystem.registerMember({
//   name: "John Doe",
//   age: 25,
//   membershipType: "Gold",
//   membership: "Active",
//   attendance: 0,
//   membershipid: "9898",
// });
// gymsystem.registerMember({
//   name: "Smith",
//   age: 29,
//   membershipType: "platinum",
//   membership: "Active",
//   attendance: 0,
//   membershipid: "9085",
// });
// gymsystem.registerMember({
//   name: "Meyer",
//   age: 32,
//   membershipType: "platinum",
//   membership: "expired",
//   attendance: 0,
//   membershipid: "9077",
// });
// console.log(gymsystem.gymMembers);
// gymsystem.presentAttendance("9085");
// gymsystem.presentAttendance("9085");
// gymsystem.presentAttendance("9085");
// gymsystem.renewMembership("9077");
// gymsystem.presentAttendance("9077");
// gymsystem.presentAttendance("9077");
// gymsystem.presentAttendance("9085");
// gymsystem.presentAttendance("9085");
// gymsystem.TrackAttendance("9077");
// gymsystem.TrackAttendance("9085");
// gymsystem.viewMember("9077");

// const dateobj = new Date();
// let presenttime = 1732730891054;
// let mybirthday = 1007749800000;
// let a = presenttime - mybirthday;
//  console.log(a + (32 * 365 * 24 * 60 * 60  * 1000));

// let date1 = new Date(2001, 11, 8);
// let date2 = new Date();
// let diffTime = Math.abs(date2 - date1);
// console.log(diffTime);

// console.log(
//   new Date(
//     725016742805 + (32 * 365 * 24 * 60 * 60 * 1000 - 6 * 24 * 60 * 60 * 1000)
//   )
// );

// let dateutc = new Date();

// console.log(dateutc);


// //Q-1 How do you create a new Date object representing the current date and time?


// let currentDate = new Date();
// console.log(currentDate);

// //Q-2 Write a code snippet to get the current year using the Date object.

// let currentYear = currentDate.getFullYear();
// console.log(currentYear);

// // Q-3 How can you retrieve the day of the week (0-6) from a Date object?

// let dayofWeek = currentDate.getDay();
// switch(dayofWeek){
//   case 1:
//   console.log("Monday");
//   break;
//   case 2:
//   console.log("Tuesday");
//   break;
//   case 3:
//   console.log("Wednesday");
//   break;
//   case 4:
//   console.log("Thursday");
//   break;
//   case 5:
//   console.log("Friday");
//   break;
//   case 6:
//   console.log("Saturday");
//   break;
//   case 7:
//   console.log("Sunday");
//   break;
// }


// //Q-4 What method would you use to set the month of a Date object to August?

// let augustmonthset = new Date(currentDate.setMonth(7));
// console.log(augustmonthset);

// //Q-5 Write a function that returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
// let milisecond = new Date().getTime();
// //Q-6 let milisecond = Date.now();
// console.log(milisecond);


// //Q-7 How can you calculate the difference in days between two Date objects?

// let date1 = new Date("2024-11-30");

// let date2 = new Date("2024-12-8");

// let diffTime = Math.abs(date2.getTime() - date1.getTime());

// let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

// console.log(diffDays);


// //Q-8 What is the difference between getUTCDate() and getDate()?
// const date = new Date('2024-11-30T23:30:00Z');  

// console.log(date.getUTCDate());  
// console.log(date.getDate());     


// //Q-9 How do you format a Date object into a string using toISOString()?
// let formatedDate = new Date().toISOString();
// console.log(formatedDate);


// //Q-10 Write a code snippet to get the last day of the current month.

// let lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() , 0).getDate();
// console.log(lastDayOfMonth);


// //Q-11 How can you parse a date string (e.g., "2024-11-30") into a Date object?

// let dateString = "2024-11-30";

// let parsedDate = new Date(dateString);

// console.log(parsedDate);

// //Q-12 What is the result of Math.round(4.5)? How does it differ from Math.floor(4.5)?

// console.log(Math.round(4.5)); 

// console.log(Math.floor(4.5));

// //Q-13 Write a code snippet to generate a random number between 1 and 10 using the Math object.
// let randonNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randonNumber);


// //Q-14 How can you find the largest number in an array using Math.max()?

// let numbers = [1,3,24,36,45,12,99,1200,345]
// let largestNumber = Math.max(...numbers)
// console.log(largestNumber);


// //Q-15 What is the purpose of the Math.pow() method? Write an example.

// let numberpow = Math.pow(2,4)
// console.log(numberpow);

// //Q-16 What is the difference between Math.ceil() and Math.floor()?
// let mathCill = Math.ceil(9.5);
// let mathFloor = Math.floor(9.5);
// console.log(mathCill , mathFloor);


// //Q-17 How do you convert a string like "123.45" to a number in JavaScript?

// let stringNumber = Number("123.45");
// console.log(stringNumber);

// //Q-18 What is Number.isNaN()? How is it different from the global isNaN() function?

// console.log(Number.isNaN(NaN));

// //Q-19 Write a code snippet to truncate a number to 2 decimal places.

// let truncatedNumber = Math.round(123.456789 * 100) / 100;
// console.log(truncatedNumber);

// //Q-20 How can you check if a number is an integer using the Number class?

// let numberInt = Number.isInteger(1);

// console.log(numberInt);

// //Q-21 Write a function to calculate the square root of a number using the Math object.

// function squareRoot(number) {
//   return Math.sqrt(number);
// }

// console.log(squareRoot(9));








// Print the current date in YYYY-MM-DD format.


let currentDate = new Date();

let currentyear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1;
let currentdaydate = currentDate.getDate();

console.log(currentDate.toLocaleDateString())

console.log(`${currentyear}-${currentMonth}-${currentdaydate}`);


// Print the current date in DD/MM/YYYY format.

console.log(`${currentdaydate}/${currentMonth}/${currentyear}`)

// Get the current year and print it.
console.log(currentyear);



// Get the current month and print it as a string (e.g., "January", "February").

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[currentMonth]);

switch(currentMonth + 1){
    case 1:
    console.log("January");
    break;
    case 2:
    console.log("February");
    break;
    case 3:
    console.log("March");
    break;
    case 4:
    console.log("April");
    break;
    case 5:
    console.log("May");
    break;
    case 6:
    console.log("June");
    break;
    case 7:
    console.log("July");
    break;
    case 8:
    console.log("August");
    break;
    case 9:
    console.log("September");
    break;
    case 10:
    console.log("October");
    break;
    case 11:
    console.log("November");
    break;
    case 12:
    console.log("December");
    break;
  }

// Add 5 years to the current date and print the new date.

let fiveYearsLater = new Date(currentDate.getFullYear() + 5, currentDate.getMonth(), currentDate.getDate());
console.log(fiveYearsLater);

// Find the difference between two dates and print the number of days between them.

let date1 = new Date("2001-12-08");
let date2 = new Date();

let diffTime = date2.getTime() - date1.getTime();
let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log(diffDays);


// Calculate the age of a person based on their birthdate (input date) and print the age in years.
let age = "12/08/2020"
let birthDate = new Date(age);
console.log(birthDate);
let today = new Date();
let ageDiffMs = today.getTime() - birthDate.getTime();
let ageDate = Math.ceil(ageDiffMs / (1000 * 60 * 60 * 24 * 365));
console.log(ageDate);





// Get the day of the week for the current date (e.g., "Monday", "Tuesday").

let dayofWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]

console.log(dayofWeek[currentDate.getDay() - 1]);


switch(currentDate.getDay()){
    case 1:
    console.log("Monday");
    break;
    case 2:
    console.log("Tuesday");
    break;
    case 3:
    console.log("Wednesday");
    break;
    case 4:
    console.log("Thursday");
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");
    break;
    case 7:
    console.log("Sunday");
    break;
  }

// Check if a given year is a leap year or not.


// Print the time in HH:MM:SS format for the current time.



let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let hoursLocal = currentDate.toLocaleTimeString();


console.log(`${hours}:${minutes}:${seconds}`);
console.log(hoursLocal);
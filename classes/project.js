class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckout(value) {
      if (typeof value === 'boolean') {
        this._isCheckout = value;
      } else {
        console.log("Invalid value type. Must be boolean");
      }
    }
  
    toggleCheckOutStatus() {
      if (this._isCheckedOut === false) {
        this._isCheckedOut = true;
      } else {
        this._isCheckedOut = false;
      } 
    }
  
    getAverageRating() {
      if (this._ratings.length == 0 ) {
        return "There are no ratings for this movie";
      } else {
        let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
  
      return ratingsSum / this._ratings.length;
      }
    }
  
    addRating(value) {
      if (typeof value === 'number') {
        this._ratings.push(value);
      } else {
        console.log("Enter a valid data type <number>");
      }
    }
  
  }
  
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }  
  }
  
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runtime = runTime;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  for (let i = 4; i <= 6; i++) {
    historyOfEverything.addRating(i);
  }
  console.log(historyOfEverything.getAverageRating());
  
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  
  console.log(speed.getAverageRating());
  
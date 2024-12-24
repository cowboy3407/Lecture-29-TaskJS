class LibraryItem {
constructor(title,author,publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
}

getDetails() {
    console.log(`სათაური: ${this.title}, ავტორი: ${this.author}, გამოშვების წელი ${this.publishedYear}`);
}

}

class Book extends LibraryItem {
    constructor(title, author, publishedYear, genre) {
        super(title, author, publishedYear);
        this.genre = genre;
    }

supergetDetails() {
    console.log(`სათაური: ${this.title}, ავტორი: ${this.author}, გამოშვების წელი ${this.publishedYear}, ჟანრი: ${this.genre}`);
}

}

class Magazine extends LibraryItem {
    constructor(title, author, publishedYear, issueNumber) {
        super(title, author, publishedYear)
        
        this.issueNumber = issueNumber;
    }
    
    getDetails() {
        console.log(`სათაური: ${this.title}, ავტორი: ${this.author}, გამოშვების წელი ${this.publishedYear} წელი, ხარვეზების რაოდენობა: ${this.issueNumber}`);
    }

}


const book1 = new LibraryItem('„დიდოსტატის კონსტანტინეს მარჯვენა“','კონსტანტინე გამსახურდია',1939,);
book1.getDetails();

const book = new Book('„დიდოსტატის კონსტანტინეს მარჯვენა“','კონსტანტინე გამსახურდია',1939,'	ისტორიული რომანი, ექსპრესიონიზმი, მოდერნიზმი');
book.supergetDetails();

const book2 = new Magazine('„დიდოსტატის კონსტანტინეს მარჯვენა“','კონსტანტინე გამსახურდია',1939, 15);
book2.getDetails();
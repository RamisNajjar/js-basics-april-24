function vacationBooksList(input) {
    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let dayPerBook = Number(input[2]);

    let hourCount = numberOfPages / pagesPerHour / dayPerBook;
    


    console.log(hourCount);

}

vacationBooksList(["212", "20", "2"]);

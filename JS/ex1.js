function printStars(howMany){
    console.log(" ".repeat(5-howMany),'*'.repeat(howMany));
}

[1, 2, 3, 4, 5].forEach(function (num) {
    printStars(num);
});
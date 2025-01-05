// // problem no 1
// let teaTypes = ["herbel tea","white tea","masala chai"]

// teaTypes[1] = "jasmine tea"
// // console.log(teaTypes);

// // problem no 2

// let topCities = ["Berlin", "Singapore", "New York"];
// let hardCopyCities = [...topCities];

// topCities.pop();
// // console.log(topCities);
// // console.log(hardCopyCities);

// // Problem 3

// let popularTeas = ["oolong tea","green tea"]
// let softCopyTeas = popularTeas;
// popularTeas.pop();
// // console.log(popularTeas);
// // console.log(softCopyTeas);

// // Problem 4
// let europeanCities = ["Paris", "Rome"];
// let asianCities = ["Tokyo", "Bangkok"];
// let worldCities = europeanCities.concat(asianCities);
// // console.log(worldCities);

// // Problem 5

// let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
// let isLondonInList = cityBucketList.includes("London");


// Loops starts from here

// problem 1


let sum = 0;
let i = 1

while (i <=5) {
    sum = sum + i;
    i++;
}
//  console.log(sum);


// problem 2

let countdown = [];
let value = 5;

while (value > 0) {
    countdown.push(value);
    value--;
}

// console.log(countdown);

let teaCollection =[];
let tea
do {
    tea = prompt(`Enter your favourite tea (type "stop" to finish)`);

    if (tea !== "stop") {
        teaCollection.push(tea);
    }
} while (tea !== "stop");
// console.log(teaCollection);



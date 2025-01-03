// problem no 1
let teaTypes = ["herbel tea","white tea","masala chai"]

teaTypes[1] = "jasmine tea"
// console.log(teaTypes);

// problem no 2

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];

topCities.pop();
// console.log(topCities);
// console.log(hardCopyCities);

// Problem 3

let popularTeas = ["oolong tea","green tea"]
let softCopyTeas = popularTeas;
popularTeas.pop();
// console.log(popularTeas);
// console.log(softCopyTeas);

// Problem 4
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
// console.log(worldCities);

// Problem 5

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");

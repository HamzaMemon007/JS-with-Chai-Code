// problem no 1
let teaTypes = ["herbel tea","white tea","masala chai"]

teaTypes[1] = "jasmine tea"
// console.log(teaTypes);

// problem no 2

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];

topCities.pop();
console.log(topCities);
console.log(hardCopyCities);


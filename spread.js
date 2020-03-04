const ages1 = [33,4,2,4,2,2,];
const ages2 = [24,25,2,2,5,];
const ages3 = [3,4334,324,234,3];

const allAges = [...ages1,...ages2,...ages3];
//console.log(allAges);
const arraymax = Math.max(...ages3);
console.log(arraymax);
function a(text) {
    return  text.toLowerCase().replace(/[^a-z]/g, '').split('')
        .map( c => c.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
        .join(' ');
}
console.log(a('saAGGGGb'))

// function alphabetPosition(text) {
//   const letters = 'abcdefghijklmnopqrstuvwxyz';
//   return text.toLowerCase()
//   .split('')
//   .map(ele => letters.includes(ele)? letters.indexOf(ele) + 1: null)
//   .join(' ');
  
// }
// alphabetPosition("sabfrin")

const array1 = [1,2,2,3,3,3,4,3,3,3,2,2,1];
let myObject = []
function returnOddNumber(array) {
    array.forEach(element => {
        console.log(array.filter(ele => ele == element))
        myObject.push({id: element, repitition: array.filter(ele => ele == element).length})
    });

    const myelemtn = myObject.filter(ele => ele.repitition % 2 == 1)
    console.log(myelemtn)
    return myelemtn[0].id
}

console.log(returnOddNumber(array1))
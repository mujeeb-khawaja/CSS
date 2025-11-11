let arr = [1,2,3,4,5];
let new_arr = arr.map(e => {
  return e * 2;
})

const greaterThanTwo = (e) => {
  if(e>2) {
    return true;
  }
  return false;
}

console.log(arr.filter(greaterThanTwo));
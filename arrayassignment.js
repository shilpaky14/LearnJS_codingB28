//slice()-selects the part of an array and returns the new array
states=["karnataka","Andhrapradesh","Mumbai","Tamilnadu","Kerala"]
arrsli=states.slice(2)//returns new array from the index2
console.log(arrsli)

/*arrsli=states.slice(2,3) //selects from given start upto a given end
console.log(arrsli)*/

//splice()
//syntax-array.splice(index, count, item1, ....., itemX)

//index-required-The index/position to add or remove items.
//count- Optional.Number of items to be removed.
//item1/itemx-Optional.The new elements(s) to be added

sports=["cricket","basketball","badmiton","chess"]
sports.splice(2,1,"football","tennis")
console.log(sports)


//map()-creates a new array from calling a function for every array element.
num = [5, 4, 1, 9];
newArr = num.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(num)

//filter()-creates a new array filled with elements that pass a test provided by a function
const ages = [32, 33, 16, 40,10];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age <= 18;
}
console.log(result)


//reduce()-reducing the array to a single result


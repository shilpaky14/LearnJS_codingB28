// length-prints length of the array
arr=["shilpa","manju","yugankh","Deekshith"]
console.log(arr.length)

// Push-adds elements at the end of the array
arr=["shilpa","manju","yugankh","Deekshith"]
arrp=arr.push("Monal")
console.log(arr)
// Pop-removes the last element from the array
arr=["shilpa","manju","yugankh","Deekshith"]
arr.pop()
console.log(arr)
// Concat
a1=['1','2','3','4']
a2=["shilpa","manju","yugankh","Deekshith"]
a3=a1.concat(a2)
console.log(a3)
// shift-removes the first element from the array
s1=["shilpa","manju","yugankh","Deekshith"]
s1.shift()
console.log(s1)

// unshift
s1=["shilpa","manju","yugankh","Deekshith"]
s1.unshift("yashoda")
console.log(s1)
// join
// split
//sort



arrd=["shilpa","manju","yugankh","Deekshith"]
for(let i=0; i<arrd.length-1; i++){
    console.log("loopstart")
arrd.pop()
console.log("loopends")
}
console.log(arrd)

//convert string to array
str="javascript class"
arrsp=str.split("")
console.log(arrsp)

str="my place is bangalore"
arrsp1=str.split(" ")
console.log(arrsp1)
//join()-covert arry to string
arrj=[ 'my', 'place', 'is', 'bangalore' ]
stras=arrj.join(" ")
console.log(stras)

//another way of declaring array
arr=[2,4,5,6]
arr= new Array(2,4,5,7)
//replace particular element in an array
arrR=[ 'my', 'place', 'is', 'bangalore' ]
arrR[3]="Tumkur"
console.log(arrR)
//indexOf
arri=[ 'my', 'place', 'is', 'bangalore' ]
console.log(arri.indexOf("bangalore"))

//foreach
arri=[ 'my', 'place', 'is', 'bangalore' ]
arri.forEach(elements =>{
    console.log("loopstart")
   
     console.log(elements)
     console.log("loopends")

})

//includes
arrinc=[ 'my', 'place', 'is', 'bangalore' ]


if(arrinc.includes("place")){
    console.log("Element is present")

}

//sort
arrsor=[4,6,3,2,1]
arrsort=arrsor.sort()
console.log(arrsort)


//slice()-selects the part of an array and returns the new array
place=[ 'my', 'place', 'is', 'bangalore' ]
arrsl=place.slice(2)
console.log(arrsl)
//splice()-removes or replaces existing elements and/or adds new elements
// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 2 items
fruits.splice(1, 2);
console.log(fruits)

// Create an Array
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 1 item, add "Lemon" and "Kiwi"
fruits1.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits1)

//map()
//filter()
//reduce()


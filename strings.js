//three ways to declare strings
str="shilpa"
str='Manju'
st='yugu'

//coersion
num=2+"2"
console.log(num)

//NaN
num4=6+undefined
console.log(num4)


//length
str="shilpa is staying in blr"
console.log(str)

//charat
a = "javascript";
console.log(a.charAt(1))

//string to number

//includes
str="this is javascript class"
console.log(str.includes("java"))


//strings are immutable
arr=[3,4,5,6,7,8]
arr[3]=9
console.log(arr)


//replace
str1="$123"
str2="$456"
total=Number(str1.replace($,""))+Number(str2.replace($,""))
console.log(total)


//object
str="shilpa" //preferred way of declaring string
str=new string("shilpa")//this should be avoided as it consumes more memory

//multiline string
str="shilpa\nmanju"
console.log(str)

//concat
str1="shilpa"
str2="manju"
//str3=str1+str2
str3=str1.concat(str2)

//search


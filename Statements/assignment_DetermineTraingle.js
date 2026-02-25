let s1 = 20;
let s2 = 23;
let s3 = 24;

if (s1 === s2 && s2 === s3){
    console.log("This is an equilateral triangle")
}else if (s1 === s2 || s2 === s3 || s1 === s3){
    console.log("This is an isosceles triangle")
}else{
    console.log("This is a scalene triangle")
}

//problem3

//for printing a triangle using stars

//empty String
var myString = ''";

//for printing a stars piramid
//loop
for ( var i = 0; i < 10; i++ )
{

//loop inside a loop
  for ( var j = 0; j <  i + 1; j++ )
  {
    myString += " * ";
  }
 //new line
  myString += "\n";
}
//printing the output
console.log(myString);

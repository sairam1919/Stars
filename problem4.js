
//problem4

//Problem for printing stars pyramid in reverase

//empty String
var myString2='";

//to print the stars
for (var i = 10; i >= 1; i--)
{
//loop inside a loop
  for (var j = 0; j < i + 1; j++)
  {
    myString2+='*';
  }
//new line
  myString2+='\n';
}
//printing the output
console.log(myString2);



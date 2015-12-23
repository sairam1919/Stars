
//problem3
var myString='';//empty String
for (var i = 0; i < 10; i++)//loop
{
  for (var j = 0; j < i + 1; j++)//loop inside a loop
  {
    myString+='*';
  }
  myString+='\n';//new line
}
console.log(myString);

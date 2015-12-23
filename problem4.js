
//problem4
var myString2='';//empty String
for (var i = 10; i >= 1; i--)//for loop
{
  for (var j = 0; j < i + 1; j++)//loop inside a loop
  {
    myString2+='*';
  }
  myString2+='\n';//new line
}
console.log(myString2);

var n = 13;

  for(var i=0; i<n ;i++)
  {
  for(var j=0;j<n ;j++)
  {
  if(i==0)
  {
   console.log("*");
   }
   }
   }

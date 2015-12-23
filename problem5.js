var s=5;
var n=20;
var char2="";
var char="";



  for(var i=s;i>0;i--)//Outer for loop for height of the triangle
  {     
      char="";
      for(var j=0;j<i;j++)//Nested inner traingle for the stars
      {
          char=char+"*";
      }
      char2=char;
    for(var k=(s-i);k<(2*(s-i));k++)//Nested with the first loop for spaces in between
    {
        char2=char2+"  ";
    }

      char2=char2+char;
      //For printing the characters on every iterations.
      console.log(char2);
  }

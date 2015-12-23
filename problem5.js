
//problem5
//problem for printing stars with spaces 

//initializing variables
var s = 5;
var n = 20;
//Empty Strings
var char2 = "";
var char = "";

//Outer for loop for height of the triangle
  for( var i = s; i > 0; i--)
  {     
      char="";
	//Nested inner traingle for the stars
      for( var j = 0; j < i; j++ )
      {
          char = char + " * ";
      }
      char2 = char;
//Nested with the first loop for spaces in between
    for( var k = (s-i); k < (2*(s-i)); k++) 
    {
        char2=char2+"  ";
    }

      char2=char2+char;

      //For printing the characters on every iterations.
      console.log(char2);
  }

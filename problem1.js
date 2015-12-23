
//Problem1

//Printing  The  m Stars In n lines

//intializing variable

var n = 5;
var m=6;
//empty String

var str = "";

//printing the m stars in n lines 

for ( var i = 0; i < n; i++ ) {

//loop for printing m values

for ( var j = 0; j <  m; j++ ) {
	str = str + " * ";	
}

    str = str + "*****";

//taking a new line
    str += "\n";

}
  console.log(str);


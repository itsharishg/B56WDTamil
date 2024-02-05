// XML-HTTP Methods:
// Purpose:it is used to interact with the servers via API
// Totally there are 5 steps 

// Step 01 - Create a XML-HTTP Object
var request= new XMLHttpRequest();
// Step 02 - Initialze or Open a Request
request.open("GET","https://restcountries.com/v3.1/all")
//Step 03:Kickstart a request
request.send();
//step04:
//Once the data successfully received from the server
// server status code is 200
// data coming from the server is of type string
// we are converting string to object
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
//print all 250 country common names in console
for(var i =0;i<res.length;i++){
    console.log(res[i].name.common)
}
// Print the capital name, as well as area for countries 
for(var i =0;i<res.length;i++){
    if(res[i].capital){
        console.log(res[i].capital[0]+" "+res[i].area);
    }
    else{
        console.log("Invalid capital"+res[i].area);
    }
}
}

var myfunction = function(data){
    console.log(data)
      var element = document.getElementById("click");
      element.innerHTML = data.main.temp;
} 


function meteo(){
    var elementcity = document.getElementById("city").value;
    var api = "http://api.openweathermap.org/data/2.5/weather?q="+elementcity+"&appid=4e55f3841a63fe22d8283ab72167bbd9";
    //var api = "api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=4e55f3841a63fe22d8283ab72167bbd9";

    $.get(api , myfunction).done( function(){
        // alert("its on")
    })
    .fail(function(){
        alert("error")
    })
    .always(function(){
        //alert("finished")
    })


}
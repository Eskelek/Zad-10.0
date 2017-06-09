$(document).ready(function(){ 
    console.log('DOM loaded - you can have fun'); 
});

var span = $("span");
    $("span:even").css('color', 'red');

var buttonData = $("p");
buttonData.each(function(index, element) {
    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
    $(element).append(button) 
});
$("button").click(function(){ 
    alert($(this).attr("data-tmp")); 
});
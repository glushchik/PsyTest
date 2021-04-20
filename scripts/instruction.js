const el = document.getElementById("instruction");
const el2 = document.getElementById("processing");
var smth  = "#instructionButton";
var smth2 = "#processingButton";
$(smth).on('click', function(){
	el.classList.toggle("active");
});
$('#infoClose').on('click', function(){
  	el.classList.remove("active");
});
$(smth2).on('click', function(){
	el2.classList.toggle("active");
});
$('#processClose').on('click', function(){
  	el2.classList.remove("active");
});

let number=document.getElementById('number');
let unit_from=document.getElementById('unit_from');
let unit_to=document.getElementById('unit_to');
let btn_res=document.getElementById('btn_res');
let unit_length=document.getElementById('unit_length');



unit_from.addEventListener('change', Conversion);
unit_to.addEventListener('change', Conversion);



function Conversion(){
let f=document.getElementById('unit_from').value;
let t=document.getElementById('unit_to').value;
let number_value=document.getElementById('number').value;

if (f=="Millimeter" &&  t=="Millimeter"){
	res=+number_value*1 + ' mm';
	
}

if (f=="Millimeter" && t=="Centimeter"){
	res=+number_value*0.1 + ' sm';
	
}


if (f=="Millimeter" && t=="Decimetre"){
	res=+number_value*0.01 + ' dm';
	
}


if (f=="Millimeter" && t=="Meter"){
	res=+number_value*0.001 + ' m';

}

if (f=="Millimeter" && t=="Kilometer"){
	res=+number_value*0.000001 + ' km';

}


if (f=="Centimeter" && t=="Millimeter"){
	res=+number_value*10 + ' mm';

}


if (f=="Centimeter" && t=="Centimeter"){
	res=+number_value+ ' cm';

}


if (f=="Centimeter" && t=="Decimetre"){
	res=+number_value*0.1+' dm';

}


if (f=="Centimeter" && t=="Meter"){
	res=+number_value*0.01+' m';

}

if (f=="Centimeter" && t=="Kilometer"){
	res=+number_value*0.001+' km';

}


btn_res.addEventListener('click', showResult);
function showResult(){
	unit_length.innerHTML=res;
}

}



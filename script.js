
let number=document.getElementById('number');
let unit_from=document.getElementById('unit_from');
let unit_to=document.getElementById('unit_to');
let btn_res=document.getElementById('btn_res');
let unit_length=document.getElementById('unit_length');



unit_from.addEventListener('change', Conversion);
unit_to.addEventListener('change', Conversion);
number.addEventListener('input',Conversion);




function Conversion(){
let f=document.getElementById('unit_from').value;
let t=document.getElementById('unit_to').value;
let number_value=document.getElementById('number').value;


if (f==="Millimeter" &&  t==="Millimeter"){
	res=+number_value + ' mm';
	res_new=number_value + ' mm' + ' = ' + res;
}
else if (f==="Millimeter" && t==="Centimeter"){
	res=+number_value*0.1 + ' sm';
	res_new=number_value + ' mm' + ' = ' + res;	
}
else if (f==="Millimeter" && t==="Decimetre"){
	res=+number_value*0.01 + ' dm';
	res_new=number_value + ' mm' + ' = ' + res;
}
else if (f==="Millimeter" && t==="Meter"){
	res=+number_value*0.001 + ' m';
	res_new=number_value + ' mm' + ' = ' + res;
}
else if (f==="Millimeter" && t==="Kilometer"){
	res=+number_value*0.000001 + ' km';
	res_new=number_value + ' mm' + ' = ' + res;
}


if (f==="Centimeter" && t==="Millimeter"){
	res=+number_value*10 + ' mm';
	res_new=number_value + ' sm' + ' = ' + res;
}
else if (f==="Centimeter" && t==="Centimeter"){
	res=+number_value+ ' cm';
	res_new=number_value + ' sm' + ' = ' + res;
}
else if (f==="Centimeter" && t==="Decimetre"){
	res=+number_value*0.1+' dm';
	res_new=number_value + ' sm' + ' = ' + res;
}
else if (f==="Centimeter" && t==="Meter"){
	res=+number_value*0.01+' m';
	res_new=number_value + ' sm' + ' = ' + res;
}
else if (f==="Centimeter" && t==="Kilometer"){
	res=+number_value*0.00001+' km';
	res_new=number_value + ' sm' + ' = ' + res;
}



if (f==="Decimetre" && t==="Millimeter"){
	res=+number_value*100 + ' mm';
	res_new=number_value + ' dm' + ' = ' + res;
}
else if (f==="Decimetre" && t==="Centimeter"){
	res=+number_value*10+ ' cm';
	res_new=number_value + ' dm' + ' = ' + res;
}
else if (f==="Decimetre" && t==="Decimetre"){
	res=+number_value+' dm';
	res_new=number_value + ' dm' + ' = ' + res;
}
else if (f==="Decimetre" && t==="Meter"){
	res=+number_value*0.1+' m';
	res_new=number_value + ' dm' + ' = ' + res;
}
else if (f==="Decimetre" && t==="Kilometer"){
	res=+number_value*0.0001+' km';
	res_new=number_value + ' dm' + ' = ' + res;
}


if (f==="Meter" && t==="Millimeter"){
	res=+number_value*1000 + ' mm';
	res_new=number_value + ' m' + ' = ' + res;
}
else if (f==="Meter" && t==="Centimeter"){
	res=+number_value*100+ ' cm';
	res_new=number_value + ' m' + ' = ' + res;
}
else if (f==="Meter" && t==="Decimetre"){
	res=+number_value*10+' dm';
	res_new=number_value + ' m' + ' = ' + res;
}
else if (f==="Meter" && t==="Meter"){
	res=+number_value+' m';
	res_new=number_value + ' m' + ' = ' + res;
}
else if (f==="Meter" && t==="Kilometer"){
	res=+number_value*0.001+' km';
	res_new=number_value + ' m' + ' = ' + res;
}


if (f==="Kilometer" && t==="Millimeter"){
	res=+number_value*1000000 + ' mm';
	res_new=number_value + ' km' + ' = ' + res;
}
else if (f==="Kilometer" && t==="Centimeter"){
	res=+number_value*100000+ ' cm';
	res_new=number_value + ' km' + ' = ' + res;
}
else if (f==="Kilometer" && t==="Decimetre"){
	res=+number_value*10000+' dm';
	res_new=number_value + ' km' + ' = ' + res;
}
else if (f==="Kilometer" && t==="Meter"){
	res=+number_value*1000+' m';
	res_new=number_value + ' km' + ' = ' + res;
}
else if (f==="Kilometer" && t==="Kilometer"){
	res=+number_value+' km';
	res_new=number_value + ' km' + ' = ' + res;
}

	unit_length.innerHTML=res_new;

}


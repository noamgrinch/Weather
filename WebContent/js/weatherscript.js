
var table;
var notFound;

window.onload = function pre(){
	try{
		notFound = document.createElement("h1");
		notFound.setAttribute("class","Title");
		notFound.setAttribute("value","Oops! could not find location, please try again.");
		
		var col = ["City" , "Country", "Tempature", "Description","Illustration"]
        table = document.createElement("table");
        table.setAttribute("class", "myTable");
        
        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }
        table.setAttribute("id", "myTable");
	}
	catch(e){
		console.log(e);
	}
}


function getText(){
	try{
		var p = document.getElementById("showData");
		$(".search").animate({height : "140px"},600); //animates the div.
		var p = document.getElementById("showData");
		setTimeout(function(){ //shows up data after the slide.
			try{
			while (p.firstChild) { //removing components from previous searches.
			    p.removeChild(p.firstChild);
			}
			table.deleteRow(1);}
			catch(e){console.log("Empty table.")}
	    },600);

	}
	catch(e){
		console.log(e);
	}
	try{
			var input = document.getElementById("myInput").value;
			$.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=" + input + "&APPID=93063b4a7b640155f9e086514f637714", function(data) { 
			console.log(data);
			var im = "https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
			var temp = data.list[0].main.temp;
			var v = document.createElement("img");
			v.setAttribute("class","icon");
			v.setAttribute("src",im);
			var desc = data.list[0].weather[0].description;
			var city = data.city.name;
			var country = data.city.country;
			while (p.firstChild) { //removing components from previous searches.
			    p.removeChild(p.firstChild);
			}
			       
            setTimeout(function(){ /*table initilization*/
    			tr = table.insertRow(-1);   			
    			var values = [city,country,Math.floor(temp-273.15) + " C",desc,v]; // temperature  is in Kelvin units.	
                for (var j = 0; j < values.length; j++) {
                    var tabCell = document.createElement("td");
                    tr.appendChild(tabCell);
                    if(j!=4){
                    	tabCell.innerHTML = values[j];
                    }
                    else{
                    	tabCell.append(values[j]);
                    }
                }
            	p.appendChild(table);
            },600);
            
		    $(".search").animate({height : "250px"},1000); //animates the div.
		    setTimeout(function(){ //shows up data after the slide.
		    	$(".myTable").append(table);
		    }, 2200);		
		}); 
		}
		catch(e){
			
			p.appendChild(notFound);
			
		    $(".search").animate({height : "250px"},1000); //animates the div.
		    setTimeout(function(){ //shows up data after the slide.
		    	$(".showData").append(notFound);
		    }, 2200);
			console.log(e);
		}	
}
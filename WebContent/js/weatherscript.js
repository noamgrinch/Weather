
var table;

window.onload = function pre(){
	try{
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
		$(".search").animate({height : "140px"},600); //animates the div.
		var p = document.getElementById("showData");
		setTimeout(function(){ //shows up data after the slide.
			while (p.firstChild) { //removing components from previous searches.
			    p.removeChild(p.firstChild);
			}
			table.deleteRow(1);
	    },599);

	}
	catch(e){
		console.log(e);
	}
	try{
		   /*setTimeout(function(){
		    	
		    },800);*/
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
			var p = document.getElementById("showData");
			while (p.firstChild) { //removing components from previous searches.
			    p.removeChild(p.firstChild);
			}
			
            
            setTimeout(function(){ /*table initilization*/
    			tr = table.insertRow(-1);   			
    			var values = [city,country,temp,desc,v];	
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
			alert(e);
		}

}


var table = document.querySelector("table");
var data = Object.keys(standards[0]);
tableFunction(table, standards);

function tableFunction(table, data) {
  for (var element of data)
    // data =  "identifier", "statement", "description", "subconcept", "practices"
    {
      var row = table.insertRow();
      for (key in element)
      {
        if (key === 'statement' && key !== 'description')
        {
          var cell = row.insertCell();
          var statement = document.createTextNode(element['statement'])
          var description = document.createTextNode(element['description'])
         
          cell.appendChild(statement);
           var br = document.createElement('br');
          cell.appendChild(br);
          var br = document.createElement('br');
          
          cell.appendChild(br);
          cell.appendChild(description);
          //TODO: Find out how to add class and add style in css
          //TODO for Responsive: Find out how to add element name(ex.td)
        }
        else if (key !== 'description'){
          var cell = row.insertCell();
   
          var text = document.createTextNode(element[key]);
          cell.appendChild(text);
        }
      } 
    }
}


function displayStandard(data){
  var current = data.properties.periods[0];
  var display = document.getElementById("table");
  display.textContent = "";
}

function useXHR(){
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', ()=>{
      displayStandard(JSON.parse(xhr.responseText));
  });
  xhr.onreadystatechange = function(event){
    if(xhr.readyState === 4 && request.status === 200) {
      displayStandard(JSON.parse(request.responseText));
    }
  }
  const url = "standards.json";
  xhr.open("GET", url);
  xhr.send();
}

window.addEventListener('load', function(){
  useXHR();
  const oneHour = 60 * 60 * 1000;
  setInterval(useXHR, oneHour);
});

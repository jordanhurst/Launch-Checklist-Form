// Write your JavaScript code here!
window.addEventListener("load", function(){
   let submitButton = document.getElementById('formSubmit');
   let dataEntryForm = document.getElementById('dataEntryForm');
   let pilotName = document.getElementById('pilotName');
   let copilotName = document.getElementById('copilotName');
   let fuelLevel = document.getElementById('fuelLevel');
   let cargoMass = document.getElementById('cargoMass');
   // window.alert('helloworld');
   
   dataEntryForm.addEventListener('submit', function(event){
      let alertNeeded = false;
      let missingFields = '';
      let notNumbers = '';
      // window.alert('test');
      // event.preventDefault();
      if(!pilotName.value){
         alertNeeded = true;
         missingFields += `Pilot's Name\n`;  
         console.log(pilotName.value); 
      };
      if(!copilotName.value){
         alertNeeded = true;
         missingFields += `Copilot's Name\n`;
      };
      if(!fuelLevel.value){
         alertNeeded = true;
         missingFields += `Fuel Level\n`;
      };
      if(isNaN(Number(fuelLevel.value))){
         alertNeeded = true;
         notNumbers += `Fuel Level must be a number.\n`
      };
      if(!cargoMass.value){
         alertNeeded = true;
         missingFields += `Cargo Mass`;
      };
      if(isNaN(Number(cargoMass.value))){
         alertNeeded = true;
         notNumbers += `Cargo Mass must be a number.`
      };
      if(alertNeeded){
         window.alert(`Sorry, but the following fields are required:
         ${missingFields}
         ${notNumbers}`);
         event.preventDefault();
      };
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

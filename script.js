// Write your JavaScript code here!
window.addEventListener("load", function(){

   let submitButton = document.getElementById('formSubmit');
   let dataEntryForm = document.getElementById('dataEntryForm');
   let pilotName = document.getElementById('pilotName');
   let copilotName = document.getElementById('copilotName');
   let fuelLevel = document.getElementById('fuelLevel');
   let cargoMass = document.getElementById('cargoMass');
   // window.alert('helloworld');

   function faultyItemsNotReady(){
      document.getElementById('pilotStatus').innerHTML = `Pilot: ${pilotName.value}`;
      document.getElementById('copilotStatus').innerHTML = `Copilot: ${copilotName.value}`;
      if(Number(fuelLevel.value)<10000){
         document.getElementById('fuelStatus').innerHTML = 'Not enough fuel for the journey!';
         document.getElementById('faultyItems').style.visibility = 'visible';
         document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch';
         document.getElementById('launchStatus').style.color = 'red';
      };
      if(Number(cargoMass.value)>10000){
         document.getElementById('cargoStatus').innerHTML = 'Too much mass for takeoff!';
         document.getElementById('faultyItems').style.visibility = 'visible';
         document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch';
         document.getElementById('launchStatus').style.color = 'red';
      };
   };
   
   function faultyItemsReady(){
      document.getElementById('pilotStatus').innerHTML = `Pilot: ${pilotName.value}`;
      document.getElementById('copilotStatus').innerHTML = `Copilot: ${copilotName.value}`;
      if(Number(fuelLevel.value)>=10000 && Number(cargoMass.value)<=10000 && pilotName.value !== '' && copilotName.value !== ''){
         document.getElementById('launchStatus').innerHTML = 'Shuttle ready for launch!';
         document.getElementById('launchStatus').style.color = 'green';
      }
   }
   
   
   dataEntryForm.addEventListener('submit', function(event){
      let alertNeeded = false;
      let missingFields = '';
      let notNumbers = '';
      
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
         faultyItemsNotReady();
         event.preventDefault();
      } else if(fuelLevel.value<10000 || cargoMass.value>10000){
         faultyItemsNotReady();
         event.preventDefault();
      } else{
         faultyItemsReady();
         event.preventDefault();
      }
   });
});

window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         planetArr = json;
         console.log(json);

         let destination = json[Math.floor(Math.random()*json.length)];
         document.getElementById('missionTarget').innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${destination.name}</li>
            <li>Diameter: ${destination.diameter}</li>
            <li>Star: ${destination.star}</li>
            <li>Distance from Earth: ${destination.distance}</li>
            <li>Number of Moons: ${destination.moons}</li>
         </ol>
         <img src="${destination.image}">`
      })
   })
})
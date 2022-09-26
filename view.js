// home page view
//show();
function show() {
  html = "";
  html += `
    <div class="header">
        <div class="btn" onclick="showJoke()">Timefinder</div>
        <div class="btn" onclick="interestCalc()">Compound Interest</div>
        <div class="btn" onclick="showTicket()">Ticket System</div>
    </div>
    <div class="mainContainer"></div>
    
    `;
  appDiv.innerHTML = html;
}

//OSCAR
showJoke();
function showJoke() {
  let loading = `<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
  html = "";
  html += /*HTML*/ `
    <div class="header">
        <div class="btn" onclick="showJoke()">Random Joke</div>
        <div class="btn" onclick="showInterest()">Compound Interest</div>
        <div class="btn" onclick="showTicket()">Ticket System</div>
    </div>
    <div class="mainContainer">
      <div class="jokeContainer">
      ${joke ? joke : ""}
      <button onclick="fetchJoke()" >Fetch Random Joke</button> 
        </div>
    </div>
    
    `;
  appDiv.innerHTML = html;
}

//ROBERT
function showInterest() {
  html = "";
  html += /*HTML*/ `
    <div class="header">
        <div class="btn" onclick="showJoke()">Random Joke</div>
        <div class="btn" onclick="showInterest()">Compound Interest</div>
        <div class="btn" onclick="showTicket()">Ticket System</div>
    </div>
    <div class="mainContainerTwo">
        <div class="compoundContainer">Summen du vil investere:
        <div class="compounding"><input type="number" value="${startSum}" oninput="startSum = this.value;"></input></div>Avkastning: <br>(Historisk avkastning på Oslo Børs er ca. 7.4%(1900-2020))
        <div class="compounding"><input type="text" value="${interest} "onchange="interest = this.value;"></input></div>
        <div class="compounding slidercontainer"><input type="range" min="1" max="100" value="${numberOfYears}" class="slider" onchange="numberOfYears = this.value; showInterest();"></input>Antall år: ${numberOfYears}</div> 
        <div class="compounding"><div class="calcButton" onclick="calcInterest(startSum, numberOfYears, interest, compoundNumber)">Submit</div></div>
        <div class="compounding"><div class="calcAnswer">Total avkastning: ${calculatedAnswer}kr.</div></div>
        </div>  
    </div>
    `;
  appDiv.innerHTML = html;
}

//ANDY
function showTicket() {
  html = "";
  html += /*HTML*/ `
    <div class="header">
      <div class="btn" onclick="showJoke()">Random Joke</div>
      <div class="btn" onclick="showInterest()">Compound Interest</div>
      <div class="btn" onclick="showTicket()">Ticket System</div>
    </div>
    <div class="mainContainerTwo">
      <div class="compoundContainer">
        <input type="text" placeholder="Legg til din alder" onchange="ageInput=this.value"></input>
        <button class="andyBtn" onclick="ticketPricePerAge()">Betal</button>
       <button class = "andyBtn" onclick="dailyEarnings()">Hent inn inntekt</button>
        
        <p> Du er ${ageInput} år gammel.</p>
        <p>Du mottar en ${ticket} billett</p>
        <p> Det koster ${ticketProfit} Kr for denne billetten.</p>
        <p> Bussjoføren tjente ${revenue} Kr</p>
        <p>Du har tjent ${moneyMade} </p> 
      </div>
    </div>
    `;
  appDiv.innerHTML = html;
}

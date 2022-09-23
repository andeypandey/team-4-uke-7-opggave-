// home page view
//show();
function show() {
  html = "";
  html += `
    <div class="header">
        <div class="btn" onclick="showJoke()">Timefinder</div>
        <div class="btn" onclick="interestCalc()">Compound Interest</div>
    </div>
    <div class="mainContainer"></div>
    
    `;
  appDiv.innerHTML = html;
}

showJoke();
function showJoke() {
  html = "";
  html += /*HTML*/ `
    <div class="header">
        <div class="btn" onclick="showJoke()">Random Joke</div>
        <div class="btn" onclick="showInterest()">Compound Interest</div>
        <div class="btn" onclick="showCrypto()">Crypto Prices</div>
    </div>
    <div class="mainContainer">
      <div class="jokeContainer">
      <div>${joke}</div>
      <button onclick="getJoke()" >Get Random Joke</button> 
        </div>
    </div>
    
    `;
  appDiv.innerHTML = html;
}

function showInterest() {
  html = "";
  html += /*HTML*/ `
    <div class="header">
        <div class="btn" onclick="showJoke()">Random Joke</div>
        <div class="btn" onclick="showInterest()">Compound Interest</div>
        <div class="btn" onclick="showCrypto()">Crypto Prices</div>
    </div>
    <div class="mainContainerTwo">
        <div class="compoundContainer">Summen du vil investere:
        <div class="compounding"><input type="number" value="${sumInterest}" onchange="sumInterest = this.value;"></input></div>Avkastning: <br>(Historisk avkastning på Oslo Børs er ca. 7.4%(1900-2020))
        <div class="compounding"><input type="number" value="${interestInterest} "onchange="interestInterest = this.value"></input></div>
        <div class="compounding slidercontainer"><input type="range" min="1" max="100" value="${yearInterest}" class="slider" onchange="yearInterest = this.value; showInterest();  console.log(yearInterest);"></input>Antall år: ${yearInterest}</div> 
        <div class="compounding"><div class="calcButton" onclick="calcInterest()">Submit</div></div>
        <div class="compounding"><div class="calcAnswer">${calculatedAnswer}</div></div>
        </div>  
    </div>
    `;
  appDiv.innerHTML = html;
}

function showCrypto() {
  html = "";
  html += /*HTML*/ `
    <div class="header">
        <div class="btn" onclick="showJoke()">Random Joke</div>
        <div class="btn" onclick="showInterest()">Compound Interest</div>
        <div class="btn" onclick="showCrypto()">Crypto Prices</div>
    </div>
    <div class="mainContainer">
        <button onclick="getCurency()" >Get Currency</button>
        <div class="compoundcontainer">${cryptoCurrency}</div>
    </div>
    
    `;
  appDiv.innerHTML = html;
}

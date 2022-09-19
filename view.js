// home page view
//show();
function show() {
  html = "";
  html += `
    <div class="header">
        <div class="btn" onclick="showTime()">Timefinder</div>
        <div class="btn" onclick="interestCalc()">Compound Interest</div>
        <div class="btn"></div>
    </div>
    <div class="mainContainer"></div>
    
    `;
  appDiv.innerHTML = html;
}

showTime();
function showTime() {
  html = "";
  html += /*HTML*/ `
    <div class="header">
        <div class="btn" onclick="showTime()">Timefinder</div>
        <div class="btn" onclick="interestCalc()">Compound Interest</div>
        <div class="btn"></div>
    </div>
    <div class="mainContainer">
        <input onchange="timeModel.selectedCity = this.value; getTime()" type="text" placeholder="City to display time">
        <div class="timeContainer">
            <img src="${timeModel.time > 18 ? "night.svg" : "day.svg"}" alt="${
    timeModel.time > 18 ? "Night" : "Day"
  }"/>
            <h3>${timeModel.selectedCity}</h3>
            <h2>${timeModel.time}</h3>
            <h4>TIMEZONE</h4>
        </div>
    </div>
    
    `;
  appDiv.innerHTML = html;
}

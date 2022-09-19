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
        <input type="text" placeholder="City to display time">
        <div class="timeContainer">
            <img src="${time > 18 ? "Night.png" : "Day.png"}" alt="${
    time > 18 ? "Night" : "Day"
  }"/>
            <h3>${selectedCity}</h3>
            <h4>${time}</h4>
        </div>
    </div>
    
    `;
  appDiv.innerHTML = html;
}

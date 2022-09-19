// Funksjon for å regne ut tid
function getTime() {
  for (let i = 0; i < timeModel.countries.length; i++) {
    if (timeModel.countries[i].includes(timeModel.selectedCity.valueOf)) {
      let date = new Date().getTime();
      timeModel.time = date + timeModel.countries[i].value;
    }
  }
  showTime();
}

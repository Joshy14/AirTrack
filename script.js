const info = document.querySelector(".info")
const call = document.querySelector(".call")
const fln = document.querySelector(".flnm")
const fl_iata = document.querySelector(".fl_iata")
const airline = document.querySelector(".airline")
const aircraft = document.querySelector(".aircraft")
const dep_ia = document.querySelector(".dep_iata")
const dep_city = document.querySelector(".dep_city")
const arr_iata = document.querySelector(".arr_iata")
const arr_city = document.querySelector(".arr_city")
const status = document.querySelector(".status")
const alt = document.querySelector(".alt")
const spd = document.querySelector(".spd")
const v_spd = document.querySelector(".v_spd")
const built = document.querySelector(".built")
const engine = document.querySelector(".engine")
const engine_c = document.querySelector(".engine_c")
const type = document.querySelector(".type")
const percent = document.querySelector(".percent")

call.addEventListener("click", () => {
  console.log("Loading...")
  API()
  console.log("API running")
})
function API() {
  const flnm = fln.value
  fetch("https://airlabs.co/api/v9/flight?flight_iata=" + flnm + "&api_key=94dd0645-8092-4cff-a50a-c101e2a07195")
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      console.log(response)
      display(response)
    })
}
function display(flight) {
  try {
    info.style.display = "flex"
    info.style.flexDirection = "column"
    fl_iata.innerHTML = flight.response.flight_iata
    airline.innerHTML = flight.response.airline_name
    aircraft.innerHTML = flight.response.model
    dep_ia.innerHTML = flight.response.dep_iata
    dep_city.innerHTML = flight.response.dep_city
    percent.value = flight.response.percent
    percent.innerHTML = flight.response.percent + "%"
    arr_iata.innerHTML = flight.response.arr_iata
    arr_city.innerHTML = flight.response.arr_city
    status.innerHTML = "Status: " + flight.response.status
    alt.innerHTML = "Altitude: " + Math.round(flight.response.alt * 3280.8398950131 / 1000)+" feet"
    spd.innerHTML = "Speed: " + Math.round(flight.response.speed * .54) + " Knots"
    v_spd.innerHTML = "Verticle Speed: " + flight.response.v_speed * 3280.8398950131 + " Feet per minuate"
    built.innerHTML = "Built in the year: " + (flight.response.built).toString()
    engine.innerHTML = "Engine type: " + flight.response.engine
    engine_c.innerHTML = "Engine count: " + flight.response.engine_count
    type.innerHTML = "Aircraft Type: " + flight.response.type
  } catch (error) {
    console.log(error)
  }


}

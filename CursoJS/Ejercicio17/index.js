let marker, map;

function initMap() {

  const posicion = {
      lat: 0,
      lng: 0
  }

  const valencia = {
    lat: 39.4702,
    lng: -0.376805
  }

  const caracas = {
    lat: 10.491,
    lng: -66.902
  }

  const cali = {
    lat: 3.43722,
    lng: -76.5225
  }

  const bamako = {
    lat: 12.6333,
    lng: -7.98333
  }

  const alcacer = {
    lat: 39.3693,
    lng: -0.442818
  }

  map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2,
      center: posicion
  })

  marker = new google.maps.Marker({
      position: valencia,
      map,
      title: "Valencia"
  })

  marker = new google.maps.Marker({
    position: caracas,
    map,
    title: "Caracas"
  })

  marker = new google.maps.Marker({
    position: cali,
    map,
    title: "Cali"
  })

  marker = new google.maps.Marker({
    position: bamako,
    map,
    title: "Bamako"
  })

  marker = new google.maps.Marker({
    position: alcacer,
    map,
    title: "Alcácer"
  })
}
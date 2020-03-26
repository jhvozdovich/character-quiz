$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();

    var movie = $("input:radio[name=movie]:checked").val();
    var season = $("input:radio[name=season]:checked").val();
    var power = $("#power").val();
    var song = $("input:radio[name=song]:checked").val();
   
    
    if (((movie === "jp") || (movie === "ij")) && (season === "summer") && ((power === "Invisibility") || (power === "Flight")) && (song === "ws")) {
      $("#rachel").show();
    } else if (((movie === "ij") || (movie === "gf")) && ((season === "winter") || (season === "fall")) && ((power === "Time Travel") || (power === "Super Strength")) && ((song === "rn") || (song === "bm") || (song === "tm"))) {
      $("#monica").show();
    } else if (((movie === "gf") || (movie === "gn")) && ((season === "spring") || (season === "summer")) && ((power === "Mind Reading") || (power === "Teleportation")) && ((song === "qn") || (song === "jc") || (song === "ws"))) {
      $("#phoebe").show();
    } else if (((movie === "fw") || (movie === "jp")) && ((season === "winter") || (season === "fall")) && ((power === "Flight") || (power === "Super Strength")) && ((song === "rn") || (song === "jc") || (song === "bm"))) {
      $("#ross").show();
    } else if (((movie !== "fw") || (movie !== "jp")) && ((season === "spring") || (season !== "winter")) && ((power === "Super Strength") || (power === "Teleportation")) && ((song === "qn") || (song === "jc") || (song === "ws"))) {
      $("#chandler").show();
    } else if (((movie === "rt") || (movie === "gn")) && ((season === "spring") || (season === "summer") || (season === "fall")) && ((power !== "Mind Reading") || (power === "Teleportation")) && ((song !== "qn") || (song === "jc") || (song === "ws"))) {
      $("#joey").show();
    } else {
      alert("You are nothing!!!!!!");
    }
  })
})
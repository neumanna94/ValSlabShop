class Slab {
  constructor(species, length, width, depth, price, imgUrl){
    this.species = species;
    this.length = length;
    this.width = width;
    this.depth = depth;
    this.price = price;
    this.imgUrl = imgUrl
  }
}
//walnut, walnut burl, maple, maple burl, oak, sequoia, redwood, fir, myrtlewood, madrone, juniper, and speciality speices
var slabs = [];
var species = ["Black Walnut", "Walnut Burl", "Maple", "Maple Burl", "Oak", "Sequoia", "Redwood", "Fir", "Myrtlewood", "Madrone", "Juniper", "Speciality Speices"];
var lengths = [];
var widths = [];
var depths = [];

//(species, length, width, depth, price, imgUrl)
function generateAllSlabs() {
  let newSlab = new Slab("Black Walnut", 5, 5, 2.25, 800, "img/One.jpeg");
  slabs.push(newSlab);
  newSlab = new Slab("Black Walnut", 15, 5, 2.25, 1600, "img/Two.jpeg");
  slabs.push(newSlab);
  newSlab = new Slab("Black Walnut", 15, 5, 2.25, 1600, "img/Three.jpg");
  slabs.push(newSlab);
  for(var i = 0; i < 100; i ++){
    newSlab = new Slab(species[(species.length-1)%i], i%15, i%5, 2.25, i*10, "img/four.jpeg");
    slabs.push(newSlab);
  }
  for(var i = 1; i <= 15; i ++){
    lengths.push(i);
  }
  for(var i = 1; i <= 5; i += .25){
    widths.push(i);
  }
  for(var i = 1; i <= 3; i ++){
    depths.push(i);
  }
}
function displayAllSlabs(){
  $("#results").text("");
  for(var i = 0; i <slabs.length; i ++){
    $("#results").append("<div class='col-md-4'><a href='#'><div class='card' style='width: 18rem;'><img class='card-img-top' src='" + slabs[i].imgUrl + "' height='200px' width = '200px'><div class = 'card-body'><h5 class='card-title'>" +slabs[i].species+"</h5><h5 class='card-title'>" + slabs[i].length + "x" + slabs[i].width + "x" + slabs[i].depth + "</h5><p class='card-text'>Price: $" + slabs[i].price + "</p></div></div></a></div>");
  }
}
function generateFilters(){
  $("#speciesFilter").text("");
  $("#lengthFilter").text("");
  $("#widthFilter").text("");
  $("thicknessFilter").text("");
  for(var i = 0; i < species.length; i ++){
    $("#speciesFilter").append("<li><a href='#'>" + species[i] + " </a></li>");
  }
  for(var i = 0; i < lengths.length; i ++){
      $("#lengthFilter").append("<li><a href='#'>" + lengths[i] + " '</a></li>");
  }

  for(var i = 0; i < widths.length; i ++){
    $("#widthFilter").append("<li><a href='#'>" + widths[i] + " '</a></li>");
  }
  for(var i = 0; i < depths.length; i ++){
    $("#thicknessFilter").append("<li><a href='#'>" + depths[i] + " '</a></li>");
  }

}
$(document).ready(function(){
  generateAllSlabs();
  generateFilters();
  displayAllSlabs();
});

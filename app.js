
let superheroData = [
  { name: "Iron Man", phone: "800-IRON-MAN", affiliation: "Marvel", image_url: "http://data.whicdn.com/images/98354850/large.gif" },
  { name: "Captain America", phone: "800-CALL-CAPN", affiliation: "Marvel", image_url: "https://media.giphy.com/media/zHXvzj5xMe2Ag/giphy.gif" },
  { name: "Batman", phone: "800-DRK-NITE", affiliation: "DC", image_url: "https://media.giphy.com/media/hHCP7G1ySa9wc/giphy.gif" },
  { name: "Black Widow", phone: "800-BLK-WDOW", affiliation: "Marvel", image_url: "https://media.giphy.com/media/SId94WWcAQKI/giphy.gif" },
  { name: "Wonder Woman", phone: "800-WDR-WMAN", affiliation: "DC", image_url: "https://media.giphy.com/media/26FPMoFGJlJQuwdzO/giphy.gif" },
  { name: "The Wasp", phone: "800-THE-WASP", affiliation: "Marvel", image_url: "https://media.giphy.com/media/1dHnXIcn43hio/giphy.gif" },
  { name: "Ant Man", phone: "800-IM-SCOTT", affiliation: "Marvel", image_url: "https://media.giphy.com/media/YMiW1sq5Ajxks/giphy.gif" },
  { name: "Deadpool", phone: "800-EAT-TACOS", affiliation: "Marvel", image_url: "https://media.giphy.com/media/l0MYDGA3Du1hBR4xG/giphy.gif" },
  { name: "Green Lantern", phone: "800-RYN-RNLS", affiliation: "DC", image_url: "https://media.giphy.com/media/dgcNT43HzhgA0/giphy.gif" },
  { name: "Raven", phone: "800-BLK-MAGC", affiliation: "DC", image_url: "https://media.giphy.com/media/euKsxtPWDwi1a/giphy.gif" },
  { name: "Wolverine", phone: "800-BAD-ASSS", affiliation: "Marvel", image_url: "https://media.giphy.com/media/uDmjlstKejNPq/giphy.gif" }
]

angular
  .module("superheroApp", [])
  .controller("superheroCtrl", [ superheroController ])

function superheroController () {
  this.superheros = superheroData;


  this.addSuperhero = function() {
    let superhero = this.newSuperhero;
    this.superheros.push(superhero);
    console.log("clicked taco taco chimichanga taco")
  }
}

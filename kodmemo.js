var array = [];
var los1 = "";
var los2 = "";
var click = 0;
var sukces = 0;
var blad = 0;
var color = 0;
var blokada = 0;
// generowanie bloków
function start() {
  var txt = "";
  for (i = 0; i < 10; i++) {
    txt = txt + '<div onclick="spr(' + i + '); " id="blok' + i + '"';
    if (i == 5) {
      txt = txt + ' style="clear:both;"';
    }
    txt = txt + "></div>";
  }

  document.getElementById("pole").innerHTML = txt;
  console.log(array);
}

function Zaczynamy() {
  /* inicjalizacja */
  color = 0;
  sukces = 0;
  blad = 0;
  los1 = 0;
  los2 = 0;
  click = 0;
  blokada = 0;
  console.log(array);
  console.log("zaczynamy");
  //generowanie par+resetowanie koloru pól
  for (i = 0; i < 10; i++) {
    array.push(Math.floor(i / 2));
    document.getElementById("blok" + i).style.backgroundColor = "#556B2F";
    console.log(array);
  }
  console.log(array);
  //mieszanie tablicy
  for (i = 10 - 1; i > 0; i--) {
    var swap = Math.floor(Math.random() * i);
    var tmp = this.array[i];
    this.array[i] = this.array[swap];
    this.array[swap] = tmp;
  }
  for (i = 0; i < 10; i++) {
    document.getElementById("blok" + i).innerHTML = array[i];
  }
  setTimeout(function() {
    for (i = 0; i < 10; i++) {
      document.getElementById("blok" + i).innerHTML = "";
      blokada = 1;
    }
  }, 3000);
}
function spr(id) {
  //blokada
  if (blokada == 1) {
    if (click == 1) {
      console.log("click");
      document.getElementById("blok" + id).innerHTML = array[id];
      los2 = array[id];
      click = 0;
      if ((los1 == los2) & (id != color)) {
        sukces++;
        console.log(los1);
        console.log(id);
        console.log("wygrałeś");
        document.getElementById("blok" + id).style.backgroundColor = "red";
        document.getElementById("blok" + color).style.backgroundColor = "red";
      } else if (los1 != los2) {
        setTimeout(rem, 1000, id, color);
        blad++;
      } else if ((los1 == los2) & (id == color)) {
        rem(id, color);
        blad++;
      }
    } else {
      document.getElementById("blok" + id).innerHTML = array[id];
      los1 = array[id];
      color = id;
      click = 1;
      console;
    }
    if ((sukces > blad) & (sukces + blad == 5)) {
      alert("wygrałeś");
      blokada = 0;
    } else if ((sukces < blad) & (sukces + blad == 5)) {
      alert("przegrałeś");
      blokada = 0;
    }
  }
}
function rem(id1, color1) {
  document.getElementById("blok" + id1).innerHTML = "";
  document.getElementById("blok" + color1).innerHTML = "";
}

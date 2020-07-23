var close = document.getElementsByClassName("box2");
var i;


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  
  li.appendChild(t);
  if (inputValue === '') {
    alert("Write something");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  var box2 = document.createElement("DIV");
  //var span = document.createElement("span");
  var del = document.createElement("I");
  box2.className = "box2";
  del.className = "fas fa-trash-alt"
  //span.className = "close";
  
  box2.appendChild(del);
  li.appendChild(box2);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var list = document.querySelector('ul');
;
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    // var div1 = document.querySelector('.li');
    // div1.style="background-color:blue;";
    ev.target.classList.toggle('checked');
  }
}, false);

// var temp = document.getElementsByClassName("box");
// for ( let j = 0; i < temp.length; i++) {
//     temp[j].onclick = function() {
//     var div1 = document.querySelector('.li');
//     div1.style="background-color:blue;";
//     console.log(1);
//   }
// }


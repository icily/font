var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

updateClicked();

function updateClicked() {    
canvas.width = canvas.width;
// ctx.drawImage(img,0,0); 
  
var pic = new Image();
pic.src = 'layer.png';
pic.onload = function(){
  ctx.drawImage(this, 0,0,this.width, this.height);
  ctx.font = '49pt RBNo2';
  ctx.fillStyle = 'white';
  ctx.textBaseline = 'top';
  var ctext = document.getElementById("nom").value;
  ctx.textAlign = "center";
  var x = (canvas.width / 2) + 3.5;
  // ctx.fillText(ctext, x, 450);
ctx.fillText(ctext.split("").join(String.fromCharCode(8239)), x, 282);
// ctx.fillText(ctext.split("").join(' '), 0, 110);
};
    
}
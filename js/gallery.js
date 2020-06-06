/*Name this external file gallery.js*/

function upDate(previewPic){
  document.getElementById("image").innerHTML = previewPic.alt;
  document.querySelector('#image').style.backgroundImage = "url(' "+ previewPic.src +"')";

	}

	function unDo(){
    document.querySelector('#image').style.backgroundImage = "url('')";
    document.querySelector('#image').innerHTML = "Hover Over an image below to display here";
	} 

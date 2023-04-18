// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const statusDiv = document.getElementById('status');


function onReaderLoad(event){

    var bytes = event.target.result.split('');

    for ( var b = 0; b < bytes.length; b++ ) {

      var byteValue = "0x" + bytes[b].charCodeAt(0).toString(16);


    }

}


const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
  var file = event.target.files[0];

  var reader = new FileReader();
  reader.onload = onReaderLoad;
  var blob = file.slice(0, file.size);
  reader.readAsBinaryString(blob);

});
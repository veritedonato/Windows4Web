// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const statusDiv = document.getElementById('status');


function onReaderLoad(event){

    var bytes = event.target.result.split('');

    for ( var byte in bytes ) {

      var byteValue = "0x" + byte.charCodeAt(0).toString(16);

      console.log(byteValue);

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
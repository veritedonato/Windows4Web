// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const statusDiv = document.getElementById('status');

function onReaderLoad(event){

    run(event.target.result);

}

function run(file)  {

    var bytes = file.split("");

    var AddressOfEntryPoint = 0;

    for ( var b = 90; b < bytes.length; b++ )

      {

        AddressOfEntryPoint = bytes[b];

        console.log(AddressOfEntryPoint);

      }

}

const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {

  var reader = new FileReader();
  reader.onload = onReaderLoad;
  reader.readAsText(event.target.files[0]);

});
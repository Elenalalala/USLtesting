const lat = 321;
const long = 2333;
let title = document.getElementById('title');

if (window.vuplex) {
    // The window.vuplex object already exists, so go ahead and send the message.
//     title.addEventListener("click", sending);

//     addMessageListener();
    console.log("Javascript has finished addMessageListener");
  } else {
    // The window.vuplex object hasn't been initialized yet because the page is still
    // loading, so add an event listener to send the message once it's initialized.
    title.textContent = "something wrong";
  }
  

function sending(){
    window.vuplex.postMessage({latitude: lat,longitude: long});
    console.log("successfully send from javascript");
}

//This is recieveing json function from unity
function addMessageListener() {
    window.vuplex.addEventListener('message', function(event) {
      let json = event.data;
      // > JSON received: { "type": "greeting", "message": "Hello from C#!" }
      console.log('JSON received: ' + json);
      
      title.textContent = json;
    });
  }



function myFunction() {
    window.vuplex.postMessage({type: "layer", data: {
        layer: "flood"
    }})
}

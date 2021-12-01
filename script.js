const lat = 321;
const long = 2333;


if (window.vuplex) {
    // The window.vuplex object already exists, so go ahead and send the message.
    document.addEventListener("click", sending)
    sendMessageToCSharp();
    addMessageListener();
  } else {
    // The window.vuplex object hasn't been initialized yet because the page is still
    // loading, so add an event listener to send the message once it's initialized.
    console.log("something wrong with sending");
  }
  

function sending(){
    window.vuplex.postMessage({latitude: lat,longitude: long});
    console.log("successfully send from javascript");
}

function addMessageListener() {
    window.vuplex.addEventListener('message', function(event) {
      let json = event.data;
      // > JSON received: { "type": "greeting", "message": "Hello from C#!" }
      console.log('JSON received: ' + json);
      let title = document.getElementById('title');
      title.textContent = json;
    });
  }

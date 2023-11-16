const request = document.getElementById("sendRequest");

request.addEventListener("click",function(){
    var urlWrite = 'https://api.thingspeak.com/update?api_key=5VOQSOX86JW4KV3D&field3=1003';
    write();
    function write(){
        fetch(urlWrite, {
            method: 'POST'
        })
        .then(response => response.json())
        .then(responseData => {
            responseid = responseData;
            console.log('code sent to ThingSpeak:', responseData);
            console.log('waiting data from thingspeak');
            window.alert("successfully sent door opening signal please wait");
            
        })
        .catch(error => {
            console.error('Error sending data to ThingSpeak:', error);
            window.alert("Error on sending data to ThingSpeak\n"+"Error: "+error);
        });
    }
})

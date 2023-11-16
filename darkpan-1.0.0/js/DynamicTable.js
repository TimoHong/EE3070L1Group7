const dynamicTable = document.getElementById("dynamicTable");
const tableBody = document.getElementById("tableBody");

window.onload = repectLoadingField2();
window.onload = readThinkSpeak();

function repectLoadingField2(){
    var urlread='https://api.thingspeak.com/channels/2324551/fields/2.json?api_key=NKLF88WGQMEVJ8SQ&results=2';
    fetch(urlread)
            .then(response => response.json())
            .then(data => {
                if (data.feeds[1].field2==1002){
                    alert("RFID failed, please turn off the alarm by using RFID card");
                }
                console.log('receieve field2');
                setTimeout(repectLoadingField2, 1000);
            })
            .catch(error => {
                console.error('Error reading data from ThingSpeak:', error,'times',retry);
                if(retry>0){
                    retry--;
                    setTimeout(repectLoadingField2, 1000);
                }
            });
};
function readThinkSpeak() {
    var urlread = 'https://api.thingspeak.com/channels/2324551/feeds.json?api_key=NKLF88WGQMEVJ8SQ&results=2';
    fetch(urlread)
            .then(response => response.json())
            .then(data => {
                tableBody.innerHTML = '';
                data.feeds.forEach(item => {
                    const row = tableBody.insertRow();
                    var content;

                    const date = row.insertCell(0);
                    const notice = row.insertCell(1);
                    /*const id = row.insertCell(1);
                    const field_1 = row.insertCell(2);
                    const field_2 = row.insertCell(3);
                    const field_3 = row.insertCell(4);*/
                    console.log(item.field2);
                    console.log(item.field3);


                    if(item.field2==1001){
                        content = "Access Granted";
                        console.log("Access Granted");
                    }else if(item.field2==1002){
                        content = "RFID failed, please turn off the alarm by using RFID card";
                        console.log("RFID failed, please turn off the alarm by using RFID card");
                    }else if(item.field2==0){
                        content = "Buzzer Reset";
                        console.log("Buzzer Reset");
                    }else if(item.field3==1004){
                        content = "Waiting";
                        console.log("Waiting");
                    }else if(item.field3==1003){
                        content = "Request open from web";
                        console.log("Request open from web");
                    }else{
                        content = "Error";
                        console.log("Error"); 
                    }


                    
                    date.textContent = item.created_at;
                    notice.textContent = content;
                });
                dynamicTable.style.display = "table";
                setTimeout(readThinkSpeak(),1000);

            })
            .catch(error => {
                console.error('Error reading data from ThingSpeak:', error);
                /*if(retry>0){
                    retry--;
                    setTimeout(read, delayRetry);
                }*/
            });
};

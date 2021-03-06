// Digistar Script 
// Created: 7/8/2017

var commands = '{"doors":{"enter":{"open":"4","close":"5"},"exit":{"open":"1","close":"8"}},"lights":{"all":{"on":"6","off":"7"},"rear":{"on":"2","off":"3"}}}';
var codeList = JSON.parse(commands);

function command(device, area, action, duration) {
 duration = duration / 30;
 serial = codeList[device][area][action];
 time = 1;
 while (time <= duration) {
  sendCustomCommand(serial);
  time++;
  Ds.Wait("30", "system");
 }
}

function showCommand(device, action) {
 sendCommand(serial);
}

function sendCustomCommand(serial) {
 print('serial command [' + serial + ']');
 //Ds.SendStringCommand('serial command [' + serial + ']');
}
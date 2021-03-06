// Digistar Script 
// Created: 7/8/2017

var commands = '{"doors":{"enter":{"open":"4","close":"5"},"exit":{"open":"1","close":"8"}}}';
var codeList = JSON.parse(commands);

function command(device, area, action, duration) {
 print(area + ' ' + action + ' for ' + duration + ' minutes.');
 duration = duration * 2;
 serial = codeList[device][area][action];
 sendCustomCommand(serial);
 time = 1;
 while (time < duration) {
  Ds.Wait("30", "system");
  sendCustomCommand(serial);
  time++;
 }
}

function sendCustomCommand(serial) {
 print('serial command [' + serial + ']');
 Ds.SendStringCommand('serial command [' + serial + ']');
}

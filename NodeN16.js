var events=require("events");
var eventEmitter= new events.EventEmitter();
var connectHandler= function connected(){
    console.log('connection successful.');
}
eventEmitter.on('connection',connectHandler);
eventEmitter.on('data_recieved',function(){
    console.log('data recieved successfully.');
});
eventEmitter.emit('connection');
eventEmitter.emit('data_recieved');
console.log("Program Ended");
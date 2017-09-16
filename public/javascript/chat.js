var app=angular.module('chatApp',['ngMaterial']);

app.controller('chatController',function($scope){
	
	$scope.messages =[{
		sender:"BOT",text:"WHAT CAN I DO FOR YOU?",time:"1:15"
	},
	{
		sender:"USER",text:"WHAT IS  1 +1",time:"1:20"
	},
	{
		sender:"BOT",text:"2",time:"1:25"
	},
	];

var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
exampleSocket.onmessage  =   function  (event) {
       var jsonData = JSON.parse(event.data);
       console.log(jsonData);
   };
});
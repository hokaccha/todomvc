var app = app || {};
var ENTER_KEY = 13;

$(function() {
	Backbone.io.connect('http://localhost:3030');

	// Kick things off by creating the **App**.
	new app.AppView();

});

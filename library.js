(function(module) {
	"use strict";

	var Plugin = {};

	Plugin.addUserSettings = function(settings, callback) {
		// todo: use settings.tpl instead
		settings.push({
			title: "Kitchen Sink",
			content: "<label>Forum Title</label><input type='text' data-property='userTitle' placeholder='Enter Title' class='form-control' />"
		});

		callback(null, settings);
	};

	module.exports = Plugin;
}(module));
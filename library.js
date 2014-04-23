(function(module) {
	"use strict";

	var Plugin = {},
		db = module.parent.require('../src/database');

	function renderSink(req, res, next) {
		var data = { test: [{"name": "psychobunny"},{"name": "barisusakli"},{"name": "julianlam"}] };

		res.render('my_demo', data);
	}

	function renderAdmin(req, res, next) {
		res.render('admin/kitchen-sink', {});
	}

	Plugin.init = function(app, middleware, controllers) {
		app.get('/my_demo', middleware.buildHeader, renderSink);
		app.get('/api/my_demo', renderSink);

		app.get('/admin/kitchen-sink', middleware.admin.buildHeader, renderAdmin);
		app.get('/api/admin/kitchen-sink', renderAdmin);
	};

	Plugin.addNavigation = function(header, callback) {
		header.navigation = header.navigation.concat(
			[
				{
					route: '/my_demo',
					class: '',
					text: "Kitchen Sink"
				}
			]
		);

		callback(null, header);
	};

	Plugin.addAdminNavigation = function(header, callback) {
		header.plugins.push({
			route: '/kitchen-sink',
			icon: 'fa-tint',
			name: 'Kitchen Sink'
		});

		callback(null, header);
	};

	Plugin.addUserSettings = function(settings, callback) {
		// todo: use settings.tpl instead
		settings.push({
			title: "Kitchen Sink",
			content: "<label>Forum Title</label><input type='text' data-property='userTitle' placeholder='Enter Title' class='form-control' />"
		});

		callback(null, settings);
	};
	
	Plugin.getUserSettings = function(data, callback) {
		db.getObjectField('user:' + data.uid + ':settings', 'userTitle', function(err, title) {
			if (err) {
				callback(err);
			}	
			data.settings.userTitle = title;
			callback(null, data);
		});	
	};
	
	Plugin.saveUserSettings = function(data) {
		if (data.uid && data.userTitle) {
			db.setObjectField('user:' + data.uid + ':settings', 'userTitle', data.userTitle);
		}
	};

	Plugin.addAdminScripts = function(scripts, callback) {
		scripts.push('/plugins/nodebb-plugin-kitchen-sink/lib/admin.js');
		callback(null, scripts);
	};

	module.exports = Plugin;
}(module));

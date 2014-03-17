(function(module) {
	"use strict";

	var Plugin = {};

	function renderSink(req, res, next) {
		var data = { test: [{"name": "psychobunny"},{"name": "barisusakli"},{"name": "julianlam"}] };

		res.render('demo', data)
	}

	function renderAdmin(req, res, next) {
		res.render('admin/kitchen-sink', {});
	}

	Plugin.init = function(app, middleware, controllers) {
		app.get('/demo', middleware.buildHeader, renderSink);
		app.get('/api/demo', renderSink);

		app.get('/admin/kitchen-sink', middleware.admin.buildHeader, renderAdmin);
		app.get('/api/admin/kitchen-sink', renderAdmin);
	};

	Plugin.addNavigation = function(header, callback) {
		header.navigation = header.navigation.concat(
			[
				{
					route: '/demo',
					class: '',
					text: "Kitchen Sink"
				}
			]
		);

		return header;
	};

	Plugin.addAdminNavigation = function(header, callback) {
		header.plugins.push({
			route: '/kitchen-sink',
			icon: 'fa-tint',
			name: 'Kitchen Sink'
		});

		return header;
	};

	Plugin.addUserSettings = function(settings, callback) {
		// todo: use settings.tpl instead
		settings.push({
			title: "Kitchen Sink",
			content: "<label>Forum Title</label><input type='text' data-property='userTitle' placeholder='Enter Title' class='form-control' />"
		});

		callback(null, settings);
	};

	Plugin.addAdminScripts = function(scripts, callback) {
		scripts.push('/plugins/nodebb-plugin-kitchen-sink/lib/admin.js');
		callback(null, scripts);
	};

	module.exports = Plugin;
}(module));
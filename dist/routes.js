const routes = require("next-routes")();

routes
	.add("/campaigns/dashboard", "/campaigns/dashboard")
	.add("/campaigns/new", "/campaigns/new")
	.add("/campaigns/:address", "/campaigns/show")
	.add("/campaigns/:address/requests", "/campaigns/requests/index")
	.add("/campaigns/:address/requests/new", "/campaigns/requests/new")
	.add("/campaigns/:address/requests/task", "/campaigns/requests/task")
	.add(
		"/campaigns/:address/requests/publiccap",
		"/campaigns/requests/publiccap"
	)
	.add(
		"/campaigns/:address/requests/privatecap",
		"/campaigns/requests/privatecap"
	);

module.exports = routes;

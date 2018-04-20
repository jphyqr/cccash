"use strict";

var routes = require("next-routes")();

routes.add("/campaigns/dashboard", "/campaigns/dashboard").add("/campaigns/new", "/campaigns/new").add("/campaigns/:address", "/campaigns/show").add("/campaigns/:address/requests", "/campaigns/requests/index").add("/campaigns/:address/requests/new", "/campaigns/requests/new").add("/campaigns/:address/requests/task", "/campaigns/requests/task").add("/campaigns/:address/requests/publiccap", "/campaigns/requests/publiccap").add("/campaigns/:address/requests/privatecap", "/campaigns/requests/privatecap");

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNFLEFBREYsSUFDTSxBQUROLHdCQUM4QixBQUQ5Qix3QkFFRSxBQUZGLElBRU0sQUFGTixrQkFFd0IsQUFGeEIsa0JBR0UsQUFIRixJQUdNLEFBSE4sdUJBRzZCLEFBSDdCLG1CQUlFLEFBSkYsSUFJTSxBQUpOLGdDQUlzQyxBQUp0Qyw2QkFLRSxBQUxGLElBS00sQUFMTixvQ0FLMEMsQUFMMUMsMkJBTUUsQUFORixJQU1NLEFBTk4scUNBTTJDLEFBTjNDLDRCQU9FLEFBUEYsSUFRRSxBQVJGLDBDQVNFLEFBVEYsaUNBV0UsQUFYRixJQVlFLEFBWkYsMkNBYUUsQUFiRjs7QUFnQkEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam9obmhhc2hlbS93b3Jrc3BhY2UvY2NjYXNoIn0=
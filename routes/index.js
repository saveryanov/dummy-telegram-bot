var routesFiles = [
    require('./main'),
    require('./example'),
    require('./admin')
];

module.exports.create = function(bot) {
    routesFiles.forEach(routeFile => routeFile.create(bot));
}
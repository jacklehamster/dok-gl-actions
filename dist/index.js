var dokActions = require('dok-actions');



Object.keys(dokActions).forEach(function (k) {
    if (k !== 'default') Object.defineProperty(exports, k, {
        enumerable: true,
        get: function () {
            return dokActions[k];
        }
    });
});
//# sourceMappingURL=index.js.map

cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
        "id": "cordova-plugin-qrscanner.QRScanner",
        "clobbers": [
            "QRScanner"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.0",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-qrscanner": "2.4.0"
};
// BOTTOM OF METADATA
});
goog.provide("com.ttProject.myLib.test.Util");

(function(path) {
	// コンストラクタ
	path.Util = function() {
	}
	// private変数
	var data = null;
	path.Util.prototype.util = function() {
		console.log("util is called.");
	};
})(com.ttProject.myLib.test);

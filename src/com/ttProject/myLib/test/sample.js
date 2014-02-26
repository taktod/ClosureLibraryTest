goog.provide("com.ttProject.myLib.test.Sample");

(function(path){
	// コンストラクタ
	path.Sample = function() {
	}
	// private変数
	var data = null;
	path.Sample.prototype.sample = function() {
		return "test";
	};
})(com.ttProject.myLib.test);

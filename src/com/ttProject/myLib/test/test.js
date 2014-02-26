goog.provide("com.ttProject.myLib.test.Test");
goog.require("com.ttProject.myLib.test.Sample");
goog.require("com.ttProject.myLib.test.Util");

/**
 * クラス定義
 */
(function(path) {
	// コンストラクタ定義
	path.Test = function() {
		goog.base(this); // superクラスを呼ぶときのやり方
		data = "aiueo";
	}
	// 継承定義(prototypeを一気に定義するっぽいです。)
	goog.inherits(path.Test, com.ttProject.myLib.test.Sample); // scopeが同じなら、pathで補えるみたいですね
	// private定数定義
	var data = null;
	// 関数定義
	path.Test.prototype.sample = function() {
		// 他のクラスを使う場合のやりかた
		var util = new path.Util();
		util.util();
		// superクラスの関数をキックする場合の呼びだし方法
		console.log(goog.base(this, "sample"));
		// 応答返答
		return data;
	};
})(com.ttProject.myLib.test);

// これ・・・公開したい関数全部書くの？めんどくさくね？
goog.exportSymbol('com.ttProject.myLib.test.Test', com.ttProject.myLib.test.Test);
goog.exportProperty(com.ttProject.myLib.test.Test.prototype, "sample", com.ttProject.myLib.test.Test.prototype.sample);

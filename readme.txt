タイトル：myLib(closureLibraryTest)

 とりあえずclosureLibraryをつかってライブラリ開発するとしたらどうなるか？という意味でつくってみました。

ライセンス：MITライセンスとしておきます。

下準備：

まずこのプロジェクトをcloneする
$ git clone https://github.com/taktod/ClosureLibraryTest.git
移動する
$ cd ClosureLibraryTest
ClosureCompilerをダウンロードしてきて設置する。
$ cp [どこか] ./compiler.jar
ClosureLibraryをcloneする
$ git clone http://code.google.com/p/closure-library/
Pythonファイルのパーミッションに実行を付加しておく。
$ chmod +x closure-library/closure/bin/build/*
compile.shにもパーミッションをつけておく。
$ chmod +x compile.sh
これで準備おわり。

index.htmlにアクセスすると、作ったクラスにアクセスしたりできます。
compile.shを実行するとjsを小さくしたmyLib.jsができます。

とりあえずクラス定義もできたし継承もできたので、一通り必要なものはそろった感じ。
あとは、テストとかも準備しておきたいけど・・・

作者情報：

 taktod
 twitter: http://twitter.com/taktod/
 blog: http://poepoemix.blogspot.jp/

情報：

 もともと仕事でflashのrtmpサーバーの運用やプラグイン開発をしていました。
 録画動作や変換を実施してスマートフォンに対応するなどする案件がありちまたにあるツール等でテストしてみたのですが
 遅延が大きかったり安定性が微妙だったりしました。

 仕方ないので動画データの細かい部分をなるべく自力で解決して、安定性の高い高品質な動作をさせようと思いjavaのライブラリを書きました。
 https://github.com/taktod/myLib/

 そろそろhtml5にmediaSourceAPI(mediaSourceExtension)がでてきて、javascriptでユーザー側で同じようなことしてやると
 面白そうだと思っているのでこのたびjavascript化をしてみます。
 とりあえずclosureLibraryをつかってつくっていってみようかなと考えています。

 一人でつくっていると大変なので、誰か一緒にやってみたいという人がおりましたら、ぜひtwitterかblogもしくはpoepoemix@hotmail.com
 にメールいただければと思います。

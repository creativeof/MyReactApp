'use strict';

{
  let i = 0;

  function showTime() {
    console.log(new Date());
    i++;
    if (i > 2) {
      // タイマーを止める
      clearInterval(intervalId);
    }
  }

  // showTimeの後ろに()を付けない。
  // ()をつけるとこの関数を実行した時に返ってくる値をsetIntervalに渡すことになる。
  // 戻り値がない場合はundefinedを渡すことになる。
  const intervalId = setInterval(showTime, 1000);
}

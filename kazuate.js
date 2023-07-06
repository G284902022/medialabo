let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;
let h2 = document.querySelector('span#kaisu'); 
h2.textContent = kaisu;


// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
    

    
    let h2 = document.querySelector('span#kaisu'); 
    h2.textContent = kaisu;
    let yos = document.querySelector('span#answer');
    yos.textContent = yoso;
    let re = document.querySelector('p#result');
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
    console.log(kaisu + '回目の予想:' + yoso); 

    if(kaisu > 4) {
      re.textContent = '答えは ' + kotae + 'でした. すでにゲームは終わっています';
      kaisu ++;
    //console.log('答えは '+ kotae + ' でした．すでにゲームは終わっています');
    }
    else if(kaisu === 3 && kotae !== yoso) {
      re.textcontent = 'まちがい. 残念でした答えは ' + kotae ; 'です.';
      kaisu ++;
        //console.log(('まちがい．残念でした答えは ' + kotae + ' です．'));
    }
    else if(yoso === kotae) {
      re.textContent = '正解です.おめでとう！';
      kaisu ++;
    //console.log('正解です．おめでとう!');
    } 
    else if(yoso > kotae) {
      re.textContent = 'まちがい. 答えはもっと小さいですよ';
      kaisu ++;
        //console.log('まちがい．答えはもっと小さいですよ');
    }
    else if(yoso < kotae) {
      re.textContent = 'まちがい. 答えはもっと大きいですよ';
      kaisu ++;
        //console.log('まちがい．答えはもっと大きいですよ');
    }
}
//画像を格納する配列の作成
var image = new Array();

//配列の各要素を画像に特化して、そのパスを記入
image[0]=new Image();
image[0].src="./image/singeki.jpg";
image[1]=new Image();
image[1].src="./image/wanpi.jpg";
image[2]=new Image();
image[2].src="./image/naruto.jpg";
image[3]=new Image();
image[3].src="./image/daiya.jpg";
image[4]=new Image();
image[4].src="./image/guru.jpg";
image[5]=new Image();
image[5].src="./image/kenngan.jpg";
image[6]=new Image();
image[6].src="./image/suramu.jpg";
image[7]=new Image();
image[7].src="./image/kimetu.jpg";

var cnt=0;

function slidesw()
{

  //getElementByIdが使える場合のみ後の処理をする
  if(document.getElementById)
  {

    //スライド中はボタンを押せなくする
    document.slide.elements[0].disabled=true;

    //id属性が「sd」の画像タグの画像パスを切り替える
    document.getElementById("sd").src = image[cnt].src;

    //一つ画像を表示したらカウント用変数cntの値を＋１にする
    cnt++;
    
    //画像が最後まで表示されたか確認
    if( cnt <= 7 )
    {
      //まだ表示されていなければ、setTimeout()で次の画像を表示する
      var timer1=setTimeout("slidesw()",3000);
    }
    else
    {
      //全て表示されていたら、ボタンを押せるようにして、タイマーを停止する
      cnt=0;
      document.slide.elements[0].disabled=false;
      clearTimeout(timer1);
    }
  }
}
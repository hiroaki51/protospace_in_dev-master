$(function(){
  $("#like-button").click(function(){

    // 対象プロトタイプをキーとして、prototype_likesテーブルのデータを全て取得
    var request = $.ajax({
        type: 'GET',
        url: "/prototypes/:prototype_id/prototype_likes",
        cash:false,
        dataType: 'json',
        timeout: 3000
    });

    // ajax 成功後処理
    request.done(function(data){
      console.log("通信処理OK");
      var len = data.length;
      var data_exist_flg = 0;

      for(var i=0; i<len; i++){
        if (user_id == current_user){
          data_exist_flg = 1;
        } else {

        }
      if data_exist_flg == 0 then
        data_add;
      else
        data_delete;
      end;
    });

    // ajax エラー処理
    request.fail(function(){
      console.log("通信処理失敗");
    });

// data_add処理
    var request = $.ajax({
        type: 'CREATE',
        url: "",
        cash:false,
        dataType: 'json',
        timeout: 3000
    });

    // ajax 成功後処理
    request.done(function(data){
      console.log("通信処理OK");


      var len = data.length;
      $("#like-simbol").css("color" ,"red");


      for(var i=0; i<len; i++){
        if user_id == current_user then
          $("#like-simbol").css("color" ,"gray");
          $("#like-sum").text(len-1);
          // データ削除処理
        end;
      }
    })

    // ajax エラー処理
    request.fail(function(){
      console.log("通信処理失敗");
    });

  });
});

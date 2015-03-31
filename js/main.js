$(function() {
  $('.js-nav a, .js-connect').click(function(e) {
  	//避免預設的 Event 觸發
  	//以這個範例而言， a (anchor) 這個 tag 被點擊後，預設會導到指定的網址，
  	//如果我們不想要這個轉址的功能，可以在我們自已的 eventHandle function 中加入 event.preventDefault();
    e.preventDefault();
    //利用 .offset() 的方式來取得指定元素的 top 及 left 值，然後再讓捲軸移到該位置上
    //控制網頁捲軸移動
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});
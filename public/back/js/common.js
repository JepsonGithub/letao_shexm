/**
 * Created by Jepson on 2018/4/6.
 */


// 禁用小圆环
NProgress.configure({ showSpinner: false });

//// 开启进度条
//NProgress.start();
//
//// 关闭进度条
//setTimeout(function() {
//  NProgress.done();
//}, 2000)

// ajax 开始了
$(document).ajaxStart(function() {
  console.log( "ajax开始了" )
  NProgress.start();
})

// ajax 结束了
$(document).ajaxStop(function() {
  setTimeout(function() {
    console.log( "ajax结束了" )
    NProgress.done();
  }, 500);
});



// 二级菜单切换功能
$(".category").click(function() {
  $(this).next().stop().slideToggle();
})

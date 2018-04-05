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



$(function() {

  // 二级菜单切换功能
  $(".category").click(function() {
    $(this).next().stop().slideToggle();
  })


  // 菜单栏切换功能
  $('.icon_menu').click(function() {
    $('.lt_aside').toggleClass("menuhide");
    $('.lt_topbar').toggleClass("menuhide");
    $('.lt_main').toggleClass("menuhide");
  });


  // 显示退出模态框
  $('.icon_logout').click(function() {
    $('#logoutModal').modal("show");
  });


  // 退出功能
  $('#logoutBtn').click(function() {
    $.ajax({
      url: "/employee/employeeLogout",
      type: "get",
      success: function( data ) {
        if ( data.success ) {
          location.href = "login.html";
        }
      }
    })
  });


  // 登录拦截, 如果地址栏里面没有 login.html, 说明需要判断登录状态
  if ( location.href.indexOf("login.html") === -1 ) {
    // 发送 ajax, 请求查询管理员是否登录
    $.ajax({
      type: "get",
      url: "/employee/checkRootLogin",
      success: function( data ) {
        console.log( data );
        if ( data.error ) {
          location.href = "login.html";
        }
      }
    })
  }
})

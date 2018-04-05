/**
 * Created by Jepson on 2018/4/5.
 */

// 等待dom加载完成, 防止全局变量污染
$(function() {


  /*
   * 1. 进行表单校验配置
   *    校验要求:
   *        (1) 用户名不能为空
   *        (2) 密码不能为空, 长度为6-12位
   * */
  $('#form').bootstrapValidator({
    // 配置小图标
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },

    // 配置校验字段
    fields: {
      username: {
        // 配置校验规则
        validators: {
          // 非空校验
          notEmpty: {
            // 提示信息
            message: "用户名不能为空"
          }
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: "密码不能为空"
          },
          stringLength: {
            // 长度为 6-12 位
            min: 6,
            max: 12,
            message: "密码长度必须是 6-12 位"
          }
        }
      }
    }
  });



  // 2. 给表单注册一个表单校验成功的事件, 成功的时候, 阻止默认的表单提交, 使用 ajax 提交
  $('#form').on("success.form.bv", function( e ) {
    e.preventDefault();


    // 发送 ajax 请求, 进行登录请求
    // 如果 后台在响应头中, 配置了类型为 application/json,
    // jQuery 会自动将响应结果, 当成 json字符串解析, 所以 dataType 可以省略
    $.ajax({
      type: "post",
      url: "/employee/employeeLogin",
      data: $("#form").serialize(),
      dataType: "json",
      success: function( data ) {
        console.log( data );

        if ( data.success ) {
          console.log( "登录成功" );
        }

        if ( data.error === 1001 ) {
          console.log( "密码错误" );
        }

        if (data.error === 1000 ) {
          console.log( "用户名不存在" );
        }
      }
    })
  });



  // 3. 重置表单功能, 重置校验状态
  $('[type="reset"]').click(function(e) {
    // 创建 bootstrapValidator 实例,
    // 实例的 resetForm() 方法可以重置表单的校验状态, 如果传了 true, 表示连内容也重置
    $('#form').data("bootstrapValidator").resetForm();
  });

})

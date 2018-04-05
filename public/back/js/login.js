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

})

$(function () {
    // tel pwd
    // 点击label，input得到焦点
    $(".tel, .pwd").find("label").click(function () {
        $(this).siblings("input").focus();
    });
    // input获得焦点
    $(".tel, .pwd").find("input").attr("flag", 1);
    $(".tel, .pwd").find("input").focus(function () {
        $(this).siblings("label").removeClass('label-big').addClass("label-small");
        $(this).siblings("input").css({ border: '1px solid #ff6700' });
    });
    // input输入内容时提示信息与样式变化
    $(".tel, .pwd").find("input").keyup(function () {
        if ($(this).val() === '') {
            $(this).css({ backgroundColor: '#FCF2F3' });
            $(this).siblings("label").css({ color: 'red' });
            // 输入框为空，显示提示信息
            $(this).siblings(".prompt-info").show();
        } else {
            $(this).css({ backgroundColor: '' });
            $(this).siblings("label").css({ color: '' });
            $(this).siblings(".prompt-info").hide();
            // 输入框不为空，隐藏提示信息
            $(this).css({ backgroundColor: '' });
        }
    });
    // input失去焦点
    $(".tel, .pwd").find("input").blur(function () {
        $(this).css({ border: '' });
        if ($(this).val() === '') {
            $(this).siblings("label").removeClass('label-small').addClass("label-big");
            $(this).siblings("label").css({ color: 'red' });
            $(this).css({ backgroundColor: '#FCF2F3' });
            // // 输入框为空，显示提示信息
            $(this).siblings(".prompt-info").show();
        }
    });

    // 眼睛、密码状态切换
    $(".pwd-close").click(function () {
        $(this).hide().siblings(".pwd-open").show();
        $("#pwd").prop("type", "text");
    });
    $(".pwd-open").click(function () {
        $(this).hide().siblings(".pwd-close").show();
        $("#pwd").prop("type", "password");
    });

    // 二维码
    $(".QRcode").mousemove(function () {
        $(this).find(".pop-up-box").stop().show();
    });
    $(".QRcode").mouseout(function () {
        $(this).find(".pop-up-box").stop().hide();
    });
});

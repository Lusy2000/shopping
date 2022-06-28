window.addEventListener('load', function () {
    // shortcut快捷导航模块
    // 下载APP
    var loadApp = document.querySelector('.loadApp');
    var load = loadApp.querySelector('.load');
    loadApp.addEventListener('mouseover', function () {
        load.style.display = 'block';
    });
    loadApp.addEventListener('mouseout', function () {
        load.style.display = 'none';
    });
    // 购物车
    var cart = document.querySelector('.cart');
    var cart_drodown = cart.querySelector('.cart_drodown');
    cart.addEventListener('mousemove', function () {
        cart_drodown.style.display = 'block';
        cart.style.backgroundColor = '#fff';
        cart.style.color = '#ff6700';
    });
    cart.addEventListener('mouseout', function () {
        cart_drodown.style.display = 'none';
        cart.style.backgroundColor = '#424242';
        cart.style.color = '#b0b0b0';
    });

    // header头部模块
    // header-search下拉列表
    var header_search = document.querySelector('.header-search');
    var header_search_input = header_search.querySelector('input');
    var header_search_btn = header_search.querySelector('button');
    var header_search_drodown = header_search.querySelector('.header-search-drodown');
    header_search_input.addEventListener('focus', function () {
        if (header_search_input.value == '') {
            header_search_drodown.style.display = 'block';
        }
        header_search.style.borderColor = '#ff6700';
        header_search_btn.style.borderColor = '#ff6700';
    });
    header_search_input.addEventListener('blur', function () {
        header_search_drodown.style.display = 'none';
        header_search.style.borderColor = '#ccc';
        header_search_btn.style.borderColor = '#ccc';
    });
    // header_nav下拉列表
    var header_nav_left = document.querySelector('.header-nav-left');
    var header_nav_li = header_nav_left.querySelectorAll('li');
    var header_drodown_list = document.querySelector('.header-drodown-list');
    var header_drodown = header_drodown_list.querySelectorAll('.header-drodown');
    for (var i = 0; i < header_drodown.length; i++) {
        header_nav_li[i].setAttribute('index', i);
        header_nav_li[i].addEventListener('mouseenter', function () {
            var index = this.getAttribute('index');
            header_drodown[index].style.display = 'block';
        });
        header_nav_li[i].addEventListener('mouseleave', function () {
            var index = this.getAttribute('index');
            header_drodown[index].style.display = 'none';
        });
        header_drodown[i].addEventListener('mouseenter', function () {
            this.style.display = 'block';
        });
        header_drodown[i].addEventListener('mouseleave', function () {
            this.style.display = 'none';
        });
    }

    // main主体模块
    // 轮播图
    var main = document.querySelector('.main');
    var focus = main.querySelector('.w');
    var focus_img = focus.querySelector('.focus_img'); // 图片区域
    var focus_img_li = focus_img.querySelectorAll("li");
    var arrow_l = focus.querySelector('.arrow-l'); // 左箭头
    var arrow_r = focus.querySelector('.arrow-r'); // 右箭头
    var ol = focus.querySelector('.circle'); // 小圆圈
    var num = 0; // 控制现在是第几张图片
    var circle = 0; // 控制被选中的是哪个小圆圈

    // 排他思想
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'circle_choice';
    }

    // 轮播图淡入淡出效果
    function imageOpcity(num) {
        for (var i = 0; i < ol.children.length; i++) {
            focus_img_li[i].style.opacity = '0';
        }
        focus_img_li[num].style.opacity = '1';
        return true;
    }

    // 1. 根据图片张数动态生成小圆圈
    for (var i = 0; i < focus_img.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i); // 记录小圆圈索引号
        ol.appendChild(li);
        // 2. 点击小圆圈切换图片
        li.addEventListener('click', function () {
            var index = this.getAttribute('index'); // 获取小圆圈索引号
            num = index;
            circle = index;
            circleChange();
            imageOpcity(num);
        });
    }
    ol.children[0].className = 'circle_choice';

    // 3. 右侧按钮
    arrow_r.addEventListener('click', function () {
        num++;
        if (num == focus_img_li.length) { // 到最后一张图片，重新开始计数
            num = 0;
        }
        imageOpcity(num);
        // 小圆圈跟随右侧按钮一起变化
        circle++;
        circle = circle == ol.children.length ? circle = 0 : circle;
        circleChange();
    });
    // 4. 左侧按钮
    arrow_l.addEventListener('click', function () {
        num--;
        if (num == -1) { // 到第一张图片，重新开始计数
            num = focus_img_li.length - 1;
        }
        imageOpcity(num);
        // 小圆圈跟随左侧按钮一起变化
        circle--;
        circle = circle < 0 ? ol.children.length - 1 : circle;
        circleChange();
    });
    // 5. 自动播放轮播图
    var timer = setInterval(function () {
        arrow_r.click();
    }, 3000);
    // 6. 鼠标经过关闭自动播放，鼠标离开自动播放
    focus.addEventListener('mouseenter', function () {
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function () {
        timer = setInterval(function () {
            arrow_r.click();
        }, 3000);
    });

    // 商品列
    var focus_list_a = document.querySelectorAll('.focus_list_a');
    var focus_drodown_list = document.querySelectorAll('.focus-drodown-list');
    for (var i = 0; i < focus_list_a.length; i++) {
        focus_list_a[i].setAttribute('index', i);
        focus_list_a[i].addEventListener('mouseenter', function () {
            var index = this.getAttribute('index');
            focus_drodown_list[index].style.display = 'block';
        });
        focus_list_a[i].addEventListener('mouseleave', function () {
            var index = this.getAttribute('index');
            focus_drodown_list[index].style.display = 'none';
        });
        focus_drodown_list[i].addEventListener('mouseenter', function () {
            this.style.display = 'block';
        });
        focus_drodown_list[i].addEventListener('mouseleave', function () {
            this.style.display = 'none';
        });
    }

    // floor商品楼层
    var floor = document.querySelector('.floor');
    var more_list = floor.querySelectorAll('.more-list');
    var more_list_a = new Array();
    var box_bd = floor.querySelectorAll('.box-bd1');
    var box_bd_switch = new Array();
    for (var i = 0; i < more_list.length; i++) {
        more_list_a.push(more_list[i].querySelectorAll('a'));
    }
    for (var i = 0; i < box_bd.length; i++) {
        box_bd_switch.push(box_bd[i].querySelectorAll('.box-bd-switch'));
    }
    for (var i = 0; i < more_list_a.length; i++) {
        for (var j = 0; j < more_list_a[i].length; j++) {
            box_bd_switch[i][0].style.display = 'block';
            more_list_a[i][j].setAttribute('index1', i);
            more_list_a[i][j].setAttribute('index2', j);
            box_bd_switch[i][j].setAttribute('index1', i);
            box_bd_switch[i][j].setAttribute('index2', j);
            more_list_a[i][j].addEventListener('mouseenter', function () {
                var index1 = this.getAttribute('index1');
                var index2 = this.getAttribute('index2');
                var newmore_list = more_list[index1].querySelectorAll('a');
                for (var i = 0; i < newmore_list.length; i++) {
                    newmore_list[i].className = '';
                }
                this.className = 'choice-morelist';
                for (var i = 0; i < box_bd_switch[index1].length; i++) {
                    box_bd_switch[index1][i].style.display = 'none';
                }
                box_bd_switch[index1][index2].style.display = 'block';
            });
        }
    }

    // tool侧边工具栏
    // 背景变色
    var tool = document.querySelector('.tool')
    var tool_a = tool.querySelectorAll('a');
    var tool_img = tool.querySelectorAll('img');
    for (var i = 0; i < tool_a.length; i++) {
        tool_img[i].src = './images/tool-icon' + (i + 1) + '-1.png';
        tool_a[i].setAttribute('index', (i + 1));
        tool_a[i].addEventListener('mouseenter', function () {
            var index = this.getAttribute('index');
            tool_img[index - 1].src = './images/tool-icon' + index + '-2.png';
        });
        tool_a[i].addEventListener('mouseleave', function () {
            var index = this.getAttribute('index');
            tool_img[index - 1].src = './images/tool-icon' + index + '-1.png';
        });
    }
    // 回到顶部
    var banner = document.querySelector('.banner');
    var tool_backtop = tool.querySelector('.tool-backtop');
    var bannerTop = banner.offsetTop;
    backTop();
    document.addEventListener('scroll', function () {
        backTop();
    });
    tool_backtop.addEventListener('click', function () {
        scrollTo(0, 0);
    });
    function backTop() {
        if (window.pageYOffset >= bannerTop) {
            tool_backtop.style.display = 'block';
        } else {
            tool_backtop.style.display = 'none';
        }
    }
})
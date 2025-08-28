

//移除页头背景
window.addEventListener('DOMContentLoaded', () => {
  // 延时 1 秒（1000ms）后执行
    const header = document.querySelector('header#page-header.post-bg');
    if (header) {
      header.style.background = 'transparent';
    } 
});



// 实现鼠标滚动,顶部图片逐渐透明
const topImage = document.querySelector('header#page-header');
const webBg = document.getElementById('web_bg');

// 监听滚动事件
window.addEventListener('scroll', function() {
    // 获取滚动位置
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // 计算顶部图片的透明度
    // 当滚动到窗口高度的一半时，顶部图片完全透明
    const opacity = Math.max(0, 1 - ((scrollY* scrollY)/ ((windowHeight * 0.5)*(windowHeight * 0.5))));
    // console.log(scrollY);
    // console.log(opacity);
    // console.log(windowHeight)
    // 应用透明度到顶部图片
    topImage.style.opacity = opacity;
    
   
});

// 初始化
window.dispatchEvent(new Event('scroll'));




const list= ["tags","categories","links","about"]

window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header#page-header.not-home-page');
    const sitetitle = document.querySelector('h1#site-title');
    console.log(sitetitle.textContent);
    console.log(list.includes(sitetitle.textContent));
    console.log(header && list.includes(sitetitle.textContent))
    if(header && list.includes(sitetitle.textContent)){
      header.style.background = 'transparent';
    };
});


    
    
   

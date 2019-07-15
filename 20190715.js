// 什么是防抖和节流？有什么区别？如何实现？

// 防抖，触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间 
// 以最后一次触发时间后 n秒 函数会执行一次，中途再次触发，从新计算时间

// 01 基础版本
function debounce(fn,wait){
  let timer = null;
  return function(){
    clearTimeout(timer)
    timer = setTimeout(fn,wait)
  }
}

// 02 传参以及不丢失this
function debounce1(fn,wait){
  let timer = null
  return function(){
    clearTimeout(timer)
    timer = setTimeout(function(){
      fn.apply(this,arguments)
    },wait)
  }
}


// 节流,规定时间内，无论事件被触发多少次，永远只会执行一次

// 使用定时器做标记
function throttle(fn,wait){
  let timer = null;
  return function(){
    if(!timer){
      timer = setTimeout(function(){
        fn.apply(this,arguments)
        timer = null
      },wait)
    }
  }
}
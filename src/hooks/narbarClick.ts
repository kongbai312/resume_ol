import gsap from '@/utils/gsap';
//点击导航进行跳转
export const useNarbarClick = () => {
  //点击导航进行跳转
  const goNarbar = (index: number) => {
    //浏览器内部高度
    let innerHeight = window.innerHeight
    //浏览器当前滚动高度
    let scrollHeight = window.scrollY
    // 滚动到的目标位置的垂直坐标
    const targetY = innerHeight * index 
    //禁止重复点击
    if(scrollHeight === targetY)return
    // 滚动持续时间，单位秒
    const duration = 1 

    gsap.to(window, {
      scrollTo: { y: targetY, autoKill: false },
      duration: duration,
      ease: 'power2.inOut' // 缓动函数，可以根据需要调整
    })
  }
  return{
    goNarbar
  }
}

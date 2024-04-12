<template>
    <div :class="heightBoolean === 'big' ?'star_ContainerBig' : 'star_Container'">
      <canvas ref="canvasRef" class="star-bg-canvas"></canvas>
    </div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, toRef } from 'vue';
import { useImageLoader } from './starImg';
import Star from './star';

/**
 * 星星组件的props
 */
export interface IStarProps {
  /** 画布背景图片 */
  imageUrl: string;
  /** 生成多少个星星 */
  maxStars?: number;
  // big small
  heightBoolean? : string;
}

const props = withDefaults(defineProps<IStarProps>(), {
  maxStars: 1200,
  heightBoolean : 'big'
});
//是否是大屏
const heightBoolean = props.heightBoolean

const canvasRef = ref<HTMLCanvasElement>();

let id: number | undefined = undefined;

const imageUrl = toRef(props, 'imageUrl');


const { image } = useImageLoader(imageUrl);



function resizeCanvas() {
  const canvas = canvasRef.value;
  if (!canvas) {
    throw new Error('canvas元素不能为空');
  }
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('canvas元素不能为空');
  }
  const w = (canvas.width = window.innerWidth);
  const heighBig = window.innerHeight
  const heightNormal = document.getElementsByClassName('contentBg')[3].clientHeight
  const h = (canvas.height = heightBoolean === 'big'? heighBig :heightNormal);
  const hue = 217;
  // 创建存储星星的容器
  const stars = ref<Star[]>([]);
  const maxStars = props.maxStars;
  const count = ref(0);

  const canvas2 = document.createElement('canvas');
  const ctx2 = canvas2.getContext('2d');
  if (!ctx2) {
    throw new Error('canvas获取context失败！');
  }
  canvas2.width = 100;
  canvas2.height = 100;
  const half = canvas2.width / 2;
  const gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
  gradient2.addColorStop(0.025, '#fff');
  gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
  gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
  gradient2.addColorStop(1, 'transparent');

  ctx2.fillStyle = gradient2;
  ctx2.beginPath();
  ctx2.arc(half, half, half, 0, Math.PI * 2);
  ctx2.fill();

  for (let i = 0; i < maxStars; i++) {
    const option = {
      w,
      h,
      maxStars
    };
    const star = new Star(option);
    stars.value.push(star);
    count.value++;
  }

  const animation = () => {
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
    // 清除画布
    ctx.fillRect(0, 0, w, h);
    if (imageUrl.value !== '' && image.value) {
      const { width, height } = image.value as HTMLImageElement;
      // 绘制背景图片
      ctx.drawImage(image.value as HTMLImageElement, 0, 0, w, (height * w) / width);
    }

    // 绘制星星
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 1, l = stars.value.length; i < l; i++) {
      stars.value[i].draw(ctx, canvas2);
    }

    // 将动画放入动画帧中，提升性能
    id = window.requestAnimationFrame(animation);
  };

  animation();
}

onMounted(() => {
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
});
onBeforeUnmount(() => {
  if (id) {
    window.cancelAnimationFrame(id);
  }
  window.removeEventListener('resize', resizeCanvas);
});
</script>



<style scoped>
.star_Container {
  width: 100vw;
  height: calc(100vh - var(--narHeight));
  .star-bg-canvas{
    width: 100%;
    height: calc(100vh - var(--narHeight));
  }
}
.star_ContainerBig {
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: -1;
  .star-bg-canvasBig{
    width: 100%;
    height: 100vh;
  }
}
</style>
<script setup lang="ts">
// 使用 ref 创建响应式变量
const canvas = ref<HTMLCanvasElement | null>(null);
const allElement = ref<ReadyRun[]>([]);
const styleColor = ref<number>(findRandom(0, 360));

let w = 0;
let h = 0;

// 定义属性接口
type Attribute = {
  num: number;
  startProbability: number;
  sizeMin: number;
  sizeMax: number;
  sizeAddMin: number;
  sizeAddMax: number;
  opacityMin: number;
  opacityMax: number;
  opacityPrevMin: number;
  opacityPrevMax: number;
  lightMin: number;
  lightMax: number;
};

// 初始化属性对象
const allAttribute: Attribute = {
  num: 50, // 数量
  startProbability: 0.1,
  sizeMin: 1,
  sizeMax: 2,
  sizeAddMin: 0.3,
  sizeAddMax: 0.5,
  opacityMin: 0.3,
  opacityMax: 0.5,
  opacityPrevMin: 0.003,
  opacityPrevMax: 0.005,
  lightMin: 0,
  lightMax: 90,
};

// 开始动画函数
function start() {
  if (!canvas.value)
    return;

  const ctx = canvas.value.getContext('2d');
  if (!ctx)
    return;

  window.requestAnimationFrame(start);
  styleColor.value += 0.1;
  ctx.fillStyle = `hsl(${styleColor.value},100%,97%)`;
  ctx.fillRect(0, 0, w, h);

  if (allElement.value.length < allAttribute.num && Math.random() < allAttribute.startProbability)
    allElement.value.push(new ReadyRun());

  allElement.value.forEach((line) => {
    line.toStep(ctx);
  });
}

// 用于创建 ReadyRun 实例的类
class ReadyRun {
  x = 0;
  y = 0;
  size = 0;
  sizeChange = 0;
  opacity = 0;
  opacityChange = 0;
  light = 0;
  color = '';
  speed: number = findRandom(0.5, 6); // 漂浮速度

  constructor() {
    this.toReset();
  }

  // 重置 ReadyRun 实例的属性
  toReset() {
    this.x = findRandom(0, w);
    this.y = findRandom(0, h);
    this.size = findRandom(allAttribute.sizeMin, allAttribute.sizeMax);
    this.sizeChange = findRandom(
      allAttribute.sizeAddMin,
      allAttribute.sizeAddMax,
    );
    this.opacity = findRandom(allAttribute.opacityMin, allAttribute.opacityMax);
    this.opacityChange = findRandom(
      allAttribute.opacityPrevMin,
      allAttribute.opacityPrevMax,
    );
    this.light = findRandom(allAttribute.lightMin, allAttribute.lightMax);
    this.color = `hsl(${styleColor.value},100%,${this.light}%)`;
  }

  // 执行每一帧动画的方法
  toStep(ctx: CanvasRenderingContext2D) {
    const m = 0.1; // 调整上升速度
    this.opacity -= this.opacityChange;
    this.size += this.sizeChange;

    if (this.opacity <= 0) {
      this.toReset();
      return;
    }
    this.y -= this.speed; // 向上漂浮

    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    arcHeart(ctx, this.x, this.y, this.size, m);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

// 返回一个介于参数1和参数2之间的随机数
function findRandom(numOne: number, numTwo: number): number {
  return Math.random() * (numTwo - numOne) + numOne;
}

// 绘制爱心图案的方法
function arcHeart(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  z: number,
  m: number,
) {
  y -= m * 10;
  ctx.moveTo(x, y);
  z *= 0.05;
  ctx.bezierCurveTo(x, y - 3 * z, x - 5 * z, y - 15 * z, x - 25 * z, y - 15 * z);
  ctx.bezierCurveTo(x - 55 * z, y - 15 * z, x - 55 * z, y + 22.5 * z, x - 55 * z, y + 22.5 * z);
  ctx.bezierCurveTo(x - 55 * z, y + 40 * z, x - 35 * z, y + 62 * z, x, y + 80 * z);
  ctx.bezierCurveTo(x + 35 * z, y + 62 * z, x + 55 * z, y + 40 * z, x + 55 * z, y + 22.5 * z);
  ctx.bezierCurveTo(x + 55 * z, y + 22.5 * z, x + 55 * z, y - 15 * z, x + 25 * z, y - 15 * z);
  ctx.bezierCurveTo(x + 10 * z, y - 15 * z, x, y - 3 * z, x, y);
}

// 窗口尺寸调整时触发的函数
function windowResize() {
  w = window.innerWidth;
  h = window.innerHeight;
  if (canvas.value) {
    canvas.value.width = w;
    canvas.value.height = h;
  }
}

// 在组件挂载后运行的函数
onMounted(() => {
  windowResize();
  start();
  // 窗口尺寸调整时触发的事件监听
  window.onresize = windowResize;
});
</script>

<template>
  <div class="w-full h-full">
    <h1 class="absolute left-1/2 -translate-x-1/2 top-[30%] z-10 w-full text-center text-5xl text-sky-900">
      我们的小窝
    </h1>
    <h3 class="absolute left-1/2 -translate-x-1/2 top-[46%] z-10 w-full text-center text-2xl text-sky-900">
      还在建设中，敬请期待...
    </h3>
    <canvas ref="canvas" class="absolute left-0 top-0 z-0 w-full h-full" />
  </div>
</template>

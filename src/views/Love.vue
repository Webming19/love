<!-- Love -->
<script lang="ts" setup>
type Heart = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const canvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  const ctx = canvas.value!.getContext('2d')!;

  let hearts: Heart[] = [];
  const heartImage = new Image();
  heartImage.src = '/public/img/heart.png';

  const spawnHeart = (x: number, y: number) => {
    hearts.push({ x, y, width: 10, height: 10 });
  };

  heartImage.onload = () => {
    setInterval(() => {
      ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
      spawnHeart(Math.random() * canvas.value!.width, Math.random() * canvas.value!.height);
      hearts.forEach((heart) => {
        heart.y += 1;
        ctx.drawImage(heartImage, heart.x, heart.y, heart.width, heart.height);
      });
      hearts = hearts.filter(heart => heart.y < canvas.value!.height);
    }, 100);
  };
});
</script>

<template>
  <div class="love">
    <canvas ref="canvas" />
  </div>
</template>

<style scoped lang="less">
.love {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>

<!-- BackgroundCanvas.svelte -->
<script>
    import { onMount } from 'svelte';
    import {imageStore,
    } from "./data/store";
    import { get } from 'svelte/store';
    let canvas;
    let context; // 替换为你的图片路径
   
    onMount(() => {
        context = canvas.getContext('2d');
        const image = new Image();
        // @ts-ignore
        image.src = get(imageStore); // 获取store中的图片数据

        image.onload = () => {
        // 使用drawImage绘制图片
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
    });
    $: {
    imageStore.subscribe((src) => {
      if (src) {
        const image = new Image();
        image.src = src;
        image.onload = () => {
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
      }
    });
  }
</script>

<style>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* 将 canvas 置于最底层 */
  }
</style>

<canvas bind:this={canvas} width={window.innerWidth} height={window.innerHeight}></canvas>
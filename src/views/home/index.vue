<script lang='ts' setup>
import { onBeforeMount, onMounted, } from "vue";
import { storeToRefs } from 'pinia'
import ElementPlus from 'element-plus';
import { $echarts, ECOption } from '@/utils/echarts'
import { useCounterStore } from "@/stores/counter"
const counter = useCounterStore();
const { count } = storeToRefs(counter)
console.log(count)

onMounted(() => {
  // 测试echarts的引入
  const ele = document.getElementById('echarts') as HTMLCanvasElement
  const myChart = $echarts.init(ele)
  const option: ECOption = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  }
  myChart.setOption(option)
})
</script>

<template>
  <div class="home">
    <div style="text-align:center;">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo">
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo">
      </a>
      <a href="https://element-plus.gitee.io/zh-CN/" target="_blank">
        <img src="@/assets/element-plus-logo.svg" class="logo element" alt="Vue logo">
      </a>
    </div>
    <div @click="counter.increment()">
      点击数字-&gt; {{ count }}
    </div>
    <div id="echarts" style="width: 400px;height: 200px;"></div>
    <h1 style="color:#459FFC">
      ElementPlus按钮
    </h1>
    <el-button>Default</el-button>
    <el-button type="primary">
      Primary
    </el-button>
    <el-button type="success">
      Success
    </el-button>
    <el-button type="info">
      Info
    </el-button>
    <el-button type="warning">
      Warning
    </el-button>
    <el-button type="danger">
      Danger
    </el-button>
    <el-button>中文</el-button>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.logo.element:hover {
  filter: drop-shadow(0 0 2em #459FFCaa);
}
</style>
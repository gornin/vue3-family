import { defineStore } from "pinia"
import { ref } from "vue"

/**
 * pinia
 * 文档指引 https://pinia.vuejs.org/introduction.html
 */

// 可以在​​defineStore​​​中使用类​​setup​​的写法：直接将上面的配置项替换成一个函数
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)

    function increment() {
        count.value++
    }

    return { count, increment }
})
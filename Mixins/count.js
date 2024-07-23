import { ref } from 'vue'

export default function onCounter () {
    const count = ref(0)
    function incrementCounter () {
      count.value += 1
    }
    return {
      count,
      incrementCounter
    }
  }

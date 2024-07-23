<template>
    <div>
        <h2 @mouseover="incrementCounter">COunter {{count}}</h2>
    </div>
</template>
<script>
import Counter from '../../Mixins/count.js'
export default {
    setup() {
        const { count, incrementCounter } = Counter()
        return {
            count,
            incrementCounter
        }
    },
}
</script>

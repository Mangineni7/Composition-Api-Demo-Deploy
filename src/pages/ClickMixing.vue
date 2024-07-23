<template>
    <div>
        <q-btn class="q-ma-lg" outline dense color="cyan" label='click'   @click="incrementCounter" />
        <h2>Click:{{count}}</h2>
    </div>
</template>
<script>
import Counter from '../../Mixins/count.js'
export default {
    name: 'CompositionMixing',
    setup () {
        const { count, incrementCounter } = Counter()
        return {
            count,
            incrementCounter
        }
    },
}
</script>

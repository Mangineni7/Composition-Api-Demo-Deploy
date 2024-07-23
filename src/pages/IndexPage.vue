<template>
  <q-page class="flex flex-start column">
    <counter-mixins />
    <hover-mixins />
    <q-btn outline color="cyan" label="count" @click=" Increment()" class="q-mt-sm" style="width:100px" />
    <h2>count : {{count}}</h2>
    <q-btn label="go to Computed.vue" @click="this.$router.push('/computed')" style="width:200px"/>
  </q-page>
</template>
<script>
import CounterMixins from './ClickMixing.vue'
import hoverMixins from './hoverMixins.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IndexPage',
  components: {
    CounterMixins,
    hoverMixins

  }
})
</script>

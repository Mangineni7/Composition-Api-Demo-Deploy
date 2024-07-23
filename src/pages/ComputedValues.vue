<template>
<div>
<h2>total with Function - {{items.reduce((total,curr) => (total = total +curr.price), 0 )}} </h2>
<q-btn @click="items.push({id: 1, price:100})" label="add new" />
<h2>Computed Total - {{amount}}</h2>
<h2>MEthod TOtal - {{totalAmount()}}</h2>
<q-input v-model="country" type='text' />
</div>
</template>

<script>
export default {

  data () {
    return {
      items: [
        {
            id: 1,
            price: 100
        },
        {
            id: 2,
            price: 200
        },
        {
            id: 3,
            price: 300
        }
      ],
      country: ''

    }
  },
  methods: {
    totalAmount () {
      console.log('methiodsss');

       return this.items.reduce((total, curr) => (total = total + curr.price), 0)
    }
    // computed property will automatically updated when data is changed which is assaigned in computed property
    // function will recalculate the values each time its called even if we are not changing the data

  },
  computed: {
    amount () {
      console.log('computed property')
      return this.items.reduce((total, curr) => (total = total + curr.price), 0)
    }
  }

}
</script>

<style>

</style>

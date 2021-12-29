<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cxForm',
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      default: {},
    },
    rules: {
      type: Object,
      default: {},
    },
  },
  data () {
    return {
    }
  },
  methods: {
    validate(cb) {
      const tasks = this.$children.filter((item)=> item.prop).map((item)=> item.validate());
      Promise.all(tasks)
        .then((i)=> cb(true))
        .catch(()=> cb(false))
    }
  },
  mounted () {

  }
}
</script>

<style lang='scss' scoped>

</style>

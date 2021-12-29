<template>
  <div>
    <input :value="value" @input="onInput" v-bind="$attrs"/>
  </div>
</template>

<script>
export default {
  name: 'cxInput',
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
      this.$parent.$emit('validate');
    }
  },
  mounted () {

  }
}
</script>

<style lang='scss' scoped>

</style>

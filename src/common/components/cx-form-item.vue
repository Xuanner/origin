<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  name: 'cxFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      error: ''
    }
  },
  methods: {
    validate() {
      // 获取校验规则
      const rule = this.form.rules[this.prop];
      // 获取校验的值
      const value = this.form.model[this.prop]
      // 做校验
      const schema = new Schema({[this.prop]: rule});
      return schema.validate({[this.prop]: value}, (error)=> {
        if (error) {
          this.error = error[0].message;
        }else {
          this.error = '';
        }
      })
    }
  },
  created () {
    this.$on('validate', ()=> {
      this.validate();
    })
  }
}
</script>

<style lang='scss' scoped>

</style>

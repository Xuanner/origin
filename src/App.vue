<template>
  <div>
    <!-- <div class="origin-app">haha</div>
    <div :class="dark.bg">haha</div>
    <div class="origin-app">haha</div>
    <div :class="light.bg">haha</div> -->
    <cx-form ref="form" :model="form" :rules="rules">
      <cx-form-item label="用户名" prop="username">
        <cx-input v-model="form.username" placeholder="请输入用户名"></cx-input>
      </cx-form-item>
      <div>{{ form.username }}</div>
      <cx-form-item label="密码" prop="password">
        <cx-input v-model="form.password" type="password" placeholder="请输入密码"></cx-input>
      </cx-form-item>
      <div>{{ form.password }}</div>
      <cx-form-item>
        <button @click="onSubmit">提交</button>
      </cx-form-item>
    </cx-form>
  </div>
  
</template>

<script>
import cxForm from '@/common/components/cx-form'
import cxFormItem from '@/common/components/cx-form-item'
import cxInput from '@/common/components/cx-input'
export default {
  name: 'App',
  components: {
    cxForm,
    cxFormItem,
    cxInput,
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名~~', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码~~', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid)=> {
        if(valid) {
          console.log(valid);
          
        }else {
          console.log(valid);
          
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.origin-app {
  background: red;
}
</style>
<style module="dark">
.bg {
  background: pink;
}
</style>
<style module="light">
.bg {
  background: green;
}
</style>



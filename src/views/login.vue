<template>
  <div class="login">
    <p>elle学习</p>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="login-ruleForm"
    >
      <el-form-item label="姓名" prop="user">
        <el-input v-model="ruleForm.user"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login()">
          登陆
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        user: "admin",
        password: "",
      },
      rules: {
        user: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          {
            min: 3,
            max: 18,
            message: "长度在 3 到 18 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      let {user,password} = this.ruleForm;
      this.$http({
        method: post,
        url:'/get_login',
        data:{
          user,
          password
        }
      }).then(res => {
        console.log(res);
        let {code,msg} = res.data;
        if(code == '200') {
          sessionStorage.setItem('username', user);
          this.$router.push('/home');
        } else {
          alert(msg);
        }
      })
    }
  },
};
</script>
<style scoped>
</style>
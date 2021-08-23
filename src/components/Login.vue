<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="form"
      :rules="rules"
      label-width="80px"
      class="login-form"
      @keyup.enter.native="onSubmit('loginForm')"
    >
      <h2 class="login-title">管理系统</h2>
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('loginForm')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { login } from "../axios/api.js";
export default {
  data() {
    return {
      form: {
        userName: "",
        password: "",
      },
      rules: {
        userName: [
          { required: true, message: "用户名不能为空", trigger: "change" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    onSubmit(fromName) {
      this.$refs[fromName].validate((valid) => {
        if (valid) {
          login(this.form.userName,this.form.password).then((result) => {
            console.log(result);
            if(200 == result.code){
              if('验证成功！' == result.msg){
                this.$message({message:result.msg,duration:2000,type:'success'});
                this.$router.push('/hello');
              }else{
                this.$message({message:result.msg,duration:2000,type:'error'})
              } 
            }else{
              this.$message({message:result.msg,duration:2000,type:'error'})
            }
            
          },(error) =>{
              this.$message({message:'网络或内部错误，请联系管理员',duration:2000,type:'error'})
          });
        }
      });
    },
  },
};
</script>

<style acoped>
.login-form {
  width: 350px;
  margin: 160px auto; /* 上下间距160px，左右自动居中*/
  background-color: rgb(255, 255, 255, 0.8); /* 透明背景色 */
  padding: 30px;
  border-radius: 20px; /* 圆角 */
}

/* 背景 */
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

/* 标题 */
.login-title {
  color: #303133;
  text-align: center;
}
</style>

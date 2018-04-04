<template>
   <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>PMS-物业管理系统</v-toolbar-title>
                <v-spacer></v-spacer>
                
                  <v-btn
                    icon
                    large
                    
                    to="/register"
                    target="_blank"
                    
                  >
                  注册
                    <!-- <v-icon large>code</v-icon> -->
                  </v-btn>
                 
                
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-text-field prepend-icon="person" name="login" label="用户名" type="text" v-model="userCode" required :rules="userCodeRules"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="密码" id="password" v-model="userPasswd" type="password" :rules="userPasswdRules" required></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="userLogin" :disabled="!valid" >登录</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
              <v-alert type="error" :value="alert" transition="scale-transition" dismissible >
      用户名或密码错误
    </v-alert>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      alert: false,
      valid: false,
      userCode: '',
      userCodeRules: [
        v => !!v || '请输入用户名'
      ],
      userPasswd: '',
      userPasswdRules: [
        v => !!v || '请输入密码'
      ]
    }
  },
  props: {},
  computed: mapGetters([]),
  components: {},
  methods: {
    userLogin () {
      if (this.$refs.form.validate()) {
        var that = this
        var where = {'userCode': this.userCode, 'userPasswd': this.userPasswd}
        this.$store.dispatch('user/login', where).then((req) => {
          if (req.data.results.length > 0) {
            that.$router.push('/main')
            that.$store.commit('user/setUser', req.data.results[0])
          } else {

          }
        })
      }
    }
  }
}
</script>
<style scoped>
#inspire {
  background: url("~/static/cq.jpeg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

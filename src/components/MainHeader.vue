<template>
  <header>
    <div class="container">
      <router-link
        :to="{ name: 'main' }"
        class="logo"
      >
        Кинотеатр
      </router-link>
      <div class="links">
        <router-link :to="{ name: 'films' }">
          Фильмы
        </router-link>
        <router-link :to="{ name: 'documents' }">
          Эко-безопасность
        </router-link>
        <button
          type="button"
          class="btn btn-outline-light btn-lg"
          @click="onAuthBtnClick"
        >
          {{ getUser ? 'Выйти' : 'Войти' }}
        </button>
      </div>
    </div>
    <auth-modal
      v-if="isAuthModalOpen"
      @close="isAuthModalOpen = false"
    />
  </header>
</template>

<script>
import AuthModal from './AuthModal'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: { AuthModal },
  data() {
    return {
      isAuthorized: false,
      isAuthModalOpen: false
    }
  },
  computed: {
    ...mapGetters({
      getUser: 'user/getUser'
    })
  },
  created() {
    this.setUser(JSON.parse(localStorage.getItem('user')))
  },
  methods: {
    ...mapActions({
      setUser: 'user/setUser',
      deleteUser: 'user/deleteUser'
    }),
    onAuthBtnClick() {
      if (this.getUser) {
        // this.$api.auth.logout()
        localStorage.removeItem('user')
        this.deleteUser()
        this.$router.push({ name: 'main' })
      } else {
        this.isAuthModalOpen = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  background-color: #0c0c0c;
  .container {
    margin-top: 0;
    display: flex;
    align-items: baseline;
  }
  padding: 20px 0;
  a {
    text-decoration: none;
    font-weight: 700;
    color: #fff;
    font-size: 25px;
    padding: 0 10px;
  }
  .logo {
    color: #eb5804;
    font-size: 30px;
  }
  .links {
    margin-left: 75px;
    display: flex;
    flex-grow: 1;
    .router-link-active {
      border-bottom: 2px solid #eb5804;
    }
  }
  button {
    margin-left: auto;
  }
}
</style>

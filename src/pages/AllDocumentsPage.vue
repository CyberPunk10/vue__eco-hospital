<template>
  <div class="films-page container">
    <h2>Список документов</h2>
    <documents-list
      v-if="documents"
      :documents="documents"
    />
    <p v-else>Доступных документов нет</p>
  </div>
</template>

<script>
import DocumentsList from '../components/DocumentsList'
import { mapGetters } from 'vuex'


export default {
  components: { DocumentsList },
  data() {
    return {
      documents: null
    }
  },
  computed: {
    ...mapGetters({
      userData: 'user/getUser'
    })
  },
  created() {
    const userData = this.userData
    this.$load(async () => {
      this.documents = (await this.$api.documents.getTest({
        params: {
          json: {
            id_login: userData.id_login,
            id_people: userData.id_people, // такой же, как id_login
            TK: userData.TK,
            IMEI: 'test',
            Name_app: 'connect',
            Name_event: 'list_load'
          }
        }
      })).data.body
      this.$emit('close')
    })
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 40px;
  color: #ffffff;
  margin-bottom: 30px;
}
p {
  font-size: 20px;
  color: #777;
  text-align: center;
  margin-top: 5rem;
}
</style>
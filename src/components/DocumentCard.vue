<template>
  <div class="document-card">
    <img
      v-if="document.file_ext === 'pdf'"
      class="document-icon"
      src="../assets/images/pdf.svg"
      alt="Документ типа PDF"
      width="100%"
      height="100%"
    />
    <p class="title">{{ document.doc_name }} {{ document.date_doc }}</p>
    <div
      @click="getPatientDocument"
      class="more-info"
    >
      Скачать документ
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    document: {
      type: Object
    }
  },
  computed: {
    ...mapGetters({
      getUser: 'user/getUser'
    })
  },

  methods: {
    getPatientDocument() {
      const userData = this.getUser
      this.$load(async () => {
        const data = (await this.$api.documents.getPatientDocument({
          params: {
            json: {
              id_login: userData.id_login,
              id_people: userData.id_people, // такой же, как id_login
              TK: userData.TK,
              IMEI: 'test',
              Name_app: 'connect',
              Name_event: 'get_pic_path',
              id_document: this.document.id_document,
              doc_type: this.document.doc_type
            }
          }
        })).data
        window.location.href = `https://host1.medsafe.tech:40443/${data.body[0].hash}`
      })
    },
  }
}
</script>

<style lang="sass" scoped>
.document-card
  position: relative
  display: flex
  width: 100%
  align-items: center
  background: linear-gradient( 90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 90% )
  background-color: #111
  height: 100px
  border-radius: 10px

  .document-icon
    flex-basis: 100px
    padding: 20px

  .title
    height: 100%
    display: flex
    align-items: center
    margin-bottom: 0
    width: 100%
    color: #ffffff
    font-weight: 700
    padding: 10px
    font-size: 25px

  .more-info
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    border-radius: 10px
    background: linear-gradient( 90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, .2) 100% )
    color: #ffffff
    display: flex
    justify-content: center
    align-items: center
    font-weight: 700
    font-size: 30px
    text-decoration: none
    opacity: 0
    transition: all 0.2s ease
    &:hover,
    &:focus
      opacity: 1
</style>
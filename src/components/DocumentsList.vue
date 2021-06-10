<template>
  <div class="film-list">
    <p class="list__info">"Сертификат моряка" не найден на сервере (остальные PDF откроются)</p>
    <document-card
      class="film-card"
      v-for="document in documents"
      :key="document.id"
      :document="document"
    />
  </div>
</template>

<script>
import DocumentCard from './DocumentCard'

export default {
  props: {
    documents: {
      type: Array,
      default: () => []
    }
  },
  components: { DocumentCard }
}
</script>

<style lang="scss" scoped>
.film-card {
  margin-bottom: 40px;
}
.list__info {
  color: #777;
}
</style>
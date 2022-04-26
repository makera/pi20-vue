<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <div v-for="row in rows" class="col" :key="row.id">
      <div class="card shadow-sm">
        <div class="card-body">
          <p class="card-text">{{ row.name }}</p>
          <p class="card-text">{{ row.des }}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary" @click="removeCard(row.id)">Remove</button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProdCards",
  computed: {
    rows() {
      return this.$store.state.rows
    }
  },
  methods: {
    removeCard(id) {
      this.$store.dispatch('removeRow', id)
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <main>
    <section class="py-5 container">
      <table class="table">
        <thead>
        <tr>
          <th v-for="col in cols" :key="col.name" scope="col">{{ col.title }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td v-for="col in cols" :key="col.name">{{ row[col.name] }}</td>
        </tr>
        </tbody>
      </table>
      <form @submit="handleSubmit">
        <div class="mb-3">
          <label for="name" class="form-label">Название</label>
          <input type="text" class="form-control" id="name" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="des" class="form-label">Описание</label>
          <input type="text" class="form-control" id="des">
        </div>
        <button type="submit" class="btn btn-primary">Сохранить</button>
      </form>
    </section>
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Album example</h1>
          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator,
            etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
          <p>
            <a href="#" class="btn btn-primary my-2">Main call to action</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">
      <ProdCards />
      </div>
    </div>

  </main>
</template>

<script>
import ProdCards from "@/components/ProdCards";
export default {
  name: 'HelloWorld',
  components: {ProdCards},
  props: {
    msg: String
  },
  computed: {
    cols() {
      return this.$store.state.cols
    },
    rows() {
      return this.$store.state.rows
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.$store.commit('addRow', {des: e.target.elements.des.value, name: e.target.elements.name.value})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

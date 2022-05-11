<template>
  <div id="app">
      <PageHeader title="Expense Tracker" descriptionText="Keeps track of the residents' in house expenses.."/>
      <ResidentSection/>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader.vue"
import ResidentSection from "./components/resident-section/ResidentSection.vue"

export default {
  name: 'App',
  components: {
      PageHeader,
      ResidentSection
  }
}
</script>


vue.component(template: '')
Vue.createApp(el: '#app')
<template>
  <div>
    <div>
      <h1>chart</h1>
      <div class="menu">
        <nuxt-link to="/">home</nuxt-link>
        <nuxt-link to="/test">test</nuxt-link>
      </div>

      <div id="lineChart"></div>
    </div>
  </div>
</template>

<script>
import toastuiChart from '~/plugins/toastuiChart'

export default {
  name: 'IndexPage',
  data() {
    return {
      showChart: false
    }
  },
  mounted() {
    if (!this.showChart && process.client) {
      if (!toastuiChart('lineChart')) return
      this.showChart = true
    }
  },
  destroyed() {
    this.showChart = false
  },
}
</script>

<template>
  <div>
    <div>
      <h1>chart</h1>
      <div class="menu">
        <nuxt-link to="/">home</nuxt-link>
        <nuxt-link to="/test">test</nuxt-link>
      </div>

      <article class="message">
        <div class="message-header">Toast UI NUXT</div>
        <div class="message-body">
          <div id="lineChart" style="width: 100%; height: 300px;"></div>
        </div>
      </article>

    </div>
  </div>
</template>

<script>
import toastuiChart from '~/plugins/toastuiChart'

const dataMoney = {
  categories: ['July', 'Aug', 'Sep', 'Oct', 'Nov'],
  series: [
    {
      name: 'Budget',
      data: [7000, 5000, 7000, 6000, 4000],
    },
    {
      name: 'Income',
      data: [1000, 7000, 2000, 5000, 3000],
    },
  ],
};

export default {
  name: 'IndexPage',
  data() {
    return {
      showChart: false
    }
  },
  mounted() {
    if (!this.showChart && process.client) {
      if (!toastuiChart('line', 'lineChart', dataMoney)) return
      this.showChart = true
    }
  },
  destroyed() {
    this.showChart = false
  },
}
</script>

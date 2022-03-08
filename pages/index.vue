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
          <div id="lineChart" :style="`width: ${chartWidth}; height: ${chartHeight};`" />
          <div id="pieChart" :style="`width: ${chartWidth}; height: ${chartHeight};`" />
        </div>
      </article>

    </div>
  </div>
</template>

<script>
import toastuiChart from '~/plugins/toastuiChart'

export default {
  name: 'IndexPage',
  data() {
    return {
      showChart: false,
      chartWidth: '100%',
      chartHeight: '300px',
      dataLine: {
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
      },
      dataPie: {
        categories: ['시작연도'],
        series: [
          {
            name: '2000',
            data: 11.3
          },
          {
            name: '2004',
            data: 12
          },
          {
            name: '2009',
            data: 28
          },
        ]
      }
    }
  },
  mounted() {
    if (!this.showChart && process.client) {
      if (!toastuiChart('line', 'lineChart', this.dataLine)) return
      if (!toastuiChart('pie', 'pieChart', this.dataPie)) return
      this.showChart = true
    }
  },
  destroyed() {
    this.showChart = false
  },
}
</script>

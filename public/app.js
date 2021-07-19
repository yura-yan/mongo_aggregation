new Vue({
    el: '#app',
    data() {
      return {
        isDark: true,
        show: true,
        headers: [
          {
            text: 'Country',
            align: 'left',
            value: '_id'
          },
          { text: 'Difference', value: 'allDiffs', sortable: false },
          { text: 'Count', value: 'count', sortable: false },
          { text: 'Longitude', value: 'longitude', sortable: false },
          { text: 'Latitude', value: 'latitude', sortable: false }
        ],
        countries: []
      }
    },
    created() {
      fetch('/api', {
        method: 'get'
      })
      .then(res => res.json())
      .then(countries => {
        this.countries = countries
      })
      .catch(e => {
        console.log(e)
      })
    }
  })
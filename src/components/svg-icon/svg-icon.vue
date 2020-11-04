<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
  export default {
    name: 'svg-icon',
    props: {
      className: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        required: true
      }
    },
    computed: {
      svgClass() {
        if (this.className) {
          return 'svg-icon ' + this.className
        } else {
          return 'svg-icon'
        }
      },
      iconName() {
        return `#icon-${this.value}`
      }
    }
  }
</script>

<style scoped>

</style>
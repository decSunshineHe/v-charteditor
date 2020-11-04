import svgIcon from './svg-icon'

svgIcon.install = function(Vue) {
  Vue.component(svgIcon.name, svgIcon)
}

export default svgIcon
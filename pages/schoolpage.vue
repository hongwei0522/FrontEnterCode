<template>
  <schoolContain :title="title" :frames="frames" />
</template>

<script>


export default {
   head() {
    return {
      title: '(XXX)高中',
      meta: [
        { charset: 'utf-8' },
        { hid: 'og:title'  , property: 'og:title'  , content: '(XXX)高中' },
        { hid: 'og:image' , property: 'og:image' , content: require('@/assets/img/work/n-01_s01_02.jpg') },
        { hid: 'description', name: 'description', content: '(XXX)高中' },
        { hid: 'og:description' , property: 'og:description' , content: '(XXX)高中' },
      ],
    }
  },
  layout: 'default',
  components: {
    schoolContain: require('~/components/school-contain.vue').default,
  },
  props: {
    
  },
  data () {
    return {
      title: '(XXX)高中',
      frames: [
        { img: require('@/assets/img/work/n-01_s01_01.jpeg'), title: '操場也能閱讀？閱讀無限', desc: 'HYC' },
        { img: require('@/assets/img/work/n-01_s01_02.jpg'), title: '閱在花中', desc: '三口' },
        { img: require('@/assets/img/work/n-02_u01_01.jpg'), title: '靜閱', desc: '洗硯' },
        { img: require('@/assets/img/work/n-01_s01_01.jpeg'), title: '操場也能閱讀？閱讀無限', desc: 'HYC' },
        { img: require('@/assets/img/work/n-01_s01_02.jpg'), title: '閱在花中', desc: '三口' },
        { img: require('@/assets/img/work/n-02_u01_01.jpg'), title: '靜閱', desc: '洗硯' },
      ]
    }
  },
  
  computed: {

  },
  methods: {

  },
  watch: {

  }
}

</script>

<style lang="scss">

</style>
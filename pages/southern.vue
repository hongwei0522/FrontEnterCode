<template>
  <div>
    <schoolContain :title="title" :frames="frames" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '南部地區',
      meta: [
        { charset: 'utf-8' },
        { hid: 'og:title'  , property: 'og:title'  , content: 'Front-Enter-前端轉職資訊' },
        { hid: 'og:image' , property: 'og:image' , content: require('@/assets/img/work/s01.jpg') },
        { hid: 'description', name: 'description', content: 'Front-Enter-前端轉職資訊' },
        { hid: 'og:description' , property: 'og:description' , content: 'Front-Enter-前端轉職資訊' },
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
      title: '南部地區',
      frames: [
        { img: require('@/assets/img/work/s01.jpg'), title: '六角學院', desc: '六角學院課程種類齊全，加上線上學習達成高效學習，同時也是帶您學到會的線上課程。' },
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

<style lang="scss" scoped>

</style>
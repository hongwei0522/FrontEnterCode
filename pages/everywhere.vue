<template>
  <div>
    <schoolContain :title="title" :frames="frames" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '台灣各地',
      meta: [
        { charset: 'utf-8' },
        { hid: 'og:title'  , property: 'og:title'  , content: 'Front-Enter-前端轉職資訊' },
        { hid: 'og:image' , property: 'og:image' , content: require('@/assets/img/work/e01.jpg') },
        { hid: 'description', name: 'description', content: '台灣各地' },
        { hid: 'og:description' , property: 'og:description' , content: '台灣各地' },
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
      title: '台灣各地',
      frames: [
        { img: require('@/assets/img/work/e01.jpg'), title: '赫綵電腦', desc: '赫綵的講師具備業界實務經驗，網頁發展日新月異，掌握最新趨勢與資訊最重要，讓你技術不落人後。' },
        { img: require('@/assets/img/work/e02.jpg'), title: 'Udemy', desc: 'Udemy 為不同類型的專家、講師提供平台，以免費或收費形式提供課程給大眾。' }

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
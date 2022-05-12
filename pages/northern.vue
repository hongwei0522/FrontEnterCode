<template>
  <schoolContain :title="title" :frames="frames" />
</template>

<script>


export default {
   head() {
    return {
      title: '北部地區',
      meta: [
        { charset: 'utf-8' },
        { hid: 'og:title'  , property: 'og:title'  , content: 'Front-Enter-前端轉職資訊' },
        { hid: 'og:image' , property: 'og:image' , content: require('@/assets/img/work/n01.jpg') },
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
      title: '北部地區',
      frames: [
        { img: require('@/assets/img/work/n01.jpg'), title: '彭彭的課程教學', desc: '彭彭喜歡技術、更喜歡與人互動，是位略懂商業經營和行銷策略的務實創業者。' },
        { img: require('@/assets/img/work/n02.jpg'), title: '飛肯設計學院', desc: '飛肯設計學苑的講師均來自業界，上課時會帶著同學實做練習，並附有教學範例。' },
        { img: require('@/assets/img/work/n03.jpg'), title: '台大資訊系統訓練班', desc: '此課程適合學習網頁設計的初學者，及想要學習 JavaScript / AJAX 動態技術的網頁設計師。' },
        { img: require('@/assets/img/work/n04.jpg'), title: 'AppWorks School', desc: 'AppWorks School 均採實作導向方式，培養有能力解決問題、具開發經驗的程式設計師。' },
        { img: require('@/assets/img/work/n05.jpg'), title: '五倍紅寶石', desc: '五倍規劃從入門到中高階的專業網站開發課程，不管是初學或已有基礎，都可以快速上手。' },
        { img: require('@/assets/img/work/n06.jpg'), title: 'UXabc', desc: 'UXabc 帶您深入淺出地了解網頁前端。課程含專題實作，手刻出自己的第一個網站。' },
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
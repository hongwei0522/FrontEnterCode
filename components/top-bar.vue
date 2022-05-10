<template>

    <div class="topbar">
        <a href="https://ireader.books.com.tw/" target="_blank">
        <img class="topbar-logo" :src="require('@/assets/img/icon/LOGO.png')" alt="logo">
        </a>

        <a href="https://www.facebook.com/books.youth" target="_blank">
        <img class="topbar-share" :src="require('@/assets/img/icon/fb.png')" alt="fb">
        </a>
        
        <a href="https://www.instagram.com/books.youth/" target="_blank">
        <img class="topbar-share" :src="require('@/assets/img/icon/ig-logo-email.png')" alt="ig">
        </a>
    </div>

</template>

<script>
export default {
  components: {

  },
  props: {
    
  },
  data () {
    return {

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
.topbar{
    margin-top: 28px;

    &-logo{
      width: 224px;
      height: 100%;
      margin-right: 20px;
    }
    &-share{
      width: 30px;
      height: 100%;
      margin: 0px 7px 4px 0px;
    }
}

@media( max-width: 1023px ){
.topbar{
    margin-top: 10px;

    &-logo{
    width: 200px;
    margin-right: 6px;
    }
    &-share{
    width: 26px;
    margin: 0px 7px 6px 0px;
    }
}
}
</style>
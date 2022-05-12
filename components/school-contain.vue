<template>
  <div class="schoolpage">
    <div class="schoolpage-outer">

      <topBar/>

        <div class="schoolpage-title">
            <div>{{ this.title }}</div>
            <div>Front-Enter-前端轉職資訊</div>
        </div>

        <div class="schoolpage-swiper-box">
            <swiper class="swiper schoolpage-swiper" :options="swiperOption" ref="mySwiper">
                <swiper-slide class="schoolpage-swiper-slide"
                v-for="(frame, index) in frames"
                :key="index"
                >
                <div class="schoolpage-swiper-bg">
                <div class="schoolpage-swiper-box">
                    <div class="schoolpage-swiper-img" :style="[{'backgroundImage': 'url(' + frame.img + ')'}]"></div>
                    <div class="schoolpage-swiper-title">{{ frame.title }}</div>
                    <div class="schoolpage-swiper-desc">{{ frame.desc }}</div>
                </div>
                </div>

                <div class="schoolpage-swiper-social">
                <a target="_blank" :href="`https://www.facebook.com/sharer/sharer.php?u=${fbUrl}&amp;src=sdkpreparse`">
                <img class="schoolpage-swiper-icon" src="@/assets/img/icon/fb-share.png" alt="share FB">
                </a>
                <!-- href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhongwei0522.github.io%2Fyoungbooks%2Fn01%2F&amp;src=sdkpreparse" -->
                <a target="_blank" :href="`https://social-plugins.line.me/lineit/share?url=${currentUrl}`">
                <img class="schoolpage-swiper-icon" src="@/assets/img/icon/line-share.png" alt="share Line">
                </a>
                <img @click="copy()" class="schoolpage-swiper-icon" src="@/assets/img/icon/copy-link.png" alt="copy Link">
                </div>
                </swiper-slide>
            </swiper>
            <img v-if="slide.isShowPrev" @click="prevSlide()" class="schoolpage-swiper-prev" :src="require('@/assets/img/icon/left-arrow.png')" alt="prev">
            <img v-if="slide.isShowNext" @click="nextSlide()" class="schoolpage-swiper-next" :src="require('@/assets/img/icon/right-arrow.png')" alt="next">
        </div>
        
        <div class="schoolpage-back">
        <nuxt-link to="/">
            <div class="schoolpage-back-btn">
            <div>看其他地區</div>
            <img class="schoolpage-back-icon" src="@/assets/img/icon/go-arrow.png" alt="arrow back">
            </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    topBar: require('~/components/top-bar.vue').default,
  },
  props: {
    frames: {
      type: Array
    },
    title: {
      type: String
    }
  },
  data () {
    return {
      url: {
        first: 'hongwei0522.github.io',
        second: 'youngbooks',
        third: 'schoolpage'
      },
      slide: {
        total: 0,
        current: 0,
        isShowPrev: true,
        isShowNext: true
      },
      swiperOption: {
        scrollbar: true,
        // mousewheel: true,
        slidesPerView: "auto",
        spaceBetween: 75,
        autoplay: {
          disableOnInteraction: false,
          delay: 4000
        },
        breakpoints: {
          1023: {
            slidesPerView: "auto",
            // centeredSlides: false,
            spaceBetween: 75,
          },
          1022: {
            slidesPerView: "auto",
            spaceBetween: 75,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
        observer: true,
        on: {
          resize: () => {
            setTimeout(()=> {
              this.$router.push('/blank')
            }, 500)
          }
        }
      },
      currentUrl: '',
      fbUrl: '',
    }
  },
  mounted () {
    this.slide.total = this.frames.length
    if(this.frames.length == 1) {
      this.slide.isShowPrev = false
      this.slide.isShowNext = false
    }

    this.mySwiper.on('slideChange', () => {
      
    })

    this.currentUrl = window.location.href
    this.fbUrl = window.location.href
    this.fbUrl = this.fbUrl.replace('/', '%2F')
    this.fbUrl = this.fbUrl.replace('/', '%2F')
    this.fbUrl = this.fbUrl.replace('/', '%2F')
    this.fbUrl = this.fbUrl.replace('/', '%2F')
    this.fbUrl = this.fbUrl.replace(':', '%3A')
  },
  computed: {
    mySwiper () { return this.$refs.mySwiper.$swiper }
  },
  methods: {
    prevSlide() {
      // this.mySwiper.slideTo(this.slide.current - 1)
      this.mySwiper.slidePrev()
    },
    nextSlide() {
      // this.mySwiper.slideTo(this.slide.current + 1)
      this.mySwiper.slideNext()
    },

    copy(){
      var domUrl = document.createElement("input");
          domUrl.value = this.currentUrl;
          domUrl.id = "creatDom";
          document.body.appendChild(domUrl);
          domUrl.select(); // 选择对象
          document.execCommand("Copy"); // 执行浏览器复制命令
          let creatDom = document.getElementById("creatDom");
          creatDom.parentNode.removeChild(creatDom);
          this.$message({
              message: '複製成功',
              type: 'success'
          });
    },
  },
  watch: {

  }
}

</script>

<style lang="scss" scoped>
.schoolpage{
  background-image: url(~/assets/img/school/photo-list-bg-pc.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  &-outer {
    max-width: 1400px;
    width: calc(100% - 100px);
    padding: 0px 50px;
  }

  &-title {
    display: flex;
    justify-content: center;
    margin: 40px 0px 40px;
    font-size: 48px;

    & div:first-child {
      margin-right: 60px;
    }
  }

  &-swiper-box {
    position: relative;
  }

  &-swiper {
    width: 100%;

    &-slide {
      width: 404px;
    }

    &-bg {
      background-image: url('../assets/img/school/photo-bg.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
      width: 404px;
      height: 485px;
    }

    &-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 44px 0px 0px 0px;
      font-weight: 500;
    }

    &-img {
      width: 283px;
      height: 283px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }

    &-title {
      font-size: 24px;
      margin-top: 6px;
    }

    &-desc {
      width: 283px;
      font-size: 18px;
      margin-top: 0px;
    }

    &-social {
      display: flex;
      justify-content: flex-end;
      align-items: baseline;
      margin: 4px 32px 0px 0px;
    }

    &-icon {
      width: 40px;
      height: 100%;
      margin-left: 7px;
    }

    &-prev {
      width: 40px;
      height: 40px;
      position: absolute;
      left: -40px;
      top: 50%;
      z-index: 1;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    &-next {
      width: 40px;
      height: 40px;
      position: absolute;
      right: -40px;
      top: 50%;
      z-index: 1;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  &-back {
    display: flex;
    justify-content: flex-end;
    margin: 86px 0px 50px 0px;

    &-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 346px;
      padding: 4px 0px;
      text-align: center;
      font-size: 36px;
      color: black;
      background: #D8D76F;
      border-radius: 50px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    &-icon {
      width: 14px;
      height: 100%;
      margin: 4px 0px 0px 10px;
    }
  }
}
@media( max-width: 1023px ){
.schoolpage {
  background-image: url('../assets/img/school/photo-list-bg-m.jpg');
  
  &-outer {
    width: calc(100% - 10px);
    padding: 0px 5px;
  }

  &-title {
    flex-direction: column;
    align-items: center;
    margin: 60px 0px 0px;
    font-size: 26px;

    & div:first-child {
      margin-right: 0px;
    }
  }

  &-swiper-box {

  }

  &-swiper {


    &-slide {
      
    }

    &-bg {
      margin: auto;
      width: 300px;
      height: 320px;
    }

    &-box {
      padding: 25px 0px 0px 0px;
    }

    &-img {
      width: 210px;
      height: 180px;
    }

    &-title {
      font-size: 16px;
    }

    &-desc {
      width: 210px;
      font-size: 13px;
    }

    &-social {
      justify-content: center;
      margin: 4px 0px 0px 140px;
    }

    &-icon {
      width: 30px;
    }

    &-prev {
      left: calc(50% - 162px);
      width: 30px;
      height: 30px;
    }

    &-next {
      right: calc(50% - 160px);
      width: 30px;
      height: 30px;
    }
  }

  &-back {
    justify-content: center;

    &-btn {
      width: 260px;
      font-size: 24px;
    }

    &-icon {
      width: 10px;
    }
  }

}
}
</style>
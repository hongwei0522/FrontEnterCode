<template>
  <el-select v-model="select.current" placeholder="選擇學校">
    <el-option
      v-for="option in select.options"
      :key="option.name"
      :label="option.name"
      :value="option.name"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  components: {

  },
  props: {
    
  },
  data () {
    return {
      select: {
        current: '選擇學校',
        options: [
          { name: '彭彭的課程教學', path: '/northern' },
          { name: '飛肯設計學院', path: '/northern' },
          { name: '台大資訊系統訓練班', path: '/northern' },
          { name: 'AppWorks School', path: '/northern' },
          { name: '五倍紅寶石', path: '/northern' },
          { name: 'UXabc', path: '/northern' },
          { name: '六角學院', path: '/southern' },
          { name: '赫綵電腦', path: '/everywhere' },
          { name: 'Udemy', path: '/everywhere' },
        ]
      }
    }
  },
  computed: {

  },
  methods: {

  },
  watch: {
    'select.current': {
      handler: function(data) {
        for(let j = 0; j < this.select.options.length; j++) {
          if(this.select.options[j].name == data) {
            this.$router.push(this.select.options[j].path)
          }
        }
      },
    }
  }
}
</script>

<style lang="scss">



</style>

<style>

.el-input--suffix .el-input__inner {
  width: 293px;
  color: #000000;
  background-color: #D8D76F;
  font-size: 20px;
  border: 2px solid #7C794B;
  border-radius: 20px;
}

.el-select .el-input.is-focus .el-input__inner {
  border: 2px solid #7C794B;
}

.el-select .el-input__inner:focus {
  border: 2px solid #7C794B;
}

.el-input__suffix {
  color: #000000;
}

.el-select .el-input .el-select__caret {
  color: #000000;
  font-size: 24px;
  font-weight: bold;
  margin: 2px 10px 0px 0px;
}

.el-select-dropdown__item.selected {
  color: #000000;
  font-weight: bold;
}
.el-select-dropdown{
  background-color: #D8D76F;
  border-radius: 20px;
}

</style>
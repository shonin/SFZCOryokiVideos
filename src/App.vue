<template>
  <div id="app">
    <div class="top-menu">
      <h1 id="title">SFZC Oryoki Instructions</h1>
    </div>
    <Menu
      @changePage="changePage"
      :currentPage="currentPage"
    />
    <div class="container">
      <PlayAll v-if="currentPage==='playAll'"/>
      <TOC v-if="currentPage==='toc'"/>
      <Resources v-if="currentPage==='resources'"/>
      <Credits v-if="currentPage==='credits'"/>
    </div>
    <img class="enso" v-bind:src="getImgSrc('enso.gif')">
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import TOC from './components/TOC.vue'
import Resources from './components/Resources.vue'
import Credits from './components/Credits.vue'

export default {
  name: 'app',
  components: {
    Menu, TOC, Resources, Credits
  },
  data () {
    return {
      currentPage: "toc",
      publicPath: process.env.BASE_URL,
    }
  },
  methods: {
    changePage(pageName) {
      this.currentPage = pageName;
    },
    getImgSrc(img) {
      return this.publicPath + "config/img/" + img;
    },
  }
}
</script>

<style>
#logo {
  width: 80px;
  padding-left: 30px;
}
#title {
  display: inline-block;
  padding-left: 40px;
  vertical-align: top;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
.enso {
  width: 100px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: -100;
}
</style>

<template>
  <div id="app">
    <div class="top-menu">
      <h1 id="title">SFZC Oryoki Instructions</h1>
    </div>
    <Menu
      @changePage="changePage"
    />
    <div class="container">
      <PlayAll v-if="currentPage==='playAll'"/>
      <TOC v-if="currentPage==='toc'"/>
      <Resources v-if="currentPage==='resources'"/>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import TOC from './components/TOC.vue'
import Resources from './components/Resources.vue'

export default {
  name: 'app',
  components: {
    Menu, TOC, Resources
  },
  data () {
    return {
      currentPage: "toc"
    }
  },
  methods: {
    changePage(pageName) {
      this.currentPage = pageName;
    }
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
</style>

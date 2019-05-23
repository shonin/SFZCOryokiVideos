<template>
  <div class="menu">
    <ul>
      <li>
        <a
          href="#"
          @click.prevent="$emit('changePage', 'toc')"
          :class="{ 'active' : currentPage == 'toc'}"
        >Table of Contents</a>
      </li>
      <li>
        <a
          href="#"
          @click.prevent="$emit('changePage', 'resources')"
          :class="{ 'active' : currentPage == 'resources'}"
        >Additional Resources</a>
      </li>
      <li>
        <a
          href="#"
          @click.prevent="$emit('changePage', 'credits')"
          :class="{ 'active' : currentPage == 'credits'}"
        >Credits</a>
      </li>
      <li>
        <a href="https://giving.sfzc.org/give/170840/#!/donation/checkout" target="_blank">Donate</a>
      </li>
      <li>
        <a href="http://sfzc.org" target="_blank">Go to sfzc.org</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    currentPage: String
  }
}
</script>

<style>
.menu ul li {
  display: inline;
  cursor: pointer;
  margin-right: 20px;
}
.menu ul li a {
  color: #2c3e50;
}

li a.active {
  text-decoration: underline;
}
</style>

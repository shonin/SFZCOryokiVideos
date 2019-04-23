<template>
  <div class="menu">
    <ul>
      <li>
        <a href="#" @click.prevent="$emit('changePage', 'toc')">Table of Contents</a>
      </li>
      <li>
        <a href="#" @click.prevent="$emit('changePage', 'resources')">Additional Resources</a>
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
  name: 'Menu'
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
</style>

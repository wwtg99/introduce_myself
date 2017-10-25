<template>
  <div class="skill-detail">
    <div class="title">
      <p class="t1">{{ skill.title }}</p>
      <p class="t2">{{ skill.descr }}</p>
    </div>
    <ul>
      <li v-for="lk in skill.links" ><a v-bind:href="lk.href" target="_blank">{{ lk.name }}</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'skill',
    data () {
      return {

      }
    },
    props: ['skill'],
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .skill-detail {
    padding: 10px;
    position: fixed;
    top: 0;
    right: 0;
    width: 500px;
    height: 100vh;
    border: 1px solid #ddd;
    background-color: rgba(200, 200, 200, 0.9);
  }

  .skill-detail .title .t1 {
    font-size: 18px;
  }

  .skill-detail .title .t2 {
    font-size: 14px;
  }

  .skills_detail ul {
    list-style-type: none;
    padding-left: 0;
    text-align: left;
  }

  .skill-detail ul li {
    position: relative;
    display: block;
    padding: 10px 15px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid #ddd;
  }

  .skill-detail ul li:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .skill-detail ul li:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-bottom: 0;
  }

  .skill-detail li a {
    text-decoration: none;
    color: #000;
    display: block;
  }
</style>

<template>
  <div class="skill" v-on:click="clickSkill">
    <div class="logo">
      <img v-bind:src="skill.logo"/>
    </div>
    <div class="content">
      <div class="title">{{ skill.title }}</div>
      <div class="descr">{{ skill.descr }}</div>
    </div>
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
        clickSkill: function () {
            this.$emit('click_skill');
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .skill {
    display: inline-block;
    position: relative;
    width: 300px;
    height: 100px;
    cursor: pointer;
    padding: 10px 0 10px 0;
  }

  .skill .logo {
    width: 80px;
    height: 80px;
    float: left;
    margin: 0;
  }

  .skill .logo img {
    width: 100%;
  }

  .skill .content {
    width: 170px;
    text-align: left;
    float: left;
    padding: 10px 0 0 30px;
  }

  .skill .content .title {
    font-size: 24px;
  }

  .skill .content .descr {
    font-size: 14px;
  }
</style>

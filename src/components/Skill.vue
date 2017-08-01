<template>
  <div class="skill" v-on:click.stop="clickSkill">
    <svg xmlns="http://www.w3.org/2000/svg">
      <rect class="shape" />
    </svg>
    <div class="wrapper">
      <div class="logo">
        <img v-bind:src="skill.logo"/>
      </div>
      <div class="content">
        <div class="t1">{{ skill.title }}</div>
        <div class="descr">{{ skill.descr }}</div>
      </div>
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
            this.isActive = true;
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
    width: 30%;
    min-width: 300px;
    height: 100px;
    cursor: pointer;
    padding: 10px 10px 10px 10px;
    transition: all 0.5s;
  }

  .skill svg {
    width: 100%;
    height: 100px;
  }

  .skill svg rect {
    width: 100%;
    height: 100px;
  }

  .shape {
    fill: transparent;
    stroke-dasharray: 140 640;
    stroke-dashoffset: -554;
    stroke-width: 8px;
    stroke: #FFE440;
  }

  @keyframes draw {
    0% {
      stroke-dasharray: 140 540;
      stroke-dashoffset: -474;
      stroke-width: 8px;
    }
    100% {
      stroke-dasharray: 900;
      stroke-dashoffset: 0;
      stroke-width: 2px;
    }
  }

  .skill:hover .shape {
    -webkit-animation: 0.5s draw linear forwards;
    animation: 0.5s draw linear forwards;
  }

  .skill .wrapper {
    position: relative;
    top: -110px;
    padding: 10px;
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
    min-width: 200px;
    text-align: left;
    float: left;
    padding: 10px 0 0 30px;
  }

  .skill .content .t1 {
    font-size: 24px;
  }

  .skill .content .descr {
    font-size: 14px;
  }
</style>

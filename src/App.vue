<template>
  <div id="app">
    <!--<img src="./assets/bg.jpg">-->
    <div class="block" id="first-block">
      <div class="float-block">
        <h1>Welcome Visitor</h1>
        <p>aa</p>
      </div>
    </div>
    <div class="block" id="second-block">
      <p class="title">选择需要学习的技能</p>
      <div class="skills">
        <skill v-for="(s, index) in skills" v-bind:skill="s" v-on:click_skill="clickSkill(index)"></skill>
      </div>
      <div class="skills_detail">
        <skill-detail v-for="(s, index) in skills" v-if="showSkill == index" v-bind:skill="s"></skill-detail>
      </div>
    </div>
  </div>
</template>

<script>
import Skill from './components/Skill'
import SkillDetail from './components/SkillDetail'

export default {
  name: 'app',
  components: {
    Skill, SkillDetail
  },
  data () {
      return {
        skills: [
          { title: 'Web', 'descr': 'HTML, CSS, Javascript', logo: '/static/html5.png', links: [
            { name: 'a1', href: 'aa.html'},
            { name: 'a2', href: 'aa.html'},
            { name: 'a3', href: 'aa.html'}
          ] },
          { title: 'PHP', 'descr': 'PHP', logo: '/static/php.png', links: [

          ] },
          { title: 'Python', 'descr': 'Python', logo: '/static/python.png', links: [

          ] },
          { title: 'Postgresql', 'descr': 'Postgresql', logo: '/static/postgresql.png', links: [

          ] },
          { title: 'MySql', 'descr': 'MySql', logo: '/static/mysql.png', links: [

          ] },
          { title: 'Linux', 'descr': 'Linux', logo: '/static/linux.png', links: [

          ] },
        ],
        showSkill: -1
      }
  },
  methods : {
      clickSkill: function (index, event) {
        this.showSkill = index;
      }
  }
}
</script>

<style>
  body {
    margin: 0;
    font-family: 'Avenir', 'Microsoft YaHei UI', Helvetica;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0;
  }

  .block {
    width: 100%;
    height: 600px;
    margin: 0 auto;
    text-align: center;
  }

  #first-block {
    background-image: url("./assets/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: bottom;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .float-block {
    margin: 0 auto;
    padding: 50px 10px;
    position: relative;
    top: 100px;
    background-color: rgba(100, 100, 100, 0.5);
    width: 35%;
    height: 300px;
  }

  .float-block h1 {
    font-family: Consolas, Menlo, Monaco, monospace;
    font-size: 48px;
  }

  .block .title {
    font-size: 30px;
  }

  #second-block {
    padding-top: 80px;
  }

  #second-block .skills {
    padding: 50px 100px;
    text-align: left;
  }

  #second-block .skills_detail {
    padding: 10px;
  }

</style>

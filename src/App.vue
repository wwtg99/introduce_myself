<template>
  <div id="app" v-on:click="resetSkill">
    <div class="block" id="first-block">
      <div class="float-block">
        <h1>Welcome Visitor</h1>
        <p>aa</p>
      </div>
    </div>
    <div class="block" id="second-block">
      <p class="title">选择角色</p>
      <div class="roles">
        <zoom-img-box v-for="r in roles" v-bind:box_data="r"></zoom-img-box>
      </div>
    </div>
    <div class="block" id="third-block">
      <p class="title">选择需要学习的技能</p>
      <div class="skills">
        <skill v-for="(s, index) in skills" v-bind:key="index" v-bind:skill="s" v-on:click_skill="clickSkill(index)"></skill>
      </div>
      <div class="skills_detail">
        <transition name="slide-fade">
          <skill-detail v-for="(s, index) in skills" v-if="showSkill == index" v-bind:skill="s"></skill-detail>
        </transition>
      </div>
    </div>
    <div class="block" id="forth-block">
      <p class="title">和我一起冒险吧</p>
    </div>
  </div>
</template>

<script>
import Skill from './components/Skill'
import SkillDetail from './components/SkillDetail'
import ZoomImgBox from './components/ZoomImgBox'
import _ from 'lodash'

export default {
  name: 'app',
  components: {
    Skill, SkillDetail, ZoomImgBox
  },
  data () {
      return {
        roles: [
          {title: 'ttasdft', descr: 'aaaasdfaasdfasdfasfdassdf', img: '/static/role1.jpg'},
          {title: 'tfasdfasdfasdfastt', descr: 'aaasdfadfasdfassdfasfsdfa', img: '/static/role2.jpg'}
        ],
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
          { title: 'Database', 'descr': 'MySQL, Postgresql', logo: '/static/mysql.png', links: [
            { name: 'MySQL', href: 'aa.html'},
            { name: 'PostgreSQL', href: 'https://www.postgresql.org/'},
          ] },
          { title: 'Linux', 'descr': 'Linux', logo: '/static/linux.png', links: [

          ] },
          { title: 'Design', 'descr': 'Graphic, PS', logo: '/static/design.png', links: [
            { name: 'a3', href: 'aa.html'}
          ] },
        ],
        showSkill: -1
      }
  },
  methods : {
      clickSkill: function (index, event) {
        this.showSkill = index == this.showSkill ? -1 : index;
      },
      resetSkill: function () {
        this.showSkill = -1;
      },
      shuffle: function () {
        this.showSkill = this.showSkill == 0 ? -1 : 0;
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
    height: 650px;
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
    padding-top: 80px;
    padding-bottom: 50px;
  }

  #third-block {
    background-image: url('./assets/bg2.jpg');
    background-repeat: no-repeat;
    color: white;
  }

  #third-block .skills {
    padding: 50px 100px;
    text-align: center;
  }

  .slide-fade-enter-active {
    transition: all 0.5s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(50px);
    opacity: 0;
  }

</style>

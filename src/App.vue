<template>
  <div id="app" v-on:click="resetSkill">
    <div class="block" id="first-block">
      <div class="float-block">
        <h1>Welcome Visitor</h1>
        <p>欢迎来到火眼狻猊的世界！</p>
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
      <div class="timeline">
        <Timeline>
          <Timeline-item v-for="t in timeline">
            <p class="time">{{ t['time'] }}</p>
            <p class="content">{{ t['content'] }}</p>
          </Timeline-item>
        </Timeline>
      </div>
      <div class="contact">
        <p>Contact</p>
        <div class="contact-block">
          <img src="./assets/home.png">
          <img src="./assets/city.png" class="">
        </div>
        <div class="contact-block">
          <img src="./assets/email.png">
          <img src="./assets/email_addr.png" class="email_addr">
        </div>
      </div>
    </div>
    <Back-top></Back-top>
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
          {title: '暗影刺客', descr: '冷静的杀手，从隐秘处给予最后一击。', img: '/static/role1.jpg'},
          {title: '热血战士', descr: '充满激情的热血战士，永远冲在第一线。', img: '/static/role2.jpg'}
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
        showSkill: -1,
        timeline: [
          {"time": "2014 年 6 月", "content": "Storm 数据分析、模式识别"},
          {"time": "2014 年 11 月", "content": "实验室信息管理系统（LIMS）、实验室自动化"},
          {"time": "2016 年 2 月", "content": "Restful PHP 框架"},
          {"time": "2016 年 6 月", "content": "订单管理系统、微服务"},
          {"time": "2016 年 9 月", "content": "大健康网络爬虫"},
        ]
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
    height: 750px;
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
    color: #dddddd;
  }

  .float-block h1 {
    font-family: Consolas, Menlo, Monaco, monospace;
    font-size: 48px;
  }

  .float-block p {
    font-size: 18px;
    padding-top: 10px;
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

  #forth-block .timeline {
    width: 600px;
    padding-left: 200px;
    text-align: left;
    font-size: 16px;
    float: left;
  }

  #forth-block .timeline .time {
    font-weight: bold;
  }

  #forth-block .timeline .content {
    text-indent: 1em;
  }

  #forth-block .contact {
    float: left;
    text-align: left;
  }

  #forth-block .contact p {
    font-size: 26px;
    color: #999999;
  }

  #forth-block .contact .contact-block {
    border-left: solid 5px #1E7AD7;
    padding: 10px;
  } 

  .contact-block img {
    height: 30px;
    vertical-align: middle;
  }

  .contact-block img.email_addr {
    height: 15px;
  }
</style>
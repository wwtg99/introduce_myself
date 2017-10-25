<template>
  <div id="app" v-on:click="resetSkill">
    <div class="block" id="first-block">
      <div class="float-block">
        <h1>Welcome Visitor</h1>
        <p>欢迎来到剑与魔法的世界！</p>
        <p>接下来，我们将一起 <Icon type="fork"></Icon> <Icon type="pizza"></Icon> \(^o^)/</p>
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
            <p class="title">{{ t['title'] }}</p>
            <p class="content">{{ t['content'] }}</p>
            <p class="btns">
              <span v-if="t['url']"><Button shape="circle" size="large" icon="android-desktop" @click="openUrl(t['url'])">WEBSITE</Button></span>
              <span v-if="t['github']"><Button shape="circle" size="large" icon="social-github" @click="openUrl(t['github'])">GITHUB</Button></span>
            </p>
          </Timeline-item>
        </Timeline>
      </div>
      <div class="contact">
        <p>Contact</p>
        <div class="contact-block">
          <img src="./assets/home.png">
          <img src="./assets/city.png">
        </div>
        <div class="contact-block">
          <img src="./assets/email.png">
          <img src="./assets/email_addr.png" class="email_addr">
        </div>
        <div class="contact-block">
          <Icon type="social-github" size="30" style="padding-left: 3px;"></Icon>&nbsp;
          <a href="https://github.com/wwtg99" target="_blank">https://github.com/wwtg99</a>
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
          { name: 'W3School', href: 'http://www.w3school.com.cn/'},
          { name: 'Bootstrap', href: 'http://www.bootcss.com/'},
          { name: 'jQuery', href: 'http://www.jquery123.com/'},
          { name: 'Vue', href: 'https://cn.vuejs.org/'},
          { name: 'NodeJs', href: 'https://nodejs.org/'}
        ] },
        { title: 'PHP', 'descr': 'PHP', logo: '/static/php.png', links: [
          { name: 'PHP Manual', href: 'http://php.net/manual/zh/index.php'},
          { name: 'Composer', href: 'http://www.phpcomposer.com/'},
          { name: 'Packagist', href: 'https://packagist.org/'},
          { name: 'Laravel', href: 'https://laravel.com/'},
        ] },
        { title: 'Python', 'descr': 'Python', logo: '/static/python.png', links: [
          { name: 'Python', href: 'https://www.python.org/'},
          { name: 'Anaconda', href: 'https://www.anaconda.com/'},
          { name: 'Scrapy', href: 'https://scrapy.org/'},
          { name: 'Celery', href: 'https://www.celeryproject.org/'},
          { name: 'Matplotlib', href: 'http://matplotlib.org/gallery.html'},
        ] },
        { title: 'Database', 'descr': 'MySQL, Postgresql', logo: '/static/mysql.png', links: [
          { name: 'MySQL', href: 'https://www.mysql.com/'},
          { name: 'PostgreSQL', href: 'https://www.postgresql.org/'},
          { name: 'MongoDB', href: 'https://www.mongodb.com/'},
          { name: 'Redis', href: 'https://redis.io/'},
          { name: 'Elasticsearch', href: 'https://www.elastic.co/products/elasticsearch'}
        ] },
        { title: 'Linux', 'descr': 'Linux', logo: '/static/linux.png', links: [
          { name: 'CentOS中文', href: 'http://centoscn.com/'},
          { name: 'Git', href: 'https://git-scm.com/'},
          { name: 'Docker', href: 'https://docs.docker.com/'},
          { name: 'Nginx', href: 'https://nginx.org/'}
        ] },
        { title: 'Design', 'descr': 'Graphic, PS', logo: '/static/design.png', links: [
          { name: 'Dribbble', href: 'https://dribbble.com/'},
          { name: 'ColorHunt', href: 'http://colorhunt.co/'},
          { name: 'Icon', href: 'http://www.iconarchive.com/'},
          { name: 'Wallions', href: 'http://wallions.com/'},
        ] },
      ],
      showSkill: -1,
      timeline: [
        {
          "title": "SNP Crawler",
          "content": "基因数据爬虫，从多个知名网站中抓取基因数据，并保存到文件、MongoDB 或 Elasticsearch中。",
          "github": "https://github.com/wwtg99/snp_crawler"
        },
        {
          "title": "SNP Search",
          "content": "整合多个数据库来源搜索 SNP 相关的位置、基因、频率、表型等信息。",
          "url": "#",
          "github": "https://github.com/wwtg99/snp_search"
        },
      ]
    }
  },
  methods : {
    clickSkill(index, event) {
      this.showSkill = index == this.showSkill ? -1 : index;
    },
    resetSkill() {
      this.showSkill = -1;
    },
    shuffle() {
      this.showSkill = this.showSkill == 0 ? -1 : 0;
    },
    openUrl(url) {
        window.open(url);
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
    padding: 50px 30px;
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
    background: -webkit-linear-gradient(left top, #5BD6DD, #046DED); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom right, #5BD6DD, #046DED); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom right, #5BD6DD, #046DED); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom right, #5BD6DD, #046DED); /* 标准的语法 */
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
    float: left;
  }

  #forth-block .timeline .title {
    font-weight: bold;
    font-size: 18px;
    padding: 0;
  }

  #forth-block .timeline .content {
    text-indent: 1em;
    font-size: 16px;
    padding: 0 0 10px 0;
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
    font-size: 14px;
  }

  .contact-block img {
    height: 30px;
    vertical-align: middle;
  }

  .contact-block img.email_addr {
    height: 15px;
  }
</style>

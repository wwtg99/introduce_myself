<template>
  <div class="resume">
    <h1>title</h1>
    <h2>h2</h2>
    <div class="introduction">
      <p v-for="p in introduction">{{ p }}</p>
    </div>
    <h2>h2</h2>
    <div class="projects">
      <Timeline>
        <TimelineItem v-for="t in projects">
          <p class="title">{{ t['title'] }} <span class="time">{{ t['time'] }}</span></p>
          <div class="content">
            <p v-for="p in t['descr']">{{ p }}</p>
            <Button icon="android-desktop" v-if="t['web']" @click="openUrl(t['web'])">WEBSITE</Button>
            <Button icon="social-github" v-if="t['github']" @click="openUrl(t['github'])">GITHUB</Button>
          </div>
        </TimelineItem>
      </Timeline>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'resume',
    data () {
      return {
        introduction: [
          'p1',
          'p2'
        ],
        projects: [
          {
            title: 't1',
            time: 'time1',
            descr: [
              'asdf'
            ],
            web: 'asdf',
            github: 'gasdf'
          },
          {
            title: 't2',
            time: 'time2',
            descr: [
              'weg'
            ]
          }
        ]
      }
    },
    methods: {
      openUrl (url) {
        window.open(url)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .resume {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 16px;
    padding: 0 20px;
  }
  .resume h1 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .resume h2 {
    margin: 10px 0;
  }
  .resume .introduction {
    text-indent: 2em;
  }
  .resume .projects {
    padding: 10px 30px;
  }
  .resume .projects .title {
    font-size: 18px;
    font-weight: 600;
    position: relative;
    top: -5px;
  }
  .resume .projects .time {
    font-weight: normal;
  }
  .resume .projects .content {
    font-size: 16px;
    text-indent: 2em;
  }
</style>

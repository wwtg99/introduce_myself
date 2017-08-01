<template>
  <div class="box">
    <div class="img">
      <img v-bind:src="box_data.img"/>
    </div>
    <p class="descr"><strong>{{ box_data.title }}</strong> {{ box_data.descr }}</p>
  </div>
</template>

<script>
  export default {
    name: 'zoom_img_box',
    data () {
      return {

      }
    },
    props: ['box_data'],
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box {
    display: inline-block;
    width: 340px;
    padding: 0 20px;
    vertical-align: middle;
  }

  .box .img {
    width: 300px;
    height: 300px;
    overflow: hidden;
    padding-bottom: 50px;
  }

  .box .img img {
    width: 100%;
    position: relative;
    opacity: 0.75;
    transition: width 0.3s ease;
    -moz-transition: width 0.3s ease;
    -webkit-transition: width 0.3s ease;
    -ms-transition: width 0.3s ease;
    transition: opacity 0.3s ease;
    -moz-transition: opacity 0.3s ease;
    -webkit-transition: opacity 0.3s ease;
    -ms-transition: opacity 0.3s ease;
  }

  .box .img img:hover {
    width: 120%;
    left: -10%;
    top: -10%;
    opacity: 0.5;
  }

  .box .descr {
    font-size: 18px;
    padding-top: 30px;
    width: 300px;
    word-break: break-all;
  }

</style>

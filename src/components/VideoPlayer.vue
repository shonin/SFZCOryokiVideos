<template>
    <div>
      <video id="videoRoot" @ended="next()" controls v-bind:src="getSrc(currentVideo)">
        videos won't play in this browser. please update your browser or use a different computer.
      </video>
    </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  methods: {
    getSrc(i) {
      return this.publicPath + "videos/" + this.toc[i].src;
    },
    next() {
      if(this.autoplay) {
        this.$parent.changeVideo(1);
        let vid = document.getElementById("videoRoot");
        vid.oncanplay = () => { vid.play() };
      }
    }
  },
  props: {
    currentVideo: Number,
    toc: Array
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      autoplay: true
    }
  }
};
</script>

<style>
video {
  width: 100%;
}
</style>

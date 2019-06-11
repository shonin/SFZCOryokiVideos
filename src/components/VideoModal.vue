<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ toc[currentVideo].title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <video id="videoRoot" @ended="next(currentVideo)" controls v-bind:src="getSrc(currentVideo)">
              videos won't play in this browser. please update your browser or use a different computer.
            </video>
          </div>
          <div class="modal-footer">
            <div>
              <input type="checkbox" id="autoplay_checkbox" v-model="autoplay_checkbox" class="mr8">
              <label for="autoplay_checkbox" class="dottedUnderline"
                data-toggle="tooltip" data-placement="right"
                title="Will autoplay all the main chapters, but will not autoplay the appendix videos, which are strictly for priest training."
                > Autoplay next video?</label>
            </div>
            <div>
              <button type="button" class="btn btn-primary mr20" @click="$emit('changeVideo', -1)">Previous</button>
              <button type="button" class="btn btn-primary" @click="$emit('changeVideo', 1)">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import settings from '../settings.js'

export default {
  name: 'VideoModal',
  methods: {
    getSrc(i) {
      if (this.buildForFlashDrive) {
        return this.publicPath + "config/videos/" + this.toc[i].src;
      } else {
        return this.toc[i].jwSrc ;
      }
    },
    next(i) {
      if(this.should_autoplay(i)) {
        this.$parent.changeVideo(1);
        let vid = document.getElementById("videoRoot");
        vid.oncanplay = () => { vid.play() };
      }
    },
    should_autoplay(i) {
      if(this.autoplay_checkbox && this.toc[i].autoplay) {
        return true;
      }
      return false;
    }
  },
  props: {
    currentVideo: Number,
    toc: Array,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      autoplay_checkbox: true,
      buildForFlashDrive: settings.buildForFlashDrive
    }
  }
};
</script>

<style>
figure {
  background-color: blue;
}
.mr20 {
  margin-right: 20px;
}
.mr8 {
  margin-right: 8px;
}
.modal-footer {
  justify-content: space-between !important;
}
video {
  width: 100%;
}
.pointer {
  cursor: pointer;
}
.dottedUnderline {
  border-bottom: 1px dotted;
}
</style>

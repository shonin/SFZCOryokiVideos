<template>
  <div>
    <h2>Table of Contents</h2>
    <ul class="toc">
      <template v-for="(item, i) in toc">
        <li
          class="pointer"
          data-toggle="modal"
          @click="openModal(i)"
          :key="i">
          {{ item.title }}
        </li>
      </template>
    </ul>
    <VideoModal
      :currentVideo="currentVideo"
      :toc="toc"
      @changeVideo="changeVideo"
    />
  </div>
</template>

<script>
import toc from '../videoIndex';
import $ from 'jquery';
import VideoModal from './VideoModal';

export default {
  name: 'TOC',
  components: {
    VideoModal
  },
  data() {
    return {
      toc: toc,
      currentVideo: 0
    }
  },
  methods: {
    openModal(i) {
      this.currentVideo = i;
      $('#exampleModal').modal({});
      let vid = document.getElementById("videoRoot");

      if (vid.readyState === 4) { // 4 means "HAVE_ENOUGH_DATA [to start play]"
        vid.play();
      } else {
        vid.oncanplay = () => {
          vid.play();
        };
      }

      $('#exampleModal').on('hide.bs.modal', function () {
        vid.pause();
      })

      $('[data-toggle="tooltip"]').tooltip();

    },
    changeVideo(val) {
      if(this.currentVideo + val < toc.length && this.currentVideo + val > -1) {
        this.currentVideo += val;
      }
    }
  }
}
</script>

<style>
video {
  width: 100%;
}
.pointer {
  cursor: pointer;
}
ul.toc {
  margin-left: -20px;
}
</style>

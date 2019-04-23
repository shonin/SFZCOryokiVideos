<template>
    <div class="modal fade" id="resourceModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="resourceModalLabel">{{ resources[currentVideo].title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div v-if="resources[currentVideo].type === 'video'">
              <video id="videoRoot" @ended="next()" controls v-bind:src="getSrc(currentVideo)">
                videos won't play in this browser. please update your browser or use a different computer.
              </video>
            </div>
            <iframe v-else v-bind:src="getSrc(currentVideo)"></iframe>
          </div>
          <div class="modal-footer">
            <div>

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
export default {
  name: 'ResourceModal',
  methods: {
    getSrc(i) {
      return this.publicPath + "config/additional-resources/" + this.resources[i].src;
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
    resources: Array,
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
.mr20 {
  margin-right: 20px;
}
.mr8 {
  margin-right: 8px;
}
.modal-footer {
  justify-content: space-between !important;
}
video, iframe {
  width: 100%;
}
.pointer {
  cursor: pointer;
}
.modal-dialog.modal-lg, iframe {
  height: 100%;
}
.modal-content {
  height: 90%;
}
</style>

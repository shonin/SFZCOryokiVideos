<template>
  <div>
    <h2>Additional Resources</h2>
    <table>

      <tr>
        <td><strong>Resource Name</strong></td>
        <!-- <td><strong>File Type</strong></td> -->
      </tr>
      <template v-for="(item, i) in resources">
        <tr :key="i">
          <td
            class="pointer"
            data-toggle="modal"
            @click="openModal(i)"
            :key="i">
            {{ item.title }}
          </td>
          <!-- <td>
            {{ item.type }}
          </td> -->
          <td v-if="item.type === 'PDF'">
            <a v-bind:href="getSrc(i)" target="_blank">Open PDF in new tab</a>
          </td>
        </tr>
      </template>

    </table>
    <div class="credit"><p><i>Sewing Instructions provided by Jean Selkirk of Berkeley Zen Center</i></p></div>
    <ResourceModal
      :currentVideo="currentVideo"
      :resources="resources"
      @changeVideo="changeVideo"
    />
  </div>
</template>

<script>
import resources from '../resourcesIndex';
import $ from 'jquery';
import ResourceModal from './ResourceModal';

export default {
  name: 'Resources',
  components: {
    ResourceModal
  },
  data() {
    return {
      resources: resources,
      currentVideo: 0,
      publicPath: process.env.BASE_URL,
    }
  },
  methods: {
    openModal(i) {
      this.currentVideo = i;
      $('#resourceModal').modal({});
      let vid = document.getElementById("videoRoot");

      if (vid.readyState === 4) { // 4 means "HAVE_ENOUGH_DATA [to start play]"
        vid.play();
      } else {
        vid.oncanplay = () => {
          vid.play();
        };
      }

      $('#resourceModal').on('hide.bs.modal', function () {
        vid.pause();
      })
    },
    changeVideo(val) {
      if(this.currentVideo + val < this.resources.length && this.currentVideo + val > -1) {
        this.currentVideo += val;
      }
    },
    getSrc(i) {
      return this.publicPath + "oryoki_config/additional-resources/" + this.resources[i].src;
    },
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
td {
  padding-right: 50px;
}
.credit {
  padding-top: 40px;
}
</style>

<template>
  <div class="tvwall">
    <div
      class="container1"
      v-for="(item, index) in tvwallList"
      :key="item"
      :style="{ backgroundImage: `url(${item})` }"
      ref="itemRefs"
      :class="{ show: active === index }"
    ></div>
    <div class="radio_groups">
      <div class="radio_group" v-for="(item, index) in tvwallList" :key="index">
        <input
          type="radio"
          :id="`radio${index}`"
          class="radio_input"
          :value="index"
          v-model="active"
        />
        <label
          :for="`radio${index}`"
          class="radio_label"
          :class="{ active: active === index }"
        ></label>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
export default {
  props: {
    tvwallList: {
      default: [],
    },
  },
  setup() {
    const itemRefs = ref([]);
    const active = ref(0);
    onMounted(() => {
      let timer = new Timer(() => {
        active.value++;
        if (active.value === itemRefs.value.length) {
          active.value = 0;
        }
      }, 8000);
      watch(active, () => {
        timer.reset(8000);
      });
    });

    function Timer(fn, t) {
      var timerObj = setInterval(fn, t);

      this.stop = function () {
        if (timerObj) {
          clearInterval(timerObj);
          timerObj = null;
        }
        return this;
      };

      this.start = function () {
        if (!timerObj) {
          this.stop();
          timerObj = setInterval(fn, t);
        }
        return this;
      };

      this.reset = function (newT = t) {
        t = newT;
        return this.stop().start();
      };
    }
    return {
      itemRefs,
      active,
    };
  },
};
</script>

<style lang="scss">
.tvwall {
  width: 100%;
  height: 100vh;
  position: relative;

  .container1 {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    transition: 0.5s;
    opacity: 0;
  }
  .show {
    opacity: 0.8;
    animation: backgroundZoom 5s ease forwards, showNext 1s ease forwards 8s;
  }
  .radio_groups {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    z-index: 2;
    .radio_group {
      .radio_input {
        display: none;
      }
      .radio_label {
        display: flex;
        background-color: white;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        margin: 0.5rem 0;
        cursor: pointer;
        box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.5);
      }
      .active {
        background-color: #c89368;
      }
    }
  }
}
@keyframes backgroundZoom {
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}
@keyframes showNext {
  from {
    opacity: 0.8;
  }
  to {
    opacity: 0;
  }
}
</style>

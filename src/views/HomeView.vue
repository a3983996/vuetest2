<template>
  <div class="home_page">
    <div class="fixedbox">
      <div class="backgroundbox" ref="backgroundbox">
        <div class="scrollto" @click="scrollto">
          <div class="down_arrow"></div>
        </div>
        <TVWallComponent :tvwallList="tvwallList"></TVWallComponent>
      </div>
    </div>
    <div class="home_layer"></div>
    <div class="home_content">
      <div class="introduce1" :ref="setScrollListeners">
        <div class="introduce1_left">
          <div class="iframebox">
            <div class="adaptive_frame">
              <iframe
                src="https://www.youtube.com/embed/WrVeevMdX44"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <button type="button">了解更多</button>
        </div>
        <div class="introduce-text">
          <p>
            Q1:學音樂要有什麼條件?是不是很看天分跟年紀?
            <br />
            <br />
            A:當然有天分、從小學會吃香，不過重點還是看目的。若只是學興趣、自娛娛人，基本上有心都可以學。包括成年人，成年人通常是自願，基於興趣而學，雖然樂器當然起步得早會比較吃香，比方鋼琴很重視雙手的靈活度，從小學比較能練出手指的獨立性、柔軟度等。
            孩童的可塑性高，就像海綿一樣，吸收力強。聽覺、樂感等能力的培養也相對容易。成人學琴就會容易有心有餘而力不足的問題，手指比較遲鈍，快不起來。神經與肌肉也發展成熟，可塑性低。但成人也有長處，理解力好，獨立思考能力較強；加上很多都是自願，不是被家長逼著學琴（許多孩子不明白為何學琴，對音樂不感興趣、怕吃苦等），勤能補拙，即便在彈奏的能力有所侷限，琢磨技巧、練好曲子更花時間，但靠理解力及熱情，也會大有收穫──尤其學音樂最重要的是毅力，能夠持之以恆，才是關鍵，跟跑馬拉松是同樣的道理。條件再好、再有天分，半途而廢都是枉然。
            <br />
            <br />
            <br />
            Q2:學音樂是不是很花錢？學音樂的是不是都是有錢人？
            <br />
            <br />
            A:學音樂不一定很有錢，但很花錢是真的──主要是看願不願意砸錢，願意用多少成本學習。當然，不得不承認，學音樂的成本放長遠來看，一定會很驚人（即便是最基本配備，如上團體班、買便宜的低階鋼琴或中古琴等，至於其它樂器另論），且從開始學音樂起，要花的學費、樂器費、調音費等，若沒有一定經濟能力，都會是很大的負擔，家境小康算是基本。
            若家境清貧，就必須三思，要有其它條件配合再來考慮（如有懂音樂的親友、老師不收學費、有人送琴、自學去琴房租琴等），現實的問題必須解決，才能談到「學琴」這回事上。
            <br />
          </p>
        </div>
      </div>
      <div class="introduce1" :ref="setScrollListeners">
        <div class="introduce1_left">
          <div class="iframebox">
            <div class="adaptive_frame">
              <iframe
                src="https://www.youtube.com/embed/WrVeevMdX44"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <button type="button">了解更多</button>
        </div>
        <div class="introduce-text">
          <p>
            Q1:學音樂要有什麼條件?是不是很看天分跟年紀?
            <br />
            <br />
            A:當然有天分、從小學會吃香，不過重點還是看目的。若只是學興趣、自娛娛人，基本上有心都可以學。包括成年人，成年人通常是自願，基於興趣而學，雖然樂器當然起步得早會比較吃香，比方鋼琴很重視雙手的靈活度，從小學比較能練出手指的獨立性、柔軟度等。
            孩童的可塑性高，就像海綿一樣，吸收力強。聽覺、樂感等能力的培養也相對容易。成人學琴就會容易有心有餘而力不足的問題，手指比較遲鈍，快不起來。神經與肌肉也發展成熟，可塑性低。但成人也有長處，理解力好，獨立思考能力較強；加上很多都是自願，不是被家長逼著學琴（許多孩子不明白為何學琴，對音樂不感興趣、怕吃苦等），勤能補拙，即便在彈奏的能力有所侷限，琢磨技巧、練好曲子更花時間，但靠理解力及熱情，也會大有收穫──尤其學音樂最重要的是毅力，能夠持之以恆，才是關鍵，跟跑馬拉松是同樣的道理。條件再好、再有天分，半途而廢都是枉然。
            <br />
            <br />
            <br />
            Q2:學音樂是不是很花錢？學音樂的是不是都是有錢人？
            <br />
            <br />
            A:學音樂不一定很有錢，但很花錢是真的──主要是看願不願意砸錢，願意用多少成本學習。當然，不得不承認，學音樂的成本放長遠來看，一定會很驚人（即便是最基本配備，如上團體班、買便宜的低階鋼琴或中古琴等，至於其它樂器另論），且從開始學音樂起，要花的學費、樂器費、調音費等，若沒有一定經濟能力，都會是很大的負擔，家境小康算是基本。
            若家境清貧，就必須三思，要有其它條件配合再來考慮（如有懂音樂的親友、老師不收學費、有人送琴、自學去琴房租琴等），現實的問題必須解決，才能談到「學琴」這回事上。
            <br />
          </p>
        </div>
      </div>
      <div class="introduce1" :ref="setScrollListeners">
        <div class="introduce1_left">
          <div class="iframebox">
            <div class="adaptive_frame">
              <iframe
                src="https://www.youtube.com/embed/WrVeevMdX44"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <button type="button">了解更多</button>
        </div>
        <div class="introduce-text">
          <p>
            Q1:學音樂要有什麼條件?是不是很看天分跟年紀?
            <br />
            <br />
            A:當然有天分、從小學會吃香，不過重點還是看目的。若只是學興趣、自娛娛人，基本上有心都可以學。包括成年人，成年人通常是自願，基於興趣而學，雖然樂器當然起步得早會比較吃香，比方鋼琴很重視雙手的靈活度，從小學比較能練出手指的獨立性、柔軟度等。
            孩童的可塑性高，就像海綿一樣，吸收力強。聽覺、樂感等能力的培養也相對容易。成人學琴就會容易有心有餘而力不足的問題，手指比較遲鈍，快不起來。神經與肌肉也發展成熟，可塑性低。但成人也有長處，理解力好，獨立思考能力較強；加上很多都是自願，不是被家長逼著學琴（許多孩子不明白為何學琴，對音樂不感興趣、怕吃苦等），勤能補拙，即便在彈奏的能力有所侷限，琢磨技巧、練好曲子更花時間，但靠理解力及熱情，也會大有收穫──尤其學音樂最重要的是毅力，能夠持之以恆，才是關鍵，跟跑馬拉松是同樣的道理。條件再好、再有天分，半途而廢都是枉然。
            <br />
            <br />
            <br />
            Q2:學音樂是不是很花錢？學音樂的是不是都是有錢人？
            <br />
            <br />
            A:學音樂不一定很有錢，但很花錢是真的──主要是看願不願意砸錢，願意用多少成本學習。當然，不得不承認，學音樂的成本放長遠來看，一定會很驚人（即便是最基本配備，如上團體班、買便宜的低階鋼琴或中古琴等，至於其它樂器另論），且從開始學音樂起，要花的學費、樂器費、調音費等，若沒有一定經濟能力，都會是很大的負擔，家境小康算是基本。
            若家境清貧，就必須三思，要有其它條件配合再來考慮（如有懂音樂的親友、老師不收學費、有人送琴、自學去琴房租琴等），現實的問題必須解決，才能談到「學琴」這回事上。
            <br />
          </p>
        </div>
      </div>
    </div>
  </div>
  <SocketComponent></SocketComponent>
</template>

<script>
import TVWallComponent from "@/components/TVWallComponent.vue";
import SocketComponent from "@/components/SocketComponent.vue";
import { ref, onMounted } from "vue";
export default {
  name: "HomeView",
  components: {
    TVWallComponent,
    SocketComponent,
  },
  setup(props, { emit }) {
    const backgroundbox = ref(null);
    let isWhiteNav = false;
    const scrollListeners = ref([]);
    function setScrollListeners(el) {
      if (el) {
        scrollListeners.value.push(el);
      }
    }
    function checkSlide() {
      //超過box一半時傳出isWhiteNav=true
      const slideInAtBack =
        backgroundbox.value.offsetTop + backgroundbox.value.clientHeight / 2;
      isWhiteNav = slideInAtBack < window.scrollY;
      emit("push-isWhiteNav", isWhiteNav);

      //Y軸到了要顯示
      scrollListeners.value.forEach((item) => {
        // const slideInAt =
        //   document.documentElement.scrollTop +
        //   document.documentElement.clientHeight -
        //   window.innerHeight / 10;
        const slideInAt =
          document.documentElement.scrollTop +
          document.documentElement.clientHeight -
          window.innerHeight / 3;
        const elTop = item.offsetTop;
        // const elBotton =
        //   item.offsetTop + item.clientHeight - window.innerHeight / 2.5;
        const elBotton =
          item.offsetTop + item.clientHeight - window.innerHeight / 3;
        const isShow = slideInAt > elTop && window.scrollY < elBotton;
        if (isShow) {
          item.classList.add("show-normal");
        } else {
          item.classList.remove("show-normal");
        }
      });
    }
    function throttle(fn, time = 100) {
      let canRun = true;
      return function (...args) {
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
          fn.apply(this, args);
          canRun = true;
        }, time);
      };
    }
    onMounted(() => {
      window.addEventListener("scroll", throttle(checkSlide));
      document
        .querySelector(".iframebox")
        .addEventListener("animationend", (e) => {
          e.targer.style = "display:none";
        });
    });
    function scrollto() {
      window.scrollTo(0, backgroundbox.value.clientHeight);
    }

    const tvwallList = ref([
      require("@/assets/background0.jpg"),
      require("@/assets/background1.jpg"),
      require("@/assets/background2.jpg"),
    ]);
    return {
      backgroundbox,
      scrollto,
      tvwallList,
      setScrollListeners,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home_page {
  .fixedbox {
    z-index: -1;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    .backgroundbox {
      overflow: hidden;
      background: rgba($color: #000000, $alpha: 1);
      position: relative;
      .scrollto {
        cursor: pointer;
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:hover .down_arrow {
          transform: translateY(5px);
        }
        &::before {
          content: "";
          width: 0.7rem;
          margin-bottom: 0.5rem;
          border-top: rgba($color: #ffffff, $alpha: 0.5) solid 1px;
        }
        .down_arrow {
          width: 1rem;
          height: 1rem;
          background: url("../assets/down-arrow.svg") no-repeat center;
          background-size: cover;
          transition: 0.3s;
        }
        &::after {
          content: "scroll";
          font-size: 0.8rem;
          color: rgba($color: #ffffff, $alpha: 0.5);
          margin-top: 0.5rem;
        }
      }
    }
  }
  .home_content {
    box-shadow: 0px -5px 10px -5px rgba($color: #ffffff, $alpha: 1);
    // margin: 0 2rem;
    margin-top: 100vh;
    padding: 2rem 0;
    background-color: rgba($color: #ffffff, $alpha: 0.6);
    .introduce1 {
      margin: 5rem;
      padding: 3rem;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      border-radius: 3px;
      box-shadow: 4px 6px 16px rgba(0, 0, 0, 0.5);
      transform: translate(0, 1rem) scale(1);
      opacity: 0;
      transition: 1s;
      .introduce1_left {
        position: sticky;
        top: 20%;
        margin: 0 auto;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .iframebox {
          width: 100%;
          .adaptive_frame {
            width: 100%;
            padding-top: 56.25%;
            height: 0;
            position: relative;
            box-shadow: 4px 6px 16px rgba(0, 0, 0, 0.5);
            iframe {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
          }
        }
        button {
          width: 200px;
          height: 50px;
          border: none;
          background-color: #8d7d78;
          color: white;
          border-radius: 3px;
          font-size: 1rem;
          margin-top: 10vh;
          cursor: pointer;
        }
      }

      .introduce-text {
        width: 50%;
        padding-left: 5rem;
        line-height: 3rem;
        vertical-align: text-top;
      }
    }
    .show-normal {
      transform: translate(0px, 0px) scale(1);
      opacity: 1;
    }
  }
}

.show-topdown {
  animation: show 1s forwards ease, topdown 2s infinite ease 1s;
}
@keyframes show {
  to {
    transform: translate(0px, 0px) scale(1);
    opacity: 1;
  }
}
@keyframes topdown {
  from,
  to {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>

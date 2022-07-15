<template>
  <header>
    <nav class="navbar" ref="navbar">
      <a href="#" class="logo">
        <h1>Music Class</h1>
      </a>
      <div class="right-nav">
        <ul class="pages">
          <li><a href="#">產品</a></li>
          <li><a href="#">課程</a></li>
          <li><a href="#">介紹</a></li>
        </ul>
        <ul class="contacts">
          <li>
            <a href="#" class="icon_fb"></a>
          </li>
          <li>
            <a href="#" class="icon_instergram"></a>
          </li>
          <li>
            <a href="#" class="icon_line"></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted, watch, toRefs } from "vue";
export default {
  props: {
    isWhiteNav: {
      default: false,
    },
  },
  setup(props) {
    const navbar = ref(null);
    function navbarlistening() {
      if (scrollY > 50) {
        navbar.value.classList.add("navbar-small");
      } else {
        navbar.value.classList.remove("navbar-small");
      }
    }
    onMounted(() => {
      window.addEventListener("scroll", navbarlistening);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", navbarlistening);
    });
    const { isWhiteNav } = toRefs(props);
    watch(isWhiteNav, (newValue) => {
      if (newValue) {
        navbar.value.classList.add("navbar-white");
      } else {
        navbar.value.classList.remove("navbar-white");
      }
    });

    return { navbar };
  },
};
</script>

<style lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 5% 1rem 5%;
  position: fixed;
  top: 0;
  width: 100%;
  transition: 0.5s;
  z-index: 999;
  background-image: linear-gradient(
    180deg,
    rgba(91, 70, 66, 0.8) 0%,
    rgba(91, 70, 66, 0) 100%
  );
  .logo {
    animation: top 1.5s forwards ease;
    h1 {
      text-indent: 101%;
      overflow: hidden;
      white-space: nowrap;
      background: url("../assets/guitar-w.svg") no-repeat;
      background-size: contain;
      width: 200px;
      height: 50px;
      margin: 5px 0;
      position: relative;
      transition: 0.3s;
      &::after {
        content: "音樂教室";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -70px;
        color: #ffffff;
        font-style: italic;
        font-weight: 900;
        font-size: 30px;
        transition: 0.3s;
      }
    }
  }
  .right-nav {
    display: flex;
    align-items: center;
    animation: top 1.5s forwards ease;
    .pages {
      display: flex;
      margin-right: 2rem;
      li {
        a {
          padding: 1rem;
          color: #ffffff;
          font-size: 100%;
          font-weight: bold;
          transition: 0.3s;
        }
      }
    }
    .contacts {
      display: flex;
      align-items: center;
      li {
        margin: 0 0.5rem;
        a {
          width: 18px;
          height: 18px;
          display: block;
          transition: 0.3s ease;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }
}
.navbar-small {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  backdrop-filter: blur(5px);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  .right-nav {
    .pages {
      li {
        a {
          color: #feefc8;
        }
      }
    }
  }
  .logo {
    h1 {
      background: url("../assets/guitar-feefc8.svg") no-repeat;
      background-size: contain;
      &::after {
        color: #feefc8;
      }
    }
  }
  .icon_fb {
    background: url("../assets/facebook-feefc8.svg") no-repeat center center;
    background-size: cover;
  }
  .icon_instergram {
    background: url("../assets/instergram-feefc8.svg") no-repeat center center;
    background-size: cover;
  }
  .icon_line {
    background: url("../assets/line-feefc8.svg") no-repeat center center;
    background-size: cover;
  }
}
.navbar-white {
  background-image: none;
  animation: toWhite 0.5s ease forwards 0.1s;
  // background-color: rgba($color: #ffffff, $alpha: 0.9);

  .right-nav {
    .pages {
      li {
        a {
          color: #8d7d79;
        }
      }
    }
  }
  .logo {
    h1 {
      background: url("../assets/guitar-8d7d79.svg") no-repeat;
      background-size: contain;
      &::after {
        color: #8d7d79;
      }
    }
  }
  .icon_fb {
    background: url("../assets/facebook-8d7d79.svg") no-repeat center center;
    background-size: cover;
  }
  .icon_instergram {
    background: url("../assets/instergram-8d7d79.svg") no-repeat center center;
    background-size: cover;
  }
  .icon_line {
    background: url("../assets/line-8d7d79.svg") no-repeat center center;
    background-size: cover;
  }
}
.icon_fb {
  background: url("../assets/facebook-w.svg") no-repeat center center;
  background-size: cover;
}
.icon_instergram {
  background: url("../assets/instergram-w.svg") no-repeat center center;
  background-size: cover;
}
.icon_line {
  background: url("../assets/line-w.svg") no-repeat center center;
  background-size: cover;
}
@keyframes top {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes toWhite {
  to {
    background-color: rgba($color: #ffffff, $alpha: 0.9);
  }
}
</style>

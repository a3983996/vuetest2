<template>
  <div class="open_sound" v-if="openSound === null">
    <p>是否開啟訊息提示音?</p>
    <div class="btn">
      <button type="button" @click="openSound = true">是</button>
      <button type="button" @click="openSound = false">否</button>
    </div>
  </div>
  <div class="open_instant_message_box" @click="setOpenMessageBox">
    <div class="onread" v-if="onread > 0">{{ onread }}</div>
    <audio src="" ref="audio" class="beep"></audio>
  </div>
  <div class="instant_message_box" v-if="openMessageBox">
    <div class="message_title">
      <p>線上聯絡</p>
    </div>
    <div class="message_content" ref="content">
      <div
        class="user1"
        v-for="chat in chatList"
        :key="chat"
        :class="{ user_me: chat.user.name === socketId }"
      >
        <p class="user_name">
          {{ chat.user.name.substr(0, 3) }}
          <span class="user_time">&nbsp;&nbsp;{{ chat.createTime }}</span>
        </p>
        <p class="user_message">{{ chat.message }}</p>
      </div>
    </div>
    <form class="message_input" @submit.prevent="sendMsg">
      <input
        type="text"
        v-model="chatMsg"
        placeholder="請輸入您的需求及聯絡方式"
      />
      <button type="submit">傳送</button>
    </form>
  </div>
</template>

<script>
import io from "socket.io-client";
import { nextTick, onMounted, ref } from "vue";
// const avatar = "../assets/assets5.jpg";
export default {
  setup() {
    const audio = ref(null);
    const openSound = ref(null);
    const openMessageBox = ref(false);
    const chatList = ref([]);
    const chatMsg = ref("");
    const content = ref(null);
    // const userList = [
    //   { name: "kai", id: 0, avatar },
    //   { name: "jay", id: 1, avatar },
    // ];
    // const userInfo = reactive({ user: userList[0] });
    const socketId = ref("");
    let socket;
    let onread = ref(-1);
    onMounted(() => {
      socket = io("http://www.xiaokai.ml:3001", { secure: true });
      socket.on("connect", () => {
        console.log(socket.id, "監聽客戶端連接成功-connect");
        socketId.value = socket.id;
        socket.emit("online", { username: socket.id });
      });
      socket.on("fresh-message", async (data) => {
        chatList.value = data;
        if (audio.value && !openMessageBox.value) {
          onread.value++;
          if (openSound.value) {
            audio.value.src = require("@/assets/sound.mp3");
            audio.value.play();
          }
        }
        await nextTick();

        if (content.value) {
          content.value.scrollTop = content.value.scrollHeight;
        }
      });
    });
    // const selectUser = (user) => {
    //   userInfo.user = user;
    // };
    content;
    const setOpenMessageBox = async () => {
      openMessageBox.value = openMessageBox.value === false ? true : false;
      await nextTick();
      if (openMessageBox.value) {
        content.value.scrollTop = content.value.scrollHeight;
      }
      onread.value = 0;
    };
    const sendMsg = () => {
      // socket.emit("send-message", userInfo.user, chatMsg.value);
      if (chatMsg.value.trim().length !== 0)
        socket.emit("send-message", chatMsg.value);
      chatMsg.value = "";
    };
    return {
      openSound,
      setOpenMessageBox,
      chatList,
      chatMsg,
      sendMsg,
      openMessageBox,
      content,
      socketId,
      audio,
      onread,
    };
  },
};
</script>

<style lang="scss">
.open_sound {
  width: 200px;
  height: 100px;
  position: fixed;
  right: 2rem;
  top: 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.7));
  border-radius: 3px;
  z-index: 999;
  p {
    margin-bottom: 1rem;
  }
  button {
    margin: 0 1rem;
    border: none;
    color: white;
    width: 50px;
    height: 30px;
    cursor: pointer;
    &:nth-child(1) {
      background-color: #d7b957;
    }
    &:nth-child(2) {
      background-color: #394f76;
    }
  }
}
.open_instant_message_box {
  background: url("../assets/message1.svg") no-repeat;
  background-size: cover;
  width: 60px;
  height: 60px;
  cursor: pointer;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 999;
  filter: drop-shadow(2px 3px 1px rgba(0, 0, 0, 0.7));
  .onread {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 25px;
    height: 25px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .beep {
    display: none;
  }
}
.instant_message_box {
  width: 300px;
  height: 500px;
  position: fixed;
  right: 2rem;
  bottom: 8rem;
  z-index: 998;
  background-color: white;
  border-radius: 5px;
  border-bottom-right-radius: 0;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -60px;
    border-style: solid;
    border-width: 30px 30px 30px 30px;
    border-color: white transparent transparent transparent;
    width: 0;
    height: 0;
    filter: drop-shadow(2px 3px 1px rgba(0, 0, 0, 0.7));
  }
  .message_title {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 3rem;
    background-color: #0084ff;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .message_content {
    padding: 1rem;
    border-radius: 3px;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .user1 {
      margin-top: 0.5rem;
      display: flex;
      flex-direction: column;
      padding: 0 30% 0 0;
      p {
        word-break: break-all;
        margin: 0.5rem;
      }
      .user_name {
        font-size: 0.5rem;
      }
      .user_time {
        font-size: 0.5rem;
      }
      .user_message {
        font-weight: bold;
      }
    }
    .user_me {
      align-items: flex-end;
      padding: 0 0 0 30%;
    }
  }
  .message_input {
    width: 100%;
    height: 3rem;
    margin-bottom: 1rem;
    border-top: #0084ff 3px solid;

    input {
      width: 80%;
      height: 100%;
      outline: none;
      border: none;
      padding-left: 1rem;
    }
    button {
      width: 20%;
      height: 100%;
      border: none;
      background-color: #0084ff;
      color: white;
      cursor: pointer;
    }
  }
}
</style>

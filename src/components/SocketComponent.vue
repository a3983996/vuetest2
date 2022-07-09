<template>
  <div
    class="open_instant_message_box"
    @click="openMessageBox = openMessageBox === false ? true : false"
  ></div>
  <div class="instant_message_box" v-if="openMessageBox">
    <div class="message_title">
      <p>線上聯絡</p>
    </div>
    <div class="message_content" ref="content">
      <div class="user1" v-for="chat in chatList" :key="chat">
        <p class="user_name">
          {{ chat.user.name }}
          <span class="user_time">{{ chat.createTime }}</span>
        </p>
        <p class="user_message">{{ chat.message }}</p>
      </div>
    </div>
    <form class="message_input" @submit.prevent="sendMsg">
      <input
        type="text"
        v-model="chatMsg"
        placeholder="請輸入您的需求及聯絡方式聯絡方式"
      />
      <button type="submit">傳送</button>
    </form>
  </div>
</template>

<script>
import io from "socket.io-client";
import { onMounted, ref } from "vue";
// const avatar = "../assets/assets5.jpg";
export default {
  setup() {
    const openMessageBox = ref(false);
    const chatList = ref([]);
    const chatMsg = ref("");
    const content = ref(null);
    // const userList = [
    //   { name: "kai", id: 0, avatar },
    //   { name: "jay", id: 1, avatar },
    // ];
    // const userInfo = reactive({ user: userList[0] });
    let socket;
    onMounted(() => {
      console.log(content.value);

      socket = io("http://www.xiaokai.ml:3001", { secure: true });

      socket.on("connect", () => {
        console.log(socket.id, "監聽客戶端連接成功-connect");
        socket.emit("online", { username: socket.id });
      });
      socket.on("fresh-message", (data) => {
        chatList.value = data;
      });
    });
    // const selectUser = (user) => {
    //   userInfo.user = user;
    // };
    const sendMsg = () => {
      // socket.emit("send-message", userInfo.user, chatMsg.value);
      if (chatMsg.value.trim().length !== 0)
        socket.emit("send-message", chatMsg.value);
      chatMsg.value = "";
    };
    return { chatList, chatMsg, sendMsg, openMessageBox, content };
  },
};
</script>

<style lang="scss">
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
    .user1 {
      margin-top: 0.5rem;
      display: flex;
      flex-direction: column;
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

<template>
  <footer>
    <div class="footer_background"></div>
    <div class="footer">
      <div class="content">
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
        <P>資料來源:Google、Pexels、Unsplash</P>
        <p class="mycopy">&copy;僅個人作品練習，無任何商業用途</p>
        <router-link to="/admin/login" class="setting"></router-link>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  position: relative;
  .footer_background {
    position: absolute;
    background-size: cover;
    width: 100%;
    height: 70vh;
    background-color: rgba($color: #ffffff, $alpha: 0.6);
  }
  .footer {
    position: absolute;
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: url("../assets/assets25.png") no-repeat;
    filter: drop-shadow(0px -5px 20px rgba(0, 0, 0, 0.7));

    background-position: center top;
    background-size: cover;
    // mix-blend-mode: screen;
    // background-color: rgba($color: #000000, $alpha: 0.8);

    .content {
      width: 100%;
      height: 5vh;
      font-weight: bold;
      background-color: rgba($color: #000000, $alpha: 1);
      box-shadow: 0px -10px 200px 1px #000000;
      // backdrop-filter: blur(4px);
      // box-shadow: 0px 0px 30px 10px rgba(255, 255, 255, 0.2);
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: white;

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
      .setting {
        background: url("../assets/setting.svg") no-repeat center center;
        background-size: cover;
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>

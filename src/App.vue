<template>
  <div
    :class="{'light-background': !isDarkMode, 'dark-background': isDarkMode}"
    id="app"
  >
    <router-view/>
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "App",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#212c4f" : "#f0f3f5"; // к сожалению, у нас сдесь нет доступа к scss переменным $dark-blue и $light-gray
  }
};
</script>

<style lang="scss">
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

body {
  margin: 0;
  // background: $dark-blue;
}

#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  // font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: $white;
}

h1.dark {
  @include heading-3($black);
}

h1.light {
  @include heading-3($white);
}

p {
  @include large-text-bold($purple);
}

// svg elements style from VueApexCharts
line,
text {
  opacity: 0.2;
}

h4 {
  margin: 0;
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  color: #ffffff;
}

.form input {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 20px;
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:focus {
    border: 1px solid $blue;
    box-shadow: 0 0 0 1px $blue;
    outline: none;
  }
}

.form button {
  width: 100%;
  height: 60px;
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  border: none;
  // outline: none;
  margin-bottom: 40px;
  cursor: pointer;
}

/*
.forgot-link {
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
*/

/* router-link в dom-дереве будет просто ссылкой, поэтому можем его стилизовать просто как тэг 'a' */
a {
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.manage {
  min-height: 100vh;
}

/* Theme */
.light-background {
  background: $light-gray;

  // svg elements style from VueApexCharts
  line,
  text {
    stroke: $black;
    // opacity: 0.2;
  }
}

.dark-background {
  background: $dark-blue;

  // svg elements style from VueApexCharts
  line,
  text {
    stroke: $light-gray;
    // opacity: 0.2;
  }
}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: $white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: $black;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.light-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}

.light-box {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark-box {
  // background: rgba(0, 0, 0, 0.1);
  background: #c6d0eb40;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>

<template>
  <div class="manage">
    <Header/>
    <div class="container">
      <h1 :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}">Team</h1>
      <div class="cards">
        <transition
          appear
          appear-active-class="animated flipInX"
        >
          <a
            :class="{'light-card': !isDarkMode, 'dark-card': isDarkMode}"
            class="card card-1"
            href="#"
          >
            <img
              :class="{'light-header': !isDarkMode, 'dark-header': isDarkMode}"
              class="card-header"
              src="@/assets/slack.png"
            >
            <h3
              :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
            >Slack</h3>
            <p
              :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
            >Messaging app for all team communication.</p>
          </a>
        </transition>
        <transition
          appear
          appear-active-class="animated flipInX"
        >
          <a
            :class="{'light-card': !isDarkMode, 'dark-card': isDarkMode}"
            class="card card-2"
            href="#"
          >
            <img
              :class="{'light-header': !isDarkMode, 'dark-header': isDarkMode}"
              class="card-header"
              src="@/assets/notion.png"
            >
            <h3
              :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
            >Notion</h3>
            <p
              :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
            >All-in-one workspace.</p>
          </a>
        </transition>
        <transition
          appear
          appear-active-class="animated flipInX"
        >
          <a
            :class="{'light-card': !isDarkMode, 'dark-card': isDarkMode}"
            class="card card-3"
            href="#"
          >
            <img
              :class="{'light-header': !isDarkMode, 'dark-header': isDarkMode}"
              class="card-header"
              src="@/assets/figma.png"
            >
            <h3
              :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
            >Figma</h3>
            <p
              :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
            >Collaborative design tool.</p>
          </a>
        </transition>
        <transition
          appear
          appear-active-class="animated flipInX"
        >
          <a
            :class="{'light-card': !isDarkMode, 'dark-card': isDarkMode}"
            class="card card-4"
            href="#"
          >
            <img
              :class="{'light-header': !isDarkMode, 'dark-header': isDarkMode}"
              class="card-header"
              src="@/assets/contentful.png"
            >
            <h3
              :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
            >Contentful</h3>
            <p
              :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
            >Content management system.</p>
          </a>
        </transition>
        <transition
          appear
          appear-active-class="animated flipInX"
        >
          <a
            :class="{'light-card': !isDarkMode, 'dark-card': isDarkMode}"
            class="card card-5"
            href="#"
          >
            <img
              :class="{'light-header': !isDarkMode, 'dark-header': isDarkMode}"
              class="card-header"
              src="@/assets/dropbox.png"
            >
            <h3
              :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
            >Dropbox</h3>
            <p
              :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
            >Storage space in the cloud.</p>
          </a>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Team",
  components: {
    Header
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 15%; // 0 5%
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly; // center
  // align-items: baseline;
}

.card-1 {
  animation-delay: 0s;
}

.card-2 {
  animation-delay: 0.5s;
}

.card-3 {
  animation-delay: 1s;
}

.card-4 {
  animation-delay: 1.5s;
}

.card-5 {
  animation-delay: 2s;
}

.card {
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;
}

.light-card {
  background: $white;
  // box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 15px 30px rgba(103, 110, 144, 0.15);

  &:hover {
    // box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
    box-shadow: 0 4px 4px rgba(103, 110, 144, 0.05),
      0 2px 2px rgba(103, 110, 144, 0.05);
  }
}

.dark-card {
  background: $super-dark-blue;
  // box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 40px;

  &:hover {
    // box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25);
  }
}

.card-header {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.light-header {
  background: $light-gray;
}

.dark-header {
  background: #283049;
}

h1 {
  margin-top: 40px;
  text-align: center;
}

h3 {
  margin-bottom: 16px;
}

h3.dark {
  @include heading-3($black);
}

h3.light {
  @include heading-3($white);
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
  margin-top: 0;
}

a {
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  text-decoration: none;
}
</style>

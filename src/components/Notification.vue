<template>
  <transition
    enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeOutRight"
  >
    <div
      class="bubble"
      v-show="show"
    >
      <div class="message">{{text}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Notification",
  props: {
    text: String
  },
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
.bubble {
  position: absolute;
  border-radius: 6px;
  top: 10%;
  padding: 5px 10px 5px 10px;
  background-color: $blue;
}
.message {
  @include medium-text;
  color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

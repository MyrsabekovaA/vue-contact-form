<template>
  <div v-if="isVisible" class="modal-overlay" @click="close">
    <div class="modal-content" @click.stop>
      <span class="close-btn" @click="close">&times;</span>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationComponent",
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      message: ''
    };
  },
  methods: {
    close() {
      this.$emit('update:isVisible', false);
    },
    setMessage(msg) {
      this.message = msg;
    }
  }
}
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  z-index: 100;

  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    position: relative;
    width: 80%;
    max-width: 500px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    cursor: pointer;
  }
}
</style>
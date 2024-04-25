<template>
  <div class="main-page">
    <div class="overlay" v-if="showForm" @click="handleFormClose"></div>
    <button @click="showForm = true" class="open-form-btn">
      Создать
    </button>

    <contact-form v-if="showForm" @close="handleFormClose"></contact-form>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "MainPage",
  components: {
    ContactForm
  },
  data() {
    return {
      showForm: false,
    };
  },
  methods: {
    handleFormClose() {
      this.showForm = false;
    }
  }
}
</script>

<style scoped lang="scss">
.main-page {
  position: relative;
  padding: 30px 40px;
  width: 100%;
  height: 100vh;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .open-form-btn {
    z-index: 2;
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    display: flex;
    border-radius: 8px;
    font-weight: bold;

    @media (max-width: 600px) {
      font-size: 14px;
      padding: 14px 28px;
    }
  }
}
</style>
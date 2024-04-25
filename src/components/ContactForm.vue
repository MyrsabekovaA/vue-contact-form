<template>
  <div class="contact-form">
    <button @click="$emit('close')" class="close-btn">X</button>
    <h2 class="title">Создать новый контакт</h2>

    <div @click="toggleSection('personalInfo')" class="section-title">Личная информация</div>
    <PersonalInfoSection ref="personalInfoSection"
                         :is-active-section="isActiveSection"
                         :active-section="activeSection"
                         @toggleSection="toggleSection"/>

    <div @click="toggleSection('address')" class="section-title">Адрес</div>
    <AddressSection ref="addressSection"
                    :is-active-section="isActiveSection"
                    :active-section="activeSection"
                    @toggleSection="toggleSection"/>

    <div @click="toggleSection('passport')" class="section-title">Паспортные данные</div>
    <PassportInfoSection ref="passportInfoSection"
                         :is-active-section="isActiveSection"
                         :active-section="activeSection"
                         @toggleSection="toggleSection"/>

    <div class="form-group">
      <button type="submit" class="save-btn" @click.prevent="validateBeforeSubmit">Сохранить</button>
    </div>

    <NotificationComponent :isVisible.sync="isNotifVisible" ref="modal"/>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
export default {
  name: "ContactForm",
  mixins: [validationMixin],
  components: {
    PersonalInfoSection: () => import('@/components/PersonalInfoSection.vue'),
    AddressSection: () => import('@/components/AddressSection.vue'),
    PassportInfoSection: () => import('@/components/PassportInfoSection.vue'),
    NotificationComponent: () => import('@/components/NotificationComponent.vue')
  },
  data() {
    return {
      activeSection: 'personalInfo',
      isNotifVisible: false,
    }
  },
  methods: {
    toggleSection(section) {
      this.activeSection = this.activeSection === section ? null : section;
    },
    isActiveSection(section) {
      return this.activeSection === section;
    },
    validateBeforeSubmit() {
      if (this.$refs.personalInfoSection) {
        this.$refs.personalInfoSection.$v.$touch();
      }
      if (this.$refs.addressSection) {
        this.$refs.addressSection.$v.$touch();
      }
      if (this.$refs.passportInfoSection) {
        this.$refs.passportInfoSection.$v.$touch();
      }

      if (this.$refs.personalInfoSection.$v.$invalid ||
          this.$refs.addressSection.$v.$invalid ||
          this.$refs.passportInfoSection.$v.$invalid) {
        this.$refs.modal.setMessage('Заполните все необходимые поля.');
        this.isNotifVisible = true;
      } else {
        this.$refs.modal.setMessage('Новый контакт успешно создан!');
        this.isNotifVisible = true;
      }
    }
  },
}
</script>

<style scoped lang="scss">
.contact-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 550px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  margin: auto;
  padding: 20px;
  background: white;
  box-shadow: 0 0 10px rgba(121, 27, 27, 0.1);
  border-radius: 8px;
  z-index: 20;

  @media (max-width: 600px) {
      width: 70%;
      padding: 15px;
      top: 10%;
      transform: translate(-50%, 10%);
    }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 1.2em;
    cursor: pointer;
    color: #333;
  }

  .title{
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }

  .section-title{
    margin-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 2.25rem;
    font-weight: 600;
    text-align: left;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0 0.0625rem 0.25rem 0;
    background-color: #F6F5F7;

    @media (max-width: 600px) {
      margin-bottom: 0.3rem;
      font-size: 0.8rem;
      line-height: 2rem;
      padding: 0.5rem 0.8rem;
    }
  }

  .section{
    text-align: left;
    position: relative;
    padding: 1rem;

    @media (max-width: 600px) {
      padding: 0.8rem;
    }
  }

  .save-btn {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }

    @media (max-width: 600px) {
        padding: 12px 20px;
        font-size: 0.9em;
      }
  }
}
</style>
<template>
  <div class="section personal-info">
    <div v-show="isActiveSection('personalInfo')" class="input-wrapper">
      <FormGroup
          v-for="field in fields"
          :key="field.id"
          v-model="form[field.model]"
          :id="field.id"
          :label="field.label"
          :type="field.type"
          :options="field.options"
          :placeholder="field.placeholder"
          :errorMessage="field.errorMessage"
          :validator="getValidator(field.model)"
      />
    </div>
  </div>
</template>

<script>
import FormGroup from "@/components/FormGroup.vue";
import {maxLength, minLength, numeric, required} from "vuelidate/lib/validators";
export default {
  name: "PersonalInfoSection",
  components: { FormGroup },
  props: {
    activeSection: String,
  },
  data() {
    return {
      form: {
        surname: '',
        name: '',
        middlename: '',
        dateOfBirth: '',
        phoneNumber: '7',
        sex: '',
        group: '',
        doctor: '',
        selectedOptions: [],
        sms: '',
      },
      fields: [
        {
          id: 'surname',
          label: 'Фамилия*',
          model: 'surname',
          type: 'text',
          errorMessage: 'Обязательное поле',
        },
        {
          id: 'name',
          label: 'Имя*',
          model: 'name',
          type: 'text',
          errorMessage: 'Обязательное поле',
        },
        {
          id: 'middlename',
          label: 'Отчество',
          model: 'middlename',
          type: 'text',
        },
        {
          id: 'dateOfBirth',
          label: 'Дата рождения*',
          model: 'dateOfBirth',
          type: 'date',
          errorMessage: 'Обязательное поле',
        },
        {
          id: 'phoneNumber',
          label: 'Телефон*',
          model: 'phoneNumber',
          type: 'text',
          errorMessage: 'Номер должен содержать 11 цифр',
        },
        {
          id: 'sex',
          label: 'Пол',
          model: 'sex',
          type: 'select',
          placeholder: 'Выберите пол',
          options: ['Мужской', 'Женский'],
          errorMessage: 'Выберите вариант',
        },
        {
          id: 'group',
          label: 'Группа клиентов*',
          model: 'group',
          type: 'multiselect',
          placeholder: 'Выберите группу',
          options: ['VIP', 'Проблемные', 'ОМС'],
          errorMessage: 'Выберите вариант',
        },
        {
          id: 'doctor',
          label: 'Лечащий врач',
          model: 'doctor',
          type: 'select',
          placeholder: 'Выберите врача',
          options: ['Иванов', 'Захаров', 'Чернышева'],
          errorMessage: 'Выберите вариант',
        },
        {
          id: 'sms',
          label: 'Не отправлять СМС',
          model: 'sms',
          type: 'checkbox',
        }
      ]
    };
  },
  validations: {
    form: {
      surname: { required },
      name: { required },
      middlename: {},
      dateOfBirth: { required },
      phoneNumber: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
        numeric
      },
      sex: {},
      group: {required},
      doctor: {},
      sms: {}
    }
  },
  methods: {
    toggle() {
      this.$emit('toggleSection', 'personalInfo');
    },
    isActiveSection(section) {
      return this.activeSection === section;
    },
    getValidator(model) {
      if (this.$v && this.$v.form && this.$v.form[model]) {
        return this.$v.form[model];
      } else {
        console.error('Validation for ' + model + ' is not defined.');
        return null;
      }
    },
  },
}
</script>

<style scoped lang="scss">

</style>
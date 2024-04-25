<template>
  <div class="section personal-info">
    <div v-show="isActiveSection('passport')" class="input-wrapper">
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
import {required} from "vuelidate/lib/validators";
export default {
  name: "PassportInfoSection",
  components: { FormGroup },
  props: {
    isActiveSection: Function,
    activeSection: String,
  },
  data() {
    return {
      form: {
            type: '',
            dateOfIssue: '',
            series: '',
            number: '',
            issuedBy: '',
      },
      fields: [
        {
          id: 'type',
          label: 'Тип документа*',
          model: 'type',
          type: 'select',
          placeholder: 'Выберите вариант',
          options: ['Паспорт', 'Свидетельство о рождении', 'Водит. удостоверение'],
          errorMessage: 'Выберите вариант',
        },
        {
          id: 'series',
          label: 'Серия',
          model: 'series',
          type: 'text',
        },
        {
          id: 'number',
          label: 'Номер',
          model: 'number',
          type: 'text',
        },
        {
          id: 'dateOfIssue',
          label: 'Дата выдачи*',
          model: 'dateOfIssue',
          type: 'date',
          errorMessage: 'Обязательное поле',
        },
        {
          id: 'issuedBy',
          label: 'Выдан',
          model: 'issuedBy',
          type: 'text',
        },
      ]
    };
  },
  validations: {
    form: {
      type: {required},
      dateOfIssue: {required},
      series: {},
      number: {},
      issuedBy: {},
    }
  },
  methods: {
    getValidator(model) {
      return this.$v.form[model];
    },
  }
}
</script>

<style scoped lang="scss">

</style>
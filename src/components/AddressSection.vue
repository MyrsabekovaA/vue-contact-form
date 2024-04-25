<template>
  <div class="section personal-info">
    <div v-show="isActiveSection('address')" class="input-wrapper">
      <FormGroup
          v-for="field in fields"
          :key="field.id"
          v-model="form[field.model]"
          :id="field.id"
          :label="field.label"
          :type="field.type"
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
  name: "AddressSection",
  components: { FormGroup },
  props: {
    isActiveSection: Function,
    activeSection: String,
  },
  data() {
    return {
      form: {
        index: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house: '',
      },
      fields: [
        {
          id: 'index',
          label: 'Индекс',
          model: 'index',
          type: 'text',
        },
        {
          id: 'country',
          label: 'Страна',
          model: 'country',
          type: 'text',
        },
        {
          id: 'region',
          label: 'Регион',
          model: 'region',
          type: 'text',
        },
        {
          id: 'city',
          label: 'Город*',
          model: 'city',
          type: 'text',
          errorMessage: 'Обязательное поле',
        },
        {
          id: 'street',
          label: 'Улица',
          model: 'street',
          type: 'text',
        },
        {
          id: 'house',
          label: 'Дом',
          model: 'house',
          type: 'text',
        }
      ]
    };
  },
  validations: {
    form: {
      index: {},
      country: {},
      region: {},
      city: { required },
      street: {},
      house: {}
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
<template>
  <div class="form-group">
    <div class="sub-title">
      <label :for="id">{{ label }}</label>
      <span v-if="showError" class="error">{{ errorMessage }}</span>
    </div>
    <div class="input-field">
      <input v-if="type === 'text' || type === 'date'" :type="type" :id="id" v-model="internalValue" @blur="touchField" :class="{ 'is-invalid': showError }">
      <select v-else-if="type === 'select'" :id="id" v-model="internalValue" @blur="touchField" :class="{ 'is-invalid': showError }">
        <option disabled value="">{{ placeholder }}</option>
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      </select>
      <div v-else-if="type === 'multiselect'" :id="id" class="multi-select">
        <div class="selected-items"  @click="toggleDropdown">
          <div class="selected-item" v-for="(item, index) in internalValue" :key="index">
            {{ item }}
            <span class="remove-item" @click.stop="removeItem(index, $event)">×</span>
          </div>
        </div>
        <div v-show="showDropdown" class="dropdown" @click="toggleDropdown">
          <div class="dropdown-item" v-for="option in options" :key="option" @click.stop="selectItem(option)">
            {{ option }}
          </div>
        </div>
      </div>
      <input v-else-if="type === 'checkbox'" type="checkbox" :id="id" v-model="internalValue" @change="touchField" :class="{ 'is-invalid': showError }" class="checkbox">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
    };
  },
  props: {
    value: {
      required: true
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: 'Select one'
    },
    errorMessage: {
      type: String,
      default: ''
    },
    validator: {
      type: Object,
      default: () => ({ $invalid: false, $error: false, $touch: () => {} })
    }
  },
  computed: {
    showError() {
      return this.validator && this.validator.$error;
    },
    internalValue: {
      get() {
        if (this.type === 'multiselect') {
          return Array.isArray(this.value) ? this.value : [];
        }
        if (this.type === 'checkbox') {
          return !!this.value;
        }
        return this.value;
      },
      set(newValue) {
        if (this.type === 'multiselect') {
          if (!Array.isArray(newValue)) {
            newValue = [newValue];
          }
        }
        this.$emit('input', newValue);
      }
    }
  },
  methods: {
    toggleDropdown(event) {
      this.showDropdown = !this.showDropdown;
      event.stopPropagation();
    },
    selectItem(option) {
      if (!this.internalValue.includes(option)) {
        this.internalValue.push(option);
        this.$emit('input', this.internalValue);
      }
    },
    removeItem(index, event) {
      event.stopPropagation();
      this.internalValue.splice(index, 1);
      this.$emit('input', this.internalValue);
    },
    touchField() {
      if (this.validator) {
        this.validator.$touch();
      }
    },
    closeDropdown() {
      this.showDropdown = false;
    }
  },
  mounted() {
    document.addEventListener('click', this.closeDropdown);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeDropdown);
  },
}
</script>

<style scoped lang="scss">
.form-group {
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    margin-bottom: 0.6rem;
  }

  .sub-title{
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
  }

  label {
    flex: 1;
    margin-right: 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;

    @media (max-width: 600px) {
      font-size: 0.9rem;
    }
  }

  .error {
    flex-shrink: 0;
    color: red;
    font-size: 0.75rem;
    white-space: nowrap;
  }

  input[type="text"], input[type="date"], select, input[type="checkbox"], {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
  }

  input[type="checkbox"] {
    width: auto;
    margin-right: 0.5rem;
    vertical-align: middle;
  }

  .input-field{
    position: relative;
    width: 100%;
    border-radius: 0.5rem;
  }

  .is-invalid {
    border-color: red;
  }
  select {
    appearance: none;
  }

  .multi-select {
    position: relative;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    background-color: #fff;
    cursor: pointer;
  }

  .selected-items{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding: 8px;
    min-height: 18px;
  }

  .selected-item {
    background: #e4e4e4;
    border-radius: 4px;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  .remove-item {
    margin-left: 8px;
    color: red;
    cursor: pointer;
  }

  .dropdown {
    position: absolute;
    top: 90%;
    left: 0;
    width: 100%;
    border: 1px solid #ccc;
    background: white;
    z-index: 10;
  }

  .dropdown-item {
    padding: 8px;
    &:hover {
      background-color: #f0f0f0;
    }
  }
}
</style>
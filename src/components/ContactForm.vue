<script>
export default {
  emits: ['add'],
  data() {
    return {
      form: {
        name: '',
        phone: ''
      }
    };
  },
  computed: {
    nameIsValid() {
      /* Returns true if the name contains at least one character other than a space.
          Returns false if the name is empty or contains only spaces. */
      return !!this.form.name.trim();
    },
    phoneIsValid() {
      return /^\d{10}$/.test(this.form.phone);
    },
    formIsValid() {
      return this.nameIsValid && this.phoneIsValid;
    }
  },
  methods: {
    handleSubmit() {
      if (!this.formIsValid) return;
      /*  If the form is valid, it emits an add event with the name and phone values, 
          then resets the form fields to empty strings */
      this.$emit('add', { name: this.form.name, phone: this.form.phone });
      this.form.name = '';
      this.form.phone = '';
    }
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form-row">
    <!-- @submit is a shortcut for v-on:submit and listens to the submit event of the form. 
        It tells Vue to automatically call event.preventDefault() when the form is submitted. 
         This prevents the default browser behavior, which would normally reload the page.
         Instead, your handleSubmit method is called and the page does not refresh -->
    <div class="field">
      <!-- v-model="form.name" creates a two-way binding between the input value and the form.name property in the component. -->
      <input
        v-model="form.name"
        :class="{ 'is-danger': !nameIsValid && form.name }"
        placeholder="Name"
        type="text"
        class="input"
      />
      <p v-if="!nameIsValid && form.name" class="help is-danger">Name is required</p>
    </div>
    <div class="field">
      <input
        v-model="form.phone"
        :class="{ 'is-danger': !phoneIsValid && form.phone }"
        placeholder="Phone number"
        type="text"
        class="input"
      />
      <p v-if="!phoneIsValid && form.phone" class="help is-danger">Phone must have exactly 10 digits</p>
    </div>
    <!-- The button is enabled only when the form is filled out correctly. -->
    <button :disabled="!formIsValid" type="submit" class="button is-link">Add</button>
  </form>
</template>

<style scoped>

.form-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
  width: 100%;
}

.field {
  width: 100%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input {
  width: 100%;
  padding: 14px 18px;
  border: 1.5px solid #b0bec5;
  border-radius: 8px;
  font-size: 18px;
  outline: none; 
  /* Removes the default focus outline */
  background: #f4f8fb;
  box-shadow: 0 1px 2px rgba(79,140,255,0.04);
  margin-bottom: 4px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input.is-danger {
  border-color: #ff4f4f;
  background: #fff0f0;
}

.help.is-danger {
  color: #ff4f4f;
  font-size: 14px;
  margin-top: 2px;
  text-align: left;
  width: 100%;
}

.button.is-link {
  width: 100%;
  max-width: 340px;
  padding: 14px 0;
  background: linear-gradient(90deg, #4f8cff 30%, #00c6a7 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(79,140,255,0.08);
  transition: background 0.2s, box-shadow 0.2s, transform 0.1s;
  margin-top: 8px;
}

.button.is-link:disabled {
  opacity: 0.6;
  cursor: default;
}
</style>

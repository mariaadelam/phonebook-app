<script>
import PhoneBook from './model/PhoneBook';
import PhoneBookEntry from './model/PhoneBookEntry';
import ContactForm from './components/ContactForm.vue';
import ContactList from './components/ContactList.vue';

export default {
  name: "App",
  data() {
    return {
      phoneBook: new PhoneBook(),
      page: 'add' 
    }
  },
  methods: {
    addEntry({ name, phone }) {
      const entry = new PhoneBookEntry(name, phone); 
      this.phoneBook.add(entry); // create a new PhoneBookEntry instance with the provided name and phone
      this.page = 'list'; // after adding, switch to list view
      this.$forceUpdate(); // forces the component to refresh its view
    },
    deleteEntry(entry) {
      this.phoneBook.delete(entry);
      this.$forceUpdate();
    },
    goTo(page) {
      this.page = page; // switch between 'add' and 'list' pages
    }
  },
  components: {
    ContactForm,
    ContactList
  }
}
</script>

<template>
  <div id="phonebook-app">
    <nav class="nav-bar">
      <button @click="goTo('add')" :disabled="page==='add'">Add Contact</button> 
      <!-- :disabled="page==='add'" disables the button if the current page is 'add' -->
      <button @click="goTo('list')" :disabled="page==='list'">Contacts List</button>
    </nav>
    <div v-if="page === 'add'">
      <h2>Add Contact</h2>
      <ContactForm @add="addEntry" /> 
    </div>
    <div v-else>
      <h2>Contacts List</h2>
      <!-- App.vue passes the list of contacts (phoneBook.entries) to ContactList through the entries prop. -->
      <ContactList :entries="phoneBook.entries" @delete="deleteEntry" />
    </div>
  </div>
</template>

<style scoped>
#phonebook-app {
  max-width: 450px;
  height: 95vh;
  margin: 40px auto;
  padding: 20px;
  border-radius: 8px;
  background: #f9f9f9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-height: 90vh;
  overflow-y: auto; /* Enables vertical scrolling if content exceeds max-height */
}
h2 {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #4f8cff 30%, #00c6a7 100%);
  color: transparent;
  -webkit-background-clip: text; /* Ensures the gradient is applied to the text */
  background-clip: text; 
  text-shadow: 0 2px 8px rgba(79,140,255,0.15);
  border-bottom: 2px solid #4f8cff;
  padding-bottom: 8px;
  border-radius: 2px;
}
.nav-bar {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
}
.nav-bar button {
  padding: 8px 20px;
  background: linear-gradient(90deg, #4f8cff 30%, #00c6a7 100%);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(79,140,255,0.08);
  transition: background 0.2s, box-shadow 0.2s, transform 0.1s;
}
.nav-bar button:disabled {
  opacity: 0.6;
  cursor: default;
}
@media (max-width: 500px) {
  #phonebook-app {
    max-width: 98vw;
    padding: 8px;
  }
  h2 {
    font-size: 22px;
    padding-bottom: 4px;
  }
}
</style>
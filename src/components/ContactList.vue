<template>
  <ul class="contact-list">
    <!-- This line creates a list of ContactListItem components,
          one for each contact, and handles the deletion of each individual contact
          Used to create a ContactListItem component for each contact 

     :key="entry.phone" assigns the value of entry.phone as the key for each generated ContactListItem 
     :entry="entry" passes the entry object as a prop to the ContactListItem component.
     :@delete="onDelete(entry)" listens for the custom delete event emitted by the ContactListItem component.
     -->
    <ContactListItem
      v-for="entry in entries"
      :key="entry.phone"
      :entry="entry"
      @delete="onDelete(entry)"
    />
    <!-- The v-if="!entries.length" directive checks if the length of entries is zero
     entries.length == 0 -->
    <li v-if="!entries.length" class="empty-msg">No contacts yet.</li>
  </ul>
</template>

<script>
import ContactListItem from './ContactListItem.vue';

export default {
  name: "ContactList",
  props: ["entries"],
  components: { ContactListItem },
  methods: {
    onDelete(entry) {
      this.$emit("delete", entry);
    }
  }
}
 /* onDelete(entry) receives as an argument a contact (entry) that you want to delete.
It uses this.$emit("delete", entry); to emit a custom event called "delete" to the parent component (App.vue),
 also sending the respective contact as an argument.
 This method is called when the child component (ContactListItem) emits the delete event. */
</script>

<style scoped>
.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.empty-msg {
  text-align: center;
  color: #b0bec5;
  font-style: italic;
  padding: 16px 0;
}
</style>
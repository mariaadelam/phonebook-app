<template>
  <li class="entry-modern">
    <div class="initials">{{ initials }}</div>
    <div class="info">
      <div class="name">{{ entry.name }}</div>
      <div class="phone">{{ entry.phone }}</div>
    </div>
    <!-- When the user clicks the button (@click), the component emits a custom event called delete to the parent component using $emit('delete'). -->
    <button class="delete-btn" @click="$emit('delete')" title="Delete"></button>
  </li>
</template>

<script>
export default {
  name: "ContactListItem",
  props: ["entry"],
  computed: {
    initials() {
      if (!this.entry.name) return '';
      // Split the name by spaces and take the first letter of the first and last names
      // .trim() removes the spaces from the beginning and end of the name.
      const parts = this.entry.name.trim().split(' ');
      if (parts.length === 1) return parts[0][0].toUpperCase();
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
  }
}
</script>

<style scoped>
.entry-modern {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  padding: 12px 16px;
  margin-bottom: 12px;
  transition: box-shadow 0.2s;
}
.entry-modern:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
}
.initials {
  background: linear-gradient(135deg, #4f8cff 30%, #00c6a7 100%);
  color: #fff;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin-right: 18px;
  box-shadow: 0 1px 4px rgba(79,140,255,0.10);
}
.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.name {
  font-weight: bold;
  font-size: 18px;
}
.phone {
  color: #666;
  font-size: 15px;
}
.delete-btn {
  display: inline-block;
  width: 28px;
  height: 28px;
  background-image: url(../assets/icon-delete.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  flex-shrink: 0;
  margin-left: 16px;
  padding: 0;
  transition: background 0.2s, box-shadow 0.2s;
}
.delete-btn:hover {
  background-color: #9190d4; 
  box-shadow: 0 0 4px #446ad3;
}
@media (max-width: 600px) {
  .entry-modern {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 8px;
  }
  .initials {
    margin-right: 0;
    margin-bottom: 8px;
    width: 38px;
    height: 38px;
    font-size: 17px;
  }
  .info {
    width: 100%;
    margin-bottom: 8px;
  }
  .delete-btn {
    align-self: flex-end;
    /* .delete-btn button will be aligned to the bottom
   inside its flex container */
    margin-left: 0;
    margin-top: 6px;
  }
}
</style>
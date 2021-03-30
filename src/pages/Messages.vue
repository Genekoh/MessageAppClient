<template>
    <h1>MESSAGES</h1>
    <contact-list></contact-list>
    <message-history :contact="$route.params.contact"></message-history>
</template>

<script>
import ContactList from "../components/ContactList.vue";
import MessageHistory from "../components/MessageHistory.vue";

export default {
    components: { ContactList, MessageHistory }
};
</script>

<style scoped></style>

<template>
  <div class="col-xs-12">
    <div class="messageslist">
      <div class="row messageslist__row">
        <router-link tag="div" :class="[{messageslist__messageToRead: !message.read},{messageslist__messageReaded: message.read}]" :to="{name:'messagesDetail' , params: {ID: message._id , message: message}}" style="cursor: pointer" v-for='message in paginatedMessages' :key="message._id">
          <h2>Subject: {{ message.title }}</h2><br>
          <h3>From: {{ message.from }}</h3><br>
          <p>{{ message.content }}</p>
        </router-link>
      </div>
      <button :disabled="pageNumber === 0" @click="prevPage" class="btn btn-lg btn--white">Previous</button>
      {{pageNumber + 1}} / {{pageCount + 1}}
      <button :disabled="pageNumber >= pageCount" @click="nextPage" class="btn btn-lg btn--white">Next</button>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert2';

export default {
  name: 'messagesList',
  data() {
    return {
      title: 'Here are your AwesomeMessages',
      messages: [],
      pageNumber: 1,
      size: 5,
    };
  },
  computed: {
    // productsFilter() {
    //   return this.messages.filter(message => message.from.match(this.filter));
    // },
    pageCount() {
      const length = this.messages.length;
      const size = this.size;
      return Math.floor(length / size);
    },
    paginatedMessages() {
      const start = this.pageNumber * this.size;
      const end = start + this.size;
      return this.messages.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
    getMessage() {
      this.$http
        .get('/messages', {})
        .then((res) => {
          this.messages = res.data.content.reverse();
        })
        .catch((error) => {
          if (error) {
            swal({
              type: 'error',
              title: 'Oh no ...',
              text: error.response.data.message,
            });
          }
        });
    },
  },
  beforeMount() {
    this.getMessage();
  },
};
</script>

<style scoped>
</style>

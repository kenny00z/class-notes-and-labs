<template>
  <div class="tweet">
    <ProfileImage
      :image="dogTweets.tweet.user.image"
      class="profile"
      alt="profile"
    />

    <div class="body">
      <div class="top">
        <User :userData="dogTweets.tweet.user" />

        <timestamp :timestamp="dogTweets.tweet.timestamp" />
      </div>

      <Message :message="dogTweets.tweet.message" />

      <Action />
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script setup>
import { objectToString } from "@vue/shared";
import ProfileImage from "./ProfileImage.vue";
import User from "./User.vue";
import Timestamp from "./Timestamp.vue";
import Message from "./Message.vue";
import Action from "./Action.vue";

const dogTweets = defineProps({
  tweet: Object,
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

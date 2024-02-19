<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      mentors: [],
    };
  },
  mounted() {
    const storedMentors = JSON.parse(localStorage.getItem('mentors'))
    if(storedMentors) {
        this.mentors = storedMentors
    }
  },
};
</script>
<style lang=""></style>

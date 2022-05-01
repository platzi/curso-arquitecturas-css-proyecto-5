<template>
  <section>
    <button @click="previousLevel"> - </button>
    <img :src="dumbellImage" alt="dumbbell">
    <small>{{ level }}</small>
    <button @click="nextLevel"> + </button>
  </section>
  <section>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </section>
</template>

<script>
import { ref } from 'vue';

import dumbellImage from '@/assets/DUMBBELL.webp'

export default {
  props: {
    level: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  },

  emits: ['firstLevel', 'secondLevel', 'thirdLevel', 'fourthLevel'],

  setup(props, context) {
    const myLevel = ref(1);

    const nextLevel = () => {
      if (myLevel.value < 4) {
        switch (myLevel.value) {
          case 1:
            context.emit('secondLevel', myLevel.value);
            myLevel.value = 2;
          break;
          case 2:
            context.emit('thirdLevel', myLevel.value);
            myLevel.value = 3;
          break;
          case 3:
            context.emit('fourthLevel', myLevel.value);
            myLevel.value = 4;
          break;
        }
        console.log('myLevel: ', myLevel.value);
      }
    };

    const previousLevel = () => {
      if (myLevel.value > 1) {
        switch (myLevel.value) {
          case 2:
            context.emit('firstLevel', myLevel.value);
            myLevel.value = 1;
          break;
          case 3:
            context.emit('secondLevel', myLevel.value);
            myLevel.value = 2;
          break;
          case 4:
            context.emit('thirdLevel', myLevel.value);
            myLevel.value = 3;
          break;
        }
        console.log('myLevel: ', myLevel.value);
      }
    };

    return {
      dumbellImage,
      myLevel,
      nextLevel,
      previousLevel,
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100px;
}
</style>
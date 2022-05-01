<template>
  <h1>shuffle ab workout</h1>
  <ButtonImage
    :image="require('../assets/shuffle.png')"
    alt="logo" text="shuffle"
    @goToNextPage="goToWorkout"
  />
</template>

<script>
import { useRouter } from 'vue-router'

import ButtonImage from '@/components/buttons/ButtonImage'

export default {
  components: {
    ButtonImage
  },

  setup() {
    const router = useRouter()

    const goToWorkout = () => {
      router.push('/workout');
    };

    return {
      goToWorkout
    };
  }
}
</script>

<style>

</style>
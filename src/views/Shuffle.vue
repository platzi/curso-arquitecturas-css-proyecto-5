<template>
  <h1>shuffle ab workout</h1>
  <ButtonImage
    :image="require('../assets/shuffle.png')"
    alt="logo" text="Shuffle"
    @goToNextPage="goToWorkout"
  />
</template>

<script>
import { useRouter } from 'vue-router'

import ButtonImage from '@/components/buttons/ButtonImage'
import store from '@/store'

export default {
  components: {
    ButtonImage
  },

  setup() {
    const router = useRouter()

    const goToWorkout = () => {
      router.push('/workout');
      store.commit('clearState')
    };

    return {
      goToWorkout
    };
  }
}
</script>

<style>

</style>
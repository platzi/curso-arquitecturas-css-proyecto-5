<template>
  <button @click="nextStep">
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },

  emits: ['nextStep'],

  setup(props, context) {
    const nextStep = () => {
      context.emit('nextStep');
    };

    return {
      nextStep,
    };
  }
}
</script>

<style>

</style>
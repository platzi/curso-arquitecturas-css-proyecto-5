<template>
  <img
    :src="image"
    :alt="alt"
    @click="selectOption"
    :class=" isSelected ? 'redBorder' : '' "
  >
  <span>{{ text }}</span>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    image: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },

  emits: ["select"],

  setup(_, context) {

    const isSelected = ref(false);

    const selectOption = () => {
      isSelected.value = !isSelected.value;
      context.emit('select')
    }

    return {
      isSelected,
      selectOption
    };
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100px;

  &:hover {
    cursor: pointer;
  }
}

.redBorder {
  border: 3px solid red;
  border-radius: 5px;
}
</style>
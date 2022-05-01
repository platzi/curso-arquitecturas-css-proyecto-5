<template>
  <main class="main">
    <header>
      <h1 v-if="firstSlide">WHAT DO YOU WANT TO TRAIN?</h1>
      <h1 v-else-if="secondSlide">SELECT YOUR EQUIPMENT</h1>
      <h1 v-if="fourthSlide">CHOOSE YOUR FITNESS LEVEL</h1>
    </header>
    <hr>
    <section>
      <div v-if="firstSlide" class="firstSlide">
        <TrainingButton
          text="Specific area"
          @nextStep="specificArea"
        />
        <TrainingButton
          text="My entire core"
          @nextStep="nextSlide"
        />
        <TrainingButton
          text="Saved workouts"
          @nextStep="favorites"
        />
      </div>
      <div v-else-if="secondSlide" class="secondSlide">
        <h2>Note: Bodyweight is always selected</h2>
        <Option
          v-for="(option, index) in options"
          :key="index"
          :image="option.image"
          :alt="option.alt"
          :text="option.text"
        />
        <NextShuffle text="Next" @click="lastSlide" />
      </div>
      <div v-else-if="thirdSlide" class="thirdSlide">
        <button>upper</button>
        <button>lower</button>
        <button>obliques</button>
      </div>
      <div v-else-if="fourthSlide" class="fourthSlide">
        <Level
          v-if="levelOnModal === 1"
          level="Level 1"
          title="Basix Level"
          description="I TRAIN A FEW TIMES PER MONTH"
        />
        <Level
          v-if="levelOnModal === 2"
          level="Level 2"
          title="Next Level"
          description="I TRAIN 2-3 DAYS A WEEK"
        />
        <Level
          v-if="levelOnModal === 3"
          level="Level 3"
          title="Max Level"
          description="I TRAIN 4-5 DAYS A WEEK"
        />
        <Level
          v-if="levelOnModal === 4"
          level="Level 4"
          title="X-Treme Level"
          description="I AM ATHLEAN"
        />
      </div>
      <div>
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
      </div>
    </section>
  </main>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import TrainingButton from '@/components/buttons/TrainingButton'
import Option from '@/components/options/Option'
import NextShuffle from '@/components/buttons/NextShuffle'
import Level from '@/components/levels/Level'

import { options } from '@/utils/options';

export default {
  components: {
    TrainingButton,
    Option,
    NextShuffle,
    Level,
},

  setup() {
    const router = useRouter();

    const firstSlide = ref(true);
    const secondSlide = ref(false);
    const thirdSlide = ref(false);
    const fourthSlide = ref(false);

    let levelOnModal = ref(1);

    const firstLevel = (level) => {
      levelOnModal.value = level;
      console.log('level on MODAL:', levelOnModal.value);
      console.log('firstLevel');
      return levelOnModal;
    }

    const secondLevel = (level) => {
      levelOnModal.value = level;
      console.log('level on MODAL:', levelOnModal.value);
      console.log('secondLevel');
      return levelOnModal;
    }

    const thirdLevel = (level) => {
      levelOnModal.value = level;
      console.log('level on MODAL:', levelOnModal.value);
      console.log('thirdLevel');
      return levelOnModal;
    }

    const fourthLevel = (level) => {
      levelOnModal.value = level;
      console.log('level on MODAL:', levelOnModal.value);
      console.log('fourthLevel');
      return levelOnModal;
    }

    const nextSlide = () => {
      if (firstSlide.value) {
        firstSlide.value = false;
      }
      if (!secondSlide.value) {
        secondSlide.value = true;
      }
    };

    const lastSlide = () => {
      firstSlide.value = false;
      secondSlide.value = false;
      thirdSlide.value = false;
      fourthSlide.value = true;
    }

    const specificArea = () => {
      thirdSlide.value = true;
      firstSlide.value = false;
      secondSlide.value = false;
    }

    const favorites = () => {
      router.push('/favorites');
    }

    return {
      firstSlide,
      secondSlide,
      thirdSlide,
      fourthSlide,
      nextSlide,
      lastSlide,
      favorites,
      specificArea,
      options,
      firstLevel,
      secondLevel,
      thirdLevel,
      fourthLevel,
      levelOnModal
    };
  }
}
</script>

<style lang="scss" scoped>
</style>
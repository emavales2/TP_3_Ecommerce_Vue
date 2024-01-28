<!-- THIS COMPONENT IS THE STRUCTURE OF A BUTTON WITH BEHAVIOURS BUT NO COLOR ASSIGNED -->
<template>
    <button @click="performAction" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {{ btnText }}
    </button>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      required: true
    }
  },
  methods: {
    performAction () {
      this.$emit('perform-action')
    }
  }
}
</script>

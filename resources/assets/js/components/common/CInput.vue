<template>
  <input
    v-model="content"
    type="text"
    :placeholder="placeholder"
    @input="handleInput"
    @keypress.enter="handleEnter"
  />
</template>

<script>
export default {
  name: 'CInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      content: this.value
    }
  },
  methods: {
    handleInput () {
      this.$emit('input', this.content)
    },
    handleEnter () {
      this.$emit('enter', this.content)
    }
  }
}
</script>

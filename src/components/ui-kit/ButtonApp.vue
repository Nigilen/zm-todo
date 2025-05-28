<script setup lang="ts">

defineProps<{
  text?: string,
  type?: 'icon' | 'primary' | 'accent',
  onClick?: () => void
}>();


</script>

<template>
  <button :class="`button button--${type}`" type="button" :onclick="onClick">
    <slot name="icon" />
    {{ text }}
  </button>
</template>


<style scoped>

  .button {
    font: inherit;
    display: flex;
    align-items: center;
    border-radius: 4px;
    column-gap: 4px;
    padding: 10px 16px;
    border: none;
    box-shadow: none;
    outline: none;
    cursor: pointer;
    transition-duration: .3s;
    
    background-color: var(--color-bg-secondary);
    color: inherit;
  }

  .button:hover {
    background-color: #CFD5E4;
  }

  .button--icon {
    background-color: transparent;
    padding: 0;
  }

  .button--icon:hover {
    background-color: transparent;
  }

  .button--icon svg {
    fill: var(--color-muted);
    transition-duration: .3s;
  }
  
  .button--icon:hover svg {
    fill: var(--color-text-primary);
  }
  
  .button--accent {
    background-color: var(--color-bg-accent);
    color: #FFFFFF;
    transition-duration: .3s;
  }

  .button--accent:hover {
    background-color: #1B88CD;
  }

</style>
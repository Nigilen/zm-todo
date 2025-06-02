<script setup lang="ts">

const props = withDefaults(defineProps<{
  text?: string,
  styleType?: 'primary' | 'icon' | 'accent',
  size?: 'icon' | 'sm' | 'md' | 'lg',
  action?: 'add' | 'remove' | 'edit' | 'save',
  id?: number,
}>(), {
  styleType: 'primary',
  size: 'md',
});

const emit = defineEmits<{
  (e: 'add'): void
  (e: 'remove', id: number): void
  (e: 'edit'): void
  (e: 'save', id: number): void
}>();

const handleClick = () => {
  if (props.action === 'add') emit('add');
  if (props.action === 'remove' && props.id) emit('remove', props.id);
  if (props.action === 'edit') emit('edit');
  if (props.action === 'save' && props.id) emit('save', props.id);
};

</script>

<template>
  <button 
    :class="{ 
      'button': true,
      [`button--${styleType}`]: true,
      [`button--${size}`]: true,
    }" 
    type="button" 
    @click="handleClick"
  >
    <slot name="icon" />
    {{ text }}
  </button>
</template>


<style scoped>

  .button {
    position: relative;
    font: inherit;
    display: flex;
    align-items: center;
    border-radius: 4px;
    column-gap: 4px;
    
    border: none;
    box-shadow: none;
    outline: none;
    cursor: pointer;
    transition-duration: var(--transition-duration);
    color: inherit;
  }

  .button:hover {
    background-color: #CFD5E4;
  }

  .button:active {
    transform: scale(0.98);
  }

  .button:focus-visible {
    box-shadow: 0 0 0 2px var(--color-focus-ring);
  }

  .button--icon {
    padding: 0;
  }
  .button--sm {
    padding: 9px 8px;
  }
  .button--md {
    padding: 10px;
  }
  .button--lg {
    padding: 10px 16px;
  }

  .button--primary {
    background-color: var(--color-bg-secondary);
  }
  .button--icon {
    background-color: transparent;
  }
  .button--icon:hover {
    background-color: transparent;
  }
  .button--icon svg {
    fill: var(--color-muted);
    transition-duration: var(--transition-duration);
  }
  .button--icon:hover svg {
    fill: var(--color-text-primary);
  }
  .button--accent {
    background-color: var(--color-bg-accent);
    color: #FFFFFF;
    transition-duration: var(--transition-duration);
  }
  .button--accent:hover {
    background-color: #1B88CD;
  }

  .button::after {
    content: '';
    position: absolute;
    inset: 0;
    background: currentColor;
    opacity: 0;
    transition: opacity var(--transition-duration);
  }

  .button:active::after {
    opacity: 0.1;
  }

</style>
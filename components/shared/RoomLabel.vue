<script setup lang="ts">
import { type Label, LABEL_DISPLAY } from '../../utils/labels'

defineProps<{
  label: Label
}>()
</script>

<template>
  <div
    :class="[
      'rounded-full',
      'text-white',
      'grid',
      'place-items-center',
      'shadow-gray-400',
      'shadow-sm',
      'w-6',
      'h-6',
      LABEL_DISPLAY[label].color
    ]"
  >
    <mdicon
      :name="LABEL_DISPLAY[label].icon"
      size="16"
    />
  </div>
</template>
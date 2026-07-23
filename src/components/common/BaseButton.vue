<template>
  <router-link
    v-if="to"
    :to="to"
    :class="['btn', soon ? 'soon' : '']"
    :style="accent ? { '--accent': accent } : {}"
  >
    <slot />
  </router-link>
  <a
    v-else-if="href"
    :href="href"
    :class="['btn', soon ? 'soon' : '']"
    :style="accent ? { '--accent': accent } : {}"
    @click="handleClick"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    :class="['btn', soon ? 'soon' : '']"
    :style="accent ? { '--accent': accent } : {}"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup>
import { useUiStore } from '@/stores/uiStore'

const props = defineProps({
  to: String,
  href: String,
  type: {
    type: String,
    default: 'button'
  },
  accent: String,
  soon: Boolean,
  page: String
})

const emit = defineEmits(['click'])
const uiStore = useUiStore()

function handleClick(e) {
  if (props.soon || props.page) {
    e.preventDefault()
    const soonText = props.soon ? 'Bientôt disponible' : 'en construction'
    uiStore.showToast(`Onglet « ${props.page || 'Service'} » — ${soonText}`)
  }
  emit('click', e)
}
</script>

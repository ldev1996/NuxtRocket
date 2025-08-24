<template>
    <Teleport to="body">
        <Transition name="modal">
            <div
                v-if="open"
                class="bg-overlay/50 fixed left-0 top-0 w-full h-full flex items-center justify-center z-99"
            >
                <div
                    _card
                    _flex="~ col"
                    ref="modal"
                >
                    <div
                        _flex
                        _items-center
                        _justify-between
                    >
                        <div
                            class="flex items-center justify-between mb-4 gap-2 pb-2"
                            _border="b-1 b-border"
                        >
                            <slot name="title">
                                <span class="h3 text-foreground">
                                    {{ props.title }}
                                </span>
                            </slot>
                            <button
                                _btn-ghost
                                @click="closeModal()"
                            >
                                X
                            </button>
                        </div>
                    </div>
                    <div class="text-foreground w-full h-full">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
    import { onClickOutside } from '@vueuse/core'

    const modal = ref(null)
    const props = defineProps({
        open: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '',
        },
    })

    const emit = defineEmits(['update:open'])
    const closeModal = () => {
        emit('update:open', false)
    }
    onClickOutside(modal, () => closeModal())
</script>

<style>
    .modal-enter-active,
    .modal-leave-active {
        transition: all 0.25s ease;
    }

    .modal-enter-from,
    .modal-leave-to {
        opacity: 0;
        transform: scale(1.1);
    }
</style>

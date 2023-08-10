<template>
  <ModalWrapper :visible="props.visible" @close="emit('close')">
    <div class="container">
      <div class="alert-message">
        Подтвердите установку аватарок для всех пользователей без фотографии
      </div>
      <div class="button-wrapper">
        <button class="action-btn" @click="emit('click')">
          Установить всем аватары
        </button>
        <button class="action-btn" @click="emit('close')">Отмена</button>
      </div>
    </div>
  </ModalWrapper>
</template>

<script lang="ts" setup>
import type { AvatarOption } from '@/types'
import ModalWrapper from './ModalWrapper.vue'

const props = defineProps<{ visible?: boolean; avatarList?: AvatarOption[] }>()

const emit = defineEmits<{
  (e: 'regenerate'): void
  (e: 'close'): void
  (e: 'click'): void
}>()
</script>

<style lang="scss" scoped>
@use 'src/styles/var';
.button-wrapper {
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
}
.alert-message {
  font-size: 18px;
  font-weight: 700;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  min-height: 100px;
  overflow: hidden;
  background-color: lighten(var.$color-dark, 3);
  padding: 20px;
  border-radius: 1rem;
  transform: translate(-50%, -50%);

  $top-bar-height: 3.5rem;

  .top-bar {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    height: $top-bar-height;
    padding: 1rem 2rem;
    background-color: lighten(var.$color-dark, 6);

    .right {
      display: flex;
      align-items: center;
      margin-left: auto;

      .download-btn {
        color: #fff;
        background-color: var.$color-accent;
      }

      .regenerate-btn,
      .download-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2rem;
        margin-left: 1rem;
        padding: 0 1rem;
        border-radius: 0.4rem;
        cursor: pointer;

        &:disabled,
        &[disabled] {
          color: rgba(#fff, 0.8);
          cursor: not-allowed;
        }
      }
    }
  }

  .content-box {
    height: 100%;
    padding: $top-bar-height 0rem 0rem 0rem;
  }

  .content {
    z-index: 10;
    display: grid;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    justify-content: space-between;
    width: max(85vw, 1280px);
    padding: 2rem;

    .avatar-box {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      .download-single {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 6.6rem;
        height: 2.3rem;
        margin-left: 1rem;
        padding: 0 1rem;
        color: var.$color-text;
        font-weight: bold;
        background: var.$color-gray;
        border-radius: 0.4rem;
        border-radius: 0.6rem;
        transform: translateX(-50%);
        cursor: pointer;
        opacity: 0;
        transition: color 0.2s;
        user-select: none;

        &:hover {
          color: lighten(var.$color-text, 10);
        }
      }

      &:hover .download-single {
        opacity: 1;
      }
    }
  }
}

.action-btn {
  min-width: 6rem;
  height: 2.5rem;
  padding: 0 1rem;
  color: var.$color-text;
  font-weight: bold;
  background: var.$color-gray;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: color 0.2s;
  user-select: none;

  &:hover {
    color: lighten(var.$color-text, 10);
  }

  &:disabled,
  &[disabled] {
    color: rgba(var.$color-text, 0.5);
    cursor: default;
  }
}
</style>

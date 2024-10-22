<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { lockScreen } = useLockScreen();

defineOptions({
  name: 'vUserDetail',
});

const form = ref();

const formData = reactive({
});
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueText id="viy2Text_w7p6u" ref="viy2Text_w7p6u" :style="{ width: '100%', display: 'inline-block' }">
      利用者詳細画面
    </VueText>
  </VueForm>
</template>

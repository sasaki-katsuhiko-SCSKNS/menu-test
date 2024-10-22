<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { lockScreen } = useLockScreen();

defineOptions({
  name: 'xRollManagement',
});

const form = ref();

const formData = reactive({
});
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueText id="viy2Text_exoxQ" ref="viy2Text_exoxQ" :style="{ width: '100%', display: 'inline-block' }">
      ロール管理
    </VueText>
  </VueForm>
</template>

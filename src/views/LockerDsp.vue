<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { lockScreen } = useLockScreen();

defineOptions({
  name: 'LockerDsp',
});

const form = ref();

const formData = reactive({
});
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueText id="viy2Text_a63vz" ref="viy2Text_a63vz" :style="{ width: '100%', display: 'inline-block' }">
      ロッカー一覧画面
    </VueText>
  </VueForm>
</template>

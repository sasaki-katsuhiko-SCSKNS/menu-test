<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { lockScreen } = useLockScreen();

defineOptions({
  name: 'EquipmentDsp',
});

const form = ref();

const formData = reactive({
});
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueText id="viy2Text_9ZhLM" ref="viy2Text_9ZhLM" :style="{ width: '100%', display: 'inline-block' }">
      備品一覧画面
    </VueText>
  </VueForm>
</template>

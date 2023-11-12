<template>
  <q-form
    @submit.prevent="HandleEvent"
    class="col-md-8 col-sm-8 col-xs-10"
    ref="form"
  >
    <FormField
      :rules="inputRules.vEmail"
      :label="$t(`myContact.labelEmail`)"
      type="text"
      class="q-mb-md"
      icon="email"
      v-model="email"
    ></FormField>
    <FormField
      :rules="inputRules.vMessage"
      v-model="message"
      :label="$t(`myContact.labelText`)"
      type="textarea"
      class="q-mb-md"
      icon="volunteer_activism"
    ></FormField>
    <q-btn
      :loading="loading"
      color="black"
      :label="$t(`myContact.buttonSend`)"
      type="submit"
    />
  </q-form>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { api } from "src/boot/axios";
import { useRules } from "src/composables/inputRules";
import { useNotify } from "src/composables/notifyPluging";
import FormField from "./FormField.vue";

const inputRules = useRules();
const { t } = useI18n();

const form = ref(null);
const loading = ref(false);
const message = ref("");
const email = ref("");

const HandleEvent = async () => {
  try {
    loading.value = true;
    await api.post("/comments/comment", {
      email: email.value,
      message: message.value,
    });

    message.value = "";
    email.value = "";
    form.value.reset();
    useNotify(
      `${t("myContact.notifyResult.success")}`,
      "bottom-right",
      "pink-11"
    );
  } catch (error) {
    console.log(error.response?.data);
    useNotify(`${t("myContact.notifyResult.failed")}`, "bottom-right", "red");
  } finally {
    loading.value = false;
  }
};
</script>

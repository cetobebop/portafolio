import { useI18n } from "vue-i18n";

export const useRules = () => {
  const { t } = useI18n();

  const vEmail = (val) => {
    if (val) {
      if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val))
        return `${t("inputValidations.email.format")}`;
    }
    return true;
  };

  const vMessage = (val) => {
    if (!val.trim()) return `${t("inputValidations.message.required")}`;
    else if (val.length > 200)
      return `${t("inputValidations.message.maxLength")}`;
  };

  return {
    vEmail,
    vMessage,
  };
};

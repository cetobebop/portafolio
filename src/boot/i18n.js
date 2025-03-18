import { createI18n } from "vue-i18n";
import messages from "src/i18n";

const i18n = createI18n({
  locale: "es",
  globalInjection: true,
  messages,
  legacy: false,
});

export default ({ app }) => {
  // Create I18n instance

  // Tell app to use the I18n instance
  app.use(i18n);
};

export { i18n };

import { Notify } from "quasar";

export function useNotify(message, position, color) {
  Notify.create({
    message,
    position,
    color,
  });
}

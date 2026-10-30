import { ruRU } from "@/locales/vendor/clerk/ru-RU.mjs";

// Fill the authentication strings missing from Clerk's Russian locale.
export const clerkRussian = {
  ...ruRU,
  footerActionLink__alternativePhoneCodeProvider: "Отправить код по SMS",
  reverification: {
    ...ruRU.reverification,
    alternativeMethods: { ...ruRU.reverification.alternativeMethods, blockButton__passkey: "Использовать ключ доступа" },
    passkey: {
      ...ruRU.reverification.passkey,
      blockButton__passkey: "Использовать ключ доступа",
      title: "Использовать ключ доступа",
      subtitle: "Ключ доступа подтвердит вашу личность. Устройство может запросить отпечаток пальца, распознавание лица или код разблокировки.",
    },
  },
  signIn: {
    ...ruRU.signIn,
    alternativePhoneCodeProvider: {
      ...ruRU.signIn.alternativePhoneCodeProvider,
      formTitle: "Код подтверждения",
      resendButton: "Не получили код? Отправить ещё раз",
      subtitle: "чтобы продолжить работу в {{applicationName}}",
      title: "Проверьте {{provider}}",
    },
    start: {
      ...ruRU.signIn.start,
      subtitleCombined: "чтобы продолжить работу в {{applicationName}}",
      alternativePhoneCodeProvider: {
        actionLink: "Выбрать другой способ",
        label: "Номер телефона {{provider}}",
        subtitle: "Введите номер телефона, чтобы получить код подтверждения через {{provider}}.",
        title: "Вход в {{applicationName}} через {{provider}}",
      },
    },
  },
  signUp: {
    ...ruRU.signUp,
    alternativePhoneCodeProvider: {
      ...ruRU.signUp.alternativePhoneCodeProvider,
      resendButton: "Не получили код? Отправить ещё раз",
      subtitle: "Введите код подтверждения, отправленный через {{provider}}",
      title: "Подтвердите {{provider}}",
    },
    start: {
      ...ruRU.signUp.start,
      alternativePhoneCodeProvider: {
        actionLink: "Выбрать другой способ",
        label: "Номер телефона {{provider}}",
        subtitle: "Введите номер телефона, чтобы получить код подтверждения через {{provider}}.",
        title: "Регистрация в {{applicationName}} через {{provider}}",
      },
    },
  },
  unstable__errors: {
    ...ruRU.unstable__errors,
    form_code_incorrect: "Неверный код подтверждения.",
    form_param_format_invalid: "Неверный формат значения.",
    form_param_nil: "Заполните это поле.",
    form_param_type_invalid: "Недопустимое значение.",
    form_param_type_invalid__email_address: "Введите корректный адрес электронной почты.",
    form_param_type_invalid__phone_number: "Введите корректный номер телефона.",
    form_param_value_invalid: "Недопустимое значение.",
    form_password_incorrect: "Неверный пароль.",
    form_password_length_too_short: "Пароль слишком короткий. Он должен содержать не менее 8 символов.",
    form_username_invalid_character: "Имя пользователя содержит недопустимые символы.",
    form_username_invalid_length: "Длина имени пользователя должна быть от {{min_length}} до {{max_length}} символов.",
    organization_domain_exists_for_enterprise_connection: "Этот домен уже используется для подключения организации.",
    web3_missing_identifier: "Расширение кошелька Web3 не найдено. Установите его, чтобы продолжить.",
  },
};

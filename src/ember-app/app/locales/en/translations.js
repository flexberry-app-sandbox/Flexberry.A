import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISAЕдИзмерLForm from './forms/i-i-s-a-ед-измер-l';
import IISAЗаказПокупLForm from './forms/i-i-s-a-заказ-покуп-l';
import IISAКонтрагентыLForm from './forms/i-i-s-a-контрагенты-l';
import IISAНоменклатурыLForm from './forms/i-i-s-a-номенклатуры-l';
import IISAОрганизацииLForm from './forms/i-i-s-a-организации-l';
import IISAОстатНаСкладLForm from './forms/i-i-s-a-остат-на-склад-l';
import IISAОтчетОПродажахLForm from './forms/i-i-s-a-отчет-о-продажах-l';
import IISAПодразеленияLForm from './forms/i-i-s-a-подразеления-l';
import IISAСкладыLForm from './forms/i-i-s-a-склады-l';
import IISAЕдИзмерEForm from './forms/i-i-s-a-ед-измер-e';
import IISAЗаказПокупEForm from './forms/i-i-s-a-заказ-покуп-e';
import IISAКонтрагентыEForm from './forms/i-i-s-a-контрагенты-e';
import IISAНоменклатурыEForm from './forms/i-i-s-a-номенклатуры-e';
import IISAОрганизацииEForm from './forms/i-i-s-a-организации-e';
import IISAОстатНаСкладEForm from './forms/i-i-s-a-остат-на-склад-e';
import IISAОтчетОПродажахEForm from './forms/i-i-s-a-отчет-о-продажах-e';
import IISAПодразеленияEForm from './forms/i-i-s-a-подразеления-e';
import IISAСкладыEForm from './forms/i-i-s-a-склады-e';
import IISAЕдИзмерModel from './models/i-i-s-a-ед-измер';
import IISAЗаказПокупModel from './models/i-i-s-a-заказ-покуп';
import IISAКонтрагентыModel from './models/i-i-s-a-контрагенты';
import IISAНоменклатурыModel from './models/i-i-s-a-номенклатуры';
import IISAОрганизацииModel from './models/i-i-s-a-организации';
import IISAОстатНаСкладModel from './models/i-i-s-a-остат-на-склад';
import IISAОтчетОПродажахModel from './models/i-i-s-a-отчет-о-продажах';
import IISAПодразеленияModel from './models/i-i-s-a-подразеления';
import IISAСкладыModel from './models/i-i-s-a-склады';
import IISAТЧТоварИУслугModel from './models/i-i-s-a-т-ч-товар-и-услуг';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-a-ед-измер': IISAЕдИзмерModel,
    'i-i-s-a-заказ-покуп': IISAЗаказПокупModel,
    'i-i-s-a-контрагенты': IISAКонтрагентыModel,
    'i-i-s-a-номенклатуры': IISAНоменклатурыModel,
    'i-i-s-a-организации': IISAОрганизацииModel,
    'i-i-s-a-остат-на-склад': IISAОстатНаСкладModel,
    'i-i-s-a-отчет-о-продажах': IISAОтчетОПродажахModel,
    'i-i-s-a-подразеления': IISAПодразеленияModel,
    'i-i-s-a-склады': IISAСкладыModel,
    'i-i-s-a-т-ч-товар-и-услуг': IISAТЧТоварИУслугModel
  },

  'application-name': 'A',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'A',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'A',
          title: 'A'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        a: {
          caption: 'A',
          title: 'A',
          отчеты: {
            caption: 'Отчеты',
            title: 'Отчеты',
            'i-i-s-a-отчет-о-продажах-l': {
              caption: 'Отчет о продажах',
              title: ''
            },
            'i-i-s-a-остат-на-склад-l': {
              caption: 'Остат на склад',
              title: ''
            }
          },
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-a-организации-l': {
              caption: 'Организации',
              title: ''
            },
            'i-i-s-a-склады-l': {
              caption: 'Склады',
              title: ''
            },
            'i-i-s-a-номенклатуры-l': {
              caption: 'Номенклатуры',
              title: ''
            },
            'i-i-s-a-ед-измер-l': {
              caption: 'Ед измер',
              title: ''
            },
            'i-i-s-a-подразеления-l': {
              caption: 'Подразеления',
              title: ''
            },
            'i-i-s-a-контрагенты-l': {
              caption: 'Контрагенты',
              title: ''
            }
          },
          договора: {
            caption: 'Договора',
            title: 'Договора',
            'i-i-s-a-заказ-покуп-l': {
              caption: 'Заказ покуп',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-a-ед-измер-l': IISAЕдИзмерLForm,
    'i-i-s-a-заказ-покуп-l': IISAЗаказПокупLForm,
    'i-i-s-a-контрагенты-l': IISAКонтрагентыLForm,
    'i-i-s-a-номенклатуры-l': IISAНоменклатурыLForm,
    'i-i-s-a-организации-l': IISAОрганизацииLForm,
    'i-i-s-a-остат-на-склад-l': IISAОстатНаСкладLForm,
    'i-i-s-a-отчет-о-продажах-l': IISAОтчетОПродажахLForm,
    'i-i-s-a-подразеления-l': IISAПодразеленияLForm,
    'i-i-s-a-склады-l': IISAСкладыLForm,
    'i-i-s-a-ед-измер-e': IISAЕдИзмерEForm,
    'i-i-s-a-заказ-покуп-e': IISAЗаказПокупEForm,
    'i-i-s-a-контрагенты-e': IISAКонтрагентыEForm,
    'i-i-s-a-номенклатуры-e': IISAНоменклатурыEForm,
    'i-i-s-a-организации-e': IISAОрганизацииEForm,
    'i-i-s-a-остат-на-склад-e': IISAОстатНаСкладEForm,
    'i-i-s-a-отчет-о-продажах-e': IISAОтчетОПродажахEForm,
    'i-i-s-a-подразеления-e': IISAПодразеленияEForm,
    'i-i-s-a-склады-e': IISAСкладыEForm
  },

});

export default translations;

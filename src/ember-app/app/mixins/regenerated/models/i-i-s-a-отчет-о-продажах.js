import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаОкончания: DS.attr('date'),
  состОплат: DS.attr('i-i-s-a-сост-оплаты'),
  состОтгруз: DS.attr('i-i-s-a-сост-огрузки'),
  сумВклНДС: DS.attr('number'),
  сумма: DS.attr('number'),
  контрагенты: DS.belongsTo('i-i-s-a-контрагенты', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-a-организации', { inverse: null, async: false }),
  подразеления: DS.belongsTo('i-i-s-a-подразеления', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-a-склады', { inverse: null, async: false }),
  тЧТоварИУслуг: DS.hasMany('i-i-s-a-т-ч-товар-и-услуг', { inverse: 'отчетОПродажах', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-a-отчет-о-продажах.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-a-отчет-о-продажах.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  состОплат: {
    descriptionKey: 'models.i-i-s-a-отчет-о-продажах.validations.состОплат.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состОтгруз: {
    descriptionKey: 'models.i-i-s-a-отчет-о-продажах.validations.состОтгруз.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумВклНДС: {
    descriptionKey: 'models.i-i-s-a-отчет-о-продажах.validations.сумВклНДС.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-a-отчет-о-продажах.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-a-отчет-о-продажах.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-a-отчет-о-продажах.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  подразеления: {
    descriptionKey: 'models.i-i-s-a-отчет-о-продажах.validations.подразеления.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-a-отчет-о-продажах.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧТоварИУслуг: {
    descriptionKey: 'models.i-i-s-a-отчет-о-продажах.validations.тЧТоварИУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетОПродажахE', 'i-i-s-a-отчет-о-продажах', {
    датаНачала: attr('Дата начала', { index: 0 }),
    датаОкончания: attr('Дата окончания', { index: 1 }),
    организации: belongsTo('i-i-s-a-организации', 'Организации', {
      организация: attr('Организация', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'организация' }),
    склады: belongsTo('i-i-s-a-склады', 'Склады', {
      склад: attr('Склад', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'склад' }),
    подразеления: belongsTo('i-i-s-a-подразеления', 'Подразеления', {
      подразделение: attr('Подразделение', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'подразделение' }),
    контрагенты: belongsTo('i-i-s-a-контрагенты', 'Контрагенты', {
      контрагент: attr('Контрагент', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'контрагент' }),
    состОтгруз: attr('Состояние отгрузки', { index: 10 }),
    состОплат: attr('Состояние оплаты', { index: 11 }),
    сумВклНДС: attr('Сумма включая НДС', { index: 12 }),
    тЧТоварИУслуг: hasMany('i-i-s-a-т-ч-товар-и-услуг', 'Табличная часть товаров и услуг', {
      номенклатуры: belongsTo('i-i-s-a-номенклатуры', 'Номенклатуры', {
        номенклатура: attr('Номенклатура', { index: 1, hidden: true }),
        едИзмер: belongsTo('i-i-s-a-ед-измер', '', {
          едИзмер: attr('Единицы измерения', { index: 2 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'номенклатура' }),
      количестов: attr('Количестов', { index: 3 }),
      цена: attr('Цена', { index: 4 }),
      суммаНДС: attr('Сумма НДС', { index: 5 }),
      сумма: attr('Сумма', { index: 6 })
    })
  });

  modelClass.defineProjection('ОтчетОПродажахL', 'i-i-s-a-отчет-о-продажах', {
    датаОкончания: attr('Дата окончания', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    сумВклНДС: attr('Сум вкл НДС', { index: 2 }),
    состОтгруз: attr('Сост отгруз', { index: 3 }),
    состОплат: attr('Сост оплат', { index: 4 }),
    подразеления: belongsTo('i-i-s-a-подразеления', 'Подразделение', {
      подразделение: attr('Подразделение', { index: 5 })
    }, { index: -1, hidden: true }),
    склады: belongsTo('i-i-s-a-склады', 'Склад', {
      склад: attr('Склад', { index: 6 })
    }, { index: -1, hidden: true }),
    контрагенты: belongsTo('i-i-s-a-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 7 })
    }, { index: -1, hidden: true }),
    организации: belongsTo('i-i-s-a-организации', 'Организация', {
      организация: attr('Организация', { index: 8 })
    }, { index: -1, hidden: true })
  });
};

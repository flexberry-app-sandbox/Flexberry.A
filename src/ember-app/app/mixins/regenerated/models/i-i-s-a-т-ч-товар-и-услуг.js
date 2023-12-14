import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количестов: DS.attr('number'),
  сумма: DS.attr('number'),
  суммаНДС: DS.attr('number'),
  цена: DS.attr('number'),
  номенклатуры: DS.belongsTo('i-i-s-a-номенклатуры', { inverse: null, async: false }),
  отчетОПродажах: DS.belongsTo('i-i-s-a-отчет-о-продажах', { inverse: 'тЧТоварИУслуг', async: false, polymorphic: true })
});

export let ValidationRules = {
  количестов: {
    descriptionKey: 'models.i-i-s-a-т-ч-товар-и-услуг.validations.количестов.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-a-т-ч-товар-и-услуг.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  суммаНДС: {
    descriptionKey: 'models.i-i-s-a-т-ч-товар-и-услуг.validations.суммаНДС.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-a-т-ч-товар-и-услуг.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номенклатуры: {
    descriptionKey: 'models.i-i-s-a-т-ч-товар-и-услуг.validations.номенклатуры.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отчетОПродажах: {
    descriptionKey: 'models.i-i-s-a-т-ч-товар-и-услуг.validations.отчетОПродажах.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧТоварИУслугE', 'i-i-s-a-т-ч-товар-и-услуг', {
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
  });
};

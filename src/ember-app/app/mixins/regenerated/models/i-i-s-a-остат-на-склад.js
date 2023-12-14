import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  колл: DS.attr('number'),
  номенклатуры: DS.belongsTo('i-i-s-a-номенклатуры', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-a-организации', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-a-склады', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-a-остат-на-склад.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  колл: {
    descriptionKey: 'models.i-i-s-a-остат-на-склад.validations.колл.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номенклатуры: {
    descriptionKey: 'models.i-i-s-a-остат-на-склад.validations.номенклатуры.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-a-остат-на-склад.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-a-остат-на-склад.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОстатНаСкладE', 'i-i-s-a-остат-на-склад', {
    дата: attr('Дата', { index: 0 }),
    организации: belongsTo('i-i-s-a-организации', 'Организации', {
      организация: attr('Организация', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'организация' }),
    склады: belongsTo('i-i-s-a-склады', 'Склады', {
      склад: attr('Склад', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'склад' }),
    номенклатуры: belongsTo('i-i-s-a-номенклатуры', 'Номенклатуры', {
      номенклатура: attr('Номенклатура', { index: 6, hidden: true }),
      едИзмер: belongsTo('i-i-s-a-ед-измер', '', {
        едИзмер: attr('Единица измерения', { index: 7 })
      }, { index: -1, hidden: true })
    }, { index: 5, displayMemberPath: 'номенклатура' }),
    колл: attr('Количество', { index: 8 })
  });

  modelClass.defineProjection('ОстатНаСкладL', 'i-i-s-a-остат-на-склад', {
    дата: attr('Дата', { index: 0 }),
    колл: attr('Колл', { index: 1 }),
    склады: belongsTo('i-i-s-a-склады', 'Склад', {
      склад: attr('Склад', { index: 2 })
    }, { index: -1, hidden: true }),
    организации: belongsTo('i-i-s-a-организации', 'Организация', {
      организация: attr('Организация', { index: 3 })
    }, { index: -1, hidden: true }),
    номенклатуры: belongsTo('i-i-s-a-номенклатуры', 'Номенклатура', {
      номенклатура: attr('Номенклатура', { index: 4 })
    }, { index: -1, hidden: true })
  });
};

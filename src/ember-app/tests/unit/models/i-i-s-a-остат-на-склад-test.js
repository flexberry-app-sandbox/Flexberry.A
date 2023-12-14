import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-a-остат-на-склад', 'Unit | Model | i-i-s-a-остат-на-склад', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-a-ед-измер',
    'model:i-i-s-a-заказ-покуп',
    'model:i-i-s-a-контрагенты',
    'model:i-i-s-a-номенклатуры',
    'model:i-i-s-a-организации',
    'model:i-i-s-a-остат-на-склад',
    'model:i-i-s-a-отчет-о-продажах',
    'model:i-i-s-a-подразеления',
    'model:i-i-s-a-склады',
    'model:i-i-s-a-т-ч-товар-и-услуг',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

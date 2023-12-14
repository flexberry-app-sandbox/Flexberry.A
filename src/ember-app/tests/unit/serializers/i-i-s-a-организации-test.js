import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-a-организации', 'Unit | Serializer | i-i-s-a-организации', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-a-организации',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-a-сост-огрузки',
    'transform:i-i-s-a-сост-оплаты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

import { Serializer as ПодразеленияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-a-подразеления';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПодразеленияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

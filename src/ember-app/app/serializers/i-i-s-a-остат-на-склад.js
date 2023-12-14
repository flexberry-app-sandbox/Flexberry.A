import { Serializer as ОстатНаСкладSerializer } from
  '../mixins/regenerated/serializers/i-i-s-a-остат-на-склад';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОстатНаСкладSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

import { Serializer as ЗаказПокупSerializer } from
  '../mixins/regenerated/serializers/i-i-s-a-заказ-покуп';
import ОтчетОПродажахSerializer from './i-i-s-a-отчет-о-продажах';

export default ОтчетОПродажахSerializer.extend(ЗаказПокупSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

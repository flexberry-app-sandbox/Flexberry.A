import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостОгрузкиEnum from '../enums/i-i-s-a-сост-огрузки';

export default FlexberryEnum.extend({
  enum: СостОгрузкиEnum,
  sourceType: 'IIS.A.СостОгрузки'
});

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-a-ед-измер-l');
  this.route('i-i-s-a-ед-измер-e',
  { path: 'i-i-s-a-ед-измер-e/:id' });
  this.route('i-i-s-a-ед-измер-e.new',
  { path: 'i-i-s-a-ед-измер-e/new' });
  this.route('i-i-s-a-заказ-покуп-l');
  this.route('i-i-s-a-заказ-покуп-e',
  { path: 'i-i-s-a-заказ-покуп-e/:id' });
  this.route('i-i-s-a-заказ-покуп-e.new',
  { path: 'i-i-s-a-заказ-покуп-e/new' });
  this.route('i-i-s-a-контрагенты-l');
  this.route('i-i-s-a-контрагенты-e',
  { path: 'i-i-s-a-контрагенты-e/:id' });
  this.route('i-i-s-a-контрагенты-e.new',
  { path: 'i-i-s-a-контрагенты-e/new' });
  this.route('i-i-s-a-номенклатуры-l');
  this.route('i-i-s-a-номенклатуры-e',
  { path: 'i-i-s-a-номенклатуры-e/:id' });
  this.route('i-i-s-a-номенклатуры-e.new',
  { path: 'i-i-s-a-номенклатуры-e/new' });
  this.route('i-i-s-a-организации-l');
  this.route('i-i-s-a-организации-e',
  { path: 'i-i-s-a-организации-e/:id' });
  this.route('i-i-s-a-организации-e.new',
  { path: 'i-i-s-a-организации-e/new' });
  this.route('i-i-s-a-остат-на-склад-l');
  this.route('i-i-s-a-остат-на-склад-e',
  { path: 'i-i-s-a-остат-на-склад-e/:id' });
  this.route('i-i-s-a-остат-на-склад-e.new',
  { path: 'i-i-s-a-остат-на-склад-e/new' });
  this.route('i-i-s-a-отчет-о-продажах-l');
  this.route('i-i-s-a-отчет-о-продажах-e',
  { path: 'i-i-s-a-отчет-о-продажах-e/:id' });
  this.route('i-i-s-a-отчет-о-продажах-e.new',
  { path: 'i-i-s-a-отчет-о-продажах-e/new' });
  this.route('i-i-s-a-подразеления-l');
  this.route('i-i-s-a-подразеления-e',
  { path: 'i-i-s-a-подразеления-e/:id' });
  this.route('i-i-s-a-подразеления-e.new',
  { path: 'i-i-s-a-подразеления-e/new' });
  this.route('i-i-s-a-склады-l');
  this.route('i-i-s-a-склады-e',
  { path: 'i-i-s-a-склады-e/:id' });
  this.route('i-i-s-a-склады-e.new',
  { path: 'i-i-s-a-склады-e/new' });
});

export default Router;

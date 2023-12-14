import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.a.caption'),
          title: i18n.t('forms.application.sitemap.a.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.a.отчеты.caption'),
            title: i18n.t('forms.application.sitemap.a.отчеты.title'),
            children: [{
              link: 'i-i-s-a-отчет-о-продажах-l',
              caption: i18n.t('forms.application.sitemap.a.отчеты.i-i-s-a-отчет-о-продажах-l.caption'),
              title: i18n.t('forms.application.sitemap.a.отчеты.i-i-s-a-отчет-о-продажах-l.title'),
              icon: 'folder open',
              children: null
            }, {
              link: 'i-i-s-a-остат-на-склад-l',
              caption: i18n.t('forms.application.sitemap.a.отчеты.i-i-s-a-остат-на-склад-l.caption'),
              title: i18n.t('forms.application.sitemap.a.отчеты.i-i-s-a-остат-на-склад-l.title'),
              icon: 'list',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.a.справочники.caption'),
            title: i18n.t('forms.application.sitemap.a.справочники.title'),
            children: [{
              link: 'i-i-s-a-организации-l',
              caption: i18n.t('forms.application.sitemap.a.справочники.i-i-s-a-организации-l.caption'),
              title: i18n.t('forms.application.sitemap.a.справочники.i-i-s-a-организации-l.title'),
              icon: 'folder open',
              children: null
            }, {
              link: 'i-i-s-a-склады-l',
              caption: i18n.t('forms.application.sitemap.a.справочники.i-i-s-a-склады-l.caption'),
              title: i18n.t('forms.application.sitemap.a.справочники.i-i-s-a-склады-l.title'),
              icon: 'tags',
              children: null
            }, {
              link: 'i-i-s-a-номенклатуры-l',
              caption: i18n.t('forms.application.sitemap.a.справочники.i-i-s-a-номенклатуры-l.caption'),
              title: i18n.t('forms.application.sitemap.a.справочники.i-i-s-a-номенклатуры-l.title'),
              icon: 'folder open',
              children: null
            }, {
              link: 'i-i-s-a-ед-измер-l',
              caption: i18n.t('forms.application.sitemap.a.справочники.i-i-s-a-ед-измер-l.caption'),
              title: i18n.t('forms.application.sitemap.a.справочники.i-i-s-a-ед-измер-l.title'),
              children: null
            }, {
              link: 'i-i-s-a-подразеления-l',
              caption: i18n.t('forms.application.sitemap.a.справочники.i-i-s-a-подразеления-l.caption'),
              title: i18n.t('forms.application.sitemap.a.справочники.i-i-s-a-подразеления-l.title'),
              icon: 'suitcase',
              children: null
            }, {
              link: 'i-i-s-a-контрагенты-l',
              caption: i18n.t('forms.application.sitemap.a.справочники.i-i-s-a-контрагенты-l.caption'),
              title: i18n.t('forms.application.sitemap.a.справочники.i-i-s-a-контрагенты-l.title'),
              icon: 'folder open',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.a.договора.caption'),
            title: i18n.t('forms.application.sitemap.a.договора.title'),
            children: [{
              link: 'i-i-s-a-заказ-покуп-l',
              caption: i18n.t('forms.application.sitemap.a.договора.i-i-s-a-заказ-покуп-l.caption'),
              title: i18n.t('forms.application.sitemap.a.договора.i-i-s-a-заказ-покуп-l.title'),
              icon: 'tags',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})
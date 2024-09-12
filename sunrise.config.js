const getEnv = (env) => {
  return typeof global?.Cypress?.env === 'function'
      ? global.Cypress.env(env)
      : process.env[env];
};
let localConfig = {};
if (getEnv('VUE_APP_LOCAL_SUNRISE_CONFIG')) {
  localConfig = require(process.env
      .VUE_APP_LOCAL_SUNRISE_CONFIG).default;
}
const config = {
  ct: {
    auth: {
      host: 'https://auth.europe-west1.gcp.commercetools.com',
      projectKey: 'demo2-powerboard',
      credentials: {
        clientId: 'a1IITIwIirCGojOsD_StnX_C',
        clientSecret: '9E7k6_xOQ-wc271BPMB8dlSh5I0AH2w6',
      },
      scope: 'manage_orders:demo2-powerboard manage_approval_flows:demo2-powerboard introspect_oauth_tokens:demo2-powerboard manage_connectors:demo2-powerboard manage_audit_log:demo2-powerboard manage_cart_discounts:demo2-powerboard manage_payments:demo2-powerboard manage_customer_groups:demo2-powerboard manage_discount_codes:demo2-powerboard manage_extensions:demo2-powerboard view_sessions:demo2-powerboard manage_business_units:demo2-powerboard manage_my_quotes:demo2-powerboard manage_import_containers:demo2-powerboard manage_my_profile:demo2-powerboard manage_product_selections:demo2-powerboard manage_my_quote_requests:demo2-powerboard manage_my_payments:demo2-powerboard view_api_clients:demo2-powerboard manage_order_edits:demo2-powerboard manage_categories:demo2-powerboard manage_my_shopping_lists:demo2-powerboard manage_attribute_groups:demo2-powerboard manage_connectors_deployments:demo2-powerboard manage_associate_roles:demo2-powerboard create_anonymous_token:demo2-powerboard manage_api_clients:demo2-powerboard manage_my_business_units:demo2-powerboard manage_approval_rules:demo2-powerboard manage_checkout_payment_intents:demo2-powerboard manage_customers:demo2-powerboard manage_project:demo2-powerboard manage_products:demo2-powerboard manage_sessions:demo2-powerboard manage_my_orders:demo2-powerboard'
    },
    api:
        'https://api.europe-west1.gcp.commercetools.com',
  },
  languages: {
    'DE-DE': 'Deutsch'
  },
  countries: {
    US: 'United States',
  },
  formats: {
    number: {
      US: {
        currency: {
          style: 'currency',
          currency: 'AUD',
        },
      },
    },
    datetime: {
      US: {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
      },
    },
  },
  categories: {
    salesExternalId: '6',
  },
  facetSearches: [
    {
      name: 'size',
      type: 'text',
      label: {
        it: 'Size',
        de: 'Größe',
        en: 'Size',
      },
    },
    {
      name: 'color',
      type: 'lnum',
      component: 'colors',
      label: {
        de: 'Farbe',
        it: 'Color',
        en: 'Color',
      },
    },
    {
      name: 'designer',
      type: 'enum',
      component: 'designer',
      label: {
        it: 'Designer',
        de: 'Designer',
        en: 'Designer',
      },
    },
  ],
  detailAttributes: [
    {
      name: 'designer',
      label: {
        it: 'Designer',
        de: 'Designer',
        en: 'Designer',
      },
    },
    {
      name: 'colorFreeDefinition',
      label: {
        it: 'Color',
        de: 'Farbe',
        en: 'Color',
      },
    },
    {
      name: 'size',
      label: {
        it: 'Size',
        de: 'Grösse',
        en: 'Size',
      },
    },
    {
      name: 'style',
      label: {
        it: 'Style',
        de: 'Stil',
        en: 'Style',
      },
    },
    {
      name: 'gender',
      label: {
        it: 'Gender',
        de: 'Zielgruppe',
        en: 'Gender',
      },
    },
    {
      name: 'articleNumberManufacturer',
      label: {
        it: 'Manufacturer AID',
        de: 'Herstellernummer',
        en: 'Manufacturer AID',
      },
    },
  ],
  variantSelector: ['color', 'size'],
  variantInProductName: ['size'],
  ...localConfig,
};
// eslint-disable-next-line no-console
export default config;

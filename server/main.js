import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  ServiceConfiguration.configurations.upsert({
  service: "google"
}, {
  $set: {
    clientId: "994307082428-h3a8rtieffhmp3128i0gtnu378geal1p.apps.googleusercontent.com",
    secret: "LhFMcFpqYG3jaOxuzJ2aXvf3"
  }
});
});

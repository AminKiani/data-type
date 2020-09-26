import {SocialInterface} from '../base/social';
import {instagramIcon, telegramIcon, facebookIcon, twitterIcon} from '@pazh/icon';

export interface SocialListObjectInterface {
  instagram: SocialInterface;
  telegram: SocialInterface;
  facebook: SocialInterface;
  twitter: SocialInterface;
}

export const socialListObject: SocialListObjectInterface = {
  instagram: {
    _id: 'instagram',
    name: {
      en: 'instagram',
      fa: 'اینستاگرام',
    },
    icon: instagramIcon,
    uri: 'https://www.instagram.com/',
    accountUriTemplate: 'https://www.instagram.com/%ACCOUNT_ID%/',
  },
  telegram: {
    _id: 'telegram',
    name: {
      en: 'telegram',
      fa: 'اینستاگرام',
    },
    icon: telegramIcon,
    uri: 'https://www.t.me/',
    accountUriTemplate: 'https://www.t.me/%ACCOUNT_ID%/',
  },
  facebook: {
    _id: 'facebook',
    name: {
      en: 'facebook',
      fa: 'اینستاگرام',
    },
    icon: facebookIcon,
    uri: 'https://www.facebook.com/',
    accountUriTemplate: 'https://www.facebook.com/%ACCOUNT_ID%/',
  },
  twitter: {
    _id: 'twitter',
    name: {
      en: 'twitter',
      fa: 'اینستاگرام',
    },
    icon: twitterIcon,
    uri: 'https://www.twitter.com/',
    accountUriTemplate: 'https://www.twitter.com/%ACCOUNT_ID%/',
  },
};

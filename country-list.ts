import { CountryInterface } from '../base/country';

export interface CountryListObjectInterface {
  ir: CountryInterface;
  us: CountryInterface;
  en: CountryInterface;
  ae: CountryInterface;
  tr: CountryInterface;
}

export const countryListObject: CountryListObjectInterface = {
  ir: {
    _id: 'ir',
    globalName: 'Iran',
    localName: 'ایران',
    language: {
      _id: 'fa',
      globalName: 'Persian',
      localName: 'فارسی',
    },
    phonePrefix: '+98',
    direction: 'rtl',
    stateList: [
      {
        _id: 'khr',
        globalName: 'Khorasan Razavi',
        localName: 'رضوی خراسان',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '51',
          }
        ]
      }
    ],
    flag: {
      alt: {
        en: 'Iran',
        fa: 'ایران'
      },
      uri: 'https://res.cloudinary.com/pazhnet/image/upload/v1571645755/image/svg-flag/ir_z7z8k6.svg'
    }
  },
  us: {
    _id: 'us',
    globalName: 'United States of America',
    localName: 'United States of America',
    language: {
      _id: 'en',
      globalName: 'English',
      localName: 'English',
    },
    phonePrefix: '+1',
    direction: 'ltr',
    stateList: [
      {
        _id: 'ny',
        globalName: 'New York',
        localName: 'New York',
        cityList: [
          {
            _id: 'ny',
            globalName: 'New York',
            localName: 'New York',
            phonePrefix: '2',
          }
        ]
      }
    ],
    flag: {
      alt: {
        en: 'United States of America',
        fa: 'ایالات متحده آمریکا'
      },
      uri: 'https://res.cloudinary.com/pazhnet/image/upload/v1571645795/image/us-flag_o5kqjp.png'
    }
  },
  en: {
    _id: 'en',
    globalName: 'United Kingdom',
    localName: 'United Kingdom',
    language: {
      _id: 'en',
      globalName: 'English',
      localName: 'English',
    },
    phonePrefix: '+1',
    direction: 'ltr',
    stateList: [
      {
        _id: 'lo',
        globalName: 'London',
        localName: 'London',
        cityList: [
          {
            _id: 'lo',
            globalName: 'London',
            localName: 'London',
            phonePrefix: '2',
          }
        ]
      }
    ],
    flag: {
      alt: {
        en: 'United Kingdom',
        fa: 'انگلستان'
      },
      uri: 'https://res.cloudinary.com/pazhnet/image/upload/v1571645727/image/svg-flag/gb_l4fcn9.svg'
    }
  },
  ae: {
    _id: 'ae',
    globalName: 'United Arab Emirates',
    localName: 'الإمارات العربية المتحدة‎',
    language: {
      _id: 'ar',
      globalName: 'Arabic',
      localName: 'العربیه',
    },
    phonePrefix: '+971',
    direction: 'rtl',
    stateList: [
      {
        _id: 'dxb',
        globalName: 'Dubai',
        localName: 'دبي',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '3',
          }
        ]
      }
    ],
    flag: {
      alt: {
        en: 'United Arab Emirates',
        fa: 'امارات متحده عربی',
        ae: 'الإمارات العربية المتحدة'
      },
      uri: 'https://res.cloudinary.com/pazhnet/image/upload/v1571645755/image/svg-flag/ir_z7z8k6.svg'
    }
  },
  tr: {
    _id: 'tr',
    globalName: 'Turkey',
    localName: 'Türkiye',
    language: {
      _id: 'tr',
      globalName: 'Turkish',
      localName: 'Türkçesi',
    },
    phonePrefix: '+90',
    direction: 'ltr',
    stateList: [
      {
        _id: 'ank',
        globalName: 'Ankara',
        localName: 'Ankara',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '4',
          }
        ]
      }
    ],
    flag: {
      alt: {
        en: 'Turkey',
        fa: 'ترکیه',
        tr: 'Türkiye'
      },
      uri: 'https://res.cloudinary.com/pazhnet/image/upload/v1571645755/image/svg-flag/ir_z7z8k6.svg'
    }
  },
};

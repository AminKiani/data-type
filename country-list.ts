import { CountryInterface } from '../base/country';

export interface CountryListObjectInterface {
  ir: CountryInterface;
  us: CountryInterface;
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
        _id: 'eastAzerbaijan',
        globalName: 'East Azerbaijan',
        localName: 'آذربايجان شرقی',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: 'westAzerbaijan',
        globalName: 'West Azerbaijan',
        localName: 'آذربایجان غربی',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '3',
        globalName: 'Ardabil',
        localName: 'اردبیل',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '4',
        globalName: 'Isfahan',
        localName: 'اصفهان',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '5',
        globalName: 'Alborz',
        localName: 'البرز',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '6',
        globalName: 'Ilam',
        localName: 'ایلام',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '7',
        globalName: 'Bushehr',
        localName: 'بوشهر',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '8',
        globalName: 'Tehran',
        localName: 'تهران',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '9',
        globalName: 'South Khorasan',
        localName: 'خراسان جنوبی',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: 'khorasanRazavi',
        globalName: 'Khorasan Razavi',
        localName: 'خراسان رضوی',
        cityList: [
          {
            _id: 'bajestan',
            localName: 'بجستان',
            globalName: 'Bajestan',
          },
          {
            _id: 'bardaskan',
            localName: 'بردسكن',
            globalName: 'Bardaskan',
          },
          {
            _id: 'taybad',
            localName: 'تايباد',
            globalName: 'Taybad',
          },
          {
            _id: 'torbat-e jam',
            localName: 'تربت جام',
            globalName: 'Torbat-e Jam',
          },
          {
            _id: 'torbat',
            localName: 'تربت حيدريه',
            globalName: 'Torbat',
          },
          {
            _id: 'jaghatay',
            localName: 'جغتاي',
            globalName: 'Jaghatay',
          },
          {
            _id: 'jovin',
            localName: 'جوين',
            globalName: 'Jovin',
          },
          {
            _id: 'khaliabad',
            localName: 'خليل آباد',
            globalName: 'Khaliabad',
          },
          {
            _id: 'khaf',
            localName: 'خواف',
            globalName: 'KHAF',
          },
          {
            _id: 'davarzan',
            localName: 'داورزن',
            globalName: 'Davarzan',
          },
          {
            _id: 'dargaz',
            localName: 'درگز',
            globalName: 'Dargaz',
          },
          {
            _id: 'roshtkhar',
            localName: 'رشتخوار',
            globalName: 'Roshtkhar',
          },
          {
            _id: 'zavh',
            localName: 'زاوه',
            globalName: 'Zavh',
          },
          {
            _id: 'sabzevar',
            localName: 'سبزوار',
            globalName: 'Sabzevar',
          },
          {
            _id: 'fern',
            localName: 'سرخس',
            globalName: 'Fern',
          },
          {
            _id: 'fariman',
            localName: 'فريمان',
            globalName: 'FARIMAN',
          },
          {
            _id: 'ghoochan',
            localName: 'قوچان',
            globalName: 'Ghoochan',
          },
          {
            _id: 'kashmar',
            localName: 'كاشمر',
            globalName: 'Kashmar',
          },
          {
            _id: 'kalat',
            localName: 'كلات',
            globalName: 'Kalat',
          },
          {
            _id: 'mashhad',
            localName: 'مشهد',
            globalName: 'Mashhad',
          },
          {
            _id: 'mahvelat',
            localName: 'مه ولات',
            globalName: 'Mahvelat',
          },
          {
            _id: 'neyshabur',
            localName: 'نيشابور',
            globalName: 'Neyshabur',
          },
          {
            _id: 'chenaran',
            localName: 'چناران',
            globalName: 'CHENARAN',
          },
          {
            _id: 'gonabad',
            localName: 'گناباد',
            globalName: 'GONABAD',
          }
        ]
      },
      {
        _id: '11',
        globalName: 'North Khorasan',
        localName: 'خراسان شمالی',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '12',
        globalName: 'Khuzestan',
        localName: 'خوزستان',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '13',
        globalName: 'Zanjan',
        localName: 'زنجان',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '14',
        globalName: 'Semnan',
        localName: 'سمنان',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '15',
        globalName: 'Sistan and Baluchestan',
        localName: 'سیستان و بلوچستان',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '16',
        globalName: 'Fars',
        localName: 'فارس',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '17',
        globalName: 'Qazvin',
        localName: 'قزوین',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '18',
        globalName: 'Qom',
        localName: 'قم',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '19',
        globalName: 'Kurdistan',
        localName: 'کردستان',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '20',
        globalName: 'Kerman',
        localName: 'کرمان',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '21',
        globalName: 'Kermanshah',
        localName: 'کرمانشاه',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '22',
        globalName: 'Kohgiluyeh and Boyer-Ahmad',
        localName: 'كهگيلويه و بويراحمد',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '23',
        globalName: 'Golestan',
        localName: 'گلستان',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '24',
        globalName: 'Gilan',
        localName: 'گیلان',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '25',
        globalName: 'Lorestan',
        localName: 'لرستان',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '26',
        globalName: 'Mazandaran',
        localName: 'مازندران',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '27',
        globalName: 'Markazi',
        localName: 'مرکزی',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '28',
        globalName: 'Hormozgan',
        localName: 'هرمزگان',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '29',
        globalName: 'Hamadan',
        localName: 'همدان',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '30',
        globalName: 'Chahar Mahaal and Bakhtiari',
        localName: 'چهارمحال و بختیاری',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
      {
        _id: '31',
        globalName: 'Yazd',
        localName: 'یزد',
        cityList: [
          {
            _id: '',
            globalName: '',
            localName: '',
            phonePrefix: '',
          }
        ]
      },
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

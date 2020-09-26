import { VolumeInterface, WeightInterface, DimensionItemInterface, DimensionValueListObjectInterface, SpaceInterface } from '../base/unit';

export interface UnitListObjectInterface {
  height: DimensionItemInterface;
  width: DimensionItemInterface;
  length: DimensionItemInterface;
  volume: VolumeInterface;
  weight: WeightInterface;
  space: SpaceInterface;
}

export const dimensionValueListObject: DimensionValueListObjectInterface = {
  M: {
    fa: 'متر',
    en: 'm'
  },
  CM: {
    fa: 'سانتی متر',
    en: 'cm'
  },
  MM: {
    fa: 'میلی متر',
    en: 'mm'
  }
};

export const unitListObject: UnitListObjectInterface = {
  height: {
    title: {
      fa: 'ارتفاع',
      en: 'Height'
    },
    valueListObject: dimensionValueListObject
  },
  length: {
    title: {
      fa: 'طول',
      en: 'Length'
    },
    valueListObject: dimensionValueListObject
  },
  width: {
    title: {
      fa: 'عرض',
      en: 'Width'
    },
    valueListObject: dimensionValueListObject
  },
  weight: {
    title: {
      fa: 'وزن',
      en: 'Weight'
    },
    valueListObject: {
      G: {
        fa: 'گرم',
        en: 'gr'
      },
      KG: {
        fa: 'کیلوگرم',
        en: 'Kg'
      }
    }
  },
  volume: {
    title: {
      fa: 'حجم',
      en: 'Volume'
    },
    valueListObject: {
      L: {
        fa: 'لیتر',
        en: 'Liter'
      },
      ML: {
        fa: 'میلی لیتر',
        en: 'Ml'
      }
    }
  },
  space: {
    title: {
      fa: 'فضای ذخیره سازی',
      en: 'Storage Space'
    },
    valueListObject: {
      B: {
        fa: 'بایت',
        en: 'B'
      },
      KB: {
        fa: 'کیلو بایت',
        en: 'Kb'
      },
      MB: {
        fa: 'مگابایت',
        en: 'Mb'
      },
      GB: {
        fa: 'گیگابایت',
        en: 'Gb'
      },
      TB: {
        fa: 'ترابایت',
        en: 'Tb'
      }
    }
  }
};

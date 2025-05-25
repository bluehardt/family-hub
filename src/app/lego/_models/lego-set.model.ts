export interface LegoSetMainModel {
  id: string; //set number
  item_id: string;
  piece_count: number;
  invariant_id: string;
  product_number: string;
  type: string;
  lastUpdatedDate: string;
  availability: LegoSetAvailabilityModel;
  locale: LegoSetLocaleModel;
  market: LegoSetMarketModel;
  assets: LegoSetAssetsModel[];
  themes: LegoSetThemesModel[];
  product_versions: LegoSetProductVersionsModel[];
  suitability: LegoSetSuitabilityModel;
}

export interface LegoSetAvailabilityModel {
  launchDate: string;
  marketingExitDate: string;
}

export interface LegoSetLocaleDetailsImageModel {
  uid: string;
  content_type: string;
  file_size: string;
  filename: string;
  url: string;
  publish_details: {
    environment: string;
    time: string;
  };
  alt_text: string;
}

export interface LegoSetLocaleDetailsModel {
  title: string;
  display_title: string;
  description: string;
  bullet_points: string;
  comm_bullet_points: string;
  comm_description: string;
  headline: string;
  one_liner: string;
  features: string[];
  tags: string[];
  additional_data: {
    uid: string;
    additional_images: {
      kid_image?: {
        image: LegoSetLocaleDetailsImageModel;
      };
      grown_up_image?: {
        image: LegoSetLocaleDetailsImageModel;
      };
    }[];
    box_image: LegoSetLocaleDetailsImageModel;
    hide_dbix_availability: boolean;
    primary_image_grownups: LegoSetLocaleDetailsImageModel;
    seo_content: {
      description: string;
      og_image?: string; // check
      og_title: string;
    };
    sitecore_id: string;
  };
}

export interface LegoSetLocaleModel {
  'en-us'?: LegoSetLocaleDetailsModel;
  'pl-pl'?: LegoSetLocaleDetailsModel;
}

export interface LegoSetMarketModel {
  pl: {
    availability: LegoSetAvailabilityModel[];
    skus: {
      item_id: number;
    }[];
  };
}

export interface LegoSetAssetsModel {
  itemId: string;
  type: string;
  baseName: string;
  modifiedDate: string;
  assetFiles: {
    extension: string;
    fileName: string;
    type: string;
    metaTags: {
      image: {
        height: number;
        width: number;
      };
    };
    url: string;
    size: number;
    modifiedDate: string;
  }[];
}

export interface LegoSetThemesModel {
  id: string;
  title: string;
  display_title: string;
  theme_id: {
    portal_id: number;
    theme_id: number;
    group_id: number;
  };
  primary_image: {
    uid: string;
    contentType: string;
    filename: string;
    title: string;
    description?: string;
    altText: string;
    imageType: string;
    url: string;
    size: number;
    modifiedDate: string;
  };
  isSubtheme: boolean;
  locale: LegoSetLocaleDetailsModel;
  images: {
    uid: string;
    contentType: string;
    filename: string;
    title: string;
    altText: string;
    imageType: string;
    url: string;
    size: number;
    modifiedDate: string;
  }[];
}

export interface LegoSetProductVersionsModel {
  item_id: string;
  piece_count: number;
  building_instructions: {}[];
  availability: LegoSetAvailabilityModel;
  measurements: {
    itemId: number;
    height: number;
    length: number;
    width: number;
    sizeUnit: 'MM';
  };
  characteristics: {
    isBatteryOperated: boolean;
  };
}

export interface LegoSetSuitabilityModel {
  age: {
    from: number;
    to: number;
    description: string;
  };
}

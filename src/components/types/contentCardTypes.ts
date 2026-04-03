export type ContentCardType = 'store' | 'product' | 'featured' | 'onSale';

export interface SharedContentCardBaseProps {
  type: ContentCardType;
  imageUrl: string;
  name: string;
  description: string | null;
  price?: number;
}

export interface SharedCardButtonActionBase {
  iconName: string;
  onPress: () => void;
  buttonStyle: object;
}

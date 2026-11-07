export type RootTabParamList = {
  Home: undefined;
  Cart: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Login: undefined
  MainTabs: undefined;

  Details: {
    productName: string;
    price: number;
    description: string;
  };
};
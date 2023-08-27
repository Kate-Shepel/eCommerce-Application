import { Product } from "@commercetools/platform-sdk";
import getProductsList from "../api/getProductsList";
import { setProductsListAction } from "../redux/actions";
import IProductsListResponseData from "../interfaces/IProducts";
import { navigateTo } from "../router";

import store from "../redux/createStore";

const setProductsList = async () => {
  const productsListResponseData: IProductsListResponseData = await getProductsList();
  const { statucCode } = productsListResponseData;

  if (!statucCode || (statucCode && !(statucCode >= 200 && statucCode < 299))) {
    navigateTo("/404");
  } else {
    const productsList: Product[] = productsListResponseData.productsListData?.results as Product[];
    store.dispatch(setProductsListAction(productsList));
  }
};

export default setProductsList;

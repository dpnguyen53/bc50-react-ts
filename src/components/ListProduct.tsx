import { useEffect } from "react";
import { Row } from "antd";
import ProductItem from "./ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./../duck/action";
import { RootState } from "./../store";
import { Product } from "./../duck/types";
import SkeletonCmp from "./SkeletonCmp";

const arrSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ListProduct() {
  const { data, loading } = useSelector(
    (state: RootState) => state.productReducer
  );
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const renderListProduct = () => {
    if (loading) return arrSkeleton.map((item) => <SkeletonCmp key={item} />);

    return data?.map((product: Product) => (
      <ProductItem key={product.id} product={product} />
    ));
  };

  return <Row>{renderListProduct()}</Row>;
}

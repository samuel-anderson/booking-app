import Skeleton from "@mui/material/Skeleton";
import { SkeletonContainer } from "./cart-skeleton.styles";

const CartSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton variant="rounded" sx={{ marginBottom: 1 }} height={100} />
      <Skeleton variant="rounded" sx={{ marginBottom: 1 }} height={100} />
      <Skeleton variant="rounded" sx={{ marginBottom: 1 }} height={100} />
      <Skeleton variant="rounded" sx={{ marginBottom: 1 }} height={100} />
      <Skeleton variant="rounded" sx={{ marginBottom: 1 }} height={100} />
    </SkeletonContainer>
  );
};

export default CartSkeleton;

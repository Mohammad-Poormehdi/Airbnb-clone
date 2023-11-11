import getListingById from "@/app/actions/geListingById";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
interface IParams {
  listingId?: string;
}
const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();
  if (!listing) {
    return <EmptyState />;
  }
  return (
    <div className="">
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </div>
  );
};
export default ListingPage;

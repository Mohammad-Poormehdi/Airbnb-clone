import getListingById from "../actions/geListingById";
import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import EmptyState from "../components/EmptyState";
import PropertyClient from "./PropertyClient";
import TripsClient from "./PropertyClient";

const propertiesPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="please login" />;
  }
  const listings = await getListings({ userId: currentUser.id });
  if (listings.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you have not reserved any trips"
      />
    );
  }
  return <PropertyClient listings={listings} currentUser={currentUser} />;
};
export default propertiesPage;

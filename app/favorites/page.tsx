import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import EmptyState from "../components/EmptyState";
import FavoriteClient from "./FavoriteClient";
import Heading from "../components/Heading";

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="please login" />;
  }
  const listings = await getFavoriteListings();
  if (listings.length === 0) {
    return (
      <>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings"
        />
      </>
    );
  }
  return (
    <>
      <FavoriteClient listings={listings} currentUser={currentUser} />
    </>
  );
};
export default FavoritesPage;

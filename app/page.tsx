import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import getListings, { IListingParams } from "./actions/getListings";
import getCurrentUser from "./actions/getCurrentUser";
import ListingCard from "./components/listings/ListingCard";
import { SafeListing } from "./types";
import getReservations from "./actions/getReservations";

interface HomeParams {
  searchParams: IListingParams;
}

export default async function Home({ searchParams }: HomeParams) {
  const listings = await getListings(searchParams);

  const currentUser = await getCurrentUser();
  if (listings.length === 0) {
    return <EmptyState showReset />;
  }
  return (
    <Container>
      <div
        className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
       gap-8"
      >
        {listings.map((listing: SafeListing) => {
          return <ListingCard data={listing} currentUser={currentUser} />;
        })}
      </div>
    </Container>
  );
}

import prisma from "@/app/libs/prismadb";

export interface IListingParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

export default async function getListings(params: IListingParams) {
  try {
    const {
      userId,
      guestCount,
      roomCount,
      bathroomCount,
      locationValue,
      startDate,
      endDate,
      category,
    } = params;
    let query: any = {};
    if (userId) {
      query.userId = userId;
    }
    if (category) {
      query.category = category;
    }
    if (roomCount) {
      query.roomCount = { gte: +roomCount };
    }
    if (bathroomCount) {
      query.bathroomCount = { gte: +bathroomCount };
    }
    if (guestCount) {
      query.guestCount = { gte: +guestCount };
    }
    if (locationValue) {
      query.locationValue = locationValue;
    }
    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              { endDate: { gte: startDate }, startDate: { lte: startDate } },
              { startDate: { lte: endDate }, endDate: { gte: endDate } },
            ],
          },
        },
      };
    }
    const listing = await prisma.listing.findMany({
      where: query,
      orderBy: { createdAt: "desc" },
    });
    const safeListings = listing.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));
    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}

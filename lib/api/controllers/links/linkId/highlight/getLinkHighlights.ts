import { prisma } from "@linkvault/prisma";

export default async function getLinkHighlights({
  userId,
  linkId,
}: {
  userId: number;
  linkId: number;
}) {
  const highlights = await prisma.highlight.findMany({
    where: {
      linkId,
      userId,
    },
  });

  return { response: highlights, status: 200 };
}

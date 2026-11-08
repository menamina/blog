import { queryOptions, mutationOptions } from "@tanstack/react-query";

type SearchResult = {
  searchTitle: string;
  searchResult: string[];
};

export const searchQuery = (query: string) => {
  return queryOptions({
    queryKey: ["query", query],
    queryFn: () => search(query),
    enabled: !!query,
  });
};

async function search(query: string): Promise<SearchResult | string[]> {}

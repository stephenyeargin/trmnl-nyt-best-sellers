function transform(input) {
  const source = input?.IDX_0 ?? input ?? {};
  const results = source?.results || {};
  const books = Array.isArray(results.books) ? results.books : [];

  return {
    results: {
      display_name: results.display_name,
      published_date: results.published_date,
      books: books.slice(0, 10).map((book) => ({
        rank: book?.rank,
        book_image: book?.book_image,
        title: book?.title,
        author: book?.author,
        contributor: book?.contributor,
        asterisk: book?.asterisk,
        dagger: book?.dagger,
        description: book?.description,
        publisher: book?.publisher,
      })),
    },
  };
}

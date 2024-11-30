

'use client';

const QuoteSection = () => {
  const quotes = [
    {
      id: 1,
      text: "Children's fashion should be fun and comfortable, because they're always on the move!",
      author: "Unknown",
    },
    {
      id: 2,
      text: "Style is a way to say who you are without having to speak.",
      author: "Unknown",
    },
    {
      id: 3,
      text: "Fashion is about dressing according to what's fashionable. Style is more about being yourself.",
      author: "Oscar de la Renta",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-pink-50 via-pink-500 to-pink-200">
      <div className="container mx-auto px-6">
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((quote) => (
            <div
              key={quote.id}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <p className="text-xl italic text-gray-800 mb-4">“{quote.text}”</p>
              <p className="text-lg font-semibold text-gray-600">- {quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;

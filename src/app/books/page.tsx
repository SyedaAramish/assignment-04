// books/page.tsx
import Link from 'next/link';
import './books.css'; // Updated to use books.css

export default function BooksPage() {
  const books = [
    { id: 1, title: 'The 80/20 Principle', image: '/images/80.jpg', link: 'https://www.wonderingchimp.com/the-80-20-principle/' },
    { id: 2, title: 'Getting Things Done', image: '/images/get.webp', link: 'https://www.elizabethclareblog.com/bookshelf-getting-things-done/' },
    { id: 3, title: 'Four Thousand Weeks: Time Management for Mortals', image: '/images/40.jpg', link: 'https://untitledthoughts.com/blogs/reviews/four-thousand-weeks-time-management-for-mortals-by-oliver-burkeman' },
    { id: 4, title: 'Deep Work', image: '/images/deep.jpg', link: 'https://amberrfield.com/deep-work-a-book-review/' },
    { id: 5, title: 'Atomic Habits', image: '/images/atomic.jpg', link: 'https://jamesclear.com/habits' },
    { id: 6, title: '168 Hours: You Have More Time Than You Think', image: '/images/168 hours.webp', link: 'https://jakepmann.com/168-hours/' },
  ];

  return (
    <div className="container">
      <h1 className="heading">TOP 06 RECOMMENDED BOOKS FOR TIME MANAGEMENT</h1>
      <div className="cardsContainer">
        {books.map((book) => (
          <div key={book.id} className="card">
            <img src={book.image} alt={book.title} className="bookImage" />
            <h1 className="bookTitle">{book.title}</h1>
            <Link href={book.link}>
              <button className="readMoreButton">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

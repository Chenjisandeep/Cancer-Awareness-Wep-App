# Cancer Awareness & Support Web Page

A responsive web page for a Cancer Awareness & Support organization with a contact form and real-time inspirational quotes.

## Features

1. **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
2. **Landing Page**: Hero section with banner image and welcoming message
3. **Contact Form**: Functional contact form with validation (frontend only)
4. **Real-time Quotes**: Fetches inspirational quotes from a public API with fallback data
5. **Interactive Elements**: Smooth scrolling, mobile navigation, form validation

## Files Structure

- `index.html` - Main HTML document
- `style.css` - All styling for the web page
- `script.js` - JavaScript for interactivity and API integration
- `README.md` - This documentation file

## How to Use

1. Simply open `index.html` in any modern web browser
2. No server or additional setup required
3. The contact form includes frontend validation but doesn't submit to a backend (as per requirements)

## API Integration

The quotes section uses the [Quotable API](https://api.quotable.io) to fetch real-time inspirational quotes. If the API is unavailable, the page falls back to a curated collection of quotes.

## Browser Compatibility

The web page is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- This is a frontend-only implementation as specified in the requirements
- The contact form doesn't actually send data to a server
- All images are from Unsplash (using placeholder URLs) or Font Awesome icons
- The design uses a calming color scheme appropriate for a healthcare/support organization

## Future Enhancements

If this were a production application, you might consider:
1. Adding a backend to process the contact form submissions
2. Implementing a database to store user messages
3. Adding more interactive features like event calendars or resource libraries
4. Integrating with social media APIs
5. Adding multilingual support

## License

This project is for demonstration purposes only.
# Your Portfolio Website

A modern, responsive portfolio website inspired by professional developer portfolios. Perfect for showcasing your work, experience, and articles.

## Features

✨ **Modern Design** - Clean, professional interface with smooth animations
📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
🎨 **Dark Theme** - Easy on the eyes with a beautiful dark color scheme
⚡ **Fast Performance** - Lightweight static HTML/CSS/JS
🔗 **Easy Navigation** - Smooth scrolling and intuitive menu
📝 **Multiple Sections** - About, Experience, Projects, Articles, and Contact

## Quick Start

1. **Open the website**: Open `index.html` in your browser
2. **Customize content**: Edit `index.html` with your information
3. **Update styling**: Modify `styles.css` if you want different colors or styles
4. **Add interactivity**: Update `script.js` for additional features

## Customization Guide

### 1. Update Your Information

Edit `index.html` and replace the placeholder text:

- **Name & Title**: Replace "Your Name" and "Software Engineer & Full Stack Developer" in the hero section
- **Bio**: Update the biography text in the hero section
- **Email**: Replace `your.email@example.com` with your actual email
- **Social Links**: Update GitHub, LinkedIn, Twitter, and other social media URLs

### 2. Add Your Profile Picture

```html
<img src="https://via.placeholder.com/150" alt="Profile" class="profile-image">
```

Replace the `src` with your profile picture URL:
```html
<img src="your-image-url-here.jpg" alt="Profile" class="profile-image">
```

### 3. Update Experience Section

Replace the sample experience items with your actual work history. For each job:
```html
<div class="experience-item">
    <div class="exp-header">
        <h3>Your Job Title</h3>
        <span class="exp-company">Your Company</span>
    </div>
    <p class="exp-duration">YYYY - YYYY</p>
    <p class="exp-description">Your job description and achievements</p>
</div>
```

### 4. Add Your Projects

Replace the sample projects with your actual work:
```html
<div class="project-card">
    <h3>Project Name</h3>
    <p class="project-desc">Project description</p>
    <div class="project-tech">
        <span class="tech-tag">Tech 1</span>
        <span class="tech-tag">Tech 2</span>
    </div>
    <div class="project-links">
        <a href="project-url" target="_blank">View Project</a>
        <a href="github-url" target="_blank">GitHub</a>
    </div>
</div>
```

### 5. Add Your Articles/Blog Posts

Replace sample articles with your content:
```html
<article class="article-item">
    <h3>Article Title</h3>
    <p class="article-meta">Published on Date</p>
    <p class="article-desc">Article description</p>
    <a href="article-url" class="read-more">Read Article →</a>
</article>
```

### 6. Customize Colors

Edit `styles.css` and modify the CSS variables at the top:
```css
:root {
    --primary-color: #0f172a;      /* Dark background */
    --secondary-color: #1e293b;    /* Slightly lighter background */
    --accent-color: #3b82f6;       /* Blue accent color */
    --text-color: #e2e8f0;         /* Light text */
    --text-muted: #cbd5e1;         /* Muted text */
    --border-color: #334155;       /* Border color */
}
```

## Deploying to GitHub Pages

1. **Create a GitHub repository** named `username.github.io` (replace `username` with your GitHub username)
2. **Push your files** to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/username.github.io.git
   git branch -M main
   git push -u origin main
   ```
3. **Access your site** at `https://username.github.io`

Or if you want to use a custom domain:
1. Create a `CNAME` file in your repository with your domain name
2. Update your domain's DNS settings to point to GitHub Pages
3. Enable GitHub Pages in repository settings

## File Structure

```
├── index.html          # Main HTML file with all sections
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips for Best Results

- **Profile Picture**: Use a high-quality image, ideally square format
- **Descriptions**: Keep descriptions concise and impactful
- **Links**: Make sure all social media and project links are correct
- **Mobile Testing**: Test your site on mobile devices to ensure responsiveness
- **SEO**: Consider adding meta tags for better search engine optimization

## License

Feel free to use this template for your portfolio. No attribution required.

## Questions?

If you have questions about customizing this template, feel free to check the code comments or create an issue.

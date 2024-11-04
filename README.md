# Puppeteer Screenshot Extraction

This project is a Puppeteer-based script that extracts advertisement information from a webpage, including capturing a banner screenshot and saving extracted data to JSON.

## Requirements

- Node.js (v14 or higher)
- Puppeteer (specified in `package.json`)

## Instructions

1. **Install Dependencies**:
    ```bash
    npm install
    ```

2. **Run the Script**:
    ```bash
    node scraper.js
    ```

    - This will:
      - Capture a screenshot of the left-side banner.
      - Extract advertisement details (redirection URL, image URL).
      - Generate a JSON file (`banner_data.json`) containing the ad data.

3. **Output Files**:
    - **`banner_screenshot.png`**: Screenshot of the left-side banner.
    - **`banner_data.json`**: JSON file with advertisement details.

## Files

- `scraper.js`: Main Puppeteer script for scraping and saving data.
- `banner_data.json`: Output JSON file with advertisement information.
- `banner_screenshot.png`: Screenshot of the ad banner.
- `package.json`: Specifies dependencies and scripts.

## Troubleshooting

- Ensure the target banner selector in `scraper.js` (`bannerSelector`) matches the actual selector on the webpage.
- If the website structure changes, you may need to update the selector.

## Puppeteer Version

- This project uses Puppeteer version 10.4.0.

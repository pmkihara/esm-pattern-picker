# ENStars Music!! Pattern Picker

This is a simple web app that helps you pick patterns for office jobs in the game Ensemble Stars Music!!. This was born from my own inability to choose which patterns to craft when trying to clear higher level jobs.

- Developed in Next.js with TypeScript
- Bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)
- Styled with Tailwind CSS
- Includes integration with Google APIs for Google Sheets
- Deployed on Vercel

## How to use the app

### 1. Provide your spreadsheet ID

You need to create a new Google Sheet and share it with the Google service account. Editor access is needed to allow to create and edit the sheets.

The ID is a long string of characters that can be found in the URL of the sheet. For example, in the URL `https://docs.google.com/spreadsheets/d/1234567890abcdefghijklmnopqrstuvwxyz/edit#gid=0`, the ID is `1234567890abcdefghijklmnopqrstuvwxyz`. Enter only the ID of the spreadsheet, not the entire link.

Alternatively, you can use a query parameter to provide the ID. For example, `http://localhost:3000/?id=1234567890abcdefghijklmnopqrstuvwxyz`. This is useful for favoriting the page in your browser, as the ID field will be pre-filled.

### 2. Complete the setup steps

In the next page, you will see a list of steps that need to be completed to set up the app.

#### 2.1. Setup your Idols stats

In the Idols page, you need to fill in the stats of your idols. The stats can be found in Office > Status.

Click on the save button to persist your changes and sync with Google Sheets.

#### 2.2. Setup your Outfits

In the Outfits page, you need to select the outfits and patterns you already own. The outfits and patterns can be found in Office > Craft. Click on the "Add Patterns" button to open a search bar and select the patterns you own.

If you have already crafted the pattern, locate the pattern in the list and click on the "Owned" button. The text should change to "Crafted".

Click on the save button to persist your changes and sync with Google Sheets.

#### 2.3 Set up the Office Job you want to clear

In the work page, click on the search bar on the top of the page and select the job you want to clear. The jobs can are grouped by the type of job, but you can also search for the job by name.

If you chose the custom job, be sure to fill in the requirements of the job (stats, unit, idols, outfit). Currently, the only outfits available are the ones you have already selected in the Outfits page.

Click on the save button to load the dashboard

### 3. Dashboard

In the dashboard, you can see an automatic selection of the outfits and their contribution to the job. The app will select the best patterns to craft based on the job requirements and the patterns you already own.

However, you can fine tune the selection by clicking on the edit button at the bottom of the page. This will open a separate page where you can see a list of outfits sorted by total contribution. You can click on one of the rows to visualize the new completion stats.

If you want to change one of the outfits, select it and click on the save button before changing tabs.

## Running the project locally

### Prerequisites

- Node.js
- npm, yarn, pnpm or any other package manager
- Google developer account
- Google service account with access to Google Sheets API

### Getting Started

1. After cloning the repository, install the dependencies:

```bash
yarn install
```

2. Create a `.env` file in the root of the project with the following content:

```env
NEXT_PUBLIC_SERVICE_ACCOUNT=<service-account-email>
GOOGLE_CREDENTIALS_BASE64=<base64-encoded-credentials>
```

As of today (28-Jan-2025), you can find the service account email in the Google Cloud Console > IAM & Admin > Service Accounts. The credentials are a JSON file that you can download from the same page. You can encode the file to base64 with the following command:

```bash
base64 -i <path-to-credentials-file>
```

3. Run the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About the outfit and job stats and translations

The data was scraped from a Japanese website and the JP to EN translations were made by me using various sources. The data is not guaranteed to be accurate, as the game is constantly changing and I may have made mistakes. If you find any errors, please open an issue or a pull request.

Because I am playing on the EN server and pulled data from the JP server, I do not feel pressured to keep the data up to date. I will update the data when I feel like it or when I have time, but feel free to open a pull request if you want to update the data yourself.

## Screenshots

![Screenshot 2025-01-28 at 19 27 52](https://github.com/user-attachments/assets/904ab154-b456-4cd0-9e2a-38636ff254a2)
![Screenshot 2025-01-28 at 19 29 32](https://github.com/user-attachments/assets/fb8d165b-8a03-45bc-9b31-ca261587f280)
![Screenshot 2025-01-28 at 19 30 14](https://github.com/user-attachments/assets/bf68135c-2716-461c-845f-d8bde638d9be)
![Screenshot 2025-01-28 at 19 28 15](https://github.com/user-attachments/assets/e07368d2-0348-4754-ad0b-b1c91deace70)
![Screenshot 2025-01-28 at 19 29 11](https://github.com/user-attachments/assets/8c756e07-8d6c-4112-a932-03c842d24fec)
![Screenshot 2025-01-28 at 19 29 23](https://github.com/user-attachments/assets/c8f517f4-94d1-4ce4-800a-89f388cfeac2)

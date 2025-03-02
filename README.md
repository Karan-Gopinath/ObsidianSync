# ObsidianSync

## Automate Your Workflow with Ease

**ObsidianSync** is a powerful automation tool designed to streamline app integrations and boost productivity effortlessly. By connecting popular apps like Google Drive, Notion, Discord, and Slack, users can design workflows through an intuitive drag-and-drop interface.

## Key Features

- **Authentication**: Secure and easy account creation with Clerk authentication.
- **App Integration**: Seamlessly connect with popular apps such as Google Drive, Notion, Discord, and Slack.
- **Free Credits**: Users receive 10 free credits upon signup to get started immediately.
- **Drag-and-Drop Workflow**: Build automations visually without needing to code.
- **Real-time Execution**: Instantly run your workflows and view results in real-time.

## User Workflow

1. **Landing Page**: Users visit ObsidianSync and create an account using Clerk.
2. **Dashboard**: Upon login, users can access the dashboard with 10 free credits to explore the platform.
3. **Connections**: Select and link apps such as Google Drive, Notion, Discord, and more.
4. **Workflow Tab**: Create new workflows through the drag-and-drop interface to build automation without any coding knowledge.
5. **Automation**: Choose actions such as sending a text or creating a Google Drive file as part of the workflow.
6. **Execution**: Execute the workflow and save it for future use, maximizing productivity.

## Tech Stack

- **Frontend**: React 18, Next.js, Tailwind CSS
- **Backend**: Node.js with Prisma ORM
- **Database**: Neon DB, PostgreSQL
- **Authentication**: Clerk
- **API Integration**: Axios, ngrok (for secure tunneling)
- **Payments**: Stripe (for handling transactions and subscription management)

## Future Plans

ObsidianSync is continually evolving with the following upcoming features:
- Advanced automation logic with conditional workflows
- Integration with more apps like Trello, Asana, and others
- Collaboration tools to enable teams to work together seamlessly on shared workflows

## Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/obsidiansync.git
   cd obsidiansync
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file and configure the following variables:
   ```bash
   DATABASE_URL=your_postgresql_url
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   CLERK_API_KEY=your_clerk_api_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Run the Application**:
   Start the development server:
   ```bash
   npm run dev
   ```

5. **Access the App**:
   Open your browser and navigate to `http://localhost:3000` to start using ObsidianSync.

## Contribution

We welcome contributions from the community! If you’d like to contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add a new feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request.

---
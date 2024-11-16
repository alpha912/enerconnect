# Contributing to ENERConnect.EU

First off, thank you for considering contributing to ENERConnect.EU! It's people like you that make ENERConnect.EU such a great tool for the European energy research community.

> **⚠️ Disclaimer**: ENERConnect.EU is an independent, community-driven open-source initiative. We are not affiliated with, endorsed by, or connected to any official European Union institutions, government bodies, or energy organizations. We are a group of individuals passionate about advancing energy research collaboration through open source.

## Our Values

- **Open & Independent**: We maintain our platform as a free, independent resource for the energy research community
- **Community First**: Every decision is made with the community's best interests in mind
- **Transparency**: We operate with full transparency in our development and decision-making processes
- **Inclusivity**: We welcome contributors from all backgrounds and experience levels

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* Use a clear and descriptive title
* Describe the exact steps which reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed after following the steps
* Explain which behavior you expected to see instead and why
* Include screenshots if possible

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* Use a clear and descriptive title
* Provide a step-by-step description of the suggested enhancement
* Provide specific examples to demonstrate the steps
* Describe the current behavior and explain which behavior you expected to see instead
* Explain why this enhancement would be useful to most ENERConnect.EU users

### Contributing Data

When contributing to the JSON database:

1. Ensure your data follows the established schema
2. Include all required fields
3. Validate your JSON files locally before submitting
4. Provide sources and references where applicable

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Development Setup

1. **Prerequisites**
   - Node.js (v18 or higher)
   - Git
   - Supabase account
   - Code editor (VS Code recommended)

2. **Environment Setup**
   ```bash
   # Clone the repository
   git clone https://github.com/alpha912/enerconnect.git
   cd enerconnect

   # Install dependencies
   npm install

   # Set up environment variables
   cp .env.example .env.local
   ```

   Configure your `.env.local`:
   ```env
   # API Configuration
   NEXT_PUBLIC_API_URL=http://localhost:3000
   
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   
   # Application
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

## Project Structure

The project is organized as follows:

```
enerconnect/
├── frontend/           # Next.js frontend application
├── json-database/      # Public research data
│   ├── projects/      # Research projects
│   ├── case-studies/  # Case studies
│   ├── resources/     # Educational resources
│   └── metadata/      # System metadata
└── docs/              # Documentation
```

### Data Management

1. **Supabase Database**
   - User authentication
   - User profiles
   - Dynamic application data
   - Real-time features

2. **JSON Database**
   - Research projects
   - Case studies
   - Educational resources
   - System metadata

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### JavaScript/TypeScript Styleguide

* Use TypeScript for all new code
* Follow the existing coding style
* Use meaningful variable names
* Comment your code when necessary
* Write tests for new features

### Documentation Styleguide

* Use Markdown
* Reference functions and classes in backticks: \`functionName()\`
* Use code blocks for examples
* Keep documentation up to date with code changes

## Community

* Join our discussions in GitHub Discussions
* Follow our Twitter account [@enerconnect_eu](https://twitter.com/enerconnect_eu)
* Participate in our regular community calls

## Questions?

Don't hesitate to contact us if you have any questions. You can:

* Open an issue
* Start a discussion
* Contact us via email at contact@enerconnect.eu

Thank you for contributing to ENERConnect.EU!

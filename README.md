# ENERConnect.EU 🌍

[Visit ENERConnect.EU](https://enerconnect.eu) | [GitHub](https://github.com/alpha912/enerconnect) | [Documentation](https://github.com/alpha912/enerconnect/wiki)

**European Network for Energy Research, Collaboration, and Knowledge Exchange**

[![GitHub Sponsors](https://img.shields.io/github/sponsors/alpha912?style=social)](https://github.com/sponsors/alpha912)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://github.com/alpha912/enerconnect/wiki/Code-of-Conduct)

> **⚠️ Disclaimer**: ENERConnect.EU is an independent, open-source initiative created by individuals passionate about advancing energy research collaboration. This project is not affiliated with, endorsed by, or connected to any official European Union institutions, government bodies, or energy organizations. Our goal is to provide a free and open platform for knowledge exchange in the energy sector.

## 🌟 About ENERConnect.EU

ENERConnect.EU is an open-source, collaborative digital platform designed to unify and streamline knowledge, research, and best practices across the European energy landscape. Our mission is to accelerate Europe's energy transition by centralizing knowledge, fostering collaboration, and enabling real-time sharing of insights among researchers, policymakers, and industry stakeholders.

## 📚 Documentation

For comprehensive documentation, please visit:

- [Project Wiki](https://github.com/alpha912/enerconnect/wiki) - Detailed documentation and guides
- [API Documentation](https://github.com/alpha912/enerconnect/wiki/API-Documentation) - API endpoints and usage
- [Development Guide](https://github.com/alpha912/enerconnect/wiki/Development-Guide) - Setup and development workflow
- [Contributing Guidelines](https://github.com/alpha912/enerconnect/wiki/Contributing) - How to contribute
- [Project Roadmap](https://github.com/alpha912/enerconnect/projects/1) - Development progress and plans

## 🚀 Key Features

- **Research Network**: Connect with EU researchers, institutions, and industry stakeholders
- **Knowledge Exchange Hub**: Access case studies, best practices, and open datasets
- **Project Showcases**: Share and discover innovative energy projects
- **Policy Updates**: Stay informed about EU energy policies and regulations
- **Educational Resources**: Access training materials and workshops
- **Open Data Repository**: Contribute to and utilize shared research data

## 🛠 Technology Stack

- **Frontend**: Next.js 15.0.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth
- **Database**: 
  - Supabase (User profiles, Auth)
  - JSON-based (Public research data)

## 🚀 Quick Start

1. **Prerequisites**
   - Node.js (v18 or higher)
   - Git
   - Supabase account

2. **Environment Variables**
   Create a `.env.local` file with:
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

3. **Installation**
   ```bash
   git clone https://github.com/alpha912/enerconnect.git
   cd enerconnect
   npm install
   npm run dev
   ```

## 📂 Project Structure

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

## 🌱 Getting Started

### Prerequisites

- Node.js 18.x or higher
- Git
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alpha912/enerconnect.git
   cd enerconnect
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint for code quality
```

## Support & Sponsorship

ENERConnect is an open platform that relies on community support and sponsorship to maintain and improve its services. We welcome various forms of support:

### Funding & Sponsorship
Visit our [funding documentation](./funding/README.md) to learn about:
- Sponsorship tiers and benefits
- Funding opportunities
- Partnership programs
- Support options

### Ways to Support
- Become a sponsor
- Contribute to development
- Share research data
- Participate in the community

For sponsorship inquiries: sponsors@enerconnect.eu

## 💖 Supporting ENERConnect.EU

ENERConnect.EU is a community-driven project that aims to advance energy research and collaboration across Europe. We offer multiple ways to support the platform:

### 🤝 Join Our Community
- Contribute to discussions
- Share research findings
- Participate in events
- Help improve documentation

### 🌱 Become a Sponsor
Visit our [funding documentation](./funding/README.md) to learn about our sponsorship tiers:
- Supporter Tier: For individuals and small organizations
- Partner Tier: For medium organizations
- Sustainer Tier: For large organizations
- Institution Tier: For research institutions and universities

### 🔬 Research Collaboration
- Submit research data
- Propose joint projects
- Share case studies
- Contribute to knowledge base

### 💻 Technical Contributions
- Code contributions
- Bug reports
- Feature requests
- Documentation improvements

For more information about supporting ENERConnect, visit our [funding documentation](./funding/README.md) or contact us at sponsors@enerconnect.eu.

## 🤝 Contributing

We welcome contributions from researchers, developers, and energy experts across Europe! Please read our [Contributing Guidelines](https://github.com/alpha912/enerconnect/wiki/Contributing) to get started.

### Ways to Contribute

1. Add or update project data in the JSON database
2. Improve the frontend application
3. Create or enhance documentation
4. Report bugs and suggest features
5. Share knowledge and expertise

## 🔄 Development Workflow

1. Create an issue for the feature/bug
2. Fork the repository
3. Create a feature branch
4. Make your changes
5. Run tests and lint checks
6. Submit a pull request

For detailed development instructions, visit our [Development Guide](https://github.com/alpha912/enerconnect/wiki/Development-Guide).

## 🧪 Testing

```bash
cd frontend
npm run test        # Run unit tests
npm run lint        # Run linting
npm run build      # Verify build
```

## 📜 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🤝 Code of Conduct

We are committed to fostering an inclusive and welcoming community. Please read our [Code of Conduct](https://github.com/alpha912/enerconnect/wiki/Code-of-Conduct) for details on our community standards.

---

<div align="center">

**ENERConnect.EU** - Empowering European Energy Research

[Website](https://enerconnect.eu) | [Documentation](https://github.com/alpha912/enerconnect/wiki) | [Community](https://github.com/alpha912/enerconnect/discussions)

</div>

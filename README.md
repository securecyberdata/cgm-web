# CGM Diabetes Web - Insurance Coverage Platform

A comprehensive HIPAA-compliant platform that helps patients obtain CGM and diabetic supplies through Medicare Part B and select PPOs, with cash-pay fallback options.

## 🚀 Features

### Core Functionality
- **Eligibility Quiz**: 60-second coverage assessment with branching logic
- **Insurance Verification**: Medicare Part B and PPO support
- **Document Management**: Secure file uploads with encryption
- **Patient Portal**: Real-time status tracking and document management
- **Provider Portal**: Referral management for healthcare providers

### Pages & Components
- **Home**: Hero section with trust indicators and 3-step process
- **Check Coverage**: Multi-step eligibility quiz with form validation
- **CGM**: Device information, coverage details, and FAQs
- **Diabetic Supplies**: Comprehensive supply catalog with coverage rules
- **Pumps & Sensors**: Advanced device coordination with doctors
- **How It Works**: Detailed process explanation and timelines
- **For Clinics**: Provider resources and referral management
- **Pricing**: Transparent cash-pay options with HSA/FSA support
- **About**: Company information and trust indicators
- **Compliance**: HIPAA, TCPA, privacy policies, and accessibility
- **Patient Portal**: Secure document upload and status tracking

### Technical Features
- **Next.js 14**: App Router with TypeScript
- **Tailwind CSS**: Responsive design system
- **React Hook Form**: Form validation and management
- **Zod**: Schema validation
- **SEO Optimized**: JSON-LD structured data
- **Accessibility**: WCAG 2.2 AA compliant
- **Security**: HIPAA-compliant data handling

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Icons**: Heroicons
- **UI Components**: Headless UI
- **Animations**: Framer Motion
- **Deployment**: Vercel/AWS ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cgm-diabetes-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── check-coverage/     # Eligibility quiz
│   ├── cgm/               # CGM devices page
│   ├── supplies/          # Diabetic supplies page
│   ├── pumps-sensors/     # Pumps & sensors page
│   ├── how-it-works/      # Process explanation
│   ├── for-clinics/       # Provider resources
│   ├── pricing/           # Cash-pay pricing
│   ├── about/             # Company information
│   ├── compliance/        # Legal & compliance
│   ├── patient-portal/    # Patient dashboard
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── lib/                   # Utility functions
│   ├── utils.ts           # General utilities
│   └── structured-data.ts # SEO schema data
└── types/                 # TypeScript definitions
    └── index.ts           # Type definitions
```

## 🔒 Security & Compliance

### HIPAA Compliance
- Encrypted data transmission and storage
- Access controls and audit logging
- Business Associate Agreements (BAAs) with vendors
- Privacy Notice and consent management

### Data Protection
- Client-side file encryption before upload
- Secure S3 storage with encryption at rest
- HTTPS enforcement
- Input validation and sanitization

### Accessibility
- WCAG 2.2 AA compliant
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Semantic HTML structure

## 📊 Analytics & Tracking

### Events Tracked
- `quiz_start` - Eligibility quiz initiation
- `quiz_complete` - Quiz completion
- `consent_signed` - Legal consent given
- `doc_uploaded` - Document upload
- `eligibility_passed` - Coverage verification
- `PA_submitted` - Prior authorization submission
- `RX_received` - Prescription received
- `claim_submitted` - Insurance claim submitted
- `shipped` - Order shipped
- `reorder_request` - Reorder initiated

### Integration Ready
- Google Analytics 4
- Meta Pixel
- Server-side event tracking
- Offline conversion tracking
- Call tracking integration

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### AWS
1. Build the application: `npm run build`
2. Deploy to S3 + CloudFront
3. Configure Lambda functions for API routes
4. Set up RDS for database

### Environment Variables
```env
NEXT_PUBLIC_APP_URL=https://your-domain.com
DATABASE_URL=your-database-url
AWS_ACCESS_KEY_ID=your-aws-key
AWS_SECRET_ACCESS_KEY=your-aws-secret
S3_BUCKET_NAME=your-s3-bucket
TWILIO_ACCOUNT_SID=your-twilio-sid
TWILIO_AUTH_TOKEN=your-twilio-token
SENDGRID_API_KEY=your-sendgrid-key
```

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Code Quality
- ESLint configuration
- TypeScript strict mode
- Prettier formatting
- Husky pre-commit hooks

## 📱 Mobile Responsiveness

- Mobile-first design approach
- Responsive breakpoints
- Touch-friendly interfaces
- Optimized for all screen sizes
- Progressive Web App ready

## 🌐 SEO Features

### Structured Data
- Organization schema
- MedicalBusiness schema
- FAQPage schema
- Product schema for cash-pay items
- Speakable schema for voice search

### Meta Tags
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Sitemap generation
- Robots.txt configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Support

For technical support or questions:
- Email: support@cgmcare.com
- Phone: 1-800-CGM-CARE
- Documentation: [docs.cgmcare.com](https://docs.cgmcare.com)

## 🔄 Updates

### Version 1.0.0
- Initial release
- Complete page structure
- Eligibility quiz functionality
- Patient portal
- Provider resources
- Compliance pages
- SEO optimization
- Accessibility compliance

---

**Built with ❤️ for better diabetes management**
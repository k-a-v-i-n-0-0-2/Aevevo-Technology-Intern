import React, { useState } from 'react';
import {
  Stethoscope,
  User,
  Globe,
  CreditCard,
  Bot,
  Check,
} from 'lucide-react';

const solutions = [
  {
    id: 0,
    tab: 'EHR',
    tabIcon: Stethoscope,
    title: 'EHR',
    titleIcon: Stethoscope,
    description:
      "At the heart of Tebra's platform is a cloud-based EHR that streamlines clinical documentation, helping you chart faster and more accurately. With AI Note Assist, your notes practically write themselves, freeing you up to focus on patient care.",
    benefits: [
      'Complete patient history',
      'AI-generated clinical notes',
      'Electronic prescriptions',
      'Telehealth',
      'Provider scheduling',
      'Electronic labs',
      'MACRA/MIPS support',
    ],
    image: '/ehr-mockup.png',
  },
  {
    id: 1,
    tab: 'Patient Experience',
    tabIcon: User,
    title: 'Patient Experience',
    titleIcon: User,
    description:
      'Deliver a seamless, modern experience that keeps patients engaged from the first click to follow-up. From online scheduling to automated reminders, every touchpoint is designed to increase satisfaction and retention.',
    benefits: [
      'Online self-scheduling',
      'Automated appointment reminders',
      'Digital intake forms',
      'Two-way text messaging',
      'Patient portal access',
      'Satisfaction surveys',
      'Reputation management',
    ],
    image: '/patient-mockup.png',
  },
  {
    id: 2,
    tab: 'Medical Practice Marketing',
    tabIcon: Globe,
    title: 'Medical Practice Marketing',
    titleIcon: Globe,
    description:
      'Attract new patients and grow your practice with comprehensive, healthcare-specific digital marketing tools. Stand out locally, manage your online reputation, and convert website visitors into booked appointments.',
    benefits: [
      'SEO-optimized practice websites',
      'Online reputation management',
      'Patient review generation',
      'Local search optimization',
      'Social media presence',
      'New patient acquisition',
      'Performance analytics',
    ],
    image: '/marketing-mockup.png',
  },
  {
    id: 3,
    tab: 'Billing and Payments',
    tabIcon: CreditCard,
    title: 'Billing and Payments',
    titleIcon: CreditCard,
    description:
      'Simplify your revenue cycle with integrated billing tools that accelerate claims, reduce denials, and make it easy for patients to pay. Spend less time chasing payments and more time caring for patients.',
    benefits: [
      'Automated claims submission',
      'Real-time eligibility checks',
      'Patient payment plans',
      'Online bill pay portal',
      'Denial management tools',
      'Revenue cycle analytics',
      'Insurance verification',
    ],
    image: '/billing-mockup.png',
  },
  {
    id: 4,
    tab: 'AI & Automation',
    tabIcon: Bot,
    title: 'AI & Automation',
    titleIcon: Bot,
    description:
      'Leverage cutting-edge AI to automate repetitive tasks, generate clinical notes instantly, and surface insights that improve outcomes. Automation handles the busywork so your team can focus on what matters most.',
    benefits: [
      'AI-powered note generation',
      'Smart scheduling assistant',
      'Automated follow-up workflows',
      'Predictive patient insights',
      'Intelligent coding suggestions',
      'Voice-to-text documentation',
      'Workflow automation rules',
    ],
    image: '/ai-mockup.png',
  },
];

const SolutionDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = solutions[activeTab];
  const TitleIcon = current.titleIcon;

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.heading}>Solutions for</h1>
          <p style={styles.subtitle}>
            Explore flexible solutions designed to meet your unique practice
            needs.
          </p>
        </header>

        {/* Tab Bar */}
        <nav style={styles.tabBar}>
          {solutions.map((sol) => {
            const Icon = sol.tabIcon;
            const isActive = activeTab === sol.id;
            return (
              <button
                key={sol.id}
                onClick={() => setActiveTab(sol.id)}
                style={{
                  ...styles.tab,
                  ...(isActive ? styles.tabActive : {}),
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#0d4f4a';
                    e.currentTarget.style.color = '#0d4f4a';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#d1d5db';
                    e.currentTarget.style.color = '#1f2937';
                  }
                }}
              >
                <Icon
                  size={18}
                  style={{
                    color: isActive ? '#0d4f4a' : '#6b7280',
                    flexShrink: 0,
                  }}
                />
                <span>{sol.tab}</span>
              </button>
            );
          })}
        </nav>

        {/* Content Card */}
        <div style={styles.card}>
          {/* Left Content */}
          <div style={styles.cardLeft}>
            <div style={styles.titleRow}>
              <TitleIcon size={28} style={{ color: '#0d4f4a' }} />
              <h2 style={styles.cardTitle}>{current.title}</h2>
            </div>

            <p style={styles.cardDesc}>{current.description}</p>

            <ul style={styles.benefitsList}>
              {current.benefits.map((b, i) => (
                <li key={i} style={styles.benefitItem}>
                  <span style={styles.checkCircle}>
                    <Check size={14} strokeWidth={3} color="#fff" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <button
              style={styles.learnMore}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#093d39';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow =
                  '0 6px 20px rgba(13,79,74,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0d4f4a';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 4px 14px rgba(13,79,74,0.25)';
              }}
            >
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div style={styles.cardRight}>
            <img
              src={current.image}
              alt={`${current.title} dashboard preview`}
              style={styles.mockupImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Inline Styles ── */
const styles = {
  section: {
    width: '100%',
    minHeight: '100vh',
    background: '#ffffff',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '60px 24px 80px',
    fontFamily:
      "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  container: {
    maxWidth: 1120,
    width: '100%',
  },

  /* Header */
  header: {
    marginBottom: 32,
  },
  heading: {
    fontSize: '2.6rem',
    fontWeight: 800,
    color: '#0f172a',
    margin: 0,
    lineHeight: 1.15,
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1.05rem',
    color: '#64748b',
    marginTop: 10,
    lineHeight: 1.6,
  },

  /* Tab Bar */
  tabBar: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    marginBottom: 36,
  },
  tab: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 20px',
    borderRadius: 9999,
    border: '1.5px solid #d1d5db',
    background: '#fff',
    color: '#1f2937',
    fontSize: '0.92rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    whiteSpace: 'nowrap',
    fontFamily: 'inherit',
  },
  tabActive: {
    borderColor: '#0d4f4a',
    color: '#0d4f4a',
    background: '#f0fdfa',
    boxShadow: '0 2px 8px rgba(13,79,74,0.10)',
  },

  /* Content Card */
  card: {
    display: 'flex',
    gap: 48,
    background: '#f8faf9',
    borderRadius: 24,
    padding: '48px 44px',
    border: '1px solid #e8edeb',
    alignItems: 'flex-start',
  },
  cardLeft: {
    flex: 1,
    minWidth: 0,
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: '1.55rem',
    fontWeight: 700,
    color: '#0f172a',
    margin: 0,
    letterSpacing: '-0.01em',
  },
  cardDesc: {
    fontSize: '0.95rem',
    color: '#475569',
    lineHeight: 1.7,
    marginBottom: 28,
  },

  /* Benefits */
  benefitsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    marginBottom: 32,
  },
  benefitItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    fontSize: '0.93rem',
    color: '#1e293b',
    fontWeight: 500,
  },
  checkCircle: {
    width: 22,
    height: 22,
    borderRadius: '50%',
    background: '#0d4f4a',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  /* Learn More Button */
  learnMore: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '12px 28px',
    borderRadius: 9999,
    background: '#0d4f4a',
    color: '#fff',
    fontSize: '0.92rem',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 14px rgba(13,79,74,0.25)',
    fontFamily: 'inherit',
  },

  /* Right Image */
  cardRight: {
    flex: 1,
    minWidth: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mockupImg: {
    width: '100%',
    maxWidth: 480,
    borderRadius: 16,
    boxShadow: '0 8px 30px rgba(0,0,0,0.10)',
    objectFit: 'cover',
  },
};

export default SolutionDashboard;
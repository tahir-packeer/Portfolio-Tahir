export const HERO_CONTENT = {
  name: 'Tahir Nasoordeen Packeer',
  headline: 'Software Engineer specializing in Backend Systems & Cloud Architecture',
  subtitle: 'Building scalable distributed systems, resilient APIs, and cloud-native infrastructure. Focused on performance, observability, and developer experience.',
  ctaPrimary: 'View Featured Projects',
  ctaSecondary: 'Download Resume',
}

export const CONTACT_INFO = {
  email: 'tahir.nasoordeen@example.com',
  github: 'https://github.com/tahirnp',
  linkedin: 'https://linkedin.com/in/tahirnp',
}

export const SKILLS = [
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'TypeScript', 'Go', 'REST', 'gRPC', 'GraphQL', 'Redis', 'RabbitMQ', 'Kafka'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'ArgoCD', 'Prometheus', 'Grafana'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Flutter', 'Dart', 'WebSockets', 'React Query'],
  },
  {
    category: 'Data & Architecture',
    items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Elasticsearch', 'ClickHouse', 'Event Sourcing', 'CQRS', 'Microservices', 'Domain-Driven Design'],
  },
] as const

export const PROJECTS = [
  {
    title: 'CloudRetail Microservices API Gateway',
    description: 'A high-throughput API gateway orchestrating 15+ microservices for a multi-tenant e-commerce platform. Handles authentication, rate limiting, request routing, and cross-service transactions with sub-50ms p99 latency.',
    techStack: ['Go', 'Kubernetes', 'gRPC', 'Redis', 'PostgreSQL', 'Envoy', 'OpenTelemetry'],
    hardPart: 'Designed a custom request coalescing layer to eliminate the "thundering herd" problem during flash sales. Implemented distributed saga pattern for cross-service order orchestration with automatic compensation transactions, reducing order failure rates from 2.3% to 0.04%.',
    githubUrl: 'https://github.com/tahirnp/cloudretail-gateway',
    liveUrl: 'https://cloudretail.example.com',
    featured: true,
  },
  {
    title: 'Edge AI Wildfire Detection System',
    description: 'Real-time wildfire detection pipeline processing satellite imagery at the edge. Deployed on NVIDIA Jetson devices across fire-prone regions with offline-first architecture and satellite uplink for alerting.',
    techStack: ['Python', 'TensorRT', 'ONNX', 'MQTT', 'AWS IoT Greengrass', 'TimescaleDB', 'Grafana'],
    hardPart: 'Optimized a YOLOv8 model from 120MB to 18MB via INT8 quantization and TensorRT compilation, achieving 30 FPS inference on Jetson Orin with <2% mAP drop. Built a conflict-free replicated data type (CRDT) for offline alert synchronization across intermittent connectivity zones.',
    githubUrl: 'https://github.com/tahirnp/edge-wildfire-detection',
    liveUrl: 'https://wildfire-detection.example.com',
    featured: true,
  },
  {
    title: 'Distributed Task Scheduler',
    description: 'A cron-like job scheduler with exactly-once semantics, horizontal scaling, and multi-region failover. Supports 100k+ scheduled jobs with dynamic priority queues and deadline-aware scheduling.',
    techStack: ['Go', 'etcd', 'PostgreSQL', 'Docker', 'Kubernetes', 'Prometheus'],
    hardPart: 'Implemented a lease-based leader election using etcd to ensure exactly-once execution across replicas. Built a priority inheritance protocol to prevent priority inversion in deadline-sensitive workloads. Achieved 99.99% schedule adherence under network partitions.',
    githubUrl: 'https://github.com/tahirnp/distributed-scheduler',
    liveUrl: null,
    featured: false,
  },
] as const

export const EXPERIENCE = [
  {
    role: 'Software Engineer',
    company: 'CloudRetail Systems',
    period: '2022 — Present',
    type: 'work' as const,
    bullets: [
      'Architected and led migration from monolithic Rails API to 15-service Kubernetes ecosystem, reducing deployment cycle from 2 hours to 12 minutes.',
      'Built internal developer platform (CLI + GitHub Actions templates) adopted by 40+ engineers, standardizing service scaffolding, observability, and security policies.',
      'Designed event-driven inventory reservation system using Kafka and CDC, eliminating overselling incidents during peak traffic (Black Friday: 50k RPS).',
      'Mentored 4 junior engineers on system design, Go internals, and cloud-native patterns.',
    ],
  },
  {
    role: 'Backend Engineering Intern',
    company: 'Nebula Analytics',
    period: '2021 — 2022',
    type: 'work' as const,
    bullets: [
      'Developed real-time analytics ingestion pipeline processing 2M+ events/day using Node.js, ClickHouse, and Redis Streams.',
      'Implemented automated schema migration framework with zero-downtime deployments for multi-tenant PostgreSQL clusters.',
      'Contributed to open-source OpenTelemetry instrumentation for Node.js gRPC services.',
    ],
  },
  {
    role: 'BSc Software Engineering',
    company: 'University of Technology',
    period: '2018 — 2022',
    type: 'education' as const,
    bullets: [
      'Specialized in Distributed Systems, Cloud Computing, and Machine Learning.',
      'Capstone: "Fault-Tolerant Consensus in Geo-Distributed Databases" — implemented Raft variant with 40% latency reduction under cross-region partitions.',
      'Relevant Coursework: Operating Systems, Computer Networks, Database Systems, Compiler Design, Algorithms & Complexity.',
      'Graduated with First Class Honours (GPA: 3.9/4.0).',
    ],
  },
] as const

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
] as const

export const METADATA = {
  title: 'Tahir Nasoordeen Packeer | Software Engineer',
  description: 'Software Engineer specializing in Backend Systems & Cloud Architecture. Building scalable distributed systems, resilient APIs, and cloud-native infrastructure.',
  openGraph: {
    title: 'Tahir Nasoordeen Packeer | Software Engineer',
    description: 'Software Engineer specializing in Backend Systems & Cloud Architecture.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Tahir Nasoordeen Packeer Portfolio',
  },
} as const
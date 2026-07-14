export const resourcesMeta = {
  prepHubUrl: "https://github.com/soumikpradhan/java-prep",
  prepHubLabel: "Java Interview Prep Hub",
  description:
    "High-level syllabus of interview topics. Detailed notes, code samples, and case studies live in the prep hub repo.",
};

export const resourceCategories = [
  {
    id: "core-java",
    title: "Core Java",
    icon: "☕",
    topics: [
      {
        title: "OOP & Language Fundamentals",
        subTopics: [
          "Four pillars — Encapsulation, Inheritance, Polymorphism, Abstraction",
          "Abstract class vs Interface",
          "Composition vs Inheritance",
          "Checked vs Unchecked exceptions",
          "String Constant Pool",
        ],
      },
      {
        title: "JVM & Memory Management",
        subTopics: [
          "Class loaders — Bootstrap, Extension, Application",
          "Heap, Stack, Metaspace",
          "Garbage collectors — G1, ZGC, Shenandoah",
          "Stack Overflow vs Out of Memory",
          "Java Memory Model & volatile keyword",
        ],
      },
      {
        title: "Collections & Generics",
        subTopics: [
          "List, Set, Map — when to use which",
          "HashMap vs ConcurrentHashMap — internals",
          "Hashtable vs ConcurrentHashMap",
          "ArrayList vs LinkedList",
          "LinkedHashSet vs HashSet",
          "Hashcode & equals contract",
          "Generics — type erasure, wildcards, enhancements in newer Java",
        ],
      },
      {
        title: "Multithreading & Concurrency",
        subTopics: [
          "Program, Process, Thread",
          "Cores in CPU, Hyperthreading, Context switching, Thread Scheduler",
          "Multithreading : Concurrency, Parallelism, Fault tolerance & Isolation",
          "Create & Manage Threads : Runnable, Callable & Thread Lifecycle",
          "Thread Pools and Executors : Executor Framework, Thread Starvation, Thread Pools - Fixed, Cached, Scheduled",
          "Thread Safety & Synchronization : Race condition, Volatile, Atomic, Compare & Swap - CAS",
          "Locks & Synchronization Mechanism : Locks, Mutex, Monitor, ReentrantLock, Semaphores",
          "Future vs CompletableFuture",
          "Thread-safe collections",
          "Scenario: counter increment across N threads",
        ],
      },
      {
        title: "Java 8+ & Streams",
        subTopics: [
          "Functional interfaces & lambda expressions",
          "Stream API → map, filter, reduce, flatMap, peek",
          "Stream Coding Questions Prep → https://github.com/pradhansoumik/java8-features",
          "Optional class",
          "Records, var, switch enhancements",
          "Java 8 → 17 migration considerations",
        ],
      },
      {
        title: "New Features in New Released Version",
        subTopics: [
          "Java 8 features — Sealed classes, Pattern matching, Records, Switch expressions",
          "Java 17 features — Simple web server, UTF-8 by default, Vector API",
          "Java 21 features — Record patterns, Pattern matching for switch",
        ],
      },
    ],
  },
  {
    id: "dsa",
    title: "DSA",
    icon: "🧮",
    topics: [
      // {
      //   title: "Arrays & Sorting",
      //   subTopics: [
      //     "Two Sum, Dutch National Flag",
      //     "Next greater permutation / next greater number",
      //     "Binary search — rotated sorted array, closest element",
      //     "Minimum difference pairs",
      //     "Merge intervals",
      //   ],
      // },
      // {
      //   title: "Strings",
      //   subTopics: [
      //     "Balanced parentheses / longest valid parentheses",
      //     "Lexicographically smallest subsequence",
      //     "Regular expression matching",
      //     "Substring with concatenation of all words",
      //     "Most repeating character in a sentence",
      //   ],
      // },
      // {
      //   title: "Stack, Queue & Heap",
      //   subTopics: [
      //     "Stack with O(1) min operation",
      //     "LRU Cache — design & implement",
      //     "Monotonic stack patterns",
      //     "Priority queue / heap applications",
      //   ],
      // },
      // {
      //   title: "Trees & Graphs",
      //   subTopics: [
      //     "BFS & DFS traversals",
      //     "Binary search tree operations",
      //     "Spiral matrix",
      //     "Topological sort basics",
      //   ],
      // },
      // {
      //   title: "Problem-Solving Patterns",
      //   subTopics: [
      //     "Sliding window",
      //     "Two pointers",
      //     "Prefix sum",
      //     "External merge sort — large file on limited RAM",
      //     "Time & space complexity analysis",
      //   ],
      // },
    ],
  },
  {
    id: "hld",
    title: "System Design — HLD",
    icon: "🏗️",
    topics: [
      {
        title: "Definition",
        subTopics: [
          "What is system design — designing scalable, reliable distributed systems",
          "HLD vs LLD",
          "Overview of Software Development Life Cycle (SDLC)",
        ],
      },
      {
        title: "Components",
        subTopics: [
          "Client",
          "Server",
          "Load Balancer",
          "Web Server",
          "Application Server",
          "Cache",
          "Database",
        ],
      },
      {
        title: "Key Characteristics",
        subTopics: [
          "Scalability",
          "Availability",
          "Consistency",
          "Load Balancing",
          "Caching",
          "CDN",
          "Data Partitioning",
          "CAP Theorem",
          "Choice of DB",
          "Reliability",
          "Efficiency",
          "Manageability",
          "Resiliency",
        ],
      },
      {
        title: "Scalability",
        subTopics: [
          "Definition, Real Life Example",
          "Horizontal, Vertical & Auto Scaling",
        ],
      },
      {
        title: "Availability",
        subTopics: [
          "Definition, Real Life Example",
          "Benchmark (ideally 9 9s or 11 9s)",
        ],
      },
      {
        title: "Consistency",
        subTopics: [
          "Definition, Real Life Example",
          "Strong Consistency, Eventual Consistency",
        ],
      },
      {
        title: "CAP Theorem",
        subTopics: [
          "Consistency, Availability, Partition tolerance trade-offs",
          "Reasoning of CAP Theorem",
          "CP vs AP systems → when to choose which",
        ],
      },
      {
        title: "Load Balancing",
        subTopics: [
          "Definition, Example (Nginx Plus, AWS ELB, Citrix ADC, Google Cloud Load Balancer)",
          "In which Layer to put Load Balancers?",
          "Advantages/Benefits of LB",
          "Smart Predictive Load Balancers",
          "Load Balancing Algorithms → Least Connections, Least Response, Round Robin, IP Hashing, Least Bandwidth",
        ],
      },
      {
        title: "Caching",
        subTopics: [
          "Definition, principle of caching & Real Life Example - Redis, Memcache, Hazelcast",
          "Cache hit, Cache miss, hit rate, miss rate",
          "Cache invalidation",
          "Ways to resolve cache invalidation (Write-Through, Write-Around, Write-Back cache)",
          "Cache Eviction policies → FIFO, LIFO, LRU, LFU, MRU",
          "Cache Avalanche"
        ],
      },
      {
        title: "Content Distribution/Delivery Network (CDN)",
        subTopics: [
          "Serving large amount of Static Media",
          "Distributed across different geolocations",
        ],
      },
      {
        title: "Short Polling, Long Polling, WebSocket & Server-Sent Events",
        subTopics: [
          "Polling → Technique by which clients keep asking the server for the new data regularly !",
          "Short polling/AJAX Based Polling → Makes request after a fixed delays (time/regular intervals)",
          "Long polling → Every request will have a certain timeout !",
          "Web Sockets → communication protocol that provides \"full-duplex\" communication channel over a single TCP Connection.",
          "Server-Sent/Side Events (SSE) → If there is an update in Server, Server will send the updated data which is not requested by the client",
        ],
      },
      {
        title: "Database, Data Partitioning/Sharding & Indexing",
        subTopics: [
          "SQL (MySQL, Postgres, Oracle) & NoSQL (Key-value store, Document, Wide Column, Graph DB), GeoSpatial DB",
          "Choice of DB, Trade-Offs",
          "Indexing strategies",
          "Data Partitioning",
          "Partitioning Methods → Horizontal/Sharding, Vertical, Directory based",
          "Partitioning Criteria → Key/Hash Based, List Based, Round-Robin, Composite/Hybrid",
          "Problems of Data Partitioning → JOINS, Referential Integrity, Rebalancing",
          "Database Indexing",
          "How do Indexes decrease Write Performance? → Re-indexing during insert, update & delete",
          "Data Structures used for Indexing → B+ Tree, Hash Tables, R- Tree, Bitmap Index",
        ],
      },
      {
        title: "HLD Template - How to approach HLD interview",
        subTopics: [
          "Requirements Clarification → Functional, Non-Functional, Additional/Extended Requirements",
          "Back of the Envelope Calculation → Capacity Estimation, DAU, MAU",
          "System API → Endpoints, Request/Response",
          "Defining DB schema → Type of data, Choice of DB",
          "High Level Design → Client, Server, Database, Caching",
          "Detailed Component Level Design",
          "Bottlenecks/Tradeoffs",
          "Telemetry/Analytics"
        ],
      },
      {
        title: "Case Studies",
        subTopics: [
          "URL Shortener, Pastebin",
          "Instagram, Twitter",
          "WhatsApp",
          "Uber",
          "Google Drive",
          "YouTube",
          "Netflix etc.",
        ],
      },
    ],
  },
  {
    id: "lld",
    title: "System Design — LLD",
    icon: "📐",
    topics: [
      {
        title: "Software Design Principles",
        subTopics: [
          "DRY: Don't Repeat Yourself",
          "KISS: Keep It Simple, Stupid",
          "YAGNI: You Aren't Gonna Need It",
          "Curly Law - Do One Thing",
          "Premature Optimisation - Root of All Evil",
          "Boy-Scout Rule",
          "Code as a Maintainer/Owner"
        ],
      },
      {
        title: "SOLID Principles",
        subTopics: [
          "Set of five principles for writing clean, scalable, maintainable object-oriented code",
          "Single Responsibility Principle (SRP)",
          "Open Closed Principle (OCP)",
          "Liskov Substitution Principle (LSP)",
          "Interface Segregation Principle (ISP)",
          "Dependency Inversion Principle (DIP)"
        ],
      },
      {
        title: "UML & Class Diagrams",
        subTopics: [
          "Unified Modeling Language (UML) understanding, Real-life Analogy, Types of UML Diagrams",
          "Structural Diagrams - Class Diagram, Object Diagram, Component Diagram, Deployment Diagram etc",
          "Behavioral Diagrams - Use case Diagram, Activity Diagram, Sequence Diagram etc",
          "Class UML Diagrams - Class representation, Visibility Markers, Attributes and Method System, Interfaces, etc",
          "Association, Aggregation, Composition, Inheritance",
          "Sequence diagrams — interactions over time",
          "Use case diagrams — actors, use cases, system boundaries",
        ],
      },
      {
        title: "Design Patterns",
        subTopics: [
          "Creational - Singleton, Factory, Builder, Abstract Factory, Prototype",
          "Structural - Adapter, Decorator, Facade, Composite, Proxy, Bridge, Flyweight",
          "Behavioural - Iterator, Observer, Strategy, Command, Template, State, Chain of Responsibility, Visitor, Mediator, memento",
        ],
      },
      {
        title: "Best Practices in LLD",
        subTopics: [
        ],
      },
      {
        title: "Common LLD Problems",
        subTopics: [
          "Parking lot system",
          "Elevator system",
          "Library management — books, members, lending",
          "Logging Framework",
          "LRU cache (class-level design)",
          "etc",
        ],
      },
    ],
  },
  {
    id: "rest-api",
    title: "REST API",
    icon: "🔌",
    topics: [
      {
        title: "REST Fundamentals",
        subTopics: [
          "REST principles & constraints",
          "HTTP methods — GET, POST, PUT, PATCH, DELETE",
          "HTTP status codes",
          "Idempotency & safe methods",
          "Resource naming & URI design",
        ],
      },
      {
        title: "API Design Principles",
        subTopics: [
          "Stateful vs stateless REST API",
          "Request/response modeling",
          "Versioning strategies",
          "Pagination, filtering & sorting",
          "Error response structure",
        ],
      },
      {
        title: "Security & Authentication",
        subTopics: [
          "Authentication vs authorization",
          "JWT, OAuth 2.0 basics",
          "API keys & token-based auth",
          "Role-based access control",
          "HTTPS & secure headers",
        ],
      },
      {
        title: "Documentation & Best Practices",
        subTopics: [
          "Swagger / OpenAPI",
          "DTO layer — Controller ↔ Service boundaries",
          "Rate limiting & throttling",
          "HATEOAS basics",
          "API testing — Postman, contract testing",
        ],
      },
    ],
  },
  {
    id: "spring-boot",
    title: "Spring Boot",
    icon: "🍃",
    topics: [
      {
        title: "Core Concepts",
        subTopics: [
          "IOC & Dependency Injection",
          "Bean lifecycle & scopes",
          "Circular dependency — how Spring resolves it",
          "@Primary & @Qualifier",
        ],
      },
      {
        title: "Internals & Configuration",
        subTopics: [
          "Spring Boot auto-configuration",
          "Profiles & environment-specific config",
          "@Transactional — internals & propagation",
          "Spring Boot application design from scratch",
        ],
      },
      {
        title: "Data & Persistence",
        subTopics: [
          "Spring Data JPA — repositories, custom queries",
          "Hibernate lazy loading",
          "PUT/POST API with JPA entities",
        ],
      },
      {
        title: "Cross-Cutting Concerns",
        subTopics: [
          "Exception handling — @ControllerAdvice",
          "Validation & global exception handler",
          "Swagger / OpenAPI documentation",
          "DTO layer — Controller ↔ Service boundaries",
        ],
      },
    ],
  },
  {
    id: "microservices",
    title: "Microservices",
    icon: "🧩",
    topics: [
      {
        title: "Architecture Fundamentals",
        subTopics: [
          "Monolith vs microservices — benefits & trade-offs",
          "Characteristics of Microservices : Independent Deployment, Single Responsibility, Scalable etc.",
          "Key Infrastructure Components : API Gateway, Service Registry, Messaging & Event Streaming, Resiliency, Observability, Containerization & Orchestration",
          "Breaking Monolith : Modular Monolith -> Strangler Fig pattern",
        ],
      },
      {
        title: "Design Patterns",
        subTopics: [
          "Decomposition Pattern : Strangler, Bulkhead, Sidecar etc",
          "Integration Pattern : API Gateway, Gateway Routing, Proxy, Aggregator etc",
          "Database Pattern : DB per Service, Shared DB per Service, CQRS, Event Sourcing, Saga",
          "Observability Pattern : Logging, Performance Metrics, Distributed Tracing, Health Check",
          "Cross Cutting Concerns : External Configuration, Service Discovery, Circuit Breaker, Blue-Green Deployment"
        ],
      },
      {
        title: "Communication & Discovery",
        subTopics: [
          "Sync — REST, gRPC",
          "Async — Kafka, RabbitMQ",
          "Inter-service authentication",
        ],
      },
      {
        title: "Resilience Patterns",
        subTopics: [
          "Circuit breaker",
          "Retry & exponential backoff",
          "Rate limiting",
          "Fault tolerance",
          "Saga pattern — choreography vs orchestration, compensation",
        ],
      },
      {
        title: "Operations & Scaling",
        subTopics: [
          "Horizontal vs vertical scaling",
          "Distributed transactions & eventual consistency",
          "Event-driven architecture",
          "CI/CD for microservices",
        ],
      },
      {
        title: "Security",
        subTopics: [
          "Authentication & authorization — E2E flow",
          "Role-based access control",
          "Stateful vs stateless REST APIs",
          "Security in internal service-to-service calls",
        ],
      },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "🗄️",
    topics: [
      {
        title: "SQL Fundamentals",
        subTopics: [
          "JOINs — INNER, LEFT, RIGHT, FULL",
          "GROUP BY, HAVING, aggregations",
          "Subqueries vs JOINs",
          "Window functions basics",
        ],
      },
      {
        title: "Query Patterns",
        subTopics: [
          "Customers with no orders — LEFT JOIN",
          "Salary above department average",
          "Duplicate row identification",
          "Average score across multiple subjects",
        ],
      },
      {
        title: "Performance & Optimization",
        subTopics: [
          "Indexing — when and how",
          "EXPLAIN plans",
          "N+1 query problem",
          "Pagination strategies",
        ],
      },
      {
        title: "Migrations & Trade-offs",
        subTopics: [
          "Oracle vs Postgres — why and when",
          "Migration challenges & lessons learned",
          "Postgres performance tuning",
        ],
      },
      {
        title: "Schema Design",
        subTopics: [
          "Normalization basics",
          "One-to-many — student, teacher, class",
          "Order + product + discount schema",
        ],
      },
    ],
  },
  {
    id: "cicd-devops",
    title: "CI/CD & DevOps",
    icon: "🚀",
    topics: [
      {
        title: "CI/CD Pipeline",
        subTopics: [
          "Build → test → deploy workflow",
          "GitHub Actions basics",
          "Environment promotion — dev, staging, prod",
          "Code review process & quality gates",
        ],
      },
      {
        title: "Jenkins",
        subTopics: [
          "Jenkins pipeline — declarative vs scripted",
          "Jobs, stages, and build triggers",
          "Plugins — Maven, Docker, SonarQube",
          "Credentials & environment variables",
          "Pipeline as code — Jenkinsfile",
        ],
      },
      {
        title: "Docker",
        subTopics: [
          "Images vs containers",
          "Dockerfile best practices",
          "Multi-stage builds",
          "Docker Compose for local dev",
          "Basic Docker commands",
        ],
      },
      {
        title: "Kubernetes",
        subTopics: [
          "Pods, Deployments, Services",
          "ConfigMaps & Secrets",
          "Ingress & load balancing",
          "Scaling & rolling updates",
          "Health checks — liveness & readiness probes",
        ],
      },
      {
        title: "Helm",
        subTopics: [
          "Charts, releases, and values.yaml",
          "Templating & environment overrides",
          "Helm install, upgrade, rollback",
        ],
      },
      {
        title: "Process & Practices",
        subTopics: [
          "Agile & SDLC",
          "Source control — Bitbucket/Git branching",
          "Release process & stakeholder management",
        ],
      },
    ],
  },
  {
    id: "ai",
    title: "AI & Agentic SDLC",
    icon: "🤖",
    topics: [
      {
        title: "GenAI Fundamentals",
        subTopics: [
          "LLM basics — prompts, tokens, context window",
          "Use cases in software development",
          "How teams are leveraging AI today",
        ],
      },
      {
        title: "Prompt Engineering",
        subTopics: [
          "System vs user prompts",
          "Few-shot & chain-of-thought prompting",
          "Output formatting & guardrails",
        ],
      },
      {
        title: "Agentic SDLC",
        subTopics: [
          "AI-assisted code review & refactoring",
          "Test generation & documentation",
          "Cursor / Copilot in daily workflow",
          "Risks — sensitive data logging, hallucinations",
        ],
      },
      {
        title: "Production Considerations",
        subTopics: [
          "API integration — OpenAI, Anthropic, etc.",
          "Cost & latency trade-offs",
          "Security — PII, secrets, model data retention",
        ],
      },
    ],
  },
];

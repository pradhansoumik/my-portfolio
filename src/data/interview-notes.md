# Java Interview Prep Notes

Curated notes from real interview preparation — organized by topic for quick review.

## JVM Internals

- **Class loaders**: Bootstrap, Extension, Application — delegation model.
- **Memory areas**: Heap (eden, survivor, old gen), Stack (frames per thread), Metaspace (class metadata).
- **Garbage collectors**: G1 (default, low-latency), ZGC (sub-ms pauses), Shenandoah (concurrent compaction).
- **Common questions**: Explain happens-before, stop-the-world pauses, and when to tune `-Xmx`/`-Xms`.

## OOP Mastery

- **Four pillars**: Encapsulation, Inheritance, Polymorphism, Abstraction.
- **Design patterns**: Singleton (enum preferred), Factory Method, Observer (event-driven), Strategy (pluggable algorithms).
- **SOLID principles**: Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion.
- **Common questions**: Composition vs inheritance, when to use abstract class vs interface.

## Microservices

- **Migration**: Strangler Fig pattern — incrementally replace monolith routes.
- **Infrastructure**: API Gateway (routing, auth), Service Registry (Eureka/Consul), Circuit Breaker (Resilience4j).
- **Communication**: Sync REST/gRPC vs async messaging (Kafka, RabbitMQ).
- **Common questions**: Distributed transactions (Saga pattern), eventual consistency, service discovery.

## Coding Patterns

- **Java 8+**: Streams (`map`, `filter`, `reduce`), Optional, functional interfaces (`Predicate`, `Function`).
- **Concurrency**: `ExecutorService`, `CompletableFuture`, thread-safe collections (`ConcurrentHashMap`).
- **SQL**: Index usage, EXPLAIN plans, N+1 query problem, pagination strategies.
- **Common questions**: Implement LRU cache, rate limiter, or producer-consumer with threads.

## System Design

- **Scalability**: Horizontal vs vertical scaling, load balancing (round-robin, consistent hashing).
- **Caching**: Redis for session/data cache, cache-aside vs write-through patterns.
- **Databases**: SQL vs NoSQL trade-offs, sharding, replication (leader-follower).
- **Common questions**: Design a URL shortener, rate limiter, or notification system.

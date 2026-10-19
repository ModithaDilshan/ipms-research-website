# Intelligent Project Management System for Undergraduate Students

**Project ID:** R26-IT-095  
**Institution:** Sri Lanka Institute of Information Technology (SLIIT)  
**Department:** Department of Information Technology  
**Degree:** BSc. (Hons) in Information Technology  

**Supervisor:** Prof. Samantha Rajapaksha  
**Co-Supervisor:** Mrs. Kaushika Kahatapitiya  

---

## Team Members

| Student Name | Student ID | Component |
|---|---|---|
| Bandara N.D.M. | IT22114662 | Intelligent Team Formation & Topic Feasibility Analysis |
| Lekamge R.L.M.D. | IT22117014 | Generative Project Planning & Adaptive Scheduling |
| Kulathunga S.A.I.K. | IT22109576 | Predictive Risk Monitoring & Contribution Analytics |
| Rashmika R.M.D. | IT22101624 | Automated Quality Assessment & Adaptive Mentorship |

---

## Project Overview

A comprehensive AI-powered project management platform for undergraduate students,
built on a MERN and FastAPI stack. The system addresses critical gaps in undergraduate
group project management through four integrated intelligent modules:

1. **Intelligent Team Formation & Topic Feasibility Analysis** — SBERT semantic
   student profiling, NSGA-II multi-objective team optimization, and XGBoost topic
   feasibility prediction to eliminate the academic cold-start problem.

2. **Generative Project Planning & Adaptive Scheduling** — T5-based NLP proposal
   parsing that auto-generates Work Breakdown Structures and Gantt charts, with an
   EDF adaptive rescheduler that recalibrates milestones in real time.

3. **Predictive Risk Monitoring & Contribution Analytics** — GitHub and Jira API
   integration with ML-based risk prediction (Random Forest, Gradient Boosting) and
   a weighted Contribution Index for fair individual evaluation.

4. **Automated Quality Assessment & Adaptive Mentorship** — SBERT semantic grading
   against rubric descriptors, Neo4j Knowledge Graph weakness diagnosis, and GPT-4o
   personalized feedback generation with Semantic Scholar resource recommendations.

---

## System Architecture

```
IPMS/
├── frontend/                  # React 18 + Tailwind CSS
├── backend-node/              # Node.js + Express (Core API, Auth, DB)
├── backend-fastapi/           # FastAPI (ML/NLP microservices)
│   ├── team_formation/        # SBERT + NSGA-II + XGBoost
│   ├── project_planning/      # T5 parser + EDF scheduler
│   ├── risk_monitoring/       # GitHub/Jira API + ML risk models
│   └── quality_assessment/    # SBERT grader + Neo4j KG + GPT-4o
└── README.md
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Tailwind CSS, D3.js, Recharts |
| Core Backend | Node.js, Express.js, MongoDB |
| ML/NLP Backend | Python 3.11, FastAPI |
| NLP Models | Sentence-BERT (all-MiniLM-L6-v2), T5-small, BERT |
| ML Libraries | XGBoost, scikit-learn, SHAP, pymoo (NSGA-II) |
| Knowledge Graph | Neo4j, NetworkX |
| External APIs | GitHub API, Jira API, Semantic Scholar API, OpenAI GPT-4o |
| Database | MongoDB, PostgreSQL |
| Cloud | AWS EC2, AWS S3 |

---

## Prerequisites

- Node.js v18 or higher
- Python 3.11 or higher
- MongoDB
- npm or yarn
- pip

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd intelligent-project-management
```

### 2. Install Node.js backend dependencies

```bash
cd backend-node
npm install
```

### 3. Install FastAPI microservice dependencies

```bash
cd ../backend-fastapi
pip install -r requirements.txt
```

### 4. Install frontend dependencies

```bash
cd ../frontend
npm install
```

### 5. Configure environment variables

In `backend-node/.env`:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
FASTAPI_URL=http://localhost:8000
```

In `backend-fastapi/.env`:

```env
PORT=8000
MODEL_PATH=./models/feasibility_model.pkl
OPENAI_API_KEY=your_openai_key
SEMANTIC_SCHOLAR_API_KEY=your_semantic_scholar_key
NEO4J_URI=your_neo4j_uri
NEO4J_PASSWORD=your_neo4j_password
```

---

## Running the Application

### Start the Node.js backend

```bash
cd backend-node
npm run dev
```

### Start the FastAPI microservice

```bash
cd backend-fastapi
uvicorn main:app --reload
```

### Start the frontend

```bash
cd frontend
npm run dev
```

### Access points

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Node.js API | http://localhost:5000 |
| FastAPI Docs | http://localhost:8000/docs |

---

## Default Accounts

| Role | Username | Password |
|---|---|---|
| Admin | admin | admin123 |

---

## API Reference

### Authentication & Core (Node.js — port 5000)

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/login | Login user |
| GET | /api/auth/me | Get current user |
| POST | /api/students/profile | Update student skills and academic history |
| GET | /api/projects/status | Get current project timeline |

### ML & NLP Algorithms (FastAPI — port 8000)

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/ml/vector-profile | Generate SBERT student skill vector |
| POST | /api/ml/optimize-teams | Run NSGA-II multi-objective team formation |
| POST | /api/ml/feasibility-score | Compute XGBoost topic success probability |
| POST | /api/ml/parse-proposal | T5-based proposal parsing → WBS + Gantt |
| GET | /api/ml/schedule/{group_id} | Retrieve current adaptive schedule |
| GET | /api/ml/contribution/{student_id} | Get Contribution Index for a student |
| POST | /api/ml/grade-report | SBERT semantic grading + KG weakness mapping |
| GET | /api/ml/feedback/{submission_id} | Retrieve GPT-4o generated feedback report |

---

## Current Progress (PP1 — May 2026)

- [x] System architecture designed and agreed across all four components
- [x] REST API contracts defined between modules
- [x] SBERT student profiling pipeline — in development
- [x] NSGA-II team optimization engine — in development
- [x] T5 proposal parser — in development
- [ ] XGBoost feasibility predictor — pending training data collection
- [ ] EDF adaptive scheduler — planned
- [ ] GitHub/Jira API integration — planned
- [ ] Neo4j Knowledge Graph — planned
- [ ] GPT-4o feedback generation — planned

---

## Research Alignment

This system directly supports **UN Sustainable Development Goal 4 (Quality Education)**
by ensuring every undergraduate student group begins their project with a
mathematically validated, skill-balanced team composition, an automatically generated
project plan, real-time risk monitoring, and fair, personalized assessment feedback —
regardless of their prior experience or social network.

---

## License

MIT

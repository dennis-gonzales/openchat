# Open Chat

This NodeJS project leverages the power of GPT models to provide engaging and interactive conversations.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/dennis-gonzales/openchat
```

### 2. Set Up Environment Variables

Copy the `.env.example` file and rename it to `.env`. Update the `OPENAI_API_KEY` with your OpenAI API key:

```env
OPENAI_API_KEY="sk-..."
```

### 3. Install Dependencies

Ensure you have Yarn installed on your system, then run:

```bash
yarn
```

### 4. Start the Server

Launch the development server:

```bash
yarn dev
```

## Code Quality and Commit Standards

- **Husky Integration:** We utilize Husky to manage pre-commit hooks, leveraging the power of lint-staged to ensure code quality.
- **Conventional Commits:** Commit messages adhere to the conventional commits standard, enabling clear and meaningful versioning.
- **TypeScript Configuration:** This project uses `"@total-typescript/ts-reset"` and `"@tsconfig/recommended"` to ensure a robust and optimized TypeScript development environment.

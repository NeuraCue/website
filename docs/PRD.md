                                    # Product Requirements Document (PRD)

**Project Name:** Recipe Sharing Platform
**Objective:** To build a web application where users can upload and browse recipes, leveraging
Next.js for the frontend and Supabase for the backend (database and authentication).

## Chat

```
I want to create a NextJS project where users can upload and browse recipes. This will be a 
recipe sharing platform. Can you create a PRD for us that has the core features, tech stack, and 
a step-by-step implementation guide?
I want to use Supabase for my database / authentication backend
```

## Core Features

1. **User Authentication**
    - Users can sign up, login, and log out using Supabase authentication
    - Password reset functionality
2. **Recipe Management**
    - Users can upload recipes with details like title, ingredients, steps, and an optional image
    - Users can browse all uploaded recipes
    - Users can view a detailed page for each recipe
3. **Search and Filtering**
    - Basic keyword search functionality
    - Filter recipes by category (e.g., appetizers, desserts, main courses)
4. **Responsive Design**
    - Ensure the platform is mobile-friendly and provides a seamless user experience on all devices

## Technical Stack

1. **Frontend**
    - Framework: Next.js
    - Styling: Tailwind CSS or CSS Modules
2. **Backend**
    - Database: Supabase PostgreSQL
    - Authentication: Supabase Auth
3. **Deployment**
    - Vercel for hosting the Next.js application
    - Supabase for database and authentication hosting

## Step-by-Step Implementation Guide

1. **Set Up Project**
    - Initialize a new Next.js project
        - cd project-dir
        - npx create-next-app@latest
    - Install necessary dependencies (e.g., `@supabase/supabase-js` for Supabase integration,
      `tailwindcss` for styling)
    - Configure Tailwind CSS if chosen as the styling framework
2. **Configure Supabase**
    - Create a new project in Supabase
    - Set up the database schema for recipes (fields: id, title, ingredients, steps, image_url,
      user_id, created_at)
    - Enable authentication and configure providers if needed (e.g., email/password)
3. **Build Authentication**
    - Create login, signup, and password reset pages
    - Use Supabase's API to handle authentication logic
    - Implement global context or hooks for managing the authenticated user state
4. **Design Database Interaction**
    - TODO
    - TODO
